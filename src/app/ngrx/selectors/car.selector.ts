import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { petsState } from '../reducer/car.reducer';
 

//selector tiene relacion con la propiedad 
export const selectPetsFeature = (state: AppState) => state.pets //padre
 
export const selectFeaturelistPets = createSelector(   //hijo
  selectPetsFeature,
  (state: petsState) => state.pets
);

export const selectLoading = createSelector(      //hijo 
  selectPetsFeature,
  (state: petsState) => state.loading
);