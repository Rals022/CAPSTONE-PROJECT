const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  question1: {
    type: Number,
    required: true
  },
  question2: {
    type: Number,
    required: true
  },
  question3: {
    type: Number,
    required: true
  },
  question4: {
    type: Number,
    required: true
  },
  question5: {
    type: Number,
    required: true
  },
  question6: {
    type: Number,
    required: true
  },
  comment1: {
    type: String
  },
  comment2: {
    type: String
  },
  comment3: {
    type: String
  },
  comment4: {
    type: String
  },
  comment5: {
    type: String
  }
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
