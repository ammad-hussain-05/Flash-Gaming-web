import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[app-event-blocker]'
})


//yei wo file drag and drop code upload page ka default behavior hai drag and drop ka
export class EventBlockerDirective {
   @HostListener('drop', ['$event'])
   @HostListener('dragover',['$event'])
   public HandleEvent (event: Event){
    event.preventDefault()
   }
}
