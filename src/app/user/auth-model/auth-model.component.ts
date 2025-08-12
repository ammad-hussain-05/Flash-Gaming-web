import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';


@Component({
  selector: 'app-auth-model',
  templateUrl: './auth-model.component.html',
  styleUrls: ['./auth-model.component.css']
})
export class AuthModelComponent implements OnInit {

  constructor(public model: ModelService) { }

  ngOnInit(): void {
    //2 id;s banaye hai maine or inhe fetch service ts m kraha mai
    this.model.register('auth')
  }

}
