import { ModalDirective } from "angular-bootstrap-md";
import { Component, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild(ModalDirective) modal: ModalDirective;
  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();

  events: Array<any> = [
    {
      date: "06-16-2021",
      time: "08:00",
      subject: "Breakfast with Simon",
      location: "Lounge Caffe",
      description: "Discuss Q3 targets",
    },
    {
      date: "06-16-2021",
      time: "08:30",
      subject: "Daily Standup Meeting (recurring)",
      location: "Warsaw Spire Office",
    },
    { date: "06-16-2021", time: "09:00", subject: "Call with HRs" },
    {
      date: "06-16-2021",
      time: "12:00",
      subject: "Lunch with Timmothy",
      location: "Canteen",
      description:
        "Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a",
    },
  ];

  addEvent() {
    const newEvent: any = {
      time: this.timeInput.value,
      subject: this.subjectInput.value,
      location: this.locationInput.value,
      description: this.descriptionInput.value,
    };

    this.events.push(newEvent);

    this.timeInput.setValue("");
    this.subjectInput.setValue("");
    this.locationInput.setValue("");
    this.descriptionInput.setValue("");

    this.modal.hide();
  }

  deleteEvent(event: any) {
    const itemIndex = this.events.findIndex((el) => el === event);
    this.events.splice(itemIndex, 1);
  }
}
