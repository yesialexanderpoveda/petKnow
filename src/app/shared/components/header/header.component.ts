import { Component, OnInit, AfterViewInit, EventEmitter} from '@angular/core';
import { MenuAnimation} from './animatios';
import { setNgrxMockEnvironment, Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.state';
import { Observable } from 'rxjs';
import { selectFeaturelistPets } from 'src/app/ngrx/selectors/car.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [MenuAnimation]
})
export class HeaderComponent implements OnInit, AfterViewInit { 

  // For store   
  pt_store$: Observable<any> = new Observable()
  
   // For cart 
  send = new EventEmitter() 
  
   cart!: any[]; 
   cont!: any;
  // Animation
    isOpen = false;

    toggle(){
      
      this.isOpen = !this.isOpen;
      
    }
  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
  
  this.store()

   }
  
  ngAfterViewInit(): void {
   
   
  }

    store(){
    this.pt_store$ =  this._store.select(selectFeaturelistPets)
    this.pt_store$.subscribe((st => this.cont = st.length))
    return this.cont
    
/* 
    this.pt_store$ = await this._store.select(selectFeaturelistPets)
    this.pt_store$.forEach(ele =>{  
    
      console.log(ele.length, 'header')
      if(this.cart != ele.length){
         this.cart = ele.length
         this.send.emit(ele.length)
         console.log(this.send, "send")
      }
      
  
    }) */

   }
}
