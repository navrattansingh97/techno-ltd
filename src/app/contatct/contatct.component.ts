import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-contatct',
  templateUrl: './contatct.component.html',
  styleUrls: ['./contatct.component.css']
})
export class ContatctComponent implements OnInit {
  messageForm: FormGroup;
  submitted=false; //flag for succesful form submission
  success = false;  //flag for succesful validation

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({

      name:['',Validators.required],
      message:['',Validators.required]
    });
  }
  onSubmit(){
    this.submitted = true;
    if(this.messageForm.invalid){
      return;

    }
    this.success = true;
  }

}
