import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  public email: string;
  public pass: string;
  constructor() {

  }

 
  ngOnInit(): void {
    
  }

  
  
  entrar() {
    console.log(this.email)
    console.log(this.pass)
  }
}


