function mealsRouter(req, router) {
  document.body.innerHTML = "<h1>Meals</h1>";

  fetch("/api/meals")
    .then(response => response.json())
    .then(meals => {
      console.log(meals);
    });
}

export default mealsRouter;
