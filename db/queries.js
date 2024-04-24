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
