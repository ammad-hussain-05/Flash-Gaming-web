import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'

//bhai yei wo jo interface banaya na models folder k ander ts file mwo service m bhi import krna error solve k liya
import IUser from '../models/user.model';
import { map, delay, filter ,mergeMap, switchMap} from 'rxjs/operators';
import { Observable , of} from 'rxjs';

import {Router,  ActivatedRoute, NavigationEnd } from '@angular/router';


// yei service sub firebase authentication ka kaam krengi okay

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private usersCollection: AngularFirestoreCollection<IUser>
  public isAuthenticated$: Observable<boolean> 
  public isAuthenticatedWithDelay$: Observable<boolean>
  public redirect = false

  constructor(private auth: AngularFireAuth,
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.usersCollection = db.collection('users')
    this.isAuthenticated$ = auth.user.pipe(
      map(user => !!user)
    )
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
      delay(1000)
    )

     //yei filtering router events
     //yei samjhana bas
     this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => this.route),
      switchMap((route) => route?.data ?? of({ authOnly: false}))
     ).subscribe((data)=>{
      this.redirect = data['authOnly'] ?? false;
     })


  }

   
  public async createUser(userData: IUser){

    if(!userData.password){
      throw new Error("password must be provided")
    }

    const userCred = await this.auth.createUserWithEmailAndPassword(userData.email, userData.password)

    if(!userCred.user){
      throw new Error("user cannot found")
    }

    await this.usersCollection.doc(userCred.user.uid).set({

      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber
    })

    await userCred.user.updateProfile({
      displayName: userData.name 
    })
  }

  
  public async logout($event?: Event){
    if($event){
    $event.preventDefault()
    }
    await this.auth.signOut()
     if(this.redirect){
        await this.router.navigateByUrl('/')
     }
  }
}
