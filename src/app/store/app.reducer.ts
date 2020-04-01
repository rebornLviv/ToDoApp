import {ActionReducerMap} from '@ngrx/store';
import * as fromHome from  '../home/store/home.reducer';
import  * as fromAuth from  '../auth/store/auth.reducer';
// tslint:disable-next-line:no-empty-interface
export interface AppState {
  home: fromHome.State;
  auth: fromAuth.State;
  // shoppingList: fromShoppingList.State;
  // auth: fromAuth.State;
  // recipes: fromRecipes.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    home: fromHome.homeReducer,
    auth: fromAuth.authReducer,
  // shoppingList: fromShoppingList.shoppingListReducer,
  // recipes: fromRecipes.recipeReducer
};
