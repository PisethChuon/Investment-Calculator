import { NgModule } from '@angular/core';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  imports: [BrowserModule, UserInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './app.component.html',
// })
// export class AppComponent {}
