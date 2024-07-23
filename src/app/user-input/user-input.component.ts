import { InvestmentService } from './../investment.service';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {

  enteredInitialInvestment = signal ('0');
  enteredAnnualinvesment = signal('0');
  enteredExpctedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
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
