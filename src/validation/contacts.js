import Joi from "joi";
import { isValidObjectId } from "mongoose";

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    "string.min": "Name should be 3 characters minimum!",
    "string.max": "Name should be 20 characters maximum!",
    "any.required": "Name is required!",
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    "string.min": "Phone number should be 3 characters minimum!",
    "string.max": "Phone number should be 20 characters maximum!",
    "any.required": "Phone number is required!",
  }),
  email: Joi.string().min(3).max(20).messages({
    "string.email": "Please enter a valid email!",
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid("work", "home", "personal"),
});

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    "string.min": "Name should be 3 characters minimum!",
    "string.max": "Name should be 20 characters maximum!",
    "any.required": "Name is required!",
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    "string.min": "Phone number should be 3 characters minimum!",
    "string.max": "Phone number should be 20 characters maximum!",
    "any.required": "Phone number is required!",
  }),
  email: Joi.string().min(3).max(20).messages({
    "string.email": "Please enter a valid email!",
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid("work", "home", "personal")
    .required()
    .messages({
      "any.required": "Type is required!",
    }),
  userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message("Used Id should be a valid mongo id");
    }
    return true;
  }),
});
