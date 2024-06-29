import e from "express";
import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      formulas: UserData,
    },
    { timestamps: true }
  )
);

const UserData = mongoose.model(
  "UserData",
  new mongoose.Schema({
    formulas: [
      {
        author: {
          type: String,
          required: true,
        },
        pictureControl: {
          type: String,
          required: true,
        },
        effectLevel: {
          type: Number,
          required: true,
        },
        quickSharp: {
          type: Number,
          required: true,
        },
        sharpening: {
          type: Number,
          required: true,
        },
        midRangeSharpening: {
          type: Number,
          required: true,
        },
        clarity: {
          type: Number,
          required: true,
        },
        contrast: {
          type: Number,
          required: true,
        },
        saturation: {
          type: Number,
          required: true,
        },
        activeDLighting: {
          type: String,
          required: true,
        },
        highISONR: {
          type: String,
          required: true,
        },
        whiteBalance: {
          type: String,
          required: true,
        },
        WBAdjust: {
          blue: {
            type: Number,
            required: true,
          },
          green: {
            type: Number,
            required: true,
          },
          magenta: {
            type: Number,
            required: true,
          },
          amber: {
            type: Number,
            required: true,
          },
        },
        images: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
        editedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  })
);
