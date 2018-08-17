// RxJS v6+
import {timer, interval} from 'rxjs';
import {switchMap} from 'rxjs/operators';

export class SwitchMap {

  constructor() {}

  run() {
    // Emit immediately, then every 5s
    const source = timer(0, 5000);

    // Switch to new inner observable when source emits, emit items that are emitted
    const example = source.pipe(switchMap(() => interval(500)));

    // Output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
    example.subscribe(val => console.log(val));
  }
}
