/* =========================================================
   AALAYAM — Central Application Script
   Theme Toggle, Cart State, Mobile Navigation, Toast
   ========================================================= */

// 1. THEME MANAGEMENT
function initTheme() {
  const savedTheme = localStorage.getItem('aalayam_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
  
  applyTheme(theme);

  // Setup theme toggle button
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('aalayam_theme', nextTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    if (theme === 'dark') {
      // Moon/Sun icon change
      toggleBtn.innerHTML = `
        <svg class="svg-icon" style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      toggleBtn.setAttribute('title', 'Switch to Light Mode');
    } else {
      toggleBtn.innerHTML = `
        <svg class="svg-icon" style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      toggleBtn.setAttribute('title', 'Switch to Dark Mode');
    }
  }
}

// 2. SHOPPING BAG & CART STATE
const DEFAULT_CART = [
  {
    id: "004",
    name: "THE BRASS BELL",
    code: "AALAYAM / 004",
    price: 1850,
    image: "https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg",
    material: "Brass · Hand-finished",
    qty: 1
  },
  {
    id: "005",
    name: "THE DEEPAM STAND",
    code: "AALAYAM / 005",
    price: 2750,
    image: "https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Sunlit_Antique_Brass_Urn_with_Flowers_aonm8t.png",
    material: "Brass · Hand-finished",
    qty: 1
  }
];

function getCart() {
  const saved = localStorage.getItem('aalayam_cart');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  return DEFAULT_CART;
}

function saveCart(cart) {
  localStorage.setItem('aalayam_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  const badges = document.querySelectorAll('.bag-badge');
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart(cart);
  showToast(`Added "${item.name}" to Bag`);
}

function updateQty(id, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
  }
  saveCart(cart);
  if (typeof renderBagPage === 'function') {
    renderBagPage();
  }
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  if (typeof renderBagPage === 'function') {
    renderBagPage();
  }
  showToast("Item removed from Bag");
}

function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg class="svg-icon" style="color: var(--color-gold);" viewBox="0 0 24 24" stroke-width="2"><path d="M20 6L9 17l-5-5"></path></svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// 3. NAVBAR SCROLL & MOBILE DRAWER
function initNav() {
  const header = document.getElementById('headerWrapper');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }

  const mobileDrawer = document.getElementById('mobileDrawer');
  const openBtn = document.getElementById('openMobileMenu');
  const closeBtn = document.getElementById('closeMobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (openBtn && mobileDrawer) {
    openBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && mobileDrawer) {
    closeBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) {
        mobileDrawer.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}


// ----------------------------------------------------
// 4. GLOBAL LIVE SEARCH MODAL CONTROLLER
// ----------------------------------------------------
function ensureSearchModal() {
  if (document.getElementById('searchModalOverlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'searchModalOverlay';
  overlay.className = 'search-modal-overlay';
  overlay.innerHTML = `
    <div class="search-modal-box">
      <div class="search-modal-header">
        <svg class="svg-icon search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" id="globalSearchInput" placeholder="Search brass bells, diyas, urns, lotus bowls, gifting sets..." autocomplete="off">
        <button class="search-close-btn" onclick="closeGlobalSearch()">&times;</button>
      </div>

      <div class="search-quick-tags">
        <span class="label">POPULAR:</span>
        <button class="search-tag-chip" onclick="quickSearchTag('Diyas')">Diyas</button>
        <button class="search-tag-chip" onclick="quickSearchTag('Bell')">Bell</button>
        <button class="search-tag-chip" onclick="quickSearchTag('Lotus Bowl')">Lotus Bowl</button>
        <button class="search-tag-chip" onclick="quickSearchTag('Brass Urn')">Urn</button>
        <button class="search-tag-chip" onclick="quickSearchTag('Gifting')">Gifting</button>
        <button class="search-tag-chip" onclick="quickSearchTag('Pooja')">Pooja</button>
      </div>

      <div class="search-results-list" id="globalSearchResults">
        <div class="search-empty-state">
          Type above to explore handcrafted heirloom objects by form, material, or ritual use.
        </div>
      </div>

      <div class="search-modal-footer">
        <span>Press <kbd style="background: var(--input-bg); padding: 2px 5px; border: 1px solid var(--border-medium); border-radius: 3px;">ESC</kbd> to exit</span>
        <a href="categories.html" style="color: var(--color-gold); text-decoration: none; font-weight: 600;">Browse All Categories →</a>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Close when clicking background outside modal box
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeGlobalSearch();
  });

  const input = document.getElementById('globalSearchInput');
  input.addEventListener('input', (e) => {
    handleGlobalSearchInput(e.target.value);
  });
}

function openGlobalSearch() {
  ensureSearchModal();
  const overlay = document.getElementById('searchModalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  const input = document.getElementById('globalSearchInput');
  if (input) {
    setTimeout(() => input.focus(), 80);
    if (!input.value) {
      renderSearchSuggestions();
    }
  }
}

function closeGlobalSearch() {
  const overlay = document.getElementById('searchModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function quickSearchTag(tag) {
  const input = document.getElementById('globalSearchInput');
  if (input) {
    input.value = tag;
    handleGlobalSearchInput(tag);
  }
}

function renderSearchSuggestions() {
  const resultsContainer = document.getElementById('globalSearchResults');
  if (!resultsContainer) return;

  const sampleProducts = typeof getAllProducts === 'function' ? getAllProducts().slice(0, 4) : [];
  if (sampleProducts.length === 0) {
    resultsContainer.innerHTML = '<div class="search-empty-state">Type above to explore objects by form, craft or ritual name.</div>';
    return;
  }

  let html = '<div style="font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px; font-weight: 600;">FEATURED HEIRLOOM OBJECTS</div>';
  sampleProducts.forEach(item => {
    html += `
      <a href="product.html?id=${item.id}" class="search-result-item" onclick="closeGlobalSearch()">
        <div class="search-result-thumb">
          <img src="${item.images[0]}" alt="${item.name}">
        </div>
        <div class="search-result-info">
          <div class="code">${item.code}</div>
          <div class="name">${item.name}</div>
          <div class="cat">${item.material} · ${item.categoryLabel}</div>
        </div>
        <div class="search-result-action">
          <div class="search-result-price">₹${item.price.toLocaleString('en-IN')}</div>
          <span class="search-result-btn">VIEW OBJECT →</span>
        </div>
      </a>
    `;
  });
  resultsContainer.innerHTML = html;
}

function handleGlobalSearchInput(query) {
  const resultsContainer = document.getElementById('globalSearchResults');
  if (!resultsContainer) return;

  if (!query || !query.trim()) {
    renderSearchSuggestions();
    return;
  }

  const results = typeof searchProducts === 'function' ? searchProducts(query) : [];

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="search-empty-state">
        No brass objects matched "<strong>${query}</strong>".<br>
        <span style="font-size: 12px; margin-top: 8px; display: inline-block;">Try searching for <em>diya</em>, <em>bell</em>, <em>bowl</em>, <em>urn</em>, or <em>pooja</em>.</span>
      </div>
    `;
    return;
  }

  let html = `<div style="font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px; font-weight: 600;">FOUND ${results.length} OBJECT${results.length === 1 ? '' : 'S'}</div>`;
  results.forEach(item => {
    html += `
      <a href="product.html?id=${item.id}" class="search-result-item" onclick="closeGlobalSearch()">
        <div class="search-result-thumb">
          <img src="${item.images[0]}" alt="${item.name}">
        </div>
        <div class="search-result-info">
          <div class="code">${item.code}</div>
          <div class="name">${item.name}</div>
          <div class="cat">${item.material} · ${item.categoryLabel}</div>
        </div>
        <div class="search-result-action">
          <div class="search-result-price">₹${item.price.toLocaleString('en-IN')}</div>
          <span class="search-result-btn">VIEW OBJECT →</span>
        </div>
      </a>
    `;
  });
  resultsContainer.innerHTML = html;
}

// Global Hotkeys & Link Interception
window.addEventListener('keydown', (e) => {
  // ESC to close
  if (e.key === 'Escape') {
    closeGlobalSearch();
    const qv = document.getElementById('quickViewModal');
    if (qv) qv.classList.remove('active');
  }
  // "/" or Ctrl+K to open
  if ((e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) || 
      ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
    e.preventDefault();
    openGlobalSearch();
  }
});


document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  updateCartBadge();
  ensureSearchModal();
  initCardClickHandlers();
});


// ----------------------------------------------------
// 5. ENTIRE CARD CLICK NAVIGATION
// Clicking anywhere on product cards / set cards opens their page,
// while dedicated buttons (Add to Bag, Quick View, Wishlist) stay interactive.
// ----------------------------------------------------
function initCardClickHandlers() {
  document.addEventListener('click', (e) => {
    // If the user clicked directly on or inside a button, let the button do its action
    if (e.target.closest('button, input, select, textarea')) {
      return;
    }

    // Product Cards (.ecom-card, .object-card)
    const productCard = e.target.closest('.ecom-card, .object-card');
    if (productCard) {
      const link = productCard.querySelector('a[href*="product.html?id="]');
      if (link && link.href) {
        window.location.href = link.href;
        return;
      }
    }

    // Ritual Set Cards (.set-grid-card, .featured-set-card)
    const setCard = e.target.closest('.set-grid-card, .featured-set-card');
    if (setCard) {
      const setLink = setCard.querySelector('a[href*="collection-detail.html"]');
      if (setLink && setLink.href) {
        window.location.href = setLink.href;
        return;
      }
    }
  });
}
