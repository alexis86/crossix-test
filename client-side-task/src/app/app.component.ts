import { Component, OnInit } from '@angular/core';
import { ChartBarValueModel } from './core/chart-bar-value.model';
import { CHART_COLORS } from './core/chart-colors.const';
import { ChartValueModel } from './core/chart-value.model';
import { ChartService } from './core/chart.service';
import { ArrayExtensions } from './core/helpers/array.extensions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Gross NBRx Media Composition';

  subTitle = 'Conversion to Restolar';

  chartTitle = 'Total Gross NBRx';

  chartTotalSum = 0;

  chartColors = CHART_COLORS;

  chartValues: ChartValueModel[] = [];

  chartBarValues: ChartBarValueModel[] = [];

  constructor(private chartService: ChartService) {
  }

  ngOnInit(): void {
    this.chartValues = this.chartService.getChartValues();
    this.chartBarValues = this.chartService.getChartBarValues();

    this.chartTotalSum = ArrayExtensions.calculateSum(this.chartValues, (chartValue: ChartValueModel) => chartValue.value);
  }
}
