class Meals {
  constructor(meals) {
    this.meals = meals;
  }

  getAllMeals() {
    return this.meals;
  }

  getMeal(id) {
    return this.meals.find(meal => meal.id === id);
  }

  addMeal(meal) {
    this.meals.push(meal);
  }

  fromLocation(location) {
    return this.meals.filter();
  }

  hasTag(tag) {
    return this.meals;
  }

  sortByAverageStars() {
    // tricky
  }

  getRenderedHtml() {
    let renderedHtml = "<ul>";

    this.meals.forEach(meal => {
      renderedHtml += `<li>${meal.getRenderedHtml()}</li>`;
    });
    renderedHtml += "</ul>";

    return renderedHtml;
  }
}

module.exports = Meals;
