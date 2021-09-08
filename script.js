// search button click function
document.getElementById("mealSubmit").addEventListener("click", () => {
  const mealName = document.getElementById("mealName").value;
  if (mealName == "") {
    alert("please enter meal name...");
  } else {
    getApiData(mealName);
  }
});

// menu item click function
// document.getElementById('menuItemId').addEventListener("click", () => {

// })

//get data from api
const getApiData = (mealName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.meals === null) {
        alert("noting found...");
      } else {
        data.meals.forEach((meal) => {
          displayMealData(meal);
        });
      }
    });
};

// meal details
const mealDetails = (id) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => {
      displayMealDetails(data.meals[0]);
    });
};

// display meal details
const displayMealDetails = (details) => {
  const menuDetails = document.getElementById("menuDetails");
  menuDetails.innerHTML = `
        <div class="item-details">
            <img src='${details.strMealThumb}'>
            <h4 class='text-white mt-3'>${details.strMeal}</h4>
            <h6 class='text-white mt-3'>Ingredients</h6>
            <ul class="list-group">
                <li class='list-group-item'> ${details.strIngredient1}</li>
                <li class='list-group-item'> ${details.strIngredient2}</li>
                <li class='list-group-item'> ${details.strIngredient3}</li>
                <li class='list-group-item'> ${details.strIngredient4}</li>
                <li class='list-group-item'> ${details.strIngredient5}</li>
                <li class='list-group-item'> ${details.strIngredient6}</li>
            </ul>
        </div>
    `;
};

// display meal data
const displayMealData = (meal) => {
  const menuItem = document.getElementById("menuItem");
  const mealItem = document.createElement("div");

  mealItem.innerHTML = `
        <div class="menu-item" onclick="mealDetails(${meal.idMeal})">
            <img src="${meal.strMealThumb}" alt="">
            <p>${meal.strMeal}</p>
        </div>  
    `;
  menuItem.appendChild(mealItem);
};
