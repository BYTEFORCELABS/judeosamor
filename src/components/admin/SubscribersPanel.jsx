"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { Mail, Download, Search, Trash2, RefreshCw } from "lucide-react";

export default function SubscribersPanel() {
  const [subscribers, setSubscribers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/subscribers");
      if (res.ok) {
        const data = await res.json();
        setSubscribers(data.subscribers || []);
      }
    } catch (err) {
      console.error("Subscriber fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  const handleDelete = async (id, email) => {
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

  return (
    <div className="space-y-10">
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
          onClick={load}
          className="type-label flex items-center justify-center gap-2 px-4 py-3 border border-hairline text-zinc-400 hover:text-gold hover:border-gold/50 transition-colors cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
        </button>
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
                onClick={() => handleDelete(sub.id, sub.email)}
                aria-label={`Remove ${sub.email}`}
                className="flex-shrink-0 p-2 text-zinc-700 hover:text-red-400 transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
