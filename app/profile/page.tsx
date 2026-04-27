import { query } from "../lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation"
import UserCard, {User} from "./UserCard";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;

  if (!token){
    redirect("/login");
  } 

  // verify token with your backend and get user info
  const params = new URLSearchParams({ authorization: `Bearer ${token}` });
  const res = await fetch(`${BACKEND_URL}/auth/me?${params}`);

  if (!res.ok){
    redirect("/login");
  }
  const { user_id } = await res.json();

  const users = await query("SELECT * FROM users WHERE users.id = $1", [user_id]) as User[];

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
  );
}