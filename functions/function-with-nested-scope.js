/* Javascript allows to have function with in the function, this allow to scope the bindings/parameters */

const sandwich = function(cookType) {
    const ingredients = function(cheeseKind, tomatoesQuantity, lettuceQuantity, onionsType){
    /* The above parameter bindings cheeseKind, tomatoes, lettuce, onions are only available with in ingredients function but the cookType is available at global level
    this allows cookType to be accessible even with in ingredients function
    */
        console.log(`The sandwich is made of ${cheeseKind}, with ${tomatoesQuantity} tomatoes ${lettuceQuantity} lettuce and ${onionsType} onions on ${cookType} for two mins`)
    }
    return ingredients;
}

const grilledSandwich = sandwich('grilled');
grilledSandwich("Cheddar", 2, "some", "red");

/*
output: The sandwich is made of Cheddar, with 2 tomatoes, some lettuce, and red onions on grilled for two minutes.
At the grilledSandwich binding we are calling the outer function with cookType as 'grilled' which is store in memroy for future access and it return ingredients function,
on the next step we are passing the ingredients into the inner function which logs the output to the console along with the global variable 'cookType =  'grilled''
*/