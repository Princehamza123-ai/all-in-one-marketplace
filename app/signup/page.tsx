'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('admin@marketplacehub.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error || 'Invalid email or password');
        setLoading(false);
        return;
      }

      window.location.href = '/dashboard';
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className="auth-body">
      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-header">
            <div className="brand-wrap">
              <div className="logo">M</div>
              <div>
                <div className="brand">MarketPlace Hub</div>
              </div>
            </div>
            <h1>Welcome back</h1>
            <p>Sign in to manage your marketplace presence.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <label className="checkbox-wrap">
                <input type="checkbox" defaultChecked />
                <span>Remember me</span>
              </label>
              <Link href="#">Forgot password?</Link>
            </div>

            <button type="submit" className="btn btn-primary full-width" disabled={loading}>
              {loading ? 'Signing in...' : 'Login'}
            </button>
          </form>

          {message ? <div className="message-box">{message}</div> : null}

          <div className="demo-box">
            <strong>Demo account</strong>
            <p>Email: admin@marketplacehub.com</p>
            <p>Password: admin123</p>
          </div>

          <div className="auth-footer">
            <span>
              Need an account? <Link href="/signup">Create one</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
