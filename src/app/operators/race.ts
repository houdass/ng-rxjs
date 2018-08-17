// RxJS v6+
import { delay } from 'rxjs/operators';
import { of, race } from 'rxjs';

export class Race {

  constructor() {}

  run() {
    // Take the first observable to emit
    const example = race(
      // Emit after 1.5s
      of('Second').pipe(delay(1500)),
      // Emit after 1s
      of('1s won!').pipe(delay(1000)),
      // Emit after 2s
      of('Fourth').pipe(delay(2500)),
      // Emit after 2.5s
      of('Third').pipe(delay(2000)),
    );
    // Output: "2"..."2"...etc
    example.subscribe(val => console.log(val));
  }
}
