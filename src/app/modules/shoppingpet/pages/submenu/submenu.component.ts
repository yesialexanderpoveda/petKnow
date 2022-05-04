import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl} from '@angular/forms';
import { CatsService } from '../../services/cats.service';
import { Checkbox } from '../../models/models.interface';
@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  form!: FormGroup; 
  
  constructor(
    private catsService: CatsService,
    private fb: FormBuilder
    ) {}
  
  checkboxData: Checkbox[] = this.catsService.filters;

  onChange(name: any, isChecked: boolean){
   
    const checkboxes = (this.form.controls.name as FormArray);
    if(isChecked){
      console.log(isChecked, name, checkboxes);

      checkboxes.push(new FormControl(name))
    }
    else{
     const index = checkboxes.controls.findIndex(x => x.value === name);
     checkboxes.removeAt(index)
    }
  }


  ngOnInit(): void {

    this.form = this.fb.group({
       
      name: this.fb.array([])

    });
  }
  
submit(){
  console.log(this.form.value.name, this.form.value.id)
}



  
}
