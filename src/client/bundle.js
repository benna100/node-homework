// const options = {
//   historyMode: true // set this to true if you use the HTML5 history mode API
// };
// const router = new window.SPARouter(options);

// console.log(router);

// const t2 = router.get("/lol", function() {
//   alert(9);
//   console.log(5);
// });

// console.log(999);
// router.init();
// // router.get("/meals/{id}", mealRouter);

// const home = () => {
//   console.log(3);
// };

// const routes = {
//   "/meals": mealsRouter,
//   "/meal?meal-id={id}": mealsId
// };

// router(routes);

// function router(routes) {
//   const pathname = window.location.pathname;
//   console.log(pathname);

//   if (routes[pathname]) {
//     routes[pathname](pathname);
//   }

//   const onNavigate = pathname => {
//     window.history.pushState({}, pathname, window.location.origin + pathname);
//     routes[pathname](pathname);
//   };

//   window.onpopstate = () => {
//     routes[pathname](pathname);
//   };
// }

// alert("bundlejs");

var root = document.location.origin;
// var root = null;
var router = new Navigo(root);

router
  .on("/meals", function() {
    window.mealsRouter();
    router.updatePageLinks();
  })
  .resolve();

router
  .on("/meal/lol", function(params) {
    console.log("lol");
  })
  .resolve();

router
  .on("/meal/:id", function(params) {
    console.log(89);

    window.mealsId(params);
    router.updatePageLinks();
  })
  .resolve();

router
  .on(function() {
    console.log(90);

    window.homeRouter();
    router.updatePageLinks();
  })
  .resolve();
