const listings = [
  {
    type: 'service',
    title: 'Dr. Amelia Reed',
    category: 'Healthcare',
    rating: 4.9,
    description: 'Board-certified physician specializing in family care and preventive health services.',
    price: '$120/session',
    company: 'Northside Clinic',
    thumb: 'thumb-service',
    tag: 'Doctor'
  },
  {
    type: 'service',
    title: 'Patrick Morgan',
    category: 'Legal',
    rating: 5.0,
    description: 'Trusted attorney for contract disputes, business law, and startup advisory.',
    price: '$250/hr',
    company: 'Morgan & Co.',
    thumb: 'thumb-service',
    tag: 'Lawyer'
  },
  {
    type: 'service',
    title: 'Harbor Build Co.',
    category: 'Artisans',
    rating: 4.8,
    description: 'Custom construction, renovations, and home improvement for residential spaces.',
    price: '$85/hr',
    company: 'Local artisan team',
    thumb: 'thumb-service',
    tag: 'Builder'
  },
  {
    type: 'product',
    title: 'Dell XPS 13 Laptop',
    category: 'Electronics',
    rating: 4.7,
    description: 'Lightweight premium laptop in excellent condition, ideal for students and remote work.',
    price: '$799',
    company: 'Tech Market',
    thumb: 'thumb-product',
    tag: 'Laptop'
  },
  {
    type: 'product',
    title: 'Vintage Dining Table',
    category: 'Furniture',
    rating: 4.9,
    description: 'Solid oak dining table handcrafted with a timeless finish and room for six.',
    price: '$540',
    company: 'HomeCraft',
    thumb: 'thumb-product',
    tag: 'Furniture'
  },
  {
    type: 'product',
    title: 'Wireless Noise Cancelling Headphones',
    category: 'Audio',
    rating: 4.6,
    description: 'Comfortable all-day audio performance with a premium travel-ready design.',
    price: '$220',
    company: 'Sound Corner',
    thumb: 'thumb-product',
    tag: 'Audio'
  },
  {
    type: 'job',
    title: 'Senior Product Designer',
    category: 'Design',
    rating: 4.8,
    description: 'Lead product design initiatives for an early-stage platform serving local businesses.',
    price: '$95k - $120k',
    company: 'Northstar Labs',
    thumb: 'thumb-job',
    tag: 'Full Time'
  },
  {
    type: 'job',
    title: 'Customer Success Specialist',
    category: 'Operations',
    rating: 4.7,
    description: 'Drive onboarding and customer retention for a fast-growing marketplace product.',
    price: '$55k - $70k',
    company: 'MarketFlow',
    thumb: 'thumb-job',
    tag: 'Remote'
  },
  {
    type: 'job',
    title: 'Frontend Engineer',
    category: 'Technology',
    rating: 4.9,
    description: 'Build responsive interfaces and improve conversion for a multi-category marketplace.',
    price: '$90k - $130k',
    company: 'LaunchWorks',
    thumb: 'thumb-job',
    tag: 'Hybrid'
  }
];

const grid = document.getElementById('listingGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

function renderListings(items) {
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
  const query = searchInput.value.trim().toLowerCase();

  const filtered = listings.filter((item) => {
    const matchesType = selected === 'all' || item.type === selected;
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    return matchesType && matchesQuery;
  });

  renderListings(filtered);
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    filterListings();
  });
});

searchInput.addEventListener('input', filterListings);

renderListings(listings);
