class User {
  constructor(id, name, image, description, reviews) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.reviews = reviews;
  }

  addReview() {}

  removeReview() {}
}

module.exports = User;
