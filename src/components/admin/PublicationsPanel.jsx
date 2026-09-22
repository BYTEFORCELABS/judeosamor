"use client";

import { useEffect, useState, useCallback } from "react";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";
import { Field, TextInput, TextArea, Select } from "@/components/admin/Field";
import { researchAreas } from "@/lib/publications";

const emptyPub = {
  title: "",
  authors: "",
  venue: "",
  volume: "",
  year: "",
  citations: "",
  area: researchAreas[1]?.id || "ai",
  summary: "",
};

function PublicationForm({ initial, onCancel, onSave, saving }) {
  const [form, setForm] = useState(initial);
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(form);
      }}
      className="space-y-4 border border-hairline p-6 bg-zinc-900/60"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <Field label="Title">
            <TextInput required value={form.title} onChange={set("title")} />
          </Field>
        </div>
        <Field label="Authors (comma-separated)">
          <TextInput
            value={form.authors}
            onChange={set("authors")}
            placeholder="AR Khalid, N Owoh, J Osamor"
          />
        </Field>
        <Field label="Area">
          <Select value={form.area} onChange={set("area")}>
            {researchAreas
              .filter((a) => a.id !== "all")
              .map((a) => (
                <option key={a.id} value={a.id}>
                  {a.label}
                </option>
              ))}
          </Select>
        </Field>
        <Field label="Venue">
          <TextInput value={form.venue} onChange={set("venue")} />
        </Field>
        <Field label="Volume">
          <TextInput value={form.volume} onChange={set("volume")} />
        </Field>
        <Field label="Year">
          <TextInput value={form.year} onChange={set("year")} />
        </Field>
        <Field label="Citations">
          <TextInput type="number" min="0" value={form.citations} onChange={set("citations")} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Summary">
            <TextArea rows={3} value={form.summary} onChange={set("summary")} />
          </Field>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="gold-button inline-flex items-center gap-2 px-5 py-2.5 text-xs disabled:opacity-60 cursor-pointer"
        >
          <Check className="w-3.5 h-3.5" />
          {saving ? "Saving" : "Save"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="type-label inline-flex items-center gap-2 px-5 py-2.5 border border-hairline text-zinc-400 hover:text-gold hover:border-gold/50 transition-colors cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
          Cancel
        </button>
      </div>
    </form>
  );
}

function toFormShape(pub) {
  return {
    title: pub.title || "",
    authors: (pub.authors || []).join(", "),
    venue: pub.venue || "",
    volume: pub.volume || "",
    year: pub.year || "",
    citations: String(pub.citations ?? ""),
    area: pub.area || "ai",
    summary: pub.summary || "",
  };
}

function toApiShape(form) {
  return {
    title: form.title.trim(),
    authors: form.authors
      .split(",")
      .map((a) => a.trim())
      .filter(Boolean),
    venue: form.venue.trim(),
    volume: form.volume.trim(),
    year: form.year.trim(),
    citations: Number(form.citations) || 0,
    area: form.area,
    summary: form.summary.trim(),
  };
}

export default function PublicationsPanel() {
  const [data, setData] = useState(null);
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [metricsForm, setMetricsForm] = useState(null);
  const [savingMetrics, setSavingMetrics] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/publications");
    if (res.ok) {
      const json = await res.json();
      setData(json);
      setMetricsForm({
        scholarUrl: json.scholarUrl || "",
        scholarRetrieved: json.scholarRetrieved || "",
        scholarMetrics: json.scholarMetrics || [],
      });
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  const handleAdd = async (form) => {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/publications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toApiShape(form)),
      });
      if (res.ok) {
        setAdding(false);
        load();
      }
    } finally {
      setSaving(false);
    }
  };

  const handleUpdate = async (id, form) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/publications/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toApiShape(form)),
      });
      if (res.ok) {
        setEditingId(null);
        load();
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Delete “${title}”? This can't be undone.`)) return;
    const res = await fetch(`/api/admin/publications/${id}`, { method: "DELETE" });
    if (res.ok) load();
  };

  const handleSaveMetrics = async (e) => {
    e.preventDefault();
    setSavingMetrics(true);
    try {
      const res = await fetch("/api/admin/publications/metrics", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(metricsForm),
      });
      if (res.ok) load();
    } finally {
      setSavingMetrics(false);
    }
  };

  if (!data || !metricsForm) {
    return <p className="type-body text-sm text-zinc-500">Loading publications…</p>;
  }

  return (
    <div className="space-y-12">
      {/* Scholar metrics + link */}
      <div className="space-y-4">
        <p className="type-eyebrow text-gold">Scholar Summary</p>
        <form onSubmit={handleSaveMetrics} className="space-y-4 border border-hairline p-6 bg-zinc-900/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Google Scholar URL">
              <TextInput
                value={metricsForm.scholarUrl}
                onChange={(e) => setMetricsForm((f) => ({ ...f, scholarUrl: e.target.value }))}
              />
            </Field>
            <Field label="Figures retrieved (e.g. September 2026)">
              <TextInput
                value={metricsForm.scholarRetrieved}
                onChange={(e) =>
                  setMetricsForm((f) => ({ ...f, scholarRetrieved: e.target.value }))
                }
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {metricsForm.scholarMetrics.map((m, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-2">
                <Field label="Value">
                  <TextInput
                    value={m.value}
                    onChange={(e) =>
                      setMetricsForm((f) => {
                        const next = [...f.scholarMetrics];
                        next[idx] = { ...next[idx], value: e.target.value };
                        return { ...f, scholarMetrics: next };
                      })
                    }
                  />
                </Field>
                <Field label="Label">
                  <TextInput
                    value={m.label}
                    onChange={(e) =>
                      setMetricsForm((f) => {
                        const next = [...f.scholarMetrics];
                        next[idx] = { ...next[idx], label: e.target.value };
                        return { ...f, scholarMetrics: next };
                      })
                    }
                  />
                </Field>
              </div>
            ))}
          </div>
          <button
            type="submit"
            disabled={savingMetrics}
            className="gold-button inline-flex items-center gap-2 px-5 py-2.5 text-xs disabled:opacity-60 cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" />
            {savingMetrics ? "Saving" : "Save Summary"}
          </button>
        </form>
      </div>

      {/* Publications list */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <p className="type-eyebrow text-gold">
            Publications <span className="text-zinc-600">({data.publications.length})</span>
          </p>
          {!adding && (
            <button
              type="button"
              onClick={() => setAdding(true)}
              className="type-label inline-flex items-center gap-2 px-4 py-2.5 border border-hairline text-zinc-300 hover:text-gold hover:border-gold/50 transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Publication
            </button>
          )}
        </div>

        {adding && (
          <PublicationForm
            initial={emptyPub}
            saving={saving}
            onCancel={() => setAdding(false)}
            onSave={handleAdd}
          />
        )}

        <ul className="border-t border-hairline">
          {data.publications.map((pub) =>
            editingId === pub.id ? (
              <li key={pub.id} className="py-4 border-b border-hairline">
                <PublicationForm
                  initial={toFormShape(pub)}
                  saving={saving}
                  onCancel={() => setEditingId(null)}
                  onSave={(form) => handleUpdate(pub.id, form)}
                />
              </li>
            ) : (
              <li
                key={pub.id}
                className="group flex items-start gap-4 py-4 border-b border-hairline"
              >
                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="text-sm font-medium text-ink">{pub.title}</h3>
                  <p className="text-xs text-zinc-500">
                    {pub.year} · {pub.venue} · {pub.citations}{" "}
                    {pub.citations === 1 ? "citation" : "citations"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setEditingId(pub.id)}
                  aria-label={`Edit ${pub.title}`}
                  className="flex-shrink-0 p-2 text-zinc-500 hover:text-gold transition-colors cursor-pointer"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(pub.id, pub.title)}
                  aria-label={`Delete ${pub.title}`}
                  className="flex-shrink-0 p-2 text-zinc-700 hover:text-red-400 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            )
          )}
          {data.publications.length === 0 && !adding && (
            <li className="py-16 text-center text-sm text-zinc-500">No publications yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
