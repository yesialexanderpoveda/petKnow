import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Shopping } from 'src/app/modules/shoppingpet/models/models.interface';
import { petShop, petShoped } from '../actions/car.actions';




// declaramos una interface
export interface petsState {

  loading: Boolean,
  pets: ReadonlyArray<Shopping>;
}


export const initialState: petsState = { loading: false, pets: [] }



export const petsReducer = createReducer(
  initialState,

  on(petShop, (state) => {

    return {...state, loading: true}

  }),
  
  on(petShoped, (state, {pets}) =>{
  
    return { ... state, loading: false, pets }
  })
  );

  