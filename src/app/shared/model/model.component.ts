import { Component, OnInit, Input } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  @Input() modelID = ''

  constructor(public model: ModelService) {

   }

  ngOnInit(): void {
  }

  closedModel($event: Event){
    // $event.preventDefault();
     this.model.toggleModel(this.modelID);
  }
}
