import mongoose from "mongoose";

// User Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    socialLinks: {
      type: [String],
      default: [],
    },
    contestsParticipated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contest",
      },
    ],
    problemSolved: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    contestHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ContestResult",
      },
    ], // New: Track contest performance
  },
  { timestamps: true }
);

// Question Schema
const QuestionSchema = new mongoose.Schema(
  {
    quesNo: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    testcases: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Testcase",
      },
    ],
    attemptedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    solvedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    tags: {
      type: [String],
      default: [],
    },
    constraints: {
      type: [String],
      default: [],
    },
    points: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Testcase Schema
const TestcaseSchema = new mongoose.Schema(
  {
    input: {
      type: String,
      required: true,
    },
    output: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
    },
    forQuestion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
  },
  { timestamps: true }
);

// Contest Schema
const ContestSchema = new mongoose.Schema(
  {
    contestNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    contestDate: {
      type: Date,
      required: true,
    },
    attemptedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

// New: ContestResult Schema
const ContestResultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    contest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contest",
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    solvedQuestions: [
      {
        question: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question",
        },
        isCorrect: {
          type: Boolean,
          required: true,
        },
        timeTaken: {
          type: Number, // Time in seconds for each question
        },
      },
    ],
    rank: {
      type: Number, // Will be updated after contest ends
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
export const Question = mongoose.model("Question", QuestionSchema);
export const Testcase = mongoose.model("Testcase", TestcaseSchema);
export const Contest = mongoose.model("Contest", ContestSchema);
export const ContestResult = mongoose.model(
  "ContestResult",
  ContestResultSchema
);