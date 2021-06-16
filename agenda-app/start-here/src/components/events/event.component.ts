import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
})
export class EventComponent {
  @Input() value: any;

  @Output() deleteEventInstanceEvent: EventEmitter<any> =
    new EventEmitter<any>();

  deleteEventItem() {
    this.deleteEventInstanceEvent.emit(this.value);
    console.log("Delete button clicked!");
  }
}
