// RxJS v6+
import {timer, combineLatest} from 'rxjs';

export class CombineLatest {

  constructor() {
  }

  run() {

    // TimerOne emits first value at 1s, then once every 4s
    const timerOne = timer(1000, 1000);
    // TimerTwo emits first value at 2s, then once every 4s
    const timerTwo = timer(1000, 2000);
    // TimerThree emits first value at 3s, then once every 4s
    const timerThree = timer(1000, 3000);

    // When one timer emits, emit the latest values from each timer as an array
    const combined = combineLatest(timerOne, timerTwo, timerThree);

    combined.subscribe(
      ([timerValOne, timerValTwo, timerValThree]) => {
        /*
          Example:
          timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
          timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
          timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
      */
        console.log(
          `Timer One Latest: ${timerValOne},
           Timer Two Latest: ${timerValTwo},
           Timer Three Latest: ${timerValThree}`
        );
      }
    );

  }
}
