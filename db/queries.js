import Recipe from "@/models/recipes-model";
import User from "@/models/users-model";
import connectMongo from "@/services/dbConnect";

const {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} = require("@/utils/data-util");

export const getAllRecipes = async () => {
  await connectMongo();
  let allRecipes = [];

  allRecipes = await Recipe.find().lean();

  return replaceMongoIdInArray(allRecipes);
};

export const getRecipeById = async (recipeId) => {
  await connectMongo();
  const recipe = await Recipe.findById(recipeId).lean();
  return replaceMongoIdInObject(recipe);
};

export const getRecipeCategories = async () => {
  await connectMongo();
  try {
    const categories = await Recipe.distinct("category");
    return categories;
  } catch (err) {
    console.error("Error:", err);
    return [];
  }
};

export const getAllRecipesByCategory = async (category) => {
  await connectMongo();
  const recipes = await Recipe.find({ category }).lean();
  return replaceMongoIdInArray(recipes);
};

export const createUser = async (user) => {
  await connectMongo();
  return await User.create(user);
};

export const getAuthUser = async (credentials) => {
  await connectMongo();
  const user = await User.findOne(credentials).lean();

  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
};

export const updateFavourites = async (recipeId, userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const index = user.favourites.indexOf(recipeId);

    if (index !== -1) {
      user.favourites.splice(index, 1);
    } else {
      user.favourites.push(recipeId);
    }

    const updatedUser = await user.save();

    return updatedUser;
  } catch (error) {
    throw error;
  }
};
