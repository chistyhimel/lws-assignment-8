"use server";

import { createUser, getAuthUser } from "@/db/queries";

const { redirect } = require("next/navigation");

export const registerUser = async (formData) => {
  try {
    const user = Object.fromEntries(formData);
    const created = await createUser(user);
    redirect("/login");
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const user = await getAuthUser(credential);

    return user;
  } catch (error) {
    throw error;
  }
};
