window.mealsRouter = function mealsRouter(req, router) {
  console.log(req);

  document.body.innerHTML = `
  <h1>Meals</h1>
  <section class="meals"></section>
  <section class="create-meal">
    <form>
      <label>Meal name</label>
      <input>
      <button>Create new meal</button>
    </form>
  </section>`;

  fetch("/api/meals")
    .then(response => response.json())
    .then(meals => {
      const mealsElement = document.querySelector("section.meals");
      let renderedMeals = "<ul>";
      meals.forEach(meal => {
        renderedMeals += `<li>${meal.title}</li>`;
      });
      renderedMeals += "</ul>";

      mealsElement.innerHTML = renderedMeals;

      const formElement = document.querySelector("section.create-meal form");
      const inputelement = document.querySelector(
        "section.create-meal form input"
      );
      formElement.addEventListener("submit", () => {
        fetch("/api/meals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({ title: inputelement.value })
        });

        event.preventDefault();
      });
    });
};
