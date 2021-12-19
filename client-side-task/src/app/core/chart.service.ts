import { Injectable } from "@angular/core";
import { ChartBarValueModel } from "./chart-bar-value.model";
import { ChartValueModel } from "./chart-value.model";
import { ArrayExtensions } from "./helpers/array.extensions";

@Injectable()
export class ChartService {
    private chartValueModels = [
        { name: 'Direct', value: 479831 },
        { name: 'Display', value: 560230 },
        { name: 'Email', value: 80379 },
        { name: 'Organic Search', value: 165135 },
        { name: 'Paid Search', value: 2284000 },
        { name: 'Referral', value: 29941 },
        { name: 'Social', value: 160417 },
        { name: 'Video', value: 129640 }
    ]

    getChartValues(): ChartValueModel[] {
        const chartValueModels = this.chartValueModels.slice();
        chartValueModels
            .sort((chartValue1: ChartValueModel, chartValue2: ChartValueModel) => chartValue2.value - chartValue1.value);

        return chartValueModels;
    }

    getChartBarValues(): ChartBarValueModel[] {
        this.chartValueModels
            .sort((chartValue1: ChartValueModel, chartValue2: ChartValueModel) => chartValue2.value - chartValue1.value);

        const totalChartSum =
            ArrayExtensions.calculateSum(this.chartValueModels, (chartValue: ChartValueModel) => chartValue.value);

        const chartBarValues = [];

        for (let i = 0; i < this.chartValueModels.length; i++) {
            const chartValue = this.chartValueModels[i];

            let percentageFromTotalSum =
                Number(Number(chartValue.value / totalChartSum * 100).toPrecision(4));

            // the last time should be calculated in another way
            // to avoid overflow
            if (i === this.chartValueModels.length - 1) {
                const totalPercentageWithoutLastItem =
                    ArrayExtensions.calculateSum(chartBarValues, (chartBarValue: ChartBarValueModel) => chartBarValue.percentageFromTotalSum);

                percentageFromTotalSum = 100 - totalPercentageWithoutLastItem;
            }

            chartBarValues.push({
                name: chartValue.name,
                value: chartValue.value,
                percentageFromTotalSum: percentageFromTotalSum
            });
        }

        return chartBarValues;
    }
}