import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';

import { RegisterValidators } from '../validators/register-validators'; 
import { EmailTaken } from '../validators/email-taken';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(
    private auth: AuthService,
    private emailTaken: EmailTaken
  ){}
  // yahan s form ki validation hai frontend p

   name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ])
  email =  new FormControl('',[
    Validators.required,
    Validators.email
  ], [this.emailTaken.validate])

  age = new FormControl('',[
    Validators.required,
    Validators.min(18),
    Validators.max(100)
  ])
  password =  new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
  ])
  confirm_password =  new FormControl('',[
    Validators.required,
  ])
  phoneNumber = new FormControl('',[
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13),
  ])


  // Yahan khatum hai ok

  showAlert = false
  alertColor = 'green'
  alertMsg = 'Please wait your account is being created'
  inSubmission = false
 


  //yei wo reactive forms k liya jo formgroup or form control la use hota
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  }, [RegisterValidators.match('password','confirm_password')])
   

  //yei reg comp html sa banaya toggle button jo information batayega account create un-create ki okay
  async register(){
   this.showAlert = true
   this.alertColor = 'green'
   this.alertMsg = 'Please wait your account has been processing'
   this.inSubmission = true

   //yei hai firebase ki authentication ka kaam
   try{
     await this.auth.createUser(this.registerForm.value)
    }

  catch(e){
    console.error(e)

    this.alertMsg = 'an unexpected error for account creation,try later'
    this.alertColor = 'red'
    this.inSubmission = false
    return 
  }
  this.alertMsg = 'Woahh ! Your account has been created successfully'
  this.alertColor = 'pink'
}
}

