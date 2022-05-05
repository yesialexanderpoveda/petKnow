import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Checkbox } from '../../models/models.interface';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }


  @Output() petChield = new EventEmitter();

  @Input() petOfPets!: any[];

  checkboxData!: Checkbox[];

  onChange(name: any, isChecked: boolean) {

    const checkboxes = (this.form.controls.name as FormArray);

    if (isChecked) {
    
      // emit event to components 
      this.petChield.emit(name)
      checkboxes.push(new FormControl(name))

    }
    else {

      const index = checkboxes.controls.findIndex(x => x.value === name);
      
      // Change default data  
      if (index == 0) {
    
        this.petChield.emit(index);
    
      }

      checkboxes.removeAt(index)
    
    }
  }

  ngOnInit(): void {

    
    this.checkboxData = this.petOfPets

    this.form = this.fb.group({

      name: this.fb.array([])

    });
  }

  submit() {
    
    console.log(this.form.value.name, this.form.value.id)
  
  }

}
