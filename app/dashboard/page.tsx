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

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error || 'Unable to create your account');
        setLoading(false);
        return;
      }

      setMessage('Account created successfully. Redirecting to login...');
      setTimeout(() => {
        window.location.href = '/login';
      }, 1000);
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
            <h1>Create your account</h1>
            <p>Join and start publishing services, products, and jobs.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="name">Full name</label>
              <input id="name" value={name} onChange={(event) => setName(event.target.value)} required />
            </div>

            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </div>

            <div className="field-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            </div>

            <button type="submit" className="btn btn-primary full-width" disabled={loading}>
              {loading ? 'Creating account...' : 'Create account'}
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
