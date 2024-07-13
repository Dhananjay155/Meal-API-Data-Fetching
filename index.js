async function getCategoriesData() {
    const category = 'Seafood'; 
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error('Something went wrong:', error.message);
        displayError();
    }
}

async function getIngredientData() {
    const ingredient = 'chicken_breast'; 
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error('Something went wrong:', error.message);
        displayError();
    }
}

function displayMeals(meals) {
    const mealList = document.getElementById('meals');
    mealList.innerHTML = ''; 

    meals.forEach(meal => {
        const li = document.createElement('li');
        li.textContent = meal.strMeal;
        mealList.appendChild(li);
    });

    const mealListContainer = document.getElementById('meal-list');
    mealListContainer.style.display = 'block'; 
}

function displayError() {
    const mealListContainer = document.getElementById('meal-list');
    mealListContainer.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    mealListContainer.style.display = 'block';
}

document.getElementById('get-category-data').addEventListener('click', getCategoriesData);
document.getElementById('get-ingredient-data').addEventListener('click', getIngredientData);
