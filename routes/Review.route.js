const { Router } = require("express");
const { reviewsController } = require("../controllers/Review.controller");

const router = Router();

router.post("/review", reviewsController.postReview);
router.get("/reviews", reviewsController.getAllReviews);
router.patch("/review/:id", reviewsController.patchReviewById);
router.delete("/review/:id", reviewsController.delReviewById);

module.exports = router;
