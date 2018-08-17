// RxJS v6+
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

export class ConcatMap {

  constructor() {}

  run() {
    // Emit delay value
    const source = of(2000, 1000);
    // Map value from source into inner observable, when complete emit result and move to next
    const example = source.pipe(
      concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );
    // Output => ConcatMap: Delayed by: 2000ms, ConcatMap: Delayed by: 1000ms
    example.subscribe(val =>
      console.log(`ConcatMap: ${val}`)
    );
  }
}
