"use client";
import React from "react";


export default function Dashboard() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="flex flex-col md:flex-row h-full">
        {/* Sidebar */}
        <aside className="w-full min-h-screen md:w-64 bg-gray-950 shadow-lg flex flex-col justify-between py-8 px-6">
          <div>
            <h1 className="text-2xl font-bold mb-8 tracking-tight">Namea Dashboard</h1>
            <nav>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#streaming"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    <span role="img" aria-label="streaming">🎬</span>
                    Streaming
                  </a>
                </li>
                <li>
                  <a
                    href="#boost-seo"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    <span role="img" aria-label="seo">🚀</span>
                    Boost SEO
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <button
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition font-semibold"
              onClick={() => alert("Logout clicked")}
            >
              <span role="img" aria-label="logout">🔒</span>
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">
          {/* Streaming Section */}
          <div id="streaming" className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Streaming</h2>
            <div className="bg-gray-800 rounded-lg p-6 shadow-md flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="mb-2 text-gray-300">
                  Nikmati layanan streaming terbaru dengan kualitas tinggi dan fitur interaktif. 
                  Temukan berbagai konten populer yang sedang trending di tahun 2025.
                </p>
                <ul className="list-disc list-inside text-gray-400">
                  <li>Rekomendasi personal berbasis AI</li>
                  <li>Streaming ultra HD & multi-device</li>
                  <li>Live chat & komunitas</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-40 h-24 bg-gray-700 rounded-lg flex items-center justify-center text-4xl">
                  🎥
                </div>
              </div>
            </div>
          </div>

          {/* Boost SEO Section */}
          <div id="boost-seo" className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Boost SEO</h2>
            <div className="bg-gray-800 rounded-lg p-6 shadow-md flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="mb-2 text-gray-300">
                  Optimalkan visibilitas website Anda dengan fitur SEO terbaru. 
                  Pantau performa, dapatkan insight, dan tingkatkan ranking di mesin pencari.
                </p>
                <ul className="list-disc list-inside text-gray-400">
                  <li>Analisa kata kunci otomatis</li>
                  <li>Integrasi Google Analytics & Search Console</li>
                  <li>Rekomendasi konten real-time</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-40 h-24 bg-gray-700 rounded-lg flex items-center justify-center text-4xl">
                  📈
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-2">Selamat Datang di Dashboard 2025</h2>
            <p className="text-gray-400">
              Dashboard modern dengan fitur lengkap untuk kebutuhan streaming dan optimasi SEO Anda.
              Navigasi mudah, tampilan responsif, dan keamanan terjamin.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}