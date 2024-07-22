import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input() price: number = 0;
  public $interval!: Subscription; 

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit - price');
    this.$interval = interval(1000).subscribe((value) => {
      console.log(`PriceValue ${value}`);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('price', {changes})
    console.log('ngOnChanges - price');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy - price');
    this.$interval.unsubscribe();
  }

}
