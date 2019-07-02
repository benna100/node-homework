class Meal {
  constructor(
    id,
    numberOfGuests,
    guests,
    title,
    description,
    adress,
    time,
    hosts,
    tags,
    price,
    reviews,
    createdAt
  ) {
    this.id = id;
    this.numberOfGuests = numberOfGuests;
    this.title = title;
    this.description = description;
    this.adress = adress;
    this.time = time;
    this.hosts = hosts;
    this.tags = tags;
    this.price = price;
    this.reviews = reviews;
    this.createdAt = createdAt;
    this.guests = guests;
  }

  addGuest(guest) {
    // should check if the guest is already there
  }

  removeGuest() {
    // should check if the guest actually is a guest
  }

  addReview(review) {
    this.reviews.push(review);
  }

  removeReview() {}

  getRenderedHtml() {
    // Up to the user
    return `
      <h3>${this.title}</h3>
      <span>${this.description}</span>
    `;
  }
}

module.exports = Meal;
