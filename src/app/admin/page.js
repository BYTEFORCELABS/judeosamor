"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { LogOut, ArrowLeft, Mail, BookOpen, Video } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import SubscribersPanel from "@/components/admin/SubscribersPanel";
import PublicationsPanel from "@/components/admin/PublicationsPanel";
import MediaPanel from "@/components/admin/MediaPanel";

const TABS = [
  { id: "subscribers", label: "Subscribers", icon: Mail },
  { id: "publications", label: "Publications", icon: BookOpen },
  { id: "media", label: "Media", icon: Video },
];

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("subscribers");

  // Probe the session on mount so a returning admin skips the login form
  // when their cookie is still valid.
  const probeSession = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/subscribers");
      if (res.ok) setIsAuthenticated(true);
    } catch (err) {
      console.error("Session probe failed:", err);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    probeSession();
  }, [probeSession]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setPassword("");
      } else {
        setLoginError(data.error || "Incorrect password. Try again.");
      }
    } catch {
      setLoginError("Connection failed. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  // ============================================================
  // UN-AUTHENTICATED: LOGIN VIEW
  // ============================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-ink flex items-center justify-center p-6">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-6 text-center">
            <BrandLogo className="w-44 h-11 mx-auto" sizes="176px" priority />
            <div className="space-y-2">
              <p className="type-eyebrow text-gold">Admin Access</p>
              <p className="type-body text-sm text-zinc-400">
                Enter the master passcode to manage the site.
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <label className="block space-y-2">
              <span className="type-label text-zinc-400">Master Passcode</span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-hairline text-ink placeholder:text-zinc-600 text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </label>

            {loginError && (
              <p className="text-xs text-red-400 text-center">{loginError}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="gold-button w-full py-3.5 text-xs cursor-pointer disabled:opacity-60"
            >
              {loading ? "Verifying" : "Unlock"}
            </button>
          </form>

          <Link
            href="/"
            className="type-label flex items-center justify-center gap-2 text-zinc-500 hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return to site
          </Link>
        </div>
      </div>
    );
  }

  // ============================================================
  // AUTHENTICATED: ADMIN CONSOLE
  // ============================================================
  return (
    <div className="min-h-screen bg-black text-ink flex flex-col sm:flex-row">
      <aside className="flex-shrink-0 border-b sm:border-b-0 sm:border-r border-hairline sm:w-60 sm:min-h-screen flex flex-col">
        <div className="px-6 py-5">
          <Link href="/" aria-label="Dr. Jude Osamor — home">
            <BrandLogo className="w-36 h-9" sizes="144px" priority />
          </Link>
        </div>

        <nav className="flex sm:flex-col gap-1 px-3 overflow-x-auto sm:overflow-visible">
          {TABS.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`type-label flex items-center gap-2.5 px-3.5 py-3 whitespace-nowrap transition-colors cursor-pointer border-l-2 border-b-2 sm:border-b-0 ${
                  tab === t.id
                    ? "border-gold text-gold sm:bg-zinc-900/60"
                    : "border-transparent text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {t.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden sm:block mt-auto px-3 pb-6 pt-4">
          <button
            type="button"
            onClick={() => setIsAuthenticated(false)}
            className="type-label w-full flex items-center gap-2.5 px-3.5 py-3 text-zinc-500 hover:text-gold transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Lock
          </button>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <header className="flex sm:hidden items-center justify-end border-b border-hairline px-6 py-3">
          <button
            type="button"
            onClick={() => setIsAuthenticated(false)}
            className="type-label flex items-center gap-2 px-3 py-2 border border-hairline text-zinc-400 hover:text-gold hover:border-gold/50 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            Lock
          </button>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12">
          {tab === "subscribers" && <SubscribersPanel />}
          {tab === "publications" && <PublicationsPanel />}
          {tab === "media" && <MediaPanel />}
        </main>
      </div>
    </div>
  );
}
