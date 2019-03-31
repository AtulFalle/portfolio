import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  active = 1;
  public map: any = { lat: 51.678418, lng: 7.809007 };


  selectPage(page: number) {
    this.active = page;
  }
}
