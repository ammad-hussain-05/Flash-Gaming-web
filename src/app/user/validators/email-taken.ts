import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class EmailTaken implements AsyncValidator {
    constructor(
        private auth: AngularFireAuth
    ){}
    // validate = (control: AbstractControl): Promise<ValidationErrors | null> => {
    //   return this.auth.fetchSignInMethodsForEmail(control.value).then(
    //         response => response.length ? { emailTaken: true } : null
    //     )
    //       .catch(error => {
    //   console.warn("Firebase quota exceeded or error:", error);
    //   return null; 
    // });
    // }

    validate = (control: AbstractControl): Promise<ValidationErrors | null> => {
  return new Promise(resolve => {
    const takenEmails = ['admin@gmail.com', 'test@test.com'];
    resolve(takenEmails.includes(control.value) ? { emailTaken: true } : null);
  });
}

}
