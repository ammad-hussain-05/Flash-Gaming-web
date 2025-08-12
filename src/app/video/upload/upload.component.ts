import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { v4 as uuid} from 'uuid' 

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'] 
})
export class UploadComponent implements OnInit {

  formHide = false    //upload krne k baad form ka gayab hojana 
  isDragover = false   // yei banay maine drag and drop handle k liya
  file: File | null = null  //yei banaya maine file upload uski information check krne k liya

  title = new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ])

  uploadForm = new FormGroup({
    title: this.title
  })

  constructor(private firestorage: AngularFireStorage) { }

  ngOnInit(): void {
  }


  //yei wo drag image krte wqt jo hover horaha color uska code yei bind hoa h
  //upload component html m multiple venets s or drop m define hoa hai
  storeFile($event: Event){
    this.isDragover = false

    //ab yei jo code hai na yei jab b koi dragevent yani k file ya image ko drag krega upload m to console m
    //uski information ayegi file name date uski modified, type sub kuch
    this.file = ($event as DragEvent).dataTransfer?.files.item(0) ?? null
    if(!this.file || this.file.type !=='video/mp4'){
     return 
    }


    this.title.setValue(
      this.file.name.replace(/\.[^/.]+$/,'')
      
    )
     this.formHide = true
  }



  uploadFile(){
    const clipFileName = uuid()
    const clipPath = `clips/${clipFileName}.mp4`
    this.firestorage.upload(clipPath, this.file)  
  }

}

