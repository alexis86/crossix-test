import { ChartValueModel } from "./chart-value.model";


export interface ChartBarValueModel extends ChartValueModel {
    percentageFromTotalSum: number;
}
