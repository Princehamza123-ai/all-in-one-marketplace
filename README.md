@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #f5f7ff;
  --surface: #ffffff;
  --surface-soft: #eef3ff;
  --primary: #4f46e5;
  --primary-dark: #2f2d8d;
  --secondary: #12b981;
  --text: #1f2937;
  --text-soft: #6b7280;
  --line: #e5e7eb;
  --danger: #ef4444;
  --shadow: 0 18px 40px rgba(79, 70, 229, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, select, textarea {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(229, 231, 235, 0.8);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 84px;
  gap: 20px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), #7c3aed);
  color: #fff;
  font-weight: 800;
  box-shadow: var(--shadow);
}

.brand {
  font-size: 1.1rem;
  font-weight: 800;
}

.brand-wrap small {
  color: var(--text-soft);
}

.nav-links {
  display: flex;
  gap: 26px;
  color: var(--text-soft);
  font-weight: 500;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  border: none;
  border-radius: 12px;
  padding: 0.9rem 1.4rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), #7c3aed);
  color: white;
  box-shadow: 0 18px 24px rgba(79, 70, 229, 0.2);
}

.btn-light {
  background: var(--surface-soft);
  color: var(--primary-dark);
}

.btn-light-cta {
  color: var(--primary-dark);
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--text);
}

.full-width {
  width: 100%;
}

.hero {
  padding: 72px 0 48px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 42px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 1rem;
}

.hero-copy h1 {
  font-size: clamp(2.7rem, 5vw, 4.2rem);
  line-height: 1.05;
  margin: 0 0 1rem;
  letter-spacing: -0.05em;
}

.hero-copy p {
  max-width: 620px;
  color: var(--text-soft);
  font-size: 1.08rem;
  line-height: 1.7;
  margin-bottom: 1.8rem;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 12px 12px 20px;
  background: #fff;
  border: 1px solid rgba(229, 231, 235, 0.8);
  border-radius: 18px;
  box-shadow: var(--shadow);
  max-width: 620px;
}

.search-box input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 12px 0;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.hero-tags span {
  background: rgba(79, 70, 229, 0.08);
  color: var(--primary-dark);
  border-radius: 999px;
  padding: 0.6rem 0.9rem;
  font-size: 0.87rem;
  font-weight: 600;
}

.hero-showcase {
  position: relative;
  min-height: 480px;
}

.mini-card {
  background: var(--surface);
  border: 1px solid rgba(229, 231, 235, 0.8);
  border-radius: 22px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.card-main {
  position: absolute;
  inset: 30px 40px 100px 0;
}

.card-header {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.4rem 0.8rem;
  background: rgba(18, 185, 129, 0.12);
  color: #0d9b68;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.8rem;
}

.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--secondary);
}

.card-main h3 {
  font-size: 2rem;
  margin: 1.2rem 0 0.8rem;
}

.card-main ul {
  padding-left: 1.3rem;
  color: var(--text-soft);
  line-height: 2;
  margin: 0;
}

.floating-card {
  position: absolute;
  right: 0;
  width: 170px;
  padding: 20px;
}

.card-orange {
  bottom: 120px;
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
}

.card-blue {
  bottom: 0;
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
}

.stat {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.4rem;
}

.floating-card p {
  margin: 0;
  color: var(--text-soft);
  font-weight: 600;
}

.stats {
  padding: 24px 0 12px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px;
}

.stats-grid div {
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
}

.stats-grid strong {
  font-size: clamp(1.4rem, 3vw, 2.2rem);
}

.stats-grid span {
  color: var(--text-soft);
  font-weight: 600;
}

.categories, .listing-section {
  padding: 80px 0 0;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 28px;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(1.9rem, 3vw, 2.7rem);
  letter-spacing: -0.04em;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.category-box {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 28px 22px;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.03);
}

.category-box h3 {
  margin: 0 0 10px;
}

.icon {
  font-size: 2rem;
  display: inline-block;
  margin-bottom: 0.8rem;
}

.category-skill-list {
  margin: 0;
  padding-left: 1.1rem;
  line-height: 1.8;
  color: var(--text-soft);
}

.filter-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-btn {
  border: 1px solid var(--line);
  background: #fff;
  color: var(--text-soft);
  border-radius: 999px;
  padding: 0.7rem 1rem;
  font-weight: 700;
}

.filter-btn.active {
  background: rgba(79, 70, 229, 0.1);
  border-color: rgba(79, 70, 229, 0.15);
  color: var(--primary);
}

.listing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.listing-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.03);
}

.listing-thumb {
  height: 180px;
  padding: 18px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
}

.thumb-service { background: linear-gradient(135deg, #4f46e5, #8b5cf6); }
.thumb-product { background: linear-gradient(135deg, #10b981, #34d399); }
.thumb-job { background: linear-gradient(135deg, #f59e0b, #f97316); }

.tag {
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
}

.listing-body {
  padding: 22px;
}

.listing-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.listing-meta h3 {
  margin: 0;
  font-size: 1.25rem;
}

.rating {
  color: #f59e0b;
  font-weight: 700;
}

.listing-body p {
  margin: 0;
  color: var(--text-soft);
  line-height: 1.7;
}

.listing-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.price {
  font-size: 1.2rem;
  font-weight: 800;
}

.company {
  color: var(--text-soft);
  font-weight: 600;
}

.cta {
  padding: 80px 0 20px;
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: linear-gradient(135deg, var(--primary), #7c3aed);
  color: white;
  border-radius: 24px;
  padding: 30px 32px;
  box-shadow: var(--shadow);
}

.cta-box h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  letter-spacing: -0.04em;
}

.cta-box .eyebrow {
  color: rgba(255, 255, 255, 0.8);
}

.footer {
  padding: 38px 0 54px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 28px;
}

.footer p,
.footer li {
  color: var(--text-soft);
}

.footer h4 {
  margin: 0 0 12px;
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.auth-body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at top, #eef2ff, #f5f7ff 45%, #eef6ff);
}

.auth-shell {
  width: min(460px, calc(100% - 32px));
}

.auth-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 32px;
  box-shadow: var(--shadow);
}

.auth-header {
  margin-bottom: 20px;
}

.auth-header h1 {
  margin: 18px 0 8px;
  font-size: 2rem;
}

.auth-header p,
.auth-footer,
.demo-box,
.auth-form label,
.field-group label {
  color: var(--text-soft);
}

.auth-form {
  display: grid;
  gap: 16px;
}

.field-group {
  display: grid;
  gap: 8px;
}

.field-group input, .field-group select, .field-group textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.9rem 1rem;
  background: #fff;
}

.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.checkbox-wrap {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.demo-box {
  margin-top: 22px;
  background: var(--surface-soft);
  border-radius: 14px;
  border: 1px solid rgba(79, 70, 229, 0.08);
  padding: 16px;
  line-height: 1.6;
}

.message-box {
  margin-top: 16px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(18, 185, 129, 0.08);
  color: #0d9b68;
  font-weight: 600;
}

.auth-footer {
  text-align: center;
  margin-top: 20px;
}

.dashboard-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 280px;
  background: #fff;
  border-right: 1px solid var(--line);
  padding: 28px 18px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sidebar-nav {
  display: grid;
  gap: 8px;
}

.nav-item {
  padding: 0.8rem 1rem;
  border-radius: 12px;
  color: var(--text-soft);
  font-weight: 600;
}

.nav-item.active, .nav-item:hover {
  background: var(--surface-soft);
  color: var(--primary-dark);
}

.dashboard-main {
  flex: 1;
  padding: 32px;
}

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 30px;
}

.dashboard-header h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.05em;
}

.user-pill {
  background: rgba(79, 70, 229, 0.12);
  color: var(--primary-dark);
  border: 1px solid rgba(79, 70, 229, 0.15);
  border-radius: 999px;
  padding: 0.7rem 1rem;
  font-weight: 700;
}

.dashboard-stats {
  margin-bottom: 24px;
  background: #fff;
}

.dashboard-panels {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
}

.panel {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.03);
  padding: 20px;
}

.panel-header {
  margin-bottom: 18px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.35rem;
}

.listing-form {
  display: grid;
  gap: 16px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.full-width {
  grid-column: 1 / -1;
}

.table-wrap {
  overflow-x: auto;
}

.listing-table {
  width: 100%;
  border-collapse: collapse;
}

.listing-table th, .listing-table td {
  text-align: left;
  padding: 12px 10px;
  border-bottom: 1px solid var(--line);
}

.listing-table th {
  color: var(--text-soft);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.status-badge {
  display: inline-block;
  padding: 0.35rem 0.7rem;
  font-size: 0.75rem;
  border-radius: 999px;
  font-weight: 700;
  background: rgba(18, 185, 129, 0.12);
  color: #0d9b68;
}

@media (max-width: 980px) {
  .nav-links {
    display: none;
  }

  .hero-grid,
  .category-grid,
  .listing-grid,
  .footer-grid,
  .dashboard-panels {
    grid-template-columns: 1fr;
  }

  .category-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dashboard-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
}

@media (max-width: 640px) {
  .nav-actions {
    display: none;
  }

  .stats-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .search-box {
    flex-direction: column;
    align-items: stretch;
    padding: 12px;
  }

  .cta-box,
  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
