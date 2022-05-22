import { Component, OnInit, ViewChild, Renderer2, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, AfterViewInit {

  @ViewChild('sum', {static: false}) sum!: ElementRef; 
  @ViewChild('subt') subt!: ElementRef;
  constructor(private render: Renderer2 ) { }

  @Output() sendCont = new EventEmitter() 
  
  cont!: number;

  
  ngOnInit(): void {
  
  
  }

  ngAfterViewInit(): void {
    this.listenCount()
  }


  listenCount(){
   
   const  btnSum = this.sum.nativeElement
   const  btnSubt = this.subt.nativeElement

   this.render.listen(btnSum, 'click', (e:Event)=>{
    if(this.cont == null){
      this.cont = 3;
   
    }
    else if(this.cont == 21){
       this.cont = 0;   
    }
    else if(this.cont < 22 ){
      this.cont = this.cont + 3;
    }

    /* console.log(this.cont) */
    this.sendCont.emit(this.cont)

   })

   this.render.listen(btnSubt, 'click', (e:Event)=>{

  
    if(this.cont > 2 ){
      this.cont = this.cont - 3;
    
    }
    /* console.log(this.cont) */
    this.sendCont.emit(this.cont)
   })

  }

}
