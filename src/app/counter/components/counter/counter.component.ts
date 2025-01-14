import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter {{ counter }}</h3>

  <button (click)="increaseBy()">+1</button>
  <button (click)="decreaseBy()">-1</button>
  <button (click)="resetBy()">RESET</button>




  `
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(): void {
   this.counter +=1;
 }
 decreaseBy(): void{
   this.counter -=1;
 }

 resetBy(): void{
   this.counter =10;
 }
}
