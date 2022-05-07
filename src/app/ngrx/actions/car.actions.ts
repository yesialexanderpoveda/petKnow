import { createAction, props } from '@ngrx/store';
import { Shopping } from 'src/app/modules/shoppingpet/models/models.interface';

export const petShop = createAction(
  '[Pet List] Pet shopping', 
);

export const petShoped = createAction(

  '[Pet List]  Pet shopped', 
   props<{pets: Shopping[]}>()

   ) 


