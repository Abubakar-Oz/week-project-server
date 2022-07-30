const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
  text: String,
  movies: {
    ref: "Movie",
    type: mongoose.SchemaTypes.ObjectId,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})
const Review = mongoose.model("Review", reviewSchema)
module.exports = Review
