import { Injectable } from '@angular/core';

interface IModel{
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModelService {
//  private  visible = false;
  private models : IModel[] = []

    constructor() { }
   register(id: string){
    this.models.push({
      id,
      visible: false
    })
    console.log(this.models)
   }
  isModelOpen(id: string): boolean{
    return !!this.models.find(element => element.id === id)?.visible 
   }
  toggleModel(id: string){
    const model = this.models.find(element => element.id === id)
    // this.visible = !this.visible;
  
  if(model){
    model.visible = !model.visible;

}
}
}
