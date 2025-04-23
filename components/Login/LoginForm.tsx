"use client";
import { useState } from "react";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulasi autentikasi
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <form className="space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block font-medium text-2xl text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-blue-950 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            placeholder="ais666@gmail.com"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="password" className="block text-2xl font-medium text-gray-700">
              Password
            </label>
            <a href="#" className="text-sm font-semibold text-blue-950 hover:underline">
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-blue-950 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-950 to-black text-white py-3 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-black">
          Don't have an account?{' '}
          <a href="#" className="text-blue-950 hover:underline font-bold">
            Sign up
          </a>
        </p>
      </div>
    </>
  );
}