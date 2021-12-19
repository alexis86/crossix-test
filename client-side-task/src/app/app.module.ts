import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChartService } from './core/chart.service';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { ChartValuePipe } from './core/pipes/chart-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChartBarComponent,
    ChartValuePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
