/**
 * AALAYAM Admin Console Application Logic
 * Comprehensive E-Commerce Management System
 */

// ----------------------------------------------------
// DEFAULT SEED DATA
// ----------------------------------------------------
const SEED_ORDERS = [
  {
    id: 'AAL-8942',
    date: '2026-11-21',
    customer: {
      name: 'Anand Iyer',
      email: 'anand.iyer@gmail.com',
      phone: '+91 98401 23456',
      address: '14, 2nd Main, Indiranagar, Bangalore, Karnataka - 560038'
    },
    items: [
      { id: '004', name: 'KERALA STYLE VILAKKU', price: 3450, qty: 2 },
      { id: '006', name: 'ASHTALAKSHMI KALASH', price: 2950, qty: 2 }
    ],
    total: 12800,
    paymentStatus: 'Paid',
    paymentMethod: 'UPI / Razorpay',
    status: 'Shipped',
    trackingNumber: 'BLR-EXP-94021'
  },
  {
    id: 'AAL-8939',
    date: '2026-11-20',
    customer: {
      name: 'Meera Swaminathan',
      email: 'meera.s@outlook.com',
      phone: '+91 94440 98765',
      address: '28 Eldams Road, Alwarpet, Chennai, Tamil Nadu - 600018'
    },
    items: [
      { id: 'set-01', name: 'THE MORNING RITUAL SET (Bundle)', price: 5950, qty: 1 }
    ],
    total: 5950,
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    status: 'Delivered',
    trackingNumber: 'MAA-DTDC-48210'
  },
  {
    id: 'AAL-8935',
    date: '2026-11-19',
    customer: {
      name: 'Rajesh Varma',
      email: 'rajesh.varma@gmail.com',
      phone: '+91 98200 45678',
      address: 'Penthouse B, Sea Green, Bandra West, Mumbai, Maharashtra - 400050'
    },
    items: [
      { id: '005', name: 'ASHTALAKSHMI FLOWER BASKET', price: 2850, qty: 1 },
      { id: '008', name: 'THE URLI WITH BELL PETALS', price: 4350, qty: 1 }
    ],
    total: 7200,
    paymentStatus: 'Paid',
    paymentMethod: 'Net Banking',
    status: 'Processing',
    trackingNumber: 'BOM-EXP-11029'
  },
  {
    id: 'AAL-8930',
    date: '2026-11-18',
    customer: {
      name: 'Sunita Narain',
      email: 'sunita.narain@gmail.com',
      phone: '+91 98110 33445',
      address: 'C-4/18, Vasant Vihar, New Delhi - 110057'
    },
    items: [
      { id: '004', name: 'KERALA STYLE VILAKKU', price: 3450, qty: 1 }
    ],
    total: 3450,
    paymentStatus: 'Paid',
    paymentMethod: 'UPI',
    status: 'Shipped',
    trackingNumber: 'DEL-BLUEDART-88902'
  },
  {
    id: 'AAL-8924',
    date: '2026-11-16',
    customer: {
      name: 'Karthik Ramamurthy',
      email: 'karthik.r@techlead.co',
      phone: '+91 99887 65432',
      address: 'Villa 12, Jubilee Hills, Road No. 36, Hyderabad, Telangana - 500033'
    },
    items: [
      { id: 'set-04', name: 'THE GRIHA PRAVESH HEIRLOOM SET', price: 16800, qty: 1 },
      { id: '006', name: 'ASHTALAKSHMI KALASH', price: 2950, qty: 1 }
    ],
    total: 19750,
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    status: 'Delivered',
    trackingNumber: 'HYD-EXP-77215'
  }
];

const SEED_ENQUIRIES = [
  {
    id: 'ENQ-104',
    date: '2026-11-20',
    name: 'Vikram Sethi',
    email: 'vikram.sethi@apexcorp.in',
    company: 'Apex Technologies Ltd',
    occasion: 'Diwali Corporate Client Gifting',
    quantity: '150 units',
    budget: '₹5,00,000',
    message: 'Seeking bespoke engraved Ashtalakshmi Kalash with company insignia on base for our annual leadership partners.',
    status: 'Quote Sent'
  },
  {
    id: 'ENQ-103',
    date: '2026-11-19',
    name: 'Shalini Menon',
    email: 'shalini.menon@heritagehomes.com',
    company: 'Heritage Weddings & Celebrations',
    occasion: 'Destination Wedding Ritual Favors',
    quantity: '85 units',
    budget: '₹3,00,000',
    message: 'Looking for 85 solid brass Kerala Nilavilakkus packaged in customized silk and cotton heirloom boxes for a wedding in Kovalam.',
    status: 'New'
  },
  {
    id: 'ENQ-102',
    date: '2026-11-15',
    name: 'Deepa Krishnan',
    email: 'deepa.k@studioaura.design',
    company: 'Studio Aura Interiors',
    occasion: 'Private Family Mandir Sanctum',
    quantity: '1 bespoke pair',
    budget: '₹1,50,000',
    message: 'Require custom 36-inch high heirloom bell-metal thooku vilakku pair with sacred peacock crest for a heritage residence in Mysore.',
    status: 'Contacted'
  }
];

const SEED_REVIEWS = [
  {
    id: 'REV-01',
    productId: '004',
    productName: 'KERALA STYLE VILAKKU',
    author: 'K. R. Namboodiri',
    location: 'Thrissur, Kerala',
    rating: 5,
    date: '10 days ago',
    title: 'The authentic bell-metal glow of home',
    content: 'The weight in hands is immense, perfectly balanced. The thalis pool sesame oil without leaking. Truly heirloom grade craftsmanship.',
    status: 'Approved'
  },
  {
    id: 'REV-02',
    productId: '005',
    productName: 'ASHTALAKSHMI FLOWER BASKET',
    author: 'Ananya S. Rao',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    date: '1 week ago',
    title: 'Magnificent Ashtalakshmi engravings',
    content: 'The embossed lakshmi figures along the rim are sharp and deeply etched. The arched brass handle is solid. Holds fresh jasmines gracefully.',
    status: 'Approved'
  },
  {
    id: 'REV-03',
    productId: '006',
    productName: 'ASHTALAKSHMI KALASH',
    author: 'Sunil Bhatt',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    date: '3 days ago',
    title: 'Divine presence for the puja altar',
    content: 'The heavy base and mirror luster are unmatched. The eight forms of Lakshmi around the belly bring a distinct temple sanctum peace.',
    status: 'Approved'
  }
];

// ----------------------------------------------------
// LOCAL STORAGE DATA ACCESS
// ----------------------------------------------------
function getAdminOrders() {
  const data = localStorage.getItem('aalayam_orders');
  if (data) {
    try { return JSON.parse(data); } catch (e) { console.error(e); }
  }
  localStorage.setItem('aalayam_orders', JSON.stringify(SEED_ORDERS));
  return SEED_ORDERS;
}

function saveAdminOrders(orders) {
  localStorage.setItem('aalayam_orders', JSON.stringify(orders));
}

function getAdminEnquiries() {
  const data = localStorage.getItem('aalayam_enquiries');
  if (data) {
    try { return JSON.parse(data); } catch (e) { console.error(e); }
  }
  localStorage.setItem('aalayam_enquiries', JSON.stringify(SEED_ENQUIRIES));
  return SEED_ENQUIRIES;
}

function saveAdminEnquiries(enquiries) {
  localStorage.setItem('aalayam_enquiries', JSON.stringify(enquiries));
}

function getAdminReviews() {
  const data = localStorage.getItem('aalayam_reviews');
  if (data) {
    try { return JSON.parse(data); } catch (e) { console.error(e); }
  }
  localStorage.setItem('aalayam_reviews', JSON.stringify(SEED_REVIEWS));
  return SEED_REVIEWS;
}

function saveAdminReviews(reviews) {
  localStorage.setItem('aalayam_reviews', JSON.stringify(reviews));
}

// ----------------------------------------------------
// APPLICATION STATE
// ----------------------------------------------------
let currentTab = 'overview';
let editingProductId = null;

// ----------------------------------------------------
// INITIALIZATION
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupNavigation();
  setupEventListeners();
  loadOverview();
  renderProductsTable();
  renderOrdersTable();
  renderSetsGrid();
  renderEnquiriesTable();
  renderReviewsTable();
  updateNavBadges();
});

// ----------------------------------------------------
// THEME MANAGER
// ----------------------------------------------------
function initTheme() {
  const saved = localStorage.getItem('aalayam_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const target = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', target);
  localStorage.setItem('aalayam_theme', target);
  updateThemeIcon(target);
  showAdminToast(`Switched to ${target === 'dark' ? 'Deep Royal Dark' : 'Warm Ivory Light'} theme`);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggleBtn');
  if (!btn) return;
  btn.innerHTML = theme === 'dark'
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
}

// ----------------------------------------------------
// TAB NAVIGATION
// ----------------------------------------------------
function setupNavigation() {
  document.querySelectorAll('.sidebar-link[data-tab]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = link.getAttribute('data-tab');
      switchTab(tab);
      // Close mobile sidebar if open
      document.querySelector('.admin-sidebar')?.classList.remove('open');
    });
  });
}

function switchTab(tabId) {
  currentTab = tabId;
  document.querySelectorAll('.sidebar-link[data-tab]').forEach(l => {
    l.classList.toggle('active', l.getAttribute('data-tab') === tabId);
  });
  document.querySelectorAll('.admin-view').forEach(view => {
    view.classList.toggle('active', view.id === `view-${tabId}`);
  });

  const titles = {
    overview: 'Executive Sanctuary Overview',
    products: 'Products & Masterpiece Catalog',
    orders: 'Orders & Fulfillment Hub',
    collections: 'Curated Ritual Sets & Bundles',
    enquiries: 'Corporate & Custom Commissions',
    reviews: 'Customer Reviews Moderation',
    settings: 'Studio & Store Settings'
  };

  const breadcrumb = document.getElementById('currentBreadcrumb');
  if (breadcrumb) {
    breadcrumb.textContent = titles[tabId] || 'Dashboard';
  }

  // Refresh tab content when active
  if (tabId === 'overview') loadOverview();
  if (tabId === 'products') renderProductsTable();
  if (tabId === 'orders') renderOrdersTable();
  if (tabId === 'collections') renderSetsGrid();
  if (tabId === 'enquiries') renderEnquiriesTable();
  if (tabId === 'reviews') renderReviewsTable();
}

function updateNavBadges() {
  const products = getAllProducts();
  const orders = getAdminOrders();
  const enquiries = getAdminEnquiries();

  const prodBadge = document.getElementById('navCountProducts');
  if (prodBadge) prodBadge.textContent = products.length;

  const ordersBadge = document.getElementById('navCountOrders');
  const pendingOrders = orders.filter(o => o.status === 'Processing').length;
  if (ordersBadge) ordersBadge.textContent = pendingOrders > 0 ? pendingOrders : orders.length;

  const enqBadge = document.getElementById('navCountEnquiries');
  const newEnq = enquiries.filter(e => e.status === 'New').length;
  if (enqBadge) enqBadge.textContent = newEnq > 0 ? newEnq : enquiries.length;
}

// ----------------------------------------------------
// OVERVIEW TAB
// ----------------------------------------------------
function loadOverview() {
  const orders = getAdminOrders();
  const products = getAllProducts();

  // Metrics
  const grossRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalOrders = orders.length;
  const aov = totalOrders > 0 ? Math.round(grossRevenue / totalOrders) : 0;
  const inStockCount = products.filter(p => p.inStock !== false).length;

  document.getElementById('metricRevenue').textContent = `₹${grossRevenue.toLocaleString('en-IN')}`;
  document.getElementById('metricOrders').textContent = totalOrders;
  document.getElementById('metricAov').textContent = `₹${aov.toLocaleString('en-IN')}`;
  document.getElementById('metricProducts').textContent = `${inStockCount} / ${products.length}`;

  // SVG Chart
  renderOverviewChart();

  // Recent Orders Feed
  const recentFeed = document.getElementById('recentOrdersFeed');
  if (recentFeed) {
    recentFeed.innerHTML = orders.slice(0, 5).map(o => `
      <div class="activity-item">
        <span class="activity-dot"></span>
        <div class="activity-content">
          <div class="activity-title">${escapeHtml(o.customer.name)} placed Order <a href="#" onclick="event.preventDefault(); switchTab('orders');" style="color: var(--adm-gold); text-decoration: none; font-weight: 600;">#${o.id}</a></div>
          <div class="activity-desc">${o.items.length} object(s) · ₹${(o.total || 0).toLocaleString('en-IN')} · <span class="badge ${getStatusBadgeClass(o.status)}">${o.status}</span></div>
        </div>
        <div class="activity-time">${o.date}</div>
      </div>
    `).join('');
  }
}

function renderOverviewChart() {
  const container = document.getElementById('salesChartContainer');
  if (!container) return;

  // Clean SVG Line chart
  const points = [
    { label: 'Mon', val: 8400 },
    { label: 'Tue', val: 14200 },
    { label: 'Wed', val: 11500 },
    { label: 'Thu', val: 19800 },
    { label: 'Fri', val: 24500 },
    { label: 'Sat', val: 32000 },
    { label: 'Sun', val: 28400 }
  ];

  const maxVal = 35000;
  const w = 600;
  const h = 200;
  const padX = 40;
  const padY = 25;

  const coords = points.map((p, idx) => {
    const x = padX + (idx / (points.length - 1)) * (w - padX * 2);
    const y = h - padY - (p.val / maxVal) * (h - padY * 2);
    return { x, y, ...p };
  });

  const pathD = coords.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`, '');
  const areaD = `${pathD} L ${coords[coords.length - 1].x} ${h - padY} L ${coords[0].x} ${h - padY} Z`;

  container.innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" class="chart-svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#d4af37" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#d4af37" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      <!-- Grid Lines -->
      <line x1="${padX}" y1="${padY}" x2="${w - padX}" y2="${padY}" stroke="var(--adm-border-color)" stroke-dasharray="3,3" />
      <line x1="${padX}" y1="${h / 2}" x2="${w - padX}" y2="${h / 2}" stroke="var(--adm-border-color)" stroke-dasharray="3,3" />
      <line x1="${padX}" y1="${h - padY}" x2="${w - padX}" y2="${h - padY}" stroke="var(--adm-border-color)" />
      
      <!-- Area Fill -->
      <path d="${areaD}" fill="url(#chartGrad)" />
      
      <!-- Line Path -->
      <path d="${pathD}" fill="none" stroke="#d4af37" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      
      <!-- Data Points -->
      ${coords.map(pt => `
        <circle cx="${pt.x}" cy="${pt.y}" r="4.5" fill="#ffffff" stroke="#d4af37" stroke-width="2.5" />
        <text x="${pt.x}" y="${h - 6}" font-size="11" fill="var(--adm-text-muted)" text-anchor="middle" font-family="var(--adm-font-sans)">${pt.label}</text>
      `).join('')}
    </svg>
  `;
}

// ----------------------------------------------------
// PRODUCTS CATALOG TAB
// ----------------------------------------------------
function renderProductsTable() {
  const tbody = document.getElementById('productsTableBody');
  if (!tbody) return;

  const searchQuery = (document.getElementById('productSearchInput')?.value || '').toLowerCase().trim();
  const categoryFilter = document.getElementById('productCategoryFilter')?.value || 'all';

  let products = getAllProducts();

  if (categoryFilter !== 'all') {
    products = products.filter(p => p.category === categoryFilter);
  }

  if (searchQuery) {
    products = products.filter(p => 
      (p.name && p.name.toLowerCase().includes(searchQuery)) ||
      (p.code && p.code.toLowerCase().includes(searchQuery)) ||
      (p.craft && p.craft.toLowerCase().includes(searchQuery)) ||
      (p.material && p.material.toLowerCase().includes(searchQuery))
    );
  }

  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 36px; color: var(--adm-text-muted);">No products match your search or filter criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = products.map(p => {
    const thumb = (p.images && p.images[0]) || 'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg';
    const inStock = p.inStock !== false;
    const stockBadge = inStock 
      ? `<span class="badge badge-success">In Stock</span>` 
      : `<span class="badge badge-danger">Out of Stock</span>`;

    return `
      <tr>
        <td>
          <div class="product-cell">
            <img src="${thumb}" alt="${escapeHtml(p.name)}" class="product-thumb">
            <div class="product-meta">
              <div class="name">${escapeHtml(p.name)}</div>
              <div class="code">${escapeHtml(p.code || 'AALAYAM')}</div>
            </div>
          </div>
        </td>
        <td><span class="badge badge-info">${escapeHtml(p.categoryLabel || p.category)}</span></td>
        <td>
          <span style="font-weight: 600; font-family: var(--adm-font-serif); font-size: 16px;">₹${(p.price || 0).toLocaleString('en-IN')}</span>
          ${p.originalPrice ? `<div style="font-size: 11px; color: var(--adm-text-muted); text-decoration: line-through;">₹${p.originalPrice.toLocaleString('en-IN')}</div>` : ''}
        </td>
        <td>${stockBadge}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 4px; font-size: 12.5px;">
            <span style="color: #d4af37;">★</span>
            <span style="font-weight: 600;">${p.rating || 5.0}</span>
            <span style="color: var(--adm-text-muted);">(${p.reviewsCount || 12})</span>
          </div>
        </td>
        <td style="font-size: 12px; color: var(--adm-text-muted); max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${escapeHtml(p.origin || 'Kerala')}
        </td>
        <td>
          <div class="table-actions">
            <button class="action-icon-btn" title="Edit Product" onclick="openEditProductModal('${p.id}')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </button>
            <a href="product.html?id=${p.id}" target="_blank" class="action-icon-btn" title="View in Live Store">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <button class="action-icon-btn danger" title="Delete Product" onclick="confirmDeleteProduct('${p.id}')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ----------------------------------------------------
// DYNAMIC MEDIA BUILDERS (IMAGES: 2-5, VIDEOS: 1-2)
// ----------------------------------------------------
function addImageUrlRow(val = '') {
  const container = document.getElementById('imageUrlsContainer');
  if (!container) return;
  const currentCount = container.querySelectorAll('.media-url-row').length;
  if (currentCount >= 5) {
    showAdminToast('Maximum 5 product photos allowed.');
    return;
  }

  const row = document.createElement('div');
  row.className = 'media-url-row';
  row.style.cssText = 'display: flex; align-items: center; gap: 8px;';
  row.innerHTML = `
    <span class="media-row-num" style="font-size: 11.5px; font-weight: 600; color: var(--adm-text-muted); width: 22px; text-align: center;">${currentCount + 1}.</span>
    <input type="url" class="prod-image-input" placeholder="https://res.cloudinary.com/.../photo.jpg" value="${escapeHtml(val)}" required style="flex: 1;">
    <button type="button" class="action-icon-btn danger remove-img-btn" title="Remove Photo" onclick="removeImageUrlRow(this)">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  `;
  container.appendChild(row);
  updateImageRowsState();
}

function removeImageUrlRow(btn) {
  const container = document.getElementById('imageUrlsContainer');
  const rows = container.querySelectorAll('.media-url-row');
  if (rows.length <= 2) {
    showAdminToast('Minimum 2 product photos are required.');
    return;
  }
  btn.closest('.media-url-row').remove();
  updateImageRowsState();
}

function updateImageRowsState() {
  const container = document.getElementById('imageUrlsContainer');
  if (!container) return;
  const rows = container.querySelectorAll('.media-url-row');
  const count = rows.length;

  rows.forEach((r, idx) => {
    const num = r.querySelector('.media-row-num');
    if (num) num.textContent = `${idx + 1}.`;
    const removeBtn = r.querySelector('.remove-img-btn');
    if (removeBtn) {
      if (count <= 2) {
        removeBtn.disabled = true;
        removeBtn.style.opacity = '0.35';
        removeBtn.style.cursor = 'not-allowed';
      } else {
        removeBtn.disabled = false;
        removeBtn.style.opacity = '1';
        removeBtn.style.cursor = 'pointer';
      }
    }
  });

  const badge = document.getElementById('imageCountBadge');
  if (badge) {
    badge.textContent = `(${count} of 5 photos · Min 2)`;
    badge.style.color = count >= 2 && count <= 5 ? 'var(--adm-gold)' : 'var(--adm-badge-danger-text)';
  }

  const addBtn = document.getElementById('addImageBtn');
  if (addBtn) {
    if (count >= 5) {
      addBtn.disabled = true;
      addBtn.style.opacity = '0.4';
      addBtn.textContent = 'Max 5 Reached';
    } else {
      addBtn.disabled = false;
      addBtn.style.opacity = '1';
      addBtn.textContent = '+ Add Image URL';
    }
  }
}

function addVideoUrlRow(val = '') {
  const container = document.getElementById('videoUrlsContainer');
  if (!container) return;
  const currentCount = container.querySelectorAll('.media-url-row').length;
  if (currentCount >= 2) {
    showAdminToast('Maximum 2 showcase videos allowed.');
    return;
  }

  const row = document.createElement('div');
  row.className = 'media-url-row';
  row.style.cssText = 'display: flex; align-items: center; gap: 8px;';
  row.innerHTML = `
    <span class="media-row-num" style="font-size: 11.5px; font-weight: 600; color: var(--adm-text-muted); width: 22px; text-align: center;">${currentCount + 1}.</span>
    <input type="url" class="prod-video-input" placeholder="https://res.cloudinary.com/.../video.mp4" value="${escapeHtml(val)}" required style="flex: 1;">
    <button type="button" class="action-icon-btn danger remove-vid-btn" title="Remove Video" onclick="removeVideoUrlRow(this)">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  `;
  container.appendChild(row);
  updateVideoRowsState();
}

function removeVideoUrlRow(btn) {
  const container = document.getElementById('videoUrlsContainer');
  const rows = container.querySelectorAll('.media-url-row');
  if (rows.length <= 1) {
    showAdminToast('Minimum 1 showcase video is required.');
    return;
  }
  btn.closest('.media-url-row').remove();
  updateVideoRowsState();
}

function updateVideoRowsState() {
  const container = document.getElementById('videoUrlsContainer');
  if (!container) return;
  const rows = container.querySelectorAll('.media-url-row');
  const count = rows.length;

  rows.forEach((r, idx) => {
    const num = r.querySelector('.media-row-num');
    if (num) num.textContent = `${idx + 1}.`;
    const removeBtn = r.querySelector('.remove-vid-btn');
    if (removeBtn) {
      if (count <= 1) {
        removeBtn.disabled = true;
        removeBtn.style.opacity = '0.35';
        removeBtn.style.cursor = 'not-allowed';
      } else {
        removeBtn.disabled = false;
        removeBtn.style.opacity = '1';
        removeBtn.style.cursor = 'pointer';
      }
    }
  });

  const badge = document.getElementById('videoCountBadge');
  if (badge) {
    badge.textContent = `(${count} of 2 videos · Min 1)`;
    badge.style.color = count >= 1 && count <= 2 ? 'var(--adm-gold)' : 'var(--adm-badge-danger-text)';
  }

  const addBtn = document.getElementById('addVideoBtn');
  if (addBtn) {
    if (count >= 2) {
      addBtn.disabled = true;
      addBtn.style.opacity = '0.4';
      addBtn.textContent = 'Max 2 Reached';
    } else {
      addBtn.disabled = false;
      addBtn.style.opacity = '1';
      addBtn.textContent = '+ Add Video URL';
    }
  }
}

// ----------------------------------------------------
// PRODUCT MODAL (ADD / EDIT)
// ----------------------------------------------------
function openAddProductModal() {
  editingProductId = null;
  document.getElementById('productModalTitle').textContent = 'Add New Brassware Masterpiece';
  document.getElementById('productForm').reset();
  document.getElementById('prodId').value = '';
  document.getElementById('prodInStock').checked = true;

  // Clear and setup initial dynamic rows: min 2 images, min 1 video
  const imgCont = document.getElementById('imageUrlsContainer');
  const vidCont = document.getElementById('videoUrlsContainer');
  if (imgCont) {
    imgCont.innerHTML = '';
    addImageUrlRow('https://res.cloudinary.com/deukqrxtt/image/upload/v1794111889/Kerala_Style_Vilakku_Pro_06_6_lsrozw.jpg');
    addImageUrlRow('https://res.cloudinary.com/deukqrxtt/image/upload/v1794111889/Kerala_Style_Vilakku_Pro_06_4_lqoncl.jpg');
  }
  if (vidCont) {
    vidCont.innerHTML = '';
    addVideoUrlRow('https://res.cloudinary.com/deukqrxtt/video/upload/v1794111891/Kerala_Style_vilakku_Pro_06_video_1_t7liqq.mp4');
  }

  document.getElementById('productModalOverlay').classList.add('active');
}

function openEditProductModal(id) {
  const p = getProductById(id);
  if (!p) return;

  editingProductId = id;
  document.getElementById('productModalTitle').textContent = `Edit: ${p.name}`;
  document.getElementById('prodId').value = p.id;
  document.getElementById('prodName').value = p.name || '';
  document.getElementById('prodCode').value = p.code || '';
  document.getElementById('prodCategory').value = p.category || 'diyas';
  document.getElementById('prodPrice').value = p.price || 0;
  document.getElementById('prodOriginalPrice').value = p.originalPrice || '';
  document.getElementById('prodDimensions').value = p.dimensions || '';
  document.getElementById('prodWeight').value = p.weight || '';
  document.getElementById('prodMaterial').value = p.material || '';
  document.getElementById('prodOrigin').value = p.origin || '';
  document.getElementById('prodCraft').value = p.craft || '';
  document.getElementById('prodDesc').value = p.desc || '';
  document.getElementById('prodCare').value = p.care || '';
  document.getElementById('prodInStock').checked = p.inStock !== false;

  // Populate dynamic images: min 2, max 5
  const imgCont = document.getElementById('imageUrlsContainer');
  if (imgCont) {
    imgCont.innerHTML = '';
    const imgList = (p.images && p.images.length > 0) ? p.images.slice(0, 5) : [];
    imgList.forEach(u => addImageUrlRow(u));
    while (imgCont.querySelectorAll('.media-url-row').length < 2) {
      addImageUrlRow('');
    }
  }

  // Populate dynamic videos: min 1, max 2
  const vidCont = document.getElementById('videoUrlsContainer');
  if (vidCont) {
    vidCont.innerHTML = '';
    let vidList = [];
    if (Array.isArray(p.videos) && p.videos.length > 0) {
      vidList = p.videos.slice(0, 2);
    } else if (p.video) {
      vidList = [p.video];
    }
    vidList.forEach(v => addVideoUrlRow(v));
    while (vidCont.querySelectorAll('.media-url-row').length < 1) {
      addVideoUrlRow('');
    }
  }

  document.getElementById('productModalOverlay').classList.add('active');
}

function closeProductModal() {
  document.getElementById('productModalOverlay').classList.remove('active');
}

function handleProductFormSubmit(e) {
  e.preventDefault();

  // Validate Images (Min 2, Max 5)
  const imgInputs = Array.from(document.querySelectorAll('.prod-image-input'));
  const images = imgInputs.map(inp => inp.value.trim()).filter(Boolean);

  if (images.length < 2) {
    showAdminToast('Please provide at least 2 product image URLs.');
    const firstEmpty = imgInputs.find(inp => !inp.value.trim());
    if (firstEmpty) firstEmpty.focus();
    return;
  }
  if (images.length > 5) {
    showAdminToast('Maximum 5 product images allowed.');
    return;
  }

  // Validate Videos (Min 1, Max 2)
  const vidInputs = Array.from(document.querySelectorAll('.prod-video-input'));
  const videos = vidInputs.map(inp => inp.value.trim()).filter(Boolean);

  if (videos.length < 1) {
    showAdminToast('Please provide at least 1 showcase video URL (MP4).');
    const firstEmpty = vidInputs.find(inp => !inp.value.trim());
    if (firstEmpty) firstEmpty.focus();
    return;
  }
  if (videos.length > 2) {
    showAdminToast('Maximum 2 showcase videos allowed.');
    return;
  }

  const id = document.getElementById('prodId').value.trim() || `prod-${Date.now().toString().slice(-4)}`;

  const categoryMap = {
    diyas: 'Diyas & Light',
    pooja: 'Puja Utensils & Thalis',
    vessels: 'Sanctuary Vessels & Urlis',
    sculptures: 'Deities & Sacred Brass',
    decor: 'Home Sanctum Décor',
    incense: 'Incense & Fragrance'
  };

  const selectedCat = document.getElementById('prodCategory').value;

  const productData = {
    id: id,
    name: document.getElementById('prodName').value.trim(),
    code: document.getElementById('prodCode').value.trim() || `AALAYAM / ${id}`,
    category: selectedCat,
    categoryLabel: categoryMap[selectedCat] || 'Sacred Brassware',
    price: parseInt(document.getElementById('prodPrice').value, 10) || 0,
    originalPrice: parseInt(document.getElementById('prodOriginalPrice').value, 10) || null,
    rating: 5.0,
    reviewsCount: 18,
    badge: 'Artisan Crafted',
    inStock: document.getElementById('prodInStock').checked,
    material: document.getElementById('prodMaterial').value.trim() || 'Solid Brass',
    dimensions: document.getElementById('prodDimensions').value.trim(),
    weight: document.getElementById('prodWeight').value.trim(),
    origin: document.getElementById('prodOrigin').value.trim() || 'India',
    craft: document.getElementById('prodCraft').value.trim() || 'Handcrafted Brass Casting',
    care: document.getElementById('prodCare').value.trim() || 'Clean with soft dry cloth.',
    images: images,
    videos: videos,
    video: videos[0] || null,
    desc: document.getElementById('prodDesc').value.trim() || 'Exquisite handcrafted brass object created for everyday devotion.'
  };

  saveProductToStorage(productData);
  closeProductModal();
  renderProductsTable();
  loadOverview();
  updateNavBadges();
  showAdminToast(`Product "${productData.name}" saved with ${images.length} photos and ${videos.length} video(s)!`);
}

function confirmDeleteProduct(id) {
  const p = getProductById(id);
  if (!confirm(`Are you sure you want to remove "${p.name}" (${p.code}) from the active catalog?`)) {
    return;
  }
  deleteProductFromStorage(id);
  renderProductsTable();
  loadOverview();
  updateNavBadges();
  showAdminToast(`Product "${p.name}" removed from catalog.`);
}

// ----------------------------------------------------
// ORDERS MANAGEMENT TAB
// ----------------------------------------------------
let orderStatusFilter = 'all';

function renderOrdersTable() {
  const tbody = document.getElementById('ordersTableBody');
  if (!tbody) return;

  const orders = getAdminOrders();
  const search = (document.getElementById('orderSearchInput')?.value || '').toLowerCase().trim();

  let filtered = orders;
  if (orderStatusFilter !== 'all') {
    filtered = filtered.filter(o => o.status.toLowerCase() === orderStatusFilter.toLowerCase());
  }

  if (search) {
    filtered = filtered.filter(o => 
      o.id.toLowerCase().includes(search) ||
      o.customer.name.toLowerCase().includes(search) ||
      o.customer.email.toLowerCase().includes(search) ||
      (o.trackingNumber && o.trackingNumber.toLowerCase().includes(search))
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 36px; color: var(--adm-text-muted);">No orders found matching status "${orderStatusFilter}".</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(o => {
    return `
      <tr>
        <td>
          <span style="font-weight: 600; color: var(--adm-gold); letter-spacing: 0.04em;">#${escapeHtml(o.id)}</span>
          <div style="font-size: 11px; color: var(--adm-text-muted);">${o.date}</div>
        </td>
        <td>
          <div style="font-weight: 600;">${escapeHtml(o.customer.name)}</div>
          <div style="font-size: 11.5px; color: var(--adm-text-muted);">${escapeHtml(o.customer.email)}</div>
        </td>
        <td>
          <div style="font-size: 12.5px;">${o.items.length} item(s)</div>
          <div style="font-size: 11px; color: var(--adm-text-muted);">${escapeHtml(o.items[0]?.name || '')}${o.items.length > 1 ? ' + more' : ''}</div>
        </td>
        <td>
          <span style="font-family: var(--adm-font-serif); font-size: 16px; font-weight: 600;">₹${(o.total || 0).toLocaleString('en-IN')}</span>
          <div style="font-size: 11px; color: var(--adm-badge-success-text);">${o.paymentStatus} (${o.paymentMethod || 'Online'})</div>
        </td>
        <td>
          <select class="filter-select" style="padding: 4px 8px; font-size: 12px;" onchange="updateOrderStatus('${o.id}', this.value)">
            <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>Processing</option>
            <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
            <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
            <option value="Cancelled" ${o.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </td>
        <td style="font-size: 11.5px; color: var(--adm-text-muted);">
          ${o.trackingNumber || 'Pending AWB'}
        </td>
        <td>
          <button class="adm-btn-secondary" style="padding: 6px 12px; font-size: 12px;" onclick="viewOrderInvoice('${o.id}')">
            View Invoice
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function filterOrdersByStatus(status, tabBtn) {
  orderStatusFilter = status;
  document.querySelectorAll('.order-status-pill').forEach(btn => btn.classList.remove('active'));
  if (tabBtn) tabBtn.classList.add('active');
  renderOrdersTable();
}

function updateOrderStatus(orderId, newStatus) {
  const orders = getAdminOrders();
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveAdminOrders(orders);
    loadOverview();
    updateNavBadges();
    showAdminToast(`Order #${orderId} marked as ${newStatus}`);
  }
}

function viewOrderInvoice(orderId) {
  const orders = getAdminOrders();
  const o = orders.find(ord => ord.id === orderId);
  if (!o) return;

  const content = document.getElementById('orderInvoiceBody');
  content.innerHTML = `
    <div style="border-bottom: 1px solid var(--adm-border-color); padding-bottom: 16px; margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <h2 style="font-family: var(--adm-font-serif); font-size: 26px; color: var(--adm-gold);">AALAYAM</h2>
          <p style="font-size: 11px; letter-spacing: 0.15em; color: var(--adm-text-muted);">HEIRLOOM BRASS SANCTUARY</p>
        </div>
        <div style="text-align: right;">
          <h4 style="font-size: 16px;">INVOICE #${escapeHtml(o.id)}</h4>
          <p style="font-size: 12px; color: var(--adm-text-muted);">Date: ${o.date}</p>
          <span class="badge ${getStatusBadgeClass(o.status)}">${o.status}</span>
        </div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; font-size: 13px;">
      <div>
        <strong style="font-size: 11px; text-transform: uppercase; color: var(--adm-text-muted);">Billed & Shipped To:</strong>
        <p style="font-weight: 600; margin-top: 4px;">${escapeHtml(o.customer.name)}</p>
        <p style="color: var(--adm-text-secondary);">${escapeHtml(o.customer.address)}</p>
        <p style="color: var(--adm-text-muted); font-size: 12px;">Email: ${escapeHtml(o.customer.email)}</p>
        <p style="color: var(--adm-text-muted); font-size: 12px;">Phone: ${escapeHtml(o.customer.phone)}</p>
      </div>
      <div>
        <strong style="font-size: 11px; text-transform: uppercase; color: var(--adm-text-muted);">Fulfillment & Payment:</strong>
        <p style="margin-top: 4px;">Payment Method: <strong>${o.paymentMethod || 'UPI / Razorpay'}</strong></p>
        <p>Payment Status: <strong style="color: var(--adm-badge-success-text);">${o.paymentStatus}</strong></p>
        <p>Tracking AWB: <strong>${o.trackingNumber || 'Pending Dispatch'}</strong></p>
      </div>
    </div>

    <table class="adm-table" style="margin-bottom: 20px;">
      <thead>
        <tr>
          <th>Object</th>
          <th style="text-align: center;">Qty</th>
          <th style="text-align: right;">Unit Price</th>
          <th style="text-align: right;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${o.items.map(it => `
          <tr>
            <td><strong>${escapeHtml(it.name)}</strong></td>
            <td style="text-align: center;">${it.qty}</td>
            <td style="text-align: right; font-family: var(--adm-font-serif);">₹${(it.price || 0).toLocaleString('en-IN')}</td>
            <td style="text-align: right; font-family: var(--adm-font-serif); font-weight: 600;">₹${((it.price || 0) * it.qty).toLocaleString('en-IN')}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div style="display: flex; justify-content: flex-end; border-top: 1px solid var(--adm-border-color); padding-top: 14px;">
      <div style="width: 240px; text-align: right;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 13px;">
          <span style="color: var(--adm-text-muted);">Subtotal:</span>
          <span>₹${(o.total || 0).toLocaleString('en-IN')}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 13px;">
          <span style="color: var(--adm-text-muted);">Insured Shipping:</span>
          <span style="color: var(--adm-badge-success-text);">FREE</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: 700; font-family: var(--adm-font-serif); color: var(--adm-gold); border-top: 1px solid var(--adm-border-color); padding-top: 8px;">
          <span>Grand Total:</span>
          <span>₹${(o.total || 0).toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  `;

  document.getElementById('orderInvoiceModalOverlay').classList.add('active');
}

function closeOrderInvoiceModal() {
  document.getElementById('orderInvoiceModalOverlay').classList.remove('active');
}

function printOrderInvoice() {
  window.print();
}

// ----------------------------------------------------
// RITUAL COLLECTIONS & BUNDLES TAB
// ----------------------------------------------------
function renderSetsGrid() {
  const container = document.getElementById('setsAdminGrid');
  if (!container || typeof RITUAL_SETS === 'undefined') return;

  container.innerHTML = Object.values(RITUAL_SETS).map(set => {
    const pricing = calculateBundlePricing(set.defaultItemIds, set.discountPct || 14);

    return `
      <div class="set-admin-card">
        <img src="${set.image}" alt="${escapeHtml(set.title)}" class="set-admin-img">
        <div class="set-admin-body">
          <span style="font-size: 11px; letter-spacing: 0.15em; color: var(--adm-gold); font-weight: 600; text-transform: uppercase;">${escapeHtml(set.kicker)}</span>
          <h4>${escapeHtml(set.title)}</h4>
          <p>${escapeHtml(set.desc)}</p>

          <strong style="font-size: 11px; text-transform: uppercase; color: var(--adm-text-muted); margin-bottom: 8px;">Default Bundled Items (${set.defaultItemIds.length}):</strong>
          <div class="set-included-tags">
            ${set.defaultItemIds.map(id => {
              const item = getProductById(id);
              return `<span class="set-tag">★ ${item ? escapeHtml(item.name) : id}</span>`;
            }).join('')}
          </div>

          <div class="set-admin-footer">
            <div>
              <div style="font-family: var(--adm-font-serif); font-size: 20px; font-weight: 600; color: var(--adm-text-primary);">₹${pricing.finalPrice.toLocaleString('en-IN')}</div>
              <div style="font-size: 11px; color: var(--adm-badge-success-text);">${set.discountPct}% Bundle Discount applied</div>
            </div>
            <a href="collection-detail.html?set=${set.id}" target="_blank" class="adm-btn-secondary" style="padding: 6px 12px; font-size: 12px; text-decoration: none;">
              Open Customizer ↗
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ----------------------------------------------------
// CUSTOM ENQUIRIES TAB
// ----------------------------------------------------
function renderEnquiriesTable() {
  const tbody = document.getElementById('enquiriesTableBody');
  if (!tbody) return;

  const enquiries = getAdminEnquiries();
  if (enquiries.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 36px; color: var(--adm-text-muted);">No custom commission enquiries recorded yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = enquiries.map(enq => `
    <tr>
      <td>
        <span style="font-weight: 600; color: var(--adm-gold);">${enq.id}</span>
        <div style="font-size: 11px; color: var(--adm-text-muted);">${enq.date}</div>
      </td>
      <td>
        <div style="font-weight: 600;">${escapeHtml(enq.name)}</div>
        <div style="font-size: 11.5px; color: var(--adm-text-muted);">${escapeHtml(enq.email)}</div>
        ${enq.company ? `<div style="font-size: 11px; color: var(--adm-gold);">${escapeHtml(enq.company)}</div>` : ''}
      </td>
      <td>
        <div style="font-weight: 500;">${escapeHtml(enq.occasion)}</div>
        <div style="font-size: 11.5px; color: var(--adm-text-muted);">Qty: ${escapeHtml(enq.quantity)}</div>
      </td>
      <td style="font-weight: 600; font-family: var(--adm-font-serif); font-size: 15px;">${escapeHtml(enq.budget)}</td>
      <td style="max-width: 220px; font-size: 12px; color: var(--adm-text-secondary); line-height: 1.4;">
        ${escapeHtml(enq.message)}
      </td>
      <td>
        <select class="filter-select" style="padding: 4px 8px; font-size: 12px;" onchange="updateEnquiryStatus('${enq.id}', this.value)">
          <option value="New" ${enq.status === 'New' ? 'selected' : ''}>New</option>
          <option value="Contacted" ${enq.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
          <option value="Quote Sent" ${enq.status === 'Quote Sent' ? 'selected' : ''}>Quote Sent</option>
          <option value="Closed" ${enq.status === 'Closed' ? 'selected' : ''}>Closed</option>
        </select>
      </td>
      <td>
        <a href="mailto:${escapeHtml(enq.email)}?subject=Re: AALAYAM Custom Brassware Enquiry (${enq.id})" class="adm-btn-primary" style="padding: 6px 12px; font-size: 11.5px; text-decoration: none;">
          Reply
        </a>
      </td>
    </tr>
  `).join('');
}

function updateEnquiryStatus(enqId, status) {
  const enquiries = getAdminEnquiries();
  const target = enquiries.find(e => e.id === enqId);
  if (target) {
    target.status = status;
    saveAdminEnquiries(enquiries);
    updateNavBadges();
    showAdminToast(`Lead #${enqId} status updated to ${status}`);
  }
}

// ----------------------------------------------------
// CUSTOMER REVIEWS MODERATION TAB
// ----------------------------------------------------
function renderReviewsTable() {
  const tbody = document.getElementById('reviewsTableBody');
  if (!tbody) return;

  const reviews = getAdminReviews();
  if (reviews.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 36px; color: var(--adm-text-muted);">No reviews pending moderation.</td></tr>`;
    return;
  }

  tbody.innerHTML = reviews.map(rev => `
    <tr>
      <td>
        <div style="font-weight: 600;">${escapeHtml(rev.author)}</div>
        <div style="font-size: 11px; color: var(--adm-text-muted);">${escapeHtml(rev.location || 'India')} · ${rev.date}</div>
      </td>
      <td>
        <a href="product.html?id=${rev.productId}" target="_blank" style="color: var(--adm-gold); text-decoration: none; font-weight: 500; font-size: 13px;">
          ${escapeHtml(rev.productName)} ↗
        </a>
      </td>
      <td>
        <div style="color: #d4af37; font-size: 14px;">${'★'.repeat(rev.rating)}</div>
      </td>
      <td style="max-width: 260px;">
        <strong style="font-size: 12.5px; display: block; margin-bottom: 2px;">${escapeHtml(rev.title)}</strong>
        <div style="font-size: 12px; color: var(--adm-text-muted); line-height: 1.4;">"${escapeHtml(rev.content)}"</div>
      </td>
      <td>
        <span class="badge ${rev.status === 'Approved' ? 'badge-success' : 'badge-warning'}">${rev.status}</span>
      </td>
      <td>
        <div class="table-actions">
          <button class="action-icon-btn" title="Approve Review" onclick="toggleReviewStatus('${rev.id}', 'Approved')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </button>
          <button class="action-icon-btn danger" title="Delete Review" onclick="deleteReview('${rev.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function toggleReviewStatus(revId, status) {
  const reviews = getAdminReviews();
  const rev = reviews.find(r => r.id === revId);
  if (rev) {
    rev.status = status;
    saveAdminReviews(reviews);
    renderReviewsTable();
    showAdminToast(`Review marked as ${status}`);
  }
}

function deleteReview(revId) {
  let reviews = getAdminReviews();
  reviews = reviews.filter(r => r.id !== revId);
  saveAdminReviews(reviews);
  renderReviewsTable();
  showAdminToast(`Review deleted.`);
}

// ----------------------------------------------------
// EVENT LISTENERS & HELPERS
// ----------------------------------------------------
function setupEventListeners() {
  // Mobile sidebar toggle
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const sidebar = document.querySelector('.admin-sidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // Live search for products
  const pSearch = document.getElementById('productSearchInput');
  if (pSearch) {
    pSearch.addEventListener('input', () => renderProductsTable());
  }

  const pCatFilter = document.getElementById('productCategoryFilter');
  if (pCatFilter) {
    pCatFilter.addEventListener('change', () => renderProductsTable());
  }

  // Live search for orders
  const oSearch = document.getElementById('orderSearchInput');
  if (oSearch) {
    oSearch.addEventListener('input', () => renderOrdersTable());
  }

  // Product form submit
  const pForm = document.getElementById('productForm');
  if (pForm) {
    pForm.addEventListener('submit', handleProductFormSubmit);
  }
}

function resetAllStoreData() {
  if (!confirm('Warning: This will restore default products catalog and demo orders. Continue?')) {
    return;
  }
  resetProductsToDefault();
  localStorage.removeItem('aalayam_orders');
  localStorage.removeItem('aalayam_enquiries');
  localStorage.removeItem('aalayam_reviews');
  showAdminToast('All store data reset to official defaults.');
  setTimeout(() => location.reload(), 600);
}

function getStatusBadgeClass(status) {
  switch ((status || '').toLowerCase()) {
    case 'delivered':
    case 'paid':
    case 'approved':
      return 'badge-success';
    case 'processing':
    case 'pending':
    case 'quote sent':
      return 'badge-warning';
    case 'shipped':
    case 'new':
    case 'contacted':
      return 'badge-info';
    case 'cancelled':
    case 'out of stock':
    case 'rejected':
      return 'badge-danger';
    default:
      return 'badge-info';
  }
}

function showAdminToast(msg) {
  let toast = document.getElementById('adminToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'adminToast';
    toast.className = 'adm-toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--adm-gold)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${escapeHtml(msg)}</span>
  `;

  toast.classList.add('show');
  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
