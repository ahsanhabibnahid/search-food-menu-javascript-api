const mealName = document.getElementById("mealName");
const mealSubmit = document.getElementById("mealSubmit");
const menuItem = document.getElementById("menuItem");



// load data from api

const getFoodData = (foodName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals));
};

// search food
const searchFood = () => {
  const searchText = mealName.value;
  mealName.value = "";
  getFoodData(searchText);
};

// display food

const displayMeal = (meals) => {
  //   console.log(meals);
  meals.map((meal) => {
    console.log(meal);
    const { strMealThumb, strMeal } = meal;
    const p = document.createElement("div");
    p.innerHTML = `
    
    <section>

    <div>
    <img src= ${strMealThumb}>
    </div>

    <div>
    <li>${strMeal}</li>
    </div>

    </section>

    `;

   menuItem.appendChild(p)
  });
};











// document.getElementById("mealSubmit").addEventListener("click", () => {
//     const mealName = document.getElementById("mealName").value;
  
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => displayMealData(data.meals));
//   });
  
//   const displayMealData = (meals) => {
//     meals.map((meal) => {
//       console.log(meal);
  
//       const menuItem = document.getElementById("menuItem");
  
//       menuItem.innerHTML = `
//           <div class="menu-item">
//               <img src="${meal.strMealThumb}" alt="">
//               <p>${meal.strMeal}</p>
//               <li>${meal.strMeal}</li>
//           </div>  
//       `;
//       // menuItem.innerHTML = mealInfo
//     });
  
//     // meals.map(meal => {
//     //     displayMealData(meal);
//     // });
//   };
  