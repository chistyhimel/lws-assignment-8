"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";

export default function NavSignInOut() {
  const { auth, setAuth } = useAuth();

  return (
    <>
      {auth?.email ? (
        <>
          <li className="py-2 font-bold">
            {auth?.firstName} {auth?.lastName}
          </li>

          <button
            className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center"
            onClick={() => setAuth({})}
          >
            Logout
          </button>
        </>
      ) : (
        <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
          <Link href="/login">Login</Link>
        </li>
      )}
    </>
  );
}
