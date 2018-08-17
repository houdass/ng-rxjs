// RxJS v6+
import { pairwise, take } from 'rxjs/operators';
import { interval } from 'rxjs';

export class Pairwise {

  constructor() {}

  run() {
    interval(1000)
      .pipe(
        pairwise(),
        take(5)
      )
      .subscribe(console.log);
  }
}
