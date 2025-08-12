import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }
    ngOnInit(): void {
  }


  credentials =  {
    email:'',
    password:'' 

  }
  showAlert = false
  alertColor = 'green'
  alertMsg = 'Please wait! your account is being processing'
  inSubmission = false

  async login(){
       this.showAlert = true
       this.alertColor = 'green'
       this.alertMsg = 'Please wait! Your account is logging in'
       this.inSubmission = true
    try{
     await this.auth.signInWithEmailAndPassword(this.credentials.email,this.credentials.password)
    }catch(e){
         this.inSubmission = false 
         this.alertMsg = 'an unexpected error for account creation, try later'
         this.alertColor = 'red' 
         console.log(e)
         return
    }
    this.alertMsg = 'Congrats! Your account is logged in'
    this.alertColor = 'blue'
  }
}
