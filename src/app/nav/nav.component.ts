import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    public model: ModelService,
    public auth: AuthService
  ) 
{ }

   ngOnInit(): void {
  }

  modelOpen($event: Event){
    $event.preventDefault();

    this.model.toggleModel('auth');
  }
}
