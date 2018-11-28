
Pseudo Code: 

//Navbar organization

//Logged Out
//Home, Recipes, username ___, password___, Login, Register

//Logged In
//Home, Recipes, List, username, logout

/****/

//Component List:

//MainContainer - Front Page
	//Buttons for signup and login on page.
	https://wireframe.cc/ogysi2
//FrontPageRecipes - Recipes front page random 3-4. No ingredients.
//Login
https://wireframe.cc/iPTnnn
//Register

//GroceryListContainer - Main Page (?)
https://wireframe.cc/F1nsLR
//Recipes - used in GroceryList and linked in Nav as its "own" thing
	//Contains Search
	//Contains Cards of Recipes - ingredients included, button for add. 
//GroceryList - includes list of items, button for adding ingredient, allows title edit where default title is date, complete button which generates PDF OR sends it as an email. Allows item deletion and editing. 
//UserRecipe - simple list of Recipe name and button to remove from list. (concern that if deleting recipe deletes item from grocery list, that recipes with the same ingredient will suffer. Have to either consider validation or highlight ingredients that might need removal with alert window saying so)

//Profile
https://wireframe.cc/DOu79z
//PastGrocery - populate static grocery list OR link pdf download
//PastRecipes - all grocery list recipes, duplication check


/********/

//Routes needed

//API fetches needed
//- Recipes - 
//- Recipe Search - Autocomplete Recipe Search - on GET
//- Recipe Search - Get Random Recipes - on GET
	//ingredientList
	//measure
	//servings

Helpful URLs for project:
REACT pdfs - https://medium.com/@shivekkhurana/how-to-create-pdfs-from-react-components-client-side-solution-7f506d9dfa6d
ORM for in-between NodeJs and Postgresql:
http://docs.sequelizejs.com/


//- Recipe Search - Get Random Recipes - on GET
EXAMPLE: 
{
    "recipes": [
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 11,
            "gaps": "no",
            "lowFodmap": false,
            "ketogenic": false,
            "whole30": false,
            "sourceUrl": "http://www.the-girl-who-ate-everything.com/2016/11/scalloped-potatoes.html",
            "spoonacularSourceUrl": "https://spoonacular.com/scalloped-potatoes-830570",
            "aggregateLikes": 107,
            "spoonacularScore": 64,
            "healthScore": 10,
            "creditText": "The girl Who Ate Everything",
            "sourceName": "The girl Who Ate Everything",
            "pricePerServing": 74.07,
            "extendedIngredients": [
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consitency": "solid",
                    "name": "butter",
                    "original": "3 tablespoons butter",
                    "originalString": "3 tablespoons butter",
                    "originalName": null,
                    "amount": 3,
                    "unit": "tablespoons",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 3,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 3,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 2031,
                    "aisle": "Spices and Seasonings",
                    "image": "chili-powder.jpg",
                    "consitency": "solid",
                    "name": "cayenne pepper",
                    "original": "1 dash cayenne pepper",
                    "originalString": "1 dash cayenne pepper",
                    "originalName": null,
                    "amount": 1,
                    "unit": "dash",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "dash",
                            "unitLong": "dash"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "dash",
                            "unitLong": "dash"
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consitency": "solid",
                    "name": "flour",
                    "original": "3 tablespoons flour",
                    "originalString": "3 tablespoons flour",
                    "originalName": null,
                    "amount": 3,
                    "unit": "tablespoons",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 3,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 3,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 1077,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.jpg",
                    "consitency": "liquid",
                    "name": "milk",
                    "original": "1½ cups milk",
                    "originalString": "1½ cups milk",
                    "originalName": null,
                    "amount": 1.5,
                    "unit": "cups",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 354.882,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2028,
                    "aisle": "Spices and Seasonings",
                    "image": "paprika.jpg",
                    "consitency": "solid",
                    "name": "paprika",
                    "original": "paprika",
                    "originalString": "paprika",
                    "originalName": null,
                    "amount": 6,
                    "unit": "servings",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 6,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 6,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 11362,
                    "aisle": "Produce",
                    "image": "potatoes-yukon-gold.png",
                    "consitency": "solid",
                    "name": "potatoes",
                    "original": "4 cups thinly sliced potatoes",
                    "originalString": "4 cups thinly sliced potatoes",
                    "originalName": null,
                    "amount": 4,
                    "unit": "cups",
                    "meta": [
                        "thinly sliced"
                    ],
                    "metaInformation": [
                        "thinly sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 946.352,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consitency": "solid",
                    "name": "salt",
                    "original": "1 teaspoon salt",
                    "originalString": "1 teaspoon salt",
                    "originalName": null,
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1031009,
                    "aisle": "Cheese",
                    "image": "cheddar-cheese.jpg",
                    "consitency": "solid",
                    "name": "sharp cheddar cheese",
                    "original": "1½ cups grated sharp cheddar cheese, divided",
                    "originalString": "1½ cups grated sharp cheddar cheese, divided",
                    "originalName": null,
                    "amount": 1.5,
                    "unit": "cups",
                    "meta": [
                        "divided",
                        "grated"
                    ],
                    "metaInformation": [
                        "divided",
                        "grated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 354.882,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                }
            ],
            "id": 830570,
            "title": "Scalloped Potatoes",
            "readyInMinutes": 45,
            "servings": 6,
            "image": "https://spoonacular.com/recipeImages/830570-556x370.jpg",
            "imageType": "jpg",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "lacto ovo vegetarian"
            ],
            "occasions": [
                "easter"
            ],
            "winePairing": {
                "pairedWines": [],
                "pairingText": "",
                "productMatches": []
            },
            "instructions": "Preheat oven to 350 degrees.In a small sauce pan, melt butter and stir in flour.whisk in the milk and season with salt and cayenne.Cook sauce on low until smooth and boiling, stirring occasionally with a whisk.Reduce heat and stir in 1 cup of the cheddar cheese.Place a half of the sliced potatoes in a lightly greased 1.5 quart casserole dish (8x8 or 9x9 will work)Pour half of cheese sauce over potatoes.Repeat with second layer of potatoes and cheese sauce.Sprinkle the remaining  cup of cheddar cheese on top.Top with some paprika for color.Bake uncovered for about 1 hour at 350F.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat oven to 350 degrees.In a small sauce pan, melt butter and stir in flour.whisk in the milk and season with salt and cayenne.Cook sauce on low until smooth and boiling, stirring occasionally with a whisk.Reduce heat and stir in 1 cup of the cheddar cheese.",
                            "ingredients": [
                                {
                                    "id": 1009,
                                    "name": "cheddar cheese",
                                    "image": "cheddar-cheese.jpg"
                                },
                                {
                                    "id": 2031,
                                    "name": "ground cayenne pepper",
                                    "image": "chili-powder.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 1077,
                                    "name": "milk",
                                    "image": "milk.jpg"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                },
                                {
                                    "id": 404661,
                                    "name": "whisk",
                                    "image": "whisk.png"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Place a half of the sliced potatoes in a lightly greased 1.5 quart casserole dish (8x8 or 9x9 will work)",
                            "ingredients": [
                                {
                                    "id": 11362,
                                    "name": "potato",
                                    "image": "potatoes-yukon-gold.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404635,
                                    "name": "casserole dish",
                                    "image": "casserole-dish.png"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Pour half of cheese sauce over potatoes.Repeat with second layer of potatoes and cheese sauce.Sprinkle the remaining  cup of cheddar cheese on top.Top with some paprika for color.",
                            "ingredients": [
                                {
                                    "id": 1009,
                                    "name": "cheddar cheese",
                                    "image": "cheddar-cheese.jpg"
                                },
                                {
                                    "id": 11362,
                                    "name": "potato",
                                    "image": "potatoes-yukon-gold.png"
                                },
                                {
                                    "id": 2028,
                                    "name": "paprika",
                                    "image": "paprika.jpg"
                                }
                            ],