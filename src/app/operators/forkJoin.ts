// RxJS v6+
import {interval, of, forkJoin} from 'rxjs';
import {delay, take} from 'rxjs/operators';

export class ForkJoin {

  constructor() {}

  run() {
    const myPromise = val =>
      new Promise(resolve =>
        setTimeout(() => resolve(`Promise Resolved: ${val}`), 2000)
      );

    // When all observables complete, give the last
    // emitted value from each as an array
    const example = forkJoin(
      // Emit 'Hello' immediately
      of('Hello'),
      // Emit 'World' after 1 second
      of('World').pipe(delay(1000)),
      // Emit 0 after 1 second
      interval(1000).pipe(take(1)),
      // Emit 0...1 in 1 second interval
      interval(1000).pipe(take(2)),
      // Promise that resolves to 'Promise Resolved' after 5 seconds
      myPromise('RESULT')
    );
    // Output: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
    example.subscribe(val => console.log(val));
  }
}
