import { Component, OnInit, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngrx/app.state';
import { selectFeaturelistPets } from 'src/app/ngrx/selectors/car.selector';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cont!: any[]
  pt_store$: Observable<any> = new Observable(); 
  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
  }

  store(){
    this.pt_store$ =  this._store.select(selectFeaturelistPets)
    this.pt_store$.subscribe((st => this.cont = st))
    return this.cont
  
  }


}
