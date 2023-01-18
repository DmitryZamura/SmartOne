import {Component} from '@angular/core';
import {EventService} from "../helpers/event.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent {

  constructor(private eventService: EventService) {
  }

  onClick() {
    this.eventService.addProduct();
  }
}
