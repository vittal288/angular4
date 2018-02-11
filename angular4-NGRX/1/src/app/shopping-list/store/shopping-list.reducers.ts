import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from './../../shared/ingredient.model';
import { StartEdit, STOP_EDIT } from './shopping-list.actions';

export interface AppState {
    shoppingList: State
}
export interface State {
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: -1
}
const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 15),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};
// 1. Reducer function will trigger, whenever actions dispatched 
// initally application will not be having any state, so we have to assign it as shown above
export function shoppingListReducers(state = initialState, action: ShoppingListActions.ShoppingListActions) {

    switch (action.type) {
        // returns the immutable object
        // returns the new state always(but not updated one): Reducers will update our state but not by updating instead by assigning  
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                // spread operator, simplay expanding the old state object, all properties of that object will and returning it
                ...state,
                // override this property because new ingredients being added to it 
                ingredients: [...state.ingredients, action.payload]

            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            }
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients: oldIngredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        case ShoppingListActions.START_EDIT:
            const editedIngredient = { ...state.ingredients[action.payload]}
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            };
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        default:
            return state;
    }
}
