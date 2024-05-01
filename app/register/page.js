"use client";
import { registerUser } from "@/actions";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

// Define schema for form data validation using Zod
const schema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      schema.parse(formData);
      await registerUser(formData);
    } catch (error) {
      if (error?.formErrors?.fieldErrors) {
        setErrors(error.formErrors.fieldErrors);
      } else if (error.message) {
        setErrors({ serverError: error.message });
      } else {
        console.error("Error:", error);
      }
    }
  };

  return (
    <main className="">
      <section className="h-screen grid place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="font-bold text-2xl">Sign Up</h4>
          {errors?.serverError && (
            <p className="text-red-500 bg-red-100 rounded text-center py-2 mt-2">
              {errors?.serverError}
            </p>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                required
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors?.firstName && (
                <p className="text-red-500">{errors?.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                required
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors?.lastName && (
                <p className="text-red-500">{errors?.lastName}</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors?.email && <p className="text-red-500">{errors?.email}</p>}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors?.password && (
                <p className="text-red-500">{errors?.password}</p>
              )}
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
