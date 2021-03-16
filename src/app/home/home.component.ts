import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from 'rxjs/operators';
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {

    //Make a call to DB
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 6) {
          observer.error(new Error("Count is greater 3!"));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe( //Notification
      (data) => {
        // console.log('Round:  '+ data);
        console.log(data);
      }
      ,
      (error) => {
        console.log(error);
        alert(error.message);
      }
      ,
      () => {
        console.log("Completed");
      }
    );


  }


}
