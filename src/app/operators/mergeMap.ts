// RxJS v6+
import {of} from 'rxjs';
import {delay, mergeMap} from 'rxjs/operators';

export class MergeMap {

  constructor() {}

  run() {
    // Emit delay value
    const source = of(2000, 1000);

    const example = source.pipe(
      mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );
    // Output => MergeMap: Delayed by: 1000ms, MergeMap: Delayed by: 2000ms
    example.subscribe(val =>
      console.log(`MergeMap: ${val}`)
    );
  }
}
