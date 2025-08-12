import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() color = 'pink'

 get bgColor(){
    return `bg-${this.color}-500`
  }
  constructor() { }

  ngOnInit(): void {
  }

}
