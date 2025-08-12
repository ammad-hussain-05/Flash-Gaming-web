import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';

//routing handle krna logout k baad b kesi b page p asani s jasakta url m / k baad likh k uss issue k liya
//yei guard package import krna zaroori hai

// AngularFireAuthGuard = yei blank page p legayega kuch b likho about,upload,manage url mager likho
//redirectUnauthorizedTo = yei home k page p legayega kuch b search kre ager un-authenticate user
import { AngularFireAuthGuard ,redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/')// yei home p lejane ka logic h

const routes: Routes = [
  {
  path: 'manage',
  component: ManageComponent,

  data: {
  authOnly: true,
  authGuardPipe: redirectUnauthorizedToHome
        },
  canActivate: [AngularFireAuthGuard]
   },

   {
        path: 'upload',
        component: UploadComponent,
    data:{
      authOnly: true,
      authGuardPipe: redirectUnauthorizedToHome
    },
    canActivate: [AngularFireAuthGuard]
   },

   {
    path: 'manage-clips',
    redirectTo: 'manage'
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
