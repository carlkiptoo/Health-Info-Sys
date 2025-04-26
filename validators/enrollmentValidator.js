import { body } from "express-validator";

export const enrollmentValidator = [
  body("clientId")
    .notEmpty()
    .withMessage("Client id is required")
    .isMongoId()
    .withMessage("Invalid client id"),
  body("programId").isArray({ min: 1 }).withMessage("Program id is required"),
  body("programId.*").isMongoId().withMessage("Must be a valid mongo objectid"),
];
