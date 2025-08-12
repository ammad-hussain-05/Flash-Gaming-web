import { ValidationErrors, AbstractControl, ValidatorFn } from "@angular/forms";

export class RegisterValidators {
    static match(controlName: string, matchControlName: string): ValidatorFn{
        return(group: AbstractControl): ValidationErrors | null =>{
             const control = group.get(controlName)
        const matchControl = group.get(matchControlName)

        if(!control || !matchControl){
            console.error('Form controls cannot be found in Form group')
            return { controlNotFound: false}

        }

        const error = control.value === matchControl.value ?
        null: { noMatch: true }

        matchControl.setErrors(error)

        return error
    }
    }
        }
