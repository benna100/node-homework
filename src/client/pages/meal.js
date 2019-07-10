function mealsId(req, router) {
  console.log(req.param.id);
  document.body.innerHTML = `
  <h1>Meals</h1>
  <section class="meal"></section>
  <section class="create-reservation">
    <form>
      <label>Email</label>
      <input>
      <button>Create new reservation</button>
    </form>
  </section>`;

  fetch(`/api/meals/${req.param.id}`)
    .then(response => response.json())
    .then(meal => {
      console.log(meal);
      const mealElement = document.querySelector("section.meal");

      let reservationsElement = `<section class="reservations">Reservations:`;

      meal.reservations.forEach(reservation => {
        reservationsElement += `
        <li>${reservation.email}</li>
        `;
      });
      reservationsElement += `</section>`;

      const renderedMeal = `
      <div>${meal.title}</div>
      <div>Max number of guests: ${meal.number_of_guests}</div>
      ${reservationsElement}
      `;

      mealElement.innerHTML = renderedMeal;

      const formElement = document.querySelector(
        "section.create-reservation form"
      );
      const inputelement = document.querySelector(
        "section.create-reservation form input"
      );
      formElement.addEventListener("submit", () => {
        fetch("/api/reservations/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            email: inputelement.value,
            mealId: req.param.id
          })
        });

        event.preventDefault();
      });
    });
}

export default mealsId;
