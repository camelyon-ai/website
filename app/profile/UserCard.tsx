"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export type User = {
  id: string;
  email: number;
  full_name: string;
  created_at: Date;
  updated_at: Date;
  last_login_at: Date;
  is_active: boolean;
  is_verified: boolean;
  plan: string;
};

async function updateUser(id: string, field: string, value: string) {
  const res = await fetch(`/api/users`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, [field]: value }),
  });
  if (!res.ok) throw new Error("Failed to update");
}

export default function UserCard({ user }: { user: User }) {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [values, setValues] = useState({ ...user });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSave = async (field: string) => {
    try {
      await updateUser(values.id, field, String(values[field as keyof typeof values]));
      setEditingField(null);
      setError(null);
    } catch {
      setError("Failed to save, please try again.");
    }
  };

  const renderRow = (label: string, field: keyof typeof values, editable = true) => (
  <div className="flex justify-between items-center px-8 py-5">
    <span className="text-sm text-muted-foreground w-32">{label}</span>
    <div className="flex flex-1 items-center justify-between gap-4">
      {editable && editingField === field ? (
        <input
          className="flex-1 max-w-sm text-sm border border-border rounded-md px-3 py-1.5 bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          value={String(values[field])}
          onChange={(e) => setValues({ ...values, [field]: e.target.value })}
          autoFocus
        />
      ) : (
        <span className={`text-sm ${field === "id" ? "font-mono" : ""} ${field === "email" ? "text-blue-600" : "text-foreground"}`}>
          {String(values[field])}
        </span>
      )}
      {editable && (
        <button
          className="text-xs px-3 py-1.5 rounded-md border border-border bg-background hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          onClick={() => editingField === field ? handleSave(field) : setEditingField(field)}
        >
          {editingField === field ? "Save" : "Edit"}
        </button>
      )}
    </div>
  </div>
);

return (
  <div className="min-h-screen bg-background">
    {error && (
      <div className="px-6 pt-6">
        <p className="text-sm text-destructive">{error}</p>
      </div>
    )}

    {/* Hero header */}
    <div className="bg-muted border-b border-border px-8 py-12 flex items-center gap-6">
      <div className="w-20 h-20 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center text-2xl font-medium shrink-0">
        {values.full_name?.split(" ").map((n: string) => n[0]).join("").toUpperCase() ?? "?"}
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{values.full_name}</h1>
        <span className="mt-2 inline-block text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">
          {values.plan}
        </span>
      </div>
    </div>

    <button
      onClick={() => router.push("/")}
      className="absolute top-6 right-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground border border-border bg-background hover:bg-muted transition-colors px-3 py-1.5 rounded-md"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      Home
    </button>
    {/* Fields */}
    <div className="divide-y divide-border">
      {renderRow("ID", "id", false)}
      {renderRow("Name", "full_name")}
      {renderRow("Email", "email", false)}
      {renderRow("Created", "created_at", false)}
      {renderRow("Plan", "plan", false)}
    </div>
  </div>
);
}