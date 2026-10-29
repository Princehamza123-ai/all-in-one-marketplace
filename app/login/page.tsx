import Link from 'next/link';
import { getSessionUser } from '@/lib/auth';
import { readHomeData } from '@/lib/data';

export default async function HomePage() {
  const user = await getSessionUser();
  const data = await readHomeData();

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="container nav">
          <div className="brand-wrap">
            <div className="logo">M</div>
            <div>
              <div className="brand">MarketPlace Hub</div>
              <small>Trusted local expertise</small>
            </div>
          </div>

          <nav className="nav-links" aria-label="Main navigation">
            <Link href="#services">Services</Link>
            <Link href="#products">Products</Link>
            <Link href="#jobs">Jobs</Link>
            <Link href="#about">Why us</Link>
          </nav>

          <div className="nav-actions">
            {user ? (
              <>
                <Link href="/dashboard" className="btn btn-light">Dashboard</Link>
                <Link href="/api/auth/logout" className="btn btn-primary">Logout</Link>
              </>
            ) : (
              <>
                <Link href="/login" className="btn btn-light">Login</Link>
                <Link href="/signup" className="btn btn-primary">Create account</Link>
              </>
            )}
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">One marketplace. Infinite opportunities.</span>
            <h1>Hire trusted people, buy quality products, and discover new jobs.</h1>
            <p>
              MarketPlace Hub connects customers with verified professionals, local sellers,
              and employers in one fast, trusted ecosystem.
            </p>

            <div className="search-box">
              <input type="text" placeholder="Search services, products, or jobs..." />
              <button className="btn btn-primary">Search</button>
            </div>

            <div className="hero-tags">
              <span>Doctors</span>
              <span>Lawyers</span>
              <span>Craftsmen</span>
              <span>Jobs</span>
              <span>Verified sellers</span>
            </div>
          </div>

          <div className="hero-showcase">
            <div className="mini-card card-main">
              <div className="card-header">
                <span className="dot green" />
                <span>Live marketplace</span>
              </div>
              <h3>1,240+ active listings</h3>
              <ul>
                <li>Professional services</li>
                <li>Home and business products</li>
                <li>Local and remote roles</li>
              </ul>
            </div>

            <div className="mini-card floating-card card-orange">
              <div className="stat">4.9/5</div>
              <p>Average trust score</p>
            </div>

            <div className="mini-card floating-card card-blue">
              <div className="stat">3.8k</div>
              <p>Transactions this month</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div>
            <strong>15k+</strong>
            <span>Service providers</span>
          </div>
          <div>
            <strong>25k+</strong>
            <span>Products sold</span>
          </div>
          <div>
            <strong>8k+</strong>
            <span>Open jobs</span>
          </div>
          <div>
            <strong>92%</strong>
            <span>Repeat buyers</span>
          </div>
        </div>
      </section>

      <section className="categories container" id="services">
        <div className="section-header">
          <div>
            <span className="eyebrow">Browse categories</span>
            <h2>Explore a world of trusted offers</h2>
          </div>
          <Link className="btn btn-outline" href="/dashboard">Launch your listing</Link>
        </div>

        <div className="category-grid">
          {data.categories.map((category) => (
            <div key={category.id} className="category-box">
              <span className="icon">✨</span>
              <h3>{category.name}</h3>
              <ul className="category-skill-list">
                <li>Verified providers</li>
                <li>Fast contact flow</li>
                <li>High-quality listings</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="listing-section container" id="products">
        <div className="section-header">
          <div>
            <span className="eyebrow">Featured marketplace</span>
            <h2>Popular services, products, and jobs</h2>
          </div>
          <div className="filter-group" aria-label="Listing filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Services</button>
            <button className="filter-btn">Products</button>
            <button className="filter-btn">Jobs</button>
          </div>
        </div>

        <div className="listing-grid">
          {data.listings.map((listing) => (
            <article key={listing.id} className="listing-card">
              <div className={`listing-thumb ${listing.type === 'PRODUCT' ? 'thumb-product' : listing.type === 'JOB' ? 'thumb-job' : 'thumb-service'}`}>
                <span className="tag">{listing.type}</span>
              </div>
              <div className="listing-body">
                <div className="listing-meta">
                  <h3>{listing.title}</h3>
                  <span className="rating">★ 4.9</span>
                </div>
                <div className="company">{listing.category?.name || 'Marketplace'}</div>
                <p>{listing.description}</p>
                <div className="listing-bottom">
                  <div>
                    <div className="price">{listing.price || 'Contact'}</div>
                    <div className="company">{listing.location || 'Online'}</div>
                  </div>
                  <button className="btn btn-primary">View</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta container" id="about">
        <div className="cta-box">
          <div>
            <span className="eyebrow">Why businesses love us</span>
            <h2>Everything your community needs in one trusted ecosystem.</h2>
          </div>
          <Link className="btn btn-light btn-light-cta" href="/signup">Get started</Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-wrap">
              <div className="logo">M</div>
              <div>
                <div className="brand">MarketPlace Hub</div>
              </div>
            </div>
            <p>Helping communities connect, discover, and grow.</p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li>Services</li>
              <li>Products</li>
              <li>Jobs</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Help center</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
