const Review = require("../models/Review.model")

module.exports.reviewsController = {
  getAllReviews: async (req, res) => {
    const allReviev = await Review.find()
    res.json(allReviev)
  },

  postReview: async (req, res) => {
    try {
      const review = await Review.create({
        text: req.body.text,
        data: req.body.data
      })

      return res.json(review)
    } catch (e) {
      res.json(e.message)
    }
  },

  patchReviewById: async (req, res) => {
    try {
      const review = await Review.findByIdAndUpdate(
        req.params.id,
        {
          text: req.body.text,
        },

        { new: true }
      )
      res.json(review)
    } catch (e) {
      res.status(401).json(e.message)
    }
  },

  delReviewById: async (req, res) => {
    try {
      const review = await Review.findByIdAndRemove(req.params.id)
      res.json("Ваш отзыв удален")
    } catch (e) {
      res.json("hello" + e.message)
    }
  },
}
