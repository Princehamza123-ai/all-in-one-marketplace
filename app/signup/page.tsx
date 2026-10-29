'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const result = await response.json();
    setLoading(false);

    if (!response.ok) {
      setMessage(result.error || 'Registration failed');
      return;
    }

    setMessage('User created successfully');
    window.location.href = '/login';
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
            <h1>Create account</h1>
            <p>Join and start listing your services, products, or jobs.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="name">Full name</label>
              <input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="field-group">
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="field-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <button type="submit" className="btn btn-primary full-width" disabled={loading}>
              {loading ? 'Creating...' : 'Create account'}
            </button>
          </form>

          {message ? <div className="message-box">{message}</div> : null}

          <div className="auth-footer">
            <span>
              Already have an account? <Link href="/login">Sign in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
