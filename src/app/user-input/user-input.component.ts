import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal ('0');
  enteredAnnualinvesment = signal('0');
  enteredExpctedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredDuration(),
      expectedReturn: +this.enteredExpctedReturn(),
      duration: +this.enteredAnnualinvesment(),
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualinvesment.set('0');
    this.enteredExpctedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
