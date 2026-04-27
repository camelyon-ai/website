import { query } from "../lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
type User = {
  id: string;
  email: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  last_login_at: Date;
  is_active: boolean;
  is_verified: boolean;
  plan: string;
};

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
        <div key={user.id} className="mb-6 border rounded p-4">
          <div className="flex py-2 border-b">
            <span className="font-semibold w-32">ID</span>
            <span>{user.id}</span>
            <button className="ml-8 px-3 py-1 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
              ✏️
            </button>
          </div>
          <div className="flex py-2 border-b">
            <span className="font-semibold w-32">Name</span>
            <span>{user.name}</span>
            <button className="ml-8 px-3 py-1 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
              ✏️
            </button>
          </div>
          <div className="flex py-2">
            <span className="font-semibold w-32">Email</span>
            <span>{user.email}</span>
            <button className="ml-8 px-3 py-1 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
              ✏️
            </button>
          </div>
          <div className="flex py-2">
            <span className="font-semibold w-32">Created</span>
            <span>{user.created_at.toLocaleString()}</span>
            <button className="ml-8 px-3 py-1 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
              ✏️
            </button>
          </div>
          <div className="flex py-2">
            <span className="font-semibold w-32">Updated</span>
            <span>{user.updated_at.toLocaleString()}</span>
            <button className="ml-8 px-3 py-1 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
              ✏️
            </button>
          </div>
          <div className="flex py-2">
            <span className="font-semibold w-32">Last Login</span>
            <span>{user.last_login_at.toLocaleString()}</span>
            <button className="ml-8 px-3 py-1 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
              ✏️
            </button>
          </div>
          <div className="flex py-2">
            <span className="font-semibold w-32">Active</span>
            <span>{user.is_active.toLocaleString()}</span>
            <button className="ml-8 px-3 py-1 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
              ✏️
            </button>
          </div>
          <div className="flex py-2">
            <span className="font-semibold w-32">Verified</span>
            <span>{user.is_verified.toLocaleString()}</span>
            <button className="ml-8 px-3 py-1 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
              ✏️
            </button>
          </div>
          <div className="flex py-2">
            <span className="font-semibold w-32">Plan</span>
            <span>{user.plan.toLocaleString()}</span>
            <button className="ml-8 px-3 py-1 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
              ✏️
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}