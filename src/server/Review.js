class Review {
  constructor(id, numberOfStars, content, createdAt, createdBy) {
    this.id = id;
    this.numberOfStars = numberOfStars;
    this.content = content;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
  }

  addReview() {}

  removeReview() {}
}

module.exports = Review;
