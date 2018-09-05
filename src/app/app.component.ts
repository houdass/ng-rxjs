import { Component, OnInit } from '@angular/core';
import { Race } from './operators/race';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // const numbers = [1, 2, 3];
    // const source = from(numbers);
    /* const source = Observable.create((observer) => {
      /!* for (const n of numbers) {

        if (n === 2) {
          observer.error('Something went wrong!');
        }
        observer.next(n);
      }

      observer.complete(); *!/

      // =====
      let index = 0;
      const produceValue = () => {
        observer.next(numbers[index++]);

        if (index < numbers.length) {
          setTimeout(produceValue, 2000);
        } else {
          observer.complete();
        }
      }
      produceValue();
    })
      .pipe(
        map((value: number) => value * 2),
        filter((value: number) => value >= 4)
      ); */

    /* source
      .subscribe(
        (value) => console.log(`Value: ${value}`),
        (error) => console.log(`Error: ${error}`),
        () => console.log('Complete')
      ); */

    // Operators

    // SwitchMap
    /* const switchMap = new SwitchMap();
    switchMap.run(); */

    // MergeMap
    /* const mergeMap = new MergeMap();
    mergeMap.run(); */

    // ConcatMap
    /* const concatMap = new ConcatMap();
    concatMap.run(); */

    // ForkJoin
    /* const forkJoin = new ForkJoin();
    forkJoin.run(); */

    // CombineLatest
    /* const combineLatest = new CombineLatest();
    combineLatest.run(); */

    // Pairewise
    /* const pairwise = new Pairwise();
    pairwise.run(); */

    // Race
    const race = new Race();
    race.run();
  }
}
