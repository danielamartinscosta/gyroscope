import { Component } from '@angular/core';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  eixoX: number;
  eixoY: number;
  eixoZ: number;
  
  constructor(
    private gyroscope: Gyroscope
  ) {}

    //método que liga o giroscopio
    ligarGiroscopio(){
      const options: GyroscopeOptions = {
        frequency: 500
     };

     this.gyroscope.watch(options)
     .subscribe((orientation: GyroscopeOrientation) => {
      console.log(orientation.x, orientation.y, orientation.z, orientation.
        timestamp);
        this.eixoX = orientation.x;
        this.eixoY = orientation.y;
        this.eixoZ = orientation.z;
   });
    }

}
