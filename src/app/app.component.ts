import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calcaculator';  
  random = Math.random();
  displayValue = '';
  result: any = '';

  updateDisplay(value: string) { this.displayValue += value }
  clear() { this.displayValue = '' }
  backspace() { this.displayValue = this.displayValue.slice(0, -1) }
  calculate() { this.result = eval(this.displayValue + this.random) }
}

