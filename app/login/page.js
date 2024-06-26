"use client";
import { loginUser } from "@/actions";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function LoginPage() {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission status
  const { setAuth } = useAuth();
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      schema.parse(formData);

      const found = await loginUser(formData);

      if (found) {
        setAuth(found);
        router.push("/");
        toast.success("Logged in successful!");
      }
    } catch (error) {
      if (error?.formErrors?.fieldErrors) {
        setErrors(error.formErrors.fieldErrors);
      } else if (error.message) {
        setErrors({ serverError: error.message });
      } else {
        console.error("Error:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="">
      <section className="h-screen grid place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="font-bold text-2xl">Sign in</h4>
          {errors.serverError && (
            <p className="text-red-500 bg-red-100 rounded text-center py-2 mt-2">
              {errors.serverError}
            </p>
          )}
          <form className="login-form" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className={`bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-xs text-gray-600">Or</p>

          <Link
            href="register"
            className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
          >
            Create New Account
          </Link>
        </div>
      </section>
    </main>
  );
}
