"use server";

import { createUser, getAuthUser, updateFavourites } from "@/db/queries";
import { revalidatePath } from "next/cache";

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

export const updateUserFavorites = async (recipeId, authId) => {
  try {
    await updateFavourites(recipeId, authId);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
};
