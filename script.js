document.getElementById("mealSubmit").addEventListener("click", () => {
  const mealName = document.getElementById("mealName").value;

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
    
    data.meals.forEach(meal => {
        displayMealData(meal);
    });
    });
});

const displayMealData = (meal) => {
  const menuItem = document.getElementById("menuItem");
  const mealInfo = `
        <div class="menu-item">
            <img src="${meal.strMealThumb}" alt="">
            <p>${meal.strMeal}</p>
        </div>  
    `;
    menuItem.innerHTML = mealInfo
};
