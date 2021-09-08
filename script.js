document.getElementById("mealSubmit").addEventListener("click", () => {
  const mealName = document.getElementById("mealName").value;

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data.meals[0]);
    //   for (let i = 0; i < data.meals.length; i++) {
    //     const meal = data.meals[i];
    //     displayMealData(meal);
        
    //   }

    data.meals.forEach(meal => {
        displayMealData(meal);
    });
    });
});

const displayMealData = (meal) => {
  const menuItem = document.getElementById("menuItem");
  const mealItem = document.createElement('div')

  mealItem.innerHTML = `
        <div class="menu-item">
            <img src="${meal.strMealThumb}" alt="">
            <p>${meal.strMeal}</p>
        </div>  
    `;
    menuItem.appendChild(mealItem) 
};
