"use client";

import { useState } from "react";

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
    <div className="flex py-2 border-b items-center">
      <span className="font-semibold w-32">{label}</span>
      {editable && editingField === field ? (
        <input
          className="flex-1 border rounded px-2 py-1 text-sm"
          value={String(values[field])}
          onChange={(e) => setValues({ ...values, [field]: e.target.value })}
          autoFocus
        />
      ) : (
        <span className="flex-1">{String(values[field])}</span>
      )}
      {editable && (
        <button
          className="ml-8 px-3 py-1 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50"
          onClick={() => editingField === field ? handleSave(field) : setEditingField(field)}
        >
          {editingField === field ? "✅" : "✏️"}
        </button>
      )}
    </div>
  );

  return (
    <div className="mb-6 border rounded p-4">
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      {renderRow("ID", "id", false)}
      {renderRow("Name", "full_name")}
      {renderRow("Email", "email", false)}
      {renderRow("Created", "created_at", false)}
    </div>
  );
}