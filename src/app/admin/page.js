"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  Mail,
  Download,
  Search,
  Trash2,
  LogOut,
  RefreshCw,
  ArrowLeft,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const [subscribers, setSubscribers] = useState([]);
  const [search, setSearch] = useState("");

  // Returns true when the session cookie is still valid, so the caller can
  // decide whether to show the console or fall back to the login form.
  const loadSubscribers = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/subscribers");
      if (res.ok) {
        const data = await res.json();
        setSubscribers(data.subscribers || []);
        setIsAuthenticated(true);
        return true;
      }
      if (res.status === 401) {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error("Subscriber fetch error:", err);
    }
    return false;
  }, []);

  // Probe the session on mount — the server cookie is the external system
  // this effect is synchronising with. Every setState inside loadSubscribers
  // lands after an await, so there is no synchronous cascading render; the
  // rule just cannot see through the async boundary to prove that.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadSubscribers();
  }, [loadSubscribers]);

  const refresh = async () => {
    setLoading(true);
    await loadSubscribers();
    setLoading(false);
  };

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
        refresh();
      } else {
        setLoginError(data.error || "Incorrect password. Try again.");
      }
    } catch {
      setLoginError("Connection failed. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSubscriber = async (id, email) => {
    if (!confirm(`Remove ${email} from the mailing list?`)) return;
    try {
      const res = await fetch(`/api/admin/subscribers?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setSubscribers((current) => current.filter((s) => s.id !== id));
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const exportCSV = () => {
    if (subscribers.length === 0) return;

    const headers = ["Email", "Subscribed Date"];
    const rows = subscribers.map((s) => [
      `"${s.email}"`,
      `"${new Date(s.subscribedAt).toLocaleString()}"`,
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `jude-osamor-subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return subscribers;
    return subscribers.filter((s) => s.email.toLowerCase().includes(q));
  }, [subscribers, search]);

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
                Enter the master passcode to manage the mailing list.
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
  // AUTHENTICATED: SUBSCRIBER CONSOLE
  // ============================================================
  return (
    <div className="min-h-screen bg-black text-ink">
      <header className="border-b border-hairline">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <Link href="/" aria-label="Dr. Jude Osamor — home">
            <BrandLogo className="w-40 h-10" sizes="160px" priority />
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={refresh}
              className="type-label flex items-center gap-2 px-3 py-2 border border-hairline text-zinc-400 hover:text-gold hover:border-gold/50 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <button
              type="button"
              onClick={() => setIsAuthenticated(false)}
              className="type-label flex items-center gap-2 px-3 py-2 border border-hairline text-zinc-400 hover:text-gold hover:border-gold/50 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lock</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        <div className="space-y-3">
          <p className="type-eyebrow text-gold">Mailing List</p>
          <h1 className="type-display text-4xl sm:text-5xl">
            {subscribers.length}
            <span className="text-zinc-500 text-2xl sm:text-3xl ml-3 font-normal">
              {subscribers.length === 1 ? "subscriber" : "subscribers"}
            </span>
          </h1>
          <p className="type-body text-sm text-zinc-400 max-w-prose">
            Everyone who signed up through the briefing form on the site.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by email"
              className="w-full pl-10 pr-4 py-3 bg-transparent border border-hairline text-ink placeholder:text-zinc-600 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <button
            type="button"
            onClick={exportCSV}
            disabled={subscribers.length === 0}
            className="type-label flex items-center justify-center gap-2 px-5 py-3 border border-hairline text-zinc-300 hover:text-gold hover:border-gold/50 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="border border-hairline py-20 text-center space-y-3">
            <Mail className="w-6 h-6 mx-auto text-zinc-700" />
            <p className="type-body text-sm text-zinc-500">
              {subscribers.length === 0
                ? "No subscribers yet."
                : `No subscriber matches “${search}”.`}
            </p>
          </div>
        ) : (
          <ul className="border-t border-hairline">
            {filtered.map((sub, index) => (
              <li
                key={sub.id}
                className="group flex items-center gap-4 py-4 border-b border-hairline"
              >
                <span className="type-label text-zinc-700 w-8 flex-shrink-0 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 min-w-0 text-sm font-medium truncate">
                  {sub.email}
                </span>
                <time
                  dateTime={sub.subscribedAt}
                  className="hidden sm:block type-label text-zinc-600 flex-shrink-0"
                >
                  {new Date(sub.subscribedAt).toLocaleDateString(undefined, {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
                <button
                  type="button"
                  onClick={() => handleDeleteSubscriber(sub.id, sub.email)}
                  aria-label={`Remove ${sub.email}`}
                  className="flex-shrink-0 p-2 text-zinc-700 hover:text-red-400 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
