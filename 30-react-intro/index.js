let state = {
  restaurants: [
    {
      name: "wasabi"
    },
    {
      name: "itsu"
    },
    {
      name: "sushi surprise"
    }
  ]
};

const appEl = document.getElementById("root");

const RestaurantItem = restaurant => {
  return Rax.createElement("div", {
    innerText: restaurant.name,
    children: [
      Rax.createElement("button", {
        innerText: " dop a thing",
        onClick: e => {
          console.log("clicked", e);
        }
      })
    ]
  });
};

const RestaurantList = restaurants => {
  restaurants.forEach(restaurant => {
    const restEl = appEl.append(RestaurantItem(restaurant));
  });
};

const render = () => {
  appEl.innerHTML = "";
  RestaurantList(state.restaurants);
};

const setState = newState => {
  state = newState;
  render();
};
