import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public isProductVisible: boolean = false;
  public price: number = 10;

  constructor() { 
    console.log('constructor');
  }
  ngOnInit() { 
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('ngonChanges');
  }
  ngDoCheck(): void {
    console.log('ngdoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  togle(){
    this.isProductVisible = !this.isProductVisible;
  }

  increasePRice(){
    this.price += 1;
    // this.price ++; 
    console.log (this.price); 
  }
}
