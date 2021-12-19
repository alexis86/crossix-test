import { Component, Input } from '@angular/core';
import { CHART_COLORS } from 'src/app/core/chart-colors.const';
import { ChartValueModel } from 'src/app/core/chart-value.model';

@Component({
  selector: 'chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent {
  @Input() chartValues: ChartValueModel[] = [];

  chartColors = CHART_COLORS;
}
