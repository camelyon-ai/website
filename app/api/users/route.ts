import { NextRequest, NextResponse } from "next/server";
import { query } from "../../lib/db";

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { id, ...rest } = body;
  const field = Object.keys(rest)[0];
  const value = rest[field];

  const editableFields = ["name", "email", "token"];
  if (!editableFields.includes(field)) {
    return NextResponse.json({ error: "Field not editable" }, { status: 400 });
  }

  await query(
    `UPDATE users SET ${field} = $1 WHERE id = $2`,
    [value, id]
  );

  return NextResponse.json({ ok: true });
}