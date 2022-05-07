// datos que cualquier componente quiera consumirlos

import { ActionReducerMap } from "@ngrx/store";

import { petsReducer, petsState } from "./reducer/car.reducer";

// como mi base de datos y estas son mis tablas
export interface AppState {

  pets: petsState; 
}


export const APP_REDUCERS:ActionReducerMap<AppState>={

  pets: petsReducer
}