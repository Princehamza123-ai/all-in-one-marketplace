import { redirect } from 'next/navigation';
import { getSessionUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export default async function DashboardPage() {
  const user = await getSessionUser();

  if (!user) {
    redirect('/login');
  }

  const [categories, listings] = await Promise.all([
    prisma.category.findMany({ orderBy: { name: 'asc' } }),
    prisma.listing.findMany({
      where: { userId: user.id },
      include: { category: true },
      orderBy: { createdAt: 'desc' },
      take: 10
    })
  ]);

  const serviceCount = listings.filter((item) => item.type === 'SERVICE').length;
  const productCount = listings.filter((item) => item.type === 'PRODUCT').length;
  const jobCount = listings.filter((item) => item.type === 'JOB').length;

  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="logo">M</div>
          <div>
            <div className="brand">MarketPlace Hub</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item active">Overview</a>
          <a href="#" className="nav-item">Services</a>
          <a href="#" className="nav-item">Products</a>
          <a href="#" className="nav-item">Jobs</a>
          <a href="#" className="nav-item">Messages</a>
          <a href="#" className="nav-item">Settings</a>
        </nav>

        <form action="/api/auth/logout" method="POST">
          <button type="submit" className="btn btn-light full-width">Logout</button>
        </form>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span className="eyebrow">Dashboard</span>
            <h1>Marketplace overview</h1>
          </div>
          <div className="user-pill">{user.name}</div>
        </header>

        <section className="stats-grid dashboard-stats">
          <div>
            <strong>{listings.length}</strong>
            <span>My listings</span>
          </div>
          <div>
            <strong>{serviceCount}</strong>
            <span>Services</span>
          </div>
          <div>
            <strong>{productCount}</strong>
            <span>Products</span>
          </div>
          <div>
            <strong>{jobCount}</strong>
            <span>Jobs</span>
          </div>
        </section>

        <section className="dashboard-panels">
          <div className="panel panel-form">
            <div className="panel-header">
              <h2>Create listing</h2>
            </div>

            <form className="listing-form" action="/api/listings" method="POST">
              <div className="form-grid">
                <div className="field-group">
                  <label>Listing type</label>
                  <select name="type" defaultValue="SERVICE">
                    <option value="SERVICE">Service</option>
                    <option value="PRODUCT">Product</option>
                    <option value="JOB">Job</option>
                  </select>
                </div>

                <div className="field-group">
                  <label>Title</label>
                  <input name="title" placeholder="Example: Family Doctor" required />
                </div>

                <div className="field-group">
                  <label>Category</label>
                  <select name="category" defaultValue={categories[0]?.name || 'Professional Services'}>
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                  </select>
                </div>

                <div className="field-group">
                  <label>Price / salary</label>
                  <input name="price" placeholder="$120/session or $80k" required />
                </div>

                <div className="field-group full-width">
                  <label>Location</label>
                  <input name="location" placeholder="Lagos, Abuja, Remote" required />
                </div>

                <div className="field-group full-width">
                  <label>Description</label>
                  <textarea name="description" rows={5} placeholder="Describe the listing in detail..." required />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Publish listing</button>
            </form>
          </div>

          <div className="panel panel-list">
            <div className="panel-header">
              <h2>Recent listings</h2>
            </div>

            <div className="table-wrap">
              <table className="listing-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((item) => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.type}</td>
                      <td>{item.price || 'N/A'}</td>
                      <td><span className="status-badge">Active</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
