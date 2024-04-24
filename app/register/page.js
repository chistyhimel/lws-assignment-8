import { registerUser } from "@/actions";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <main className="">
      <section className="h-screen grid place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="font-bold text-2xl">Sign Up</h4>
          <form className="login-form" action={registerUser}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>

            <button
              type="submit"
              className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-xs text-gray-600">Or</p>

          <Link
            href="login"
            className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}
