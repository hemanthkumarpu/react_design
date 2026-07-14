//GCS\src\components\AdminLogin.jsx

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import './AdminLogin.css'
import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

function EyeIcon({ off }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {off ? (
        <>
          <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-10-8-10-8a18.4 18.4 0 0 1 4.22-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19" />
          <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
          <path d="M1 1l22 22" />
        </>
      ) : (
        <>
          <path d="M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  )
}

export default function AdminLogin() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange({ target }) {
    const { name, value, checked, type } = target

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    if (error) setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (loading) return

    const email = form.email.trim()

    if (!email || !form.password) {
      setError('Please enter both your email and password.')
      return
    }

    setLoading(true)

    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        form.password
      );

      console.log("Logged in:", credential.user);

      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);

      switch (err.code) {
        case "auth/invalid-credential":
          setError("Invalid email or password.");
          break;

        case "auth/too-many-requests":
          setError("Too many failed attempts. Please try again later.");
          break;

        case "auth/network-request-failed":
          setError("Network error. Check your internet connection.");
          break;

        default:
          setError("Unable to sign in.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-grid" aria-hidden="true"></div>

      <div className="admin-login-card">
        <div className="admin-login-brand">
          <img src={logo} alt="Gnana CompuTech Solutions logo" />

          <div className="brand-word">
            Gnana CompuTech
            <span>Solutions Pvt Ltd</span>
          </div>
        </div>

        <div className="eyebrow">
          <span className="num">Staff Access</span> ADMIN PORTAL
        </div>

        <h1>Sign in to your dashboard</h1>

        <p className="admin-login-lede">
          Enter your admin credentials to manage courses, enquiries and
          institutional partners.
        </p>

        {error && (
          <div
            className="admin-login-error"
            role="alert"
            aria-live="polite"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="email">Email address</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="admin@gnanacomputech.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="username"
              autoFocus
              required
              disabled={loading}
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>

            <div className="admin-password-wrap">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                disabled={loading}
              />

              <button
                type="button"
                className="admin-password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={
                  showPassword ? 'Hide password' : 'Show password'
                }
                disabled={loading}
              >
                <EyeIcon off={showPassword} />
              </button>
            </div>
          </div>

          <div className="admin-login-row">
            <label className="admin-checkbox">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                disabled={loading}
              />

              <span>Keep me signed in</span>
            </label>

            <Link to="/forgot-password" className="admin-forgot-link">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-amber"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="btn-spinner"></span>
                Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </button>
        </form>

        <div className="admin-login-footer">
          <Link to="/">← Back to website</Link>
        </div>
      </div>
    </div>
  )
}