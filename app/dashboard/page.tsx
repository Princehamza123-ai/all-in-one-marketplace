import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { readHomeData } from '@/lib/data';

export default async function DashboardPage() {
  const user = { name: 'Admin User', role: 'ADMIN' };
  const data = await readHomeData();

  const totalListings = data.listings.length;
  const serviceCount = data.listings.filter((item) => item.type === 'SERVICE').length;
  const productCount = data.listings.filter((item) => item.type === 'PRODUCT').length;
  const jobCount = data.listings.filter((item) => item.type === 'JOB').length;

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
          <a className="nav-item active" href="/dashboard">Overview</a>
          <a className="nav-item" href="#">Services</a>
          <a className="nav-item" href="#">Products</a>
          <a className="nav-item" href="#">Jobs</a>
          <a className="nav-item" href="#">Messages</a>
          <a className="nav-item" href="#">Settings</a>
        </nav>

        <a href="/login" className="btn btn-light full-width">Logout</a>
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
            <strong>{totalListings}</strong>
            <span>Total listings</span>
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
              <h2>Add new listing</h2>
            </div>

            <form className="listing-form" action="/api/listings" method="POST">
              <div className="form-grid">
                <div className="field-group">
                  <label>Listing type</label>
                  <select name="type">
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
                  <input name="category" placeholder="Healthcare, Legal, Electronics..." required />
                </div>

                <div className="field-group">
                  <label>Price or salary</label>
                  <input name="price" placeholder="$120/session or $80k" required />
                </div>

                <div className="field-group full-width">
                  <label>Company / provider</label>
                  <input name="company" placeholder="Northside Clinic" required />
                </div>

                <div className="field-group full-width">
                  <label>Description</label>
                  <textarea name="description" rows={4} placeholder="Describe the listing in detail..." required />
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
                    <th>Category</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.listings.slice(0, 5).map((item) => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.type}</td>
                      <td>{item.category?.name || 'General'}</td>
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
