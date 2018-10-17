import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ trigger("myAnimation", [
    state("small", style({
      transform: "scale(1)"
    })),
    state("large", style({
      transform: "scale(1.5)"
    })),
    // transition("small<=>large", animate("300ms ease-in", style({
    //   transform: "translateY(40px)"
    // }))),
    transition("small<=>large", animate("300ms ease-in", keyframes([
      style({opacity: 0, transform: "translateY(-75%)", offset: 0}),
      style({opacity: 1, transform: "translateY(35px)", offset: 0.5}),
      style({opacity: 1, transform: "translateY(0)", offset: 1})
    ])))
  ])]
})
export class AppComponent {

  constructor(private dataService: DataService) {

  }

  ngOnInit(){
    console.log("ngOnInit",this.dataService.cars);
    this.someProperty=this.dataService.myData();
  }

  someProperty: string;
  title = 'angular4udemyCourseProject';

  myObject = {
    location:"Rochester, NY",
    name: "Josephine"
  }
  myArray = ["blue","green","red"];
  angularLogo = "https://angular.io/assets/images/support/angular-404.svg";
  buttonStatus=true;
  buttonStatus2="green";

  myEvent(event){
    console.log("myEvent", event);
  }

  cssTitle="redTitle";
  cssTitleBool=true;
  cssTitleClasses = {
    "redTitle": true,
    "largeTitle": true
  }
  titleStyle="green";
  titleStyleBool=true;
  titleStyles = {
    'color': 'chartreuse',
    'font-size': '2em'
  }
  animationClass="animationClass";
  animationState: string="small";

  animateMe(){
    this.animationState = (this.animationState === "small" ? "large": "small");
  }
}
