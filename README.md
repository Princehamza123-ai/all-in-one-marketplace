document.addEventListener('DOMContentLoaded', () => {
  const currentUser = JSON.parse(localStorage.getItem('marketplaceHubUser') || 'null');

  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }

  const userBadge = document.getElementById('userBadge');
  if (userBadge) {
    userBadge.textContent = currentUser.name || 'Admin';
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('marketplaceHubUser');
      window.location.href = 'login.html';
    });
  }

  const listingForm = document.getElementById('listingForm');
  const dashboardList = document.getElementById('dashboardList');

  function getAppData() {
    const saved = localStorage.getItem('marketplaceHubApp');
    return saved ? JSON.parse(saved) : { users: [], listings: [] };
  }

  function saveAppData(data) {
    localStorage.setItem('marketplaceHubApp', JSON.stringify(data));
  }

  function updateStats() {
    const data = getAppData();
    const total = data.listings.length;
    const services = data.listings.filter((item) => item.type === 'service').length;
    const products = data.listings.filter((item) => item.type === 'product').length;
    const jobs = data.listings.filter((item) => item.type === 'job').length;

    document.getElementById('statTotal').textContent = total;
    document.getElementById('statServices').textContent = services;
    document.getElementById('statProducts').textContent = products;
    document.getElementById('statJobs').textContent = jobs;
  }

  function renderDashboardList() {
    const data = getAppData();
    const recent = [...data.listings].slice(-5).reverse();

    if (!dashboardList) return;

    dashboardList.innerHTML = `
      <table class="listing-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${recent
            .map(
              (item) => `
                <tr>
                  <td>${item.title}</td>
                  <td>${item.type}</td>
                  <td>${item.category}</td>
                  <td>${item.price}</td>
                  <td><span class="status-badge">Active</span></td>
                </tr>
              `
            )
            .join('')}
        </tbody>
      </table>
    `;
  }

  listingForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = getAppData();
    const newListing = {
      id: Date.now(),
      type: document.getElementById('listingType').value,
      title: document.getElementById('listingTitle').value.trim(),
      category: document.getElementById('listingCategory').value.trim(),
      price: document.getElementById('listingPrice').value.trim(),
      company: document.getElementById('listingCompany').value.trim(),
      description: document.getElementById('listingDescription').value.trim(),
      rating: 4.8,
      tag: document.getElementById('listingType').value.charAt(0).toUpperCase() + document.getElementById('listingType').value.slice(1),
      thumb:
        document.getElementById('listingType').value === 'service'
          ? 'thumb-service'
          : document.getElementById('listingType').value === 'product'
          ? 'thumb-product'
          : 'thumb-job'
    };

    data.listings.push(newListing);
    saveAppData(data);

    listingForm.reset();
    updateStats();
    renderDashboardList();
    alert('Listing published successfully.');
  });

  updateStats();
  renderDashboardList();
});
