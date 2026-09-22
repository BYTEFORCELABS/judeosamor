"use client";

import { useEffect, useState, useCallback } from "react";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";
import { Field, TextInput, TextArea } from "@/components/admin/Field";

const emptyAppearance = {
  title: "",
  kind: "",
  channel: "",
  role: "",
  videoId: "",
  href: "",
  summary: "",
};

const emptyTopic = { topic: "", audience: "", desc: "" };

function AppearanceForm({ initial, onCancel, onSave, saving }) {
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
        <Field label="Kind (e.g. Keynote Panel)">
          <TextInput value={form.kind} onChange={set("kind")} />
        </Field>
        <Field label="Channel / Publisher">
          <TextInput value={form.channel} onChange={set("channel")} />
        </Field>
        <Field label="His Role">
          <TextInput value={form.role} onChange={set("role")} />
        </Field>
        <Field label="YouTube Video ID (leave blank if none)">
          <TextInput value={form.videoId} onChange={set("videoId")} placeholder="dQw4w9WgXcQ" />
        </Field>
        <div className="sm:col-span-2">
          <Field label="External link (used only when there's no video)">
            <TextInput value={form.href} onChange={set("href")} placeholder="https://…" />
          </Field>
        </div>
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

function TopicForm({ initial, onCancel, onSave, saving }) {
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
      <Field label="Topic">
        <TextInput required value={form.topic} onChange={set("topic")} />
      </Field>
      <Field label="Audience">
        <TextInput value={form.audience} onChange={set("audience")} />
      </Field>
      <Field label="Description">
        <TextArea rows={2} value={form.desc} onChange={set("desc")} />
      </Field>

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

function appearanceToForm(a) {
  return {
    title: a.title || "",
    kind: a.kind || "",
    channel: a.channel || "",
    role: a.role || "",
    videoId: a.videoId || "",
    href: a.href || "",
    summary: a.summary || "",
  };
}

function appearanceToApi(form) {
  return {
    title: form.title.trim(),
    kind: form.kind.trim(),
    channel: form.channel.trim(),
    role: form.role.trim(),
    videoId: form.videoId.trim() || null,
    href: form.href.trim() || null,
    summary: form.summary.trim(),
  };
}

export default function MediaPanel() {
  const [appearances, setAppearances] = useState(null);
  const [topics, setTopics] = useState(null);
  const [addingAppearance, setAddingAppearance] = useState(false);
  const [editingAppearanceId, setEditingAppearanceId] = useState(null);
  const [addingTopic, setAddingTopic] = useState(false);
  const [editingTopicId, setEditingTopicId] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/media/appearances");
    if (res.ok) {
      const json = await res.json();
      setAppearances(json.appearances || []);
      setTopics(json.speakingTopics || []);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  const withSaving = async (fn) => {
    setSaving(true);
    try {
      await fn();
    } finally {
      setSaving(false);
    }
  };

  const addAppearance = (form) =>
    withSaving(async () => {
      const res = await fetch("/api/admin/media/appearances", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appearanceToApi(form)),
      });
      if (res.ok) {
        setAddingAppearance(false);
        load();
      }
    });

  const updateAppearance = (id, form) =>
    withSaving(async () => {
      const res = await fetch(`/api/admin/media/appearances/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appearanceToApi(form)),
      });
      if (res.ok) {
        setEditingAppearanceId(null);
        load();
      }
    });

  const deleteAppearance = async (id, title) => {
    if (!confirm(`Delete “${title}”? This can't be undone.`)) return;
    const res = await fetch(`/api/admin/media/appearances/${id}`, { method: "DELETE" });
    if (res.ok) load();
  };

  const addTopic = (form) =>
    withSaving(async () => {
      const res = await fetch("/api/admin/media/topics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setAddingTopic(false);
        load();
      }
    });

  const updateTopic = (id, form) =>
    withSaving(async () => {
      const res = await fetch(`/api/admin/media/topics/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setEditingTopicId(null);
        load();
      }
    });

  const deleteTopic = async (id, topic) => {
    if (!confirm(`Delete “${topic}”? This can't be undone.`)) return;
    const res = await fetch(`/api/admin/media/topics/${id}`, { method: "DELETE" });
    if (res.ok) load();
  };

  if (!appearances || !topics) {
    return <p className="type-body text-sm text-zinc-500">Loading media…</p>;
  }

  return (
    <div className="space-y-14">
      {/* Appearances */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <p className="type-eyebrow text-gold">
            Talks &amp; Appearances <span className="text-zinc-600">({appearances.length})</span>
          </p>
          {!addingAppearance && (
            <button
              type="button"
              onClick={() => setAddingAppearance(true)}
              className="type-label inline-flex items-center gap-2 px-4 py-2.5 border border-hairline text-zinc-300 hover:text-gold hover:border-gold/50 transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Appearance
            </button>
          )}
        </div>

        {addingAppearance && (
          <AppearanceForm
            initial={emptyAppearance}
            saving={saving}
            onCancel={() => setAddingAppearance(false)}
            onSave={addAppearance}
          />
        )}

        <ul className="border-t border-hairline">
          {appearances.map((a) =>
            editingAppearanceId === a.id ? (
              <li key={a.id} className="py-4 border-b border-hairline">
                <AppearanceForm
                  initial={appearanceToForm(a)}
                  saving={saving}
                  onCancel={() => setEditingAppearanceId(null)}
                  onSave={(form) => updateAppearance(a.id, form)}
                />
              </li>
            ) : (
              <li key={a.id} className="group flex items-start gap-4 py-4 border-b border-hairline">
                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="text-sm font-medium text-ink">{a.title}</h3>
                  <p className="text-xs text-zinc-500">
                    {a.kind} · {a.channel}
                    {a.videoId ? " · has video" : " · link only"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setEditingAppearanceId(a.id)}
                  aria-label={`Edit ${a.title}`}
                  className="flex-shrink-0 p-2 text-zinc-500 hover:text-gold transition-colors cursor-pointer"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => deleteAppearance(a.id, a.title)}
                  aria-label={`Delete ${a.title}`}
                  className="flex-shrink-0 p-2 text-zinc-700 hover:text-red-400 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            )
          )}
          {appearances.length === 0 && !addingAppearance && (
            <li className="py-16 text-center text-sm text-zinc-500">No appearances yet.</li>
          )}
        </ul>
      </div>

      {/* Speaking topics */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <p className="type-eyebrow text-gold">
            Keynote &amp; Workshop Topics <span className="text-zinc-600">({topics.length})</span>
          </p>
          {!addingTopic && (
            <button
              type="button"
              onClick={() => setAddingTopic(true)}
              className="type-label inline-flex items-center gap-2 px-4 py-2.5 border border-hairline text-zinc-300 hover:text-gold hover:border-gold/50 transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Topic
            </button>
          )}
        </div>

        {addingTopic && (
          <TopicForm
            initial={emptyTopic}
            saving={saving}
            onCancel={() => setAddingTopic(false)}
            onSave={addTopic}
          />
        )}

        <ul className="border-t border-hairline">
          {topics.map((t) =>
            editingTopicId === t.id ? (
              <li key={t.id} className="py-4 border-b border-hairline">
                <TopicForm
                  initial={{ topic: t.topic, audience: t.audience, desc: t.desc }}
                  saving={saving}
                  onCancel={() => setEditingTopicId(null)}
                  onSave={(form) => updateTopic(t.id, form)}
                />
              </li>
            ) : (
              <li key={t.id} className="group flex items-start gap-4 py-4 border-b border-hairline">
                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="text-sm font-medium text-ink">{t.topic}</h3>
                  <p className="text-xs text-zinc-500">{t.audience}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setEditingTopicId(t.id)}
                  aria-label={`Edit ${t.topic}`}
                  className="flex-shrink-0 p-2 text-zinc-500 hover:text-gold transition-colors cursor-pointer"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => deleteTopic(t.id, t.topic)}
                  aria-label={`Delete ${t.topic}`}
                  className="flex-shrink-0 p-2 text-zinc-700 hover:text-red-400 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            )
          )}
          {topics.length === 0 && !addingTopic && (
            <li className="py-16 text-center text-sm text-zinc-500">No topics yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
