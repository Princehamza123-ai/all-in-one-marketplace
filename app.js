const STORAGE_KEY = 'marketplaceHubApp';

const categoryCatalog = [
  {
    name: 'Building & Construction Trades',
    icon: '🛠️',
    skills: [
      'Professional Plumbing',
      'Tiling and Marble Laying',
      'POP Ceiling Design',
      'Painting and Wall Screeding',
      'Aluminum Fabrication',
      'Welding and Metal Fabrication',
      'Carpentry and Roofing',
      'Bricklaying and Masonry',
      'Epoxy Flooring Installation',
      'Borehole Drilling'
    ]
  },
  {
    name: 'Electrical, Power & Cooling',
    icon: '⚡',
    skills: [
      'Conduit and Surface Electrical Wiring',
      'Solar Panel and Inverter Installation',
      'AC Installation and Maintenance',
      'Generator Repair',
      'Industrial Generator Maintenance',
      'CCTV and Intercom Installation',
      'Electric Fence Installation',
      'Refrigerator and Deep Freezer Repair',
      'Smart Home Automation Setup',
      'Solar Inverter Battery Repair'
    ]
  },
  {
    name: 'Automotive & Transport Repair',
    icon: '🚗',
    skills: [
      'Auto Diagnostics Mechanic',
      'Mobile Car Mechanic',
      'Auto Electrician',
      'Panel Beating and Auto Body Repair',
      'Auto Spray Painting',
      'Car AC Technician',
      'Vulcanizing and Wheel Balancing',
      'Auto Upholstery and Interior Upgrades',
      'Car Detailing and Polishing',
      'Motorcycle and Tricycle Repair'
    ]
  },
  {
    name: 'Fashion, Garment & Leatherworks',
    icon: '🧵',
    skills: [
      'Men’s Tailoring',
      'Women’s Fashion Design',
      'Shoemaking and Cobbling',
      'Bag Making and Leathercraft',
      'Professional Barbing Salon',
      'Hairdressing and Wig Making',
      'Makeup Artistry',
      'Textile Dyeing',
      'Hat and Fascinator Making',
      'Uniform Sewing and Mass Production'
    ]
  },
  {
    name: 'Home Maintenance & Events',
    icon: '🏠',
    skills: [
      'Furniture Making and Cabinetry',
      'Upholstery and Sofa Making',
      'Phone and Laptop Repair',
      'Catering and Cooking Services',
      'Cake Baking and Sugarcraft',
      'Photography and Videography',
      'Professional Cleaning and Janitorial Services',
      'Signage and Branding Fabrication',
      'Musical Instrument Repair',
      'Locksmithing'
    ]
  },
  {
    name: 'Professional Services',
    icon: '💼',
    skills: [
      'Legal Services',
      'Financial and Accounting Services',
      'Technology and IT Services',
      'Management and Business Consulting',
      'Marketing, Advertising, and PR',
      'Engineering and Architecture',
      'Health and Medical Service'
    ]
  }
];

const defaultData = {
  users: [
    {
      name: 'Admin User',
      email: 'admin@marketplacehub.com',
      password: 'admin123',
      role: 'Admin'
    }
  ],
  listings: [
    {
      id: 1,
      type: 'service',
      title: 'Dr. Amelia Reed',
      category: 'Healthcare',
      rating: 4.9,
      description: 'Board-certified physician specializing in family care and preventive health services.',
      price: '$120/session',
      company: 'Northside Clinic',
      tag: 'Doctor',
      thumb: 'thumb-service'
    },
    {
      id: 2,
      type: 'service',
      title: 'Patrick Morgan',
      category: 'Legal',
      rating: 5.0,
      description: 'Trusted attorney for contract disputes, business law, and startup advisory.',
      price: '$250/hr',
      company: 'Morgan & Co.',
      tag: 'Lawyer',
      thumb: 'thumb-service'
    },
    {
      id: 3,
      type: 'service',
      title: 'Harbor Build Co.',
      category: 'Construction',
      rating: 4.8,
      description: 'Professional plumbing, POP ceiling design, tiling, and home renovation services.',
      price: '$85/hr',
      company: 'Local artisan team',
      tag: 'Builder',
      thumb: 'thumb-service'
    },
    {
      id: 4,
      type: 'service',
      title: 'SmartPower Solar Solutions',
      category: 'Electrical',
      rating: 4.9,
      description: 'Solar panel installation, inverter repair, CCTV setup, and smart home automation.',
      price: '$160/service',
      company: 'SmartPower',
      tag: 'Electrician',
      thumb: 'thumb-service'
    },
    {
      id: 5,
      type: 'product',
      title: 'Dell XPS 13 Laptop',
      category: 'Electronics',
      rating: 4.7,
      description: 'Lightweight premium laptop in excellent condition, ideal for students and remote work.',
      price: '$799',
      company: 'Tech Market',
      tag: 'Laptop',
      thumb: 'thumb-product'
    },
    {
      id: 6,
      type: 'product',
      title: 'Vintage Dining Table',
      category: 'Furniture',
      rating: 4.9,
      description: 'Solid oak dining table handcrafted with a timeless finish and room for six.',
      price: '$540',
      company: 'HomeCraft',
      tag: 'Furniture',
      thumb: 'thumb-product'
    },
    {
      id: 7,
      type: 'product',
      title: 'Wireless Noise Cancelling Headphones',
      category: 'Audio',
      rating: 4.6,
      description: 'Comfortable all-day audio performance with a premium travel-ready design.',
      price: '$220',
      company: 'Sound Corner',
      tag: 'Audio',
      thumb: 'thumb-product'
    },
    {
      id: 8,
      type: 'job',
      title: 'Senior Product Designer',
      category: 'Design',
      rating: 4.8,
      description: 'Lead product design initiatives for an early-stage platform serving local businesses.',
      price: '$95k - $120k',
      company: 'Northstar Labs',
      tag: 'Full Time',
      thumb: 'thumb-job'
    },
    {
      id: 9,
      type: 'job',
      title: 'Customer Success Specialist',
      category: 'Operations',
      rating: 4.7,
      description: 'Drive onboarding and customer retention for a fast-growing marketplace product.',
      price: '$55k - $70k',
      company: 'MarketFlow',
      tag: 'Remote',
      thumb: 'thumb-job'
    },
    {
      id: 10,
      type: 'job',
      title: 'Frontend Engineer',
      category: 'Technology',
      rating: 4.9,
      description: 'Build responsive interfaces and improve conversion for a multi-category marketplace.',
      price: '$90k - $130k',
      company: 'LaunchWorks',
      tag: 'Hybrid',
      thumb: 'thumb-job'
    }
  ]
};

function loadAppData() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return structuredClone(defaultData);
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      users: parsed.users || defaultData.users,
      listings: parsed.listings || defaultData.listings
    };
  } catch (error) {
    console.error('Failed to parse localStorage', error);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return structuredClone(defaultData);
  }
}

function saveAppData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getCurrentUser() {
  const user = localStorage.getItem('marketplaceHubUser');
  return user ? JSON.parse(user) : null;
}

function setCurrentUser(user) {
  localStorage.setItem('marketplaceHubUser', JSON.stringify(user));
}

function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  if (!grid) return;

  grid.innerHTML = categoryCatalog
    .map(
      (category) => `
        <div class="category-box">
          <span class="icon">${category.icon}</span>
          <h3>${category.name}</h3>
          <ul class="category-skill-list">
            ${category.skills
              .slice(0, 4)
              .map((skill) => `<li>${skill}</li>`)
              .join('')}
          </ul>
        </div>
      `
    )
    .join('');
}

function renderListings(items) {
  const grid = document.getElementById('listingGrid');
  if (!grid) return;

  grid.innerHTML = items
    .map(
      (item) => `
        <article class="listing-card">
          <div class="listing-thumb ${item.thumb}">
            <span class="tag">${item.tag}</span>
          </div>
          <div class="listing-body">
            <div class="listing-meta">
              <h3>${item.title}</h3>
              <span class="rating">★ ${item.rating}</span>
            </div>
            <div class="company">${item.category}</div>
            <p>${item.description}</p>
            <div class="listing-bottom">
              <div>
                <div class="price">${item.price}</div>
                <div class="company">${item.company}</div>
              </div>
              <button class="btn btn-primary">View</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function filterListings() {
  const selected = document.querySelector('.filter-btn.active')?.dataset.filter ?? 'all';
  const query = document.getElementById('searchInput')?.value.trim().toLowerCase() || '';
  const appData = loadAppData();

  const filtered = appData.listings.filter((item) => {
    const matchesType = selected === 'all' || item.type === selected;
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tag.toLowerCase().includes(query);

    return matchesType && matchesQuery;
  });

  renderListings(filtered);
}

function initHomePage() {
  renderCategories();

  const searchInput = document.getElementById('searchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (searchInput) {
    searchInput.addEventListener('input', filterListings);
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      filterListings();
    });
  });

  filterListings();

  const navAuthLink = document.getElementById('navAuthLink');
  if (navAuthLink) {
    const user = getCurrentUser();
    if (user) {
      navAuthLink.textContent = 'Dashboard';
      navAuthLink.href = 'dashboard.html';
    }
  }
}

function initAuthPage() {
  const loginForm = document.getElementById('loginForm');

  if (!loginForm) return;

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const appData = loadAppData();
    const matchedUser = appData.users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password
    );

    if (!matchedUser) {
      alert('Invalid email or password. Please use the demo account.');
      return;
    }

    setCurrentUser({ name: matchedUser.name, email: matchedUser.email, role: matchedUser.role });
    window.location.href = 'dashboard.html';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initAuthPage();
});
