/**
 * AALAYAM — Central Product Catalog
 * Contains full product metadata, image galleries, craft specs,
 * verified customer reviews, and recommendation links for all objects.
 */

const PRODUCTS = {
  '004': {
    id: '004',
    name: 'KERALA STYLE VILAKKU',
    code: 'AALAYAM / 004',
    category: 'diyas',
    categoryLabel: 'Diyas & Light',
    price: 3450,
    originalPrice: 4200,
    rating: 5.0,
    reviewsCount: 38,
    badge: 'Masterpiece Edition',
    inStock: true,
    material: 'Solid Bell-Metal Brass · Traditional Mirror Polish',
    dimensions: '16.0" Height × 6.5" Base Diameter',
    weight: '2,100 grams',
    origin: 'Mannar, Kerala',
    craft: 'Traditional Kerala Lost-Wax Bell-Metal Sand Casting with Hand-Lathe Fluting',
    care: 'Wipe with a soft dry cotton cloth. Clean brass soot naturally with tamarind pulp or lemon and salt to restore golden luster.',
    images: [
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1794111889/Kerala_Style_Vilakku_Pro_06_6_lsrozw.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1794111889/Kerala_Style_Vilakku_Pro_06_4_lqoncl.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1794111889/Kerala_Style_Vilakku_Pro_06_5_r6cbeu.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1794111889/Kerala_Style_Vilakku_Pro_06_2_nw5knc.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1794111889/Kerala_Style_Vilakku_Pro_06_3_qxql6u.jpg'
    ],
    video: 'https://res.cloudinary.com/deukqrxtt/video/upload/v1794111891/Kerala_Style_vilakku_Pro_06_video_1_t7liqq.mp4',
    desc: 'The revered Nilavilakku of Kerala, cast in solid bell-metal brass with classical tiered oil thalis and a sculpted crown finial. Engineered to hold continuous festive flame.',
    story: 'In Kerala tradition, no auspicious event, housewarming (Grihapravesham), or classical kathakali performance commences without lighting the Nilavilakku. Hand-cast by hereditary craftsmen of Mannar using ancient bell-metal proportions.',
    similarIds: ['005', '006', '008', '012'],
    reviews: [
      {
        id: 'rev-01',
        author: 'Suresh Namboodiri',
        location: 'Kochi, Kerala',
        rating: 5,
        date: 'October 29, 2026',
        title: 'Authentic Mannar Nilavilakku — pure perfection',
        comment: 'Having grown up in Kerala, I was looking for an authentic heavy bell-metal vilakku. This lamp weighs over 2kg, perfectly balanced with sharp fluted details and deep oil wells. Lights up the entire prayer hall.',
        verified: true,
        helpfulCount: 28
      },
      {
        id: 'rev-02',
        author: 'Priya Narayanan',
        location: 'Chennai, Tamil Nadu',
        rating: 5,
        date: 'October 16, 2026',
        title: 'The video showed the quality, but in person it is breathtaking',
        comment: 'Received this in pristine wooden-reinforced packaging. The golden mirror finish and the weight are exceptional. A true heirloom for our family.',
        verified: true,
        helpfulCount: 19
      },
      {
        id: 'rev-03',
        author: 'Aditya Menon',
        location: 'Bengaluru',
        rating: 5,
        date: 'September 24, 2026',
        title: 'Heavily cast and burns steadily for hours',
        comment: 'Used it during our housewarming ceremony. Everyone asked where we acquired it. Holds sufficient oil for 4+ hours of continuous gentle flame.',
        verified: true,
        helpfulCount: 14
      }
    ]
  },

  '005': {
    id: '005',
    name: 'ASHTALAKSHMI FLOWER BASKET',
    code: 'AALAYAM / 005',
    category: 'pooja',
    categoryLabel: 'Pooja & Rituals',
    price: 2650,
    originalPrice: 3200,
    rating: 4.9,
    reviewsCount: 46,
    badge: 'Sacred Reliefs',
    inStock: true,
    material: 'Solid Virgin Brass with Embossed Ashta Lakshmi Panels',
    dimensions: '7.5" Height (with Handle) × 7.0" Diameter',
    weight: '850 grams',
    origin: 'Swamimalai, Tamil Nadu',
    craft: 'Deep Repoussé & Chasing with Pivoting Ergonomic Arch Handle',
    care: 'Ideal for holding fresh jasmine, marigold petals, and sacred offerings. Wipe dry after flower contact to keep brass glowing.',
    images: [
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1794112137/Ashtalakshmi_Flower_Basket_Pro_03_5_vmadyc.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1794112138/Ashtalakshmi_Flower_Basket_Pro_03_3_ttojrl.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1794112138/Ashtalakshmi_Flower_Basket_Pro_03_1_hmenwa.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1794112138/Ashtalakshmi_Flower_Basket_Pro_03_2_nehked.jpg'
    ],
    desc: 'A ceremonial brass flower basket (Phool Tokri) embossed around its perimeter with the eight divine forms of Goddess Lakshmi (Ashta Lakshmi). Fitted with a smooth arched brass swing handle.',
    story: 'Bringing fresh flowers to the altar is an act of heartfelt devotion. The Ashta Lakshmi reliefs signify the 8 aspects of abundance — wealth, courage, wisdom, fertility, and spiritual victory. The perforated openwork base keeps fresh flowers ventilated and sacred.',
    similarIds: ['004', '006', '008', '010'],
    reviews: [
      {
        id: 'rev-04',
        author: 'Sunita Venkatesh',
        location: 'Hyderabad',
        rating: 5,
        date: 'October 25, 2026',
        title: 'The Ashta Lakshmi figures are embossed with utmost clarity',
        comment: 'Each of the 8 forms of Lakshmi is sculpted with precision and grace. The handle swings smoothly, and filling it with fresh white Mogra flowers every morning has become our favorite family ritual.',
        verified: true,
        helpfulCount: 22
      },
      {
        id: 'rev-05',
        author: 'Deepa Kulkarni',
        location: 'Pune',
        rating: 5,
        date: 'October 12, 2026',
        title: 'Sturdy, elegant and blessed',
        comment: 'Much heavier and thicker gauge than the flimsy baskets available in ordinary markets. Pure solid brass. A magnificent addition to our temple room.',
        verified: true,
        helpfulCount: 16
      },
      {
        id: 'rev-06',
        author: 'Malini Sridhar',
        location: 'Chennai',
        rating: 4,
        date: 'September 19, 2026',
        title: 'Exquisite gifting piece for Varalakshmi Pooja',
        comment: 'Purchased as a gift for my mother-in-law during festive season. She was delighted by the sacred craftsmanship and delicate filigree work.',
        verified: true,
        helpfulCount: 9
      }
    ]
  },

  '006': {
    id: '006',
    name: 'ASHTALAKSHMI KALASH',
    code: 'AALAYAM / 006',
    category: 'brass',
    categoryLabel: 'Heirloom Brass',
    price: 4850,
    originalPrice: 5800,
    rating: 5.0,
    reviewsCount: 31,
    badge: 'Auspicious Icon',
    inStock: true,
    material: 'Heavy-Gauge Solid Brass with High-Relief Ashta Lakshmi Chasing',
    dimensions: '9.5" Height × 6.8" Maximum Belly Diameter',
    weight: '1,800 grams',
    origin: 'Kumbakonam, Tamil Nadu',
    craft: 'Heavy Brass Sand-Casting with Hand-Etched Fluting and Coconut Rim',
    care: 'Rinse interior with clean water. Dry thoroughly with a soft cloth. Natural patina enriches over time with ceremonial use.',
    images: [
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1794112236/Ashtalakshmi_Kalash_Pro_02_2_rvsrhb.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1794112235/Ashtalakshmi_Kalash_Pro_02_3_iw4jta.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1794112236/Ahstalakshmi_Kalash_Pro_02_1_plhhhj.jpg'
    ],
    video: 'https://res.cloudinary.com/deukqrxtt/video/upload/v1794112236/Ashtalakshmi_Kalash_Pro_02_video_2_mp0bod.mp4',
    desc: 'An auspicious sanctum Kalash pot embellished with the sacred eight manifestations of Lakshmi. Designed to hold holy water, mango leaves, and coconut for housewarmings and sanctum rituals.',
    story: 'The Kalasha represents creation, cosmic abundance, and the divine reservoir of life-force. Cast in substantial pure brass with intricate sacred iconography that radiates serenity and blessing.',
    similarIds: ['004', '005', '008', '012'],
    reviews: [
      {
        id: 'rev-07',
        author: 'Raghunath Sharma',
        location: 'Varanasi',
        rating: 5,
        date: 'October 30, 2026',
        title: 'Monumental presence for Grihapravesham',
        comment: 'We used this Kalash for our housewarming puja. The priest remarked that he had rarely seen such heavy, traditional casting outside old temple storehouses. The video showed it well, but holding nearly 2kg of pure brass in hand is extraordinary.',
        verified: true,
        helpfulCount: 34
      },
      {
        id: 'rev-08',
        author: 'Anuradha Joshi',
        location: 'Mumbai',
        rating: 5,
        date: 'October 14, 2026',
        title: 'Impeccable details and divine vibration',
        comment: 'The coconut and mango leaves sit securely on the flared mouth. The Lakshmi reliefs around the belly are deeply carved and catch the light beautifully.',
        verified: true,
        helpfulCount: 20
      },
      {
        id: 'rev-09',
        author: 'Venkatesan R.',
        location: 'Bengaluru',
        rating: 5,
        date: 'September 28, 2026',
        title: 'Worth every rupee — lifetime heirloom',
        comment: 'Exceptional craftsmanship from Kumbakonam artisans. Solid brass with substantial thickness.',
        verified: true,
        helpfulCount: 15
      }
    ]
  },

  '007': {
    id: '007',
    name: 'THE BRASS BOWL',
    code: 'AALAYAM / 007',
    category: 'home',
    categoryLabel: 'Home Sanctuary',
    price: 1950,
    originalPrice: 2350,
    rating: 4.9,
    reviewsCount: 35,
    badge: 'Artisan Crafted',
    inStock: true,
    material: 'Hammered Brass · Natural Warm Luster',
    dimensions: '3.0" Height × 7.5" Diameter',
    weight: '820 grams',
    origin: 'Aligarh, Uttar Pradesh',
    craft: 'Hand-Hammered Sheet Metal with Flared Lip',
    care: 'Suitable for dry flowers, water offerings or fruit. Rinse and dry thoroughly after holding water.',
    images: [
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Sunlit_Antique_Brass_Urn_with_Flowers_aonm8t.png',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Brass_Lotus_Engraving_in_Warm_Light_jmnmju.png'
    ],
    desc: 'A versatile brass bowl for rituals, floating flowers (urli), or decorative table display. Hand-hammered with subtle tonal shifts that catch candlelight.',
    story: 'Each dimple across the bowl surface is the mark of a wooden mallet in the artisan’s workshop. No two bowls have the exact same reflection pattern.',
    similarIds: ['008', '011', '012', '014'],
    reviews: [
      {
        id: 'rev-07',
        author: 'Meenakshi Iyer',
        location: 'Pune',
        rating: 5,
        date: 'September 15, 2026',
        title: 'Floating jasmine in this bowl looks heavenly',
        comment: 'We keep this in our foyer with floating rose petals and a floating diya. Every guest compliments it immediately.',
        verified: true,
        helpfulCount: 18
      }
    ]
  },

  '008': {
    id: '008',
    name: 'THE LOTUS BOWL',
    code: 'AALAYAM / 008',
    category: 'home',
    categoryLabel: 'Home Sanctuary',
    price: 2450,
    originalPrice: 2900,
    rating: 5.0,
    reviewsCount: 51,
    badge: 'Iconic Design',
    inStock: true,
    material: 'Hand-Engraved Brass',
    dimensions: '3.8" Height × 8.2" Diameter',
    weight: '1,100 grams',
    origin: 'Jaipur, Rajasthan',
    craft: 'Hand Chasing (Naqashi) & Acid Etching of Petals',
    care: 'Wipe with microfiber cloth. Avoid abrasive scrubbers to preserve the engraved petal relief.',
    images: [
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Brass_Lotus_Engraving_in_Warm_Light_jmnmju.png',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Sunlit_Antique_Brass_Urn_with_Flowers_aonm8t.png'
    ],
    desc: 'A lotus-inspired sculpted bowl celebrating sacred symmetry and organic hand-carved petal details. Radiant under sunlight and ceremonial flame.',
    story: 'The sacred Padma (lotus) represents purity and unfolding spiritual consciousness. Our master chasers carve each petal contour with chisel and hammer.',
    similarIds: ['007', '011', '012', '015'],
    reviews: [
      {
        id: 'rev-08',
        author: 'Pooja Agarwal',
        location: 'Jaipur',
        rating: 5,
        date: 'October 25, 2026',
        title: 'The petal engraving detail is breathtaking',
        comment: 'Even more beautiful in person than in pictures. The engraving catches sunlight during the day and lamp light at night.',
        verified: true,
        helpfulCount: 31
      }
    ]
  },

  '009': {
    id: '009',
    name: 'THE ARATI LAMP',
    code: 'AALAYAM / 009',
    category: 'diyas',
    categoryLabel: 'Diyas & Light',
    price: 2950,
    originalPrice: 3500,
    rating: 4.9,
    reviewsCount: 24,
    badge: 'Ceremonial',
    inStock: true,
    material: 'Ceremonial Brass Alloy',
    dimensions: '5.2" Height × 9.5" Total Length (with Handle)',
    weight: '1,250 grams',
    origin: 'Kumbakonam, Tamil Nadu',
    craft: '5-Wick Casting with Ergonomic Arch Handle and Heat Guard',
    care: 'Clean with lemon and salt after use. Store in a dry cloth pouch.',
    images: [
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Sunlit_Antique_Brass_Urn_with_Flowers_aonm8t.png',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Brass_Lotus_Engraving_in_Warm_Light_jmnmju.png'
    ],
    desc: 'A ceremonial five-wick lamp with a curved ergonomic handle, designed for timeless festive celebrations and sacred offerings.',
    story: 'The Pancha Pradipa (five-wick lamp) represents the five elemental forces. The long arch handle stays cool while circling the sacred flames.',
    similarIds: ['004', '005', '013', '010'],
    reviews: [
      {
        id: 'rev-09',
        author: 'Ramesh Balasubramanian',
        location: 'Coimbatore',
        rating: 5,
        date: 'October 08, 2026',
        title: 'Perfect balance during Aarti',
        comment: 'Handle does not heat up during the entire puja. Exceptional balance and heavy brass weight.',
        verified: true,
        helpfulCount: 14
      }
    ]
  },

  '010': {
    id: '010',
    name: 'THE KUMKUM BOX',
    code: 'AALAYAM / 010',
    category: 'gifting',
    categoryLabel: 'Milestone Gifting',
    price: 950,
    originalPrice: 1200,
    rating: 4.7,
    reviewsCount: 63,
    badge: 'Token Gift',
    inStock: true,
    material: 'Solid Lathe-Finished Brass',
    dimensions: '2.0" Height × 2.0" Diameter',
    weight: '210 grams',
    origin: 'Moradabad, Uttar Pradesh',
    craft: 'Threaded Precision Lid & Finial Knob',
    care: 'Clean with damp cloth and dry immediately. Keep lid threads clean.',
    images: [
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Brass_Lotus_Engraving_in_Warm_Light_jmnmju.png',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Sunlit_Antique_Brass_Urn_with_Flowers_aonm8t.png'
    ],
    desc: 'A snug-lidded brass capsule designed for sacred powders, turmeric, and small family keepsakes. A touch of elegance for the mandir or vanity.',
    story: 'A miniature temple for daily blessings. The precision lathe threading ensures powders stay fresh and spill-proof during travel or festivals.',
    similarIds: ['004', '006', '013', '014'],
    reviews: [
      {
        id: 'rev-10',
        author: 'Ananya Roy',
        location: 'Kolkata',
        rating: 5,
        date: 'September 30, 2026',
        title: 'Ordered 20 for my sister’s wedding favors',
        comment: 'Every guest loved this gift. The box is compact, heavy, and the lid fits with satisfying precision.',
        verified: true,
        helpfulCount: 29
      }
    ]
  },

  '011': {
    id: '011',
    name: 'THE HERITAGE TRAY',
    code: 'AALAYAM / 011',
    category: 'brass',
    categoryLabel: 'Heirloom Brass',
    price: 3200,
    originalPrice: 3800,
    rating: 4.9,
    reviewsCount: 31,
    badge: 'Statement Piece',
    inStock: true,
    material: 'Heavy Gauge Hand-Hammered Brass',
    dimensions: '1.2" Height × 12.0" Diameter',
    weight: '1,650 grams',
    origin: 'Jodhpur, Rajasthan',
    craft: 'Hand Sinking and Chased Scalloped Perimeter',
    care: 'Not intended for direct acidic food service without tin lining. Perfect for dry sweets, tea sets, or puja accoutrements.',
    images: [
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Sunlit_Antique_Brass_Urn_with_Flowers_aonm8t.png',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Brass_Lotus_Engraving_in_Warm_Light_jmnmju.png'
    ],
    desc: 'A wide 12-inch hand-hammered platter designed for tea service, ceremonial offerings, or console styling. Built to endure generations of use.',
    story: 'Heavy gauge brass platter crafted to anchor the family gathering. Its rim is raised and rolled for effortless carrying.',
    similarIds: ['007', '008', '012', '014'],
    reviews: [
      {
        id: 'rev-11',
        author: 'Siddharth Saxena',
        location: 'Gurugram',
        rating: 5,
        date: 'October 18, 2026',
        title: 'Heirloom grade platter',
        comment: 'Extremely thick gauge brass. Feels like an antique family treasure from day one.',
        verified: true,
        helpfulCount: 22
      }
    ]
  },

  '012': {
    id: '012',
    name: 'THE BRASS URN',
    code: 'AALAYAM / 012',
    category: 'brass',
    categoryLabel: 'Heirloom Brass',
    price: 5800,
    originalPrice: 6900,
    rating: 5.0,
    reviewsCount: 17,
    badge: 'Masterpiece',
    inStock: true,
    material: 'Solid Antique-Patinated Brass',
    dimensions: '16.5" Height × 8.5" Maximum Diameter',
    weight: '3,800 grams',
    origin: 'Swamimalai, Tamil Nadu',
    craft: 'Lost-Wax Sand Casting with Hand-Etched Fluting and Living Patina',
    care: 'Keep in dry interior. Dust with dry cotton cloth. Natural aging develops deep golden bronze tones over time.',
    images: [
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Sunlit_Antique_Brass_Urn_with_Flowers_aonm8t.png',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Brass_Lotus_Engraving_in_Warm_Light_jmnmju.png',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg'
    ],
    desc: 'A monumental sculptural vessel designed as an anchor centerpiece for modern architectural spaces, entryway consoles, and heirloom collectors.',
    story: 'Echoing the sacred Kalasha vessels of classical architecture, this urn is cast in heavy pure brass. Its silhouette holds calm dignity in living rooms and foyers.',
    similarIds: ['008', '011', '015', '005'],
    reviews: [
      {
        id: 'rev-12',
        author: 'Tarun Chawla',
        location: 'New Delhi',
        rating: 5,
        date: 'September 22, 2026',
        title: 'The pride of our entryway',
        comment: 'Almost 4 kilograms of solid brass! The presence of this urn commands the entire foyer. Arrived in a wooden crate, flawlessly protected.',
        verified: true,
        helpfulCount: 26
      }
    ]
  },

  '013': {
    id: '013',
    name: 'THE SMALL DEEPA',
    code: 'AALAYAM / 013',
    category: 'diyas',
    categoryLabel: 'Diyas & Light',
    price: 850,
    originalPrice: 1100,
    rating: 4.8,
    reviewsCount: 88,
    badge: 'Daily Ritual',
    inStock: true,
    material: 'Cast Solid Brass Diya',
    dimensions: '1.8" Height × 3.2" Diameter',
    weight: '240 grams',
    origin: 'Thanjavur, Tamil Nadu',
    craft: 'Die-Cast & Hand-Chiseled Oil Spout',
    care: 'Wash clean after burning ghee or oil. Wipe dry immediately.',
    images: [
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Sunlit_Antique_Brass_Urn_with_Flowers_aonm8t.png',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Brass_Lotus_Engraving_in_Warm_Light_jmnmju.png'
    ],
    desc: 'A palm-sized diya crafted for peaceful morning prayer and warm golden candlelight. Its tapered lip maintains a clean, steady flame.',
    story: 'The humble deepa is the heart of every Indian home. Crafted with thick walls so the oil remains warm without burning the exterior fingers.',
    similarIds: ['004', '005', '009', '010'],
    reviews: [
      {
        id: 'rev-13',
        author: 'Geetha Nambiar',
        location: 'Kochi',
        rating: 5,
        date: 'October 19, 2026',
        title: 'Burns clean and steady',
        comment: 'We use this twice a day. The lip holds the wick securely without slipping down into the oil.',
        verified: true,
        helpfulCount: 35
      }
    ]
  },

  '014': {
    id: '014',
    name: 'THE OBJECT BOX',
    code: 'AALAYAM / 014',
    category: 'gifting',
    categoryLabel: 'Milestone Gifting',
    price: 2650,
    originalPrice: 3100,
    rating: 4.9,
    reviewsCount: 29,
    badge: 'Keepsake',
    inStock: true,
    material: 'Hinged Heavy Brass with Felt Lining',
    dimensions: '2.8" Height × 6.0" Width × 4.2" Depth',
    weight: '980 grams',
    origin: 'Moradabad, Uttar Pradesh',
    craft: 'Hand-Fitted Brass Hinges & Latch with Polished Bevel',
    care: 'Polish outer brass with cloth. Keep inner felt dry.',
    images: [
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Brass_Lotus_Engraving_in_Warm_Light_jmnmju.png',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Sunlit_Antique_Brass_Urn_with_Flowers_aonm8t.png'
    ],
    desc: 'A lined keepsake brass casket designed for heirloom jewelry, sacred threads, and ceremonial gifting. Closes with a satisfying solid weight.',
    story: 'Inspired by ancestral jewellery vaults (Petari). Each box is individually hinged by hand so the lid rests flush with airtight precision.',
    similarIds: ['010', '008', '011', '006'],
    reviews: [
      {
        id: 'rev-14',
        author: 'Ritu Singhal',
        location: 'Chandigarh',
        rating: 5,
        date: 'October 05, 2026',
        title: 'Solid, heirloom quality',
        comment: 'Gave this to my daughter for her wedding to hold her grandmother’s jewellery. The craftsmanship is magnificent.',
        verified: true,
        helpfulCount: 16
      }
    ]
  },

  '015': {
    id: '015',
    name: 'THE BRASS CANDLE HOLDER',
    code: 'AALAYAM / 015',
    category: 'home',
    categoryLabel: 'Home Sanctuary',
    price: 1750,
    originalPrice: 2100,
    rating: 4.8,
    reviewsCount: 14,
    badge: 'Architectural',
    inStock: true,
    material: 'Weighted Turned Brass Candlestick',
    dimensions: '9.0" Height × 3.6" Base Diameter',
    weight: '720 grams',
    origin: 'Aligarh, Uttar Pradesh',
    craft: 'Lathe Turned and Counterweighted Base',
    care: 'Remove wax residue by pouring warm water. Polish to maintain shine.',
    images: [
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Sunlit_Antique_Brass_Urn_with_Flowers_aonm8t.png',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg',
      'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Brass_Lotus_Engraving_in_Warm_Light_jmnmju.png'
    ],
    desc: 'A solid tapered candlestick providing architectural calm and golden candle flame reflections across evening dining tables and fireplace mantels.',
    story: 'Balancing classical Indian turned woodwork geometry with pure solid brass permanence. The taper socket accommodates standard dinner candles with snug grip.',
    similarIds: ['005', '008', '011', '012'],
    reviews: [
      {
        id: 'rev-15',
        author: 'Aditya Sen',
        location: 'Mumbai',
        rating: 5,
        date: 'October 12, 2026',
        title: 'Elevates dinner tables immediately',
        comment: 'We bought a pair for our dining table. The golden reflections during candlelight dinner are stunning.',
        verified: true,
        helpfulCount: 9
      }
    ]
  }
};

function getProductById(id) {
  return PRODUCTS[id] || PRODUCTS['004'];
}

function getAllProducts() {
  return Object.values(PRODUCTS);
}

function searchProducts(query) {
  if (!query || !query.trim()) return [];
  const q = query.toLowerCase().trim();
  return getAllProducts().filter(p => {
    return p.name.toLowerCase().includes(q) ||
           p.category.toLowerCase().includes(q) ||
           p.categoryLabel.toLowerCase().includes(q) ||
           p.desc.toLowerCase().includes(q) ||
           p.material.toLowerCase().includes(q) ||
           p.origin.toLowerCase().includes(q);
  });
}


// ----------------------------------------------------
// CURATED RITUAL SETS & BUNDLE REGISTRY
// ----------------------------------------------------
const RITUAL_SETS = {
  'set-01': {
    id: 'set-01',
    name: 'THE MORNING RITUAL SET',
    code: 'AALAYAM SET / 01',
    kicker: 'SIGNATURE COMPLETE BUNDLE',
    category: 'pooja',
    discountPct: 14,
    image: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg',
    tagline: 'Everything needed to welcome the first light of day with calm and clarity.',
    desc: 'A complete four-piece arrangement containing our iconic solid brass bell, hand-finished incense holder, small deepa diya, and lathe-turned kumkum box. Hand-cast by hereditary metalworkers.',
    story: 'Morning prayers (Sandhyavandanam and puja) call for pure metal vessels that awaken the senses through sound, fragrance, and sacred flame. Each object in this set is dimensionally matched for cohesive arrangement on home altars or mandir consoles.',
    defaultItemIds: ['013', '006', '010', '004'],
    optionalAddonIds: ['005', '007', '008', '011']
  },

  'set-02': {
    id: 'set-02',
    name: 'THE FESTIVAL PUJA SET',
    code: 'AALAYAM SET / 02',
    kicker: 'CEREMONIAL CELEBRATION',
    category: 'pooja',
    discountPct: 15,
    image: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Sunlit_Antique_Brass_Urn_with_Flowers_aonm8t.png',
    tagline: 'A generous ritual arrangement for Diwali, festive gatherings and family celebrations.',
    desc: 'Brings together our heavy hand-hammered heritage tray, tall sand-cast deepam stand, small prayer diya, and threaded kumkum casket. Designed for ceremonial grandeur and daily grace.',
    story: 'Festivals bring families together in the glow of sacred lamps. This set provides the anchor platform (the 12-inch tray) and the vertical illumination (the 14-inch Deepam) to stage auspicious occasions with authentic weight.',
    defaultItemIds: ['011', '005', '013', '010'],
    optionalAddonIds: ['004', '008', '009', '014']
  },

  'set-03': {
    id: 'set-03',
    name: 'THE QUIET EVENING SET',
    code: 'AALAYAM SET / 03',
    kicker: 'CONTEMPORARY SANCTUARY',
    category: 'home',
    discountPct: 13,
    image: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg',
    tagline: 'Curated for slower twilight hours, ambient living room light and quiet contemplation.',
    desc: 'An evocative pairing of our turned brass incense holder, hand-hammered brass vessel bowl, small deepa, and weighted architectural candlestick.',
    story: 'Twilight (Sandhya) is when the home breathes. This set removes the noise of the day with grounding aromas, floating water petals, and dual candle and oil illumination.',
    defaultItemIds: ['006', '007', '013', '015'],
    optionalAddonIds: ['008', '011', '012', '014']
  },

  'set-04': {
    id: 'set-04',
    name: 'THE GIFTING RITUAL SET',
    code: 'AALAYAM SET / 04',
    kicker: 'MILESTONE WEDDING & HOUSEWARMING',
    category: 'gifting',
    discountPct: 14,
    image: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Brass_Lotus_Engraving_in_Warm_Light_jmnmju.png',
    tagline: 'Our most requested heirloom wedding gift edit in signature handmade packaging.',
    desc: 'A magnificent pairing of our wide scalloped heritage tray, hand-chased lotus petal bowl, precision kumkum casket, and small deepa diya.',
    story: 'Gifts of pure brass represent enduring blessings that cannot tarnish with time. Packaged in custom handmade cloth boxes ready for presentation.',
    defaultItemIds: ['011', '008', '010', '013'],
    optionalAddonIds: ['004', '005', '012', '014']
  },

  'pooja': {
    id: 'pooja',
    name: 'POOJA & RITUALS COLLECTION',
    code: 'AALAYAM / POOJA',
    kicker: 'CURATED SACRED OBJECTS',
    category: 'pooja',
    discountPct: 12,
    image: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051162/aalayam1_2_tkqv2u.jpg',
    tagline: 'Sacred vessels, bells and deepams crafted for daily prayers and festive moments.',
    desc: 'Hand-selected sacred brassware designed to create a temple-like tranquility in your personal prayer space.',
    story: 'Every ritual is an act of grounding. Our pooja collection balances historic ritual authenticity with uncluttered modern forms.',
    defaultItemIds: ['004', '005', '006', '010', '013'],
    optionalAddonIds: ['008', '009', '011', '014']
  },

  'brass': {
    id: 'brass',
    name: 'HEIRLOOM BRASS COLLECTION',
    code: 'AALAYAM / BRASS',
    kicker: 'VIRGIN ALLOY CRAFT',
    category: 'brass',
    discountPct: 15,
    image: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Sunlit_Antique_Brass_Urn_with_Flowers_aonm8t.png',
    tagline: 'Pure hand-poured brassware with natural living patinas and monumental presence.',
    desc: 'Monumental urns, heavy-gauge hammered trays, and solid cast vessels built to last across generations.',
    story: 'In an era of disposable decor, solid brass stands as a beacon of permanence. It breathes, oxidizes, and deepens in beauty over decades.',
    defaultItemIds: ['011', '012', '007', '008'],
    optionalAddonIds: ['005', '014', '015', '004']
  },

  'home': {
    id: 'home',
    name: 'HOME SANCTUARY COLLECTION',
    code: 'AALAYAM / HOME',
    kicker: 'CONTEMPORARY INTERIORS',
    category: 'home',
    discountPct: 12,
    image: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1790051166/Brass_Lotus_Engraving_in_Warm_Light_jmnmju.png',
    tagline: 'Bowls, candle stands, and urns that bring warmth and architectural presence to modern rooms.',
    desc: 'Objects placed without ceremony, kept because they belong. Bringing tactile warmth to tables, mantels, and consoles.',
    story: 'Tradition does not belong behind museum glass. It lives on entryway consoles, dining tables, and reading desks.',
    defaultItemIds: ['007', '008', '015', '012'],
    optionalAddonIds: ['006', '011', '013', '014']
  },

  'gifting': {
    id: 'gifting',
    name: 'MILESTONE GIFTING COLLECTION',
    code: 'AALAYAM / GIFTING',
    kicker: 'THOUGHTFUL PAIRINGS',
    category: 'gifting',
    discountPct: 14,
    image: 'https://framerusercontent.com/images/XN1TT1V5VGs1bx8Knwt8WIBxYA.png',
    tagline: 'Considered selections ready for weddings, housewarmings, anniversaries and corporate tokens.',
    desc: 'Meaningful keepsakes and ritual sets ready for milestone moments and lifelong memories.',
    story: 'A gift of handmade brass is a gift of living history. Packaged in cotton drawstring pouches and heirloom boxes.',
    defaultItemIds: ['010', '014', '008', '011'],
    optionalAddonIds: ['004', '006', '013', '015']
  }
};

function getSetById(id) {
  return RITUAL_SETS[id] || RITUAL_SETS['set-01'];
}

function calculateBundlePricing(itemIds, discountPct = 14) {
  let originalTotal = 0;
  itemIds.forEach(id => {
    const item = getProductById(id);
    if (item) {
      originalTotal += item.price;
    }
  });

  const discountAmount = Math.round(originalTotal * (discountPct / 100));
  const finalPrice = originalTotal - discountAmount;

  return {
    originalTotal,
    discountAmount,
    discountPct,
    finalPrice,
    itemCount: itemIds.length
  };
}
