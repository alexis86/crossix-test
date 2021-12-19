import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'chartValue'})
export class ChartValuePipe implements PipeTransform {
    transform(value: number) {
        if( value / 1000000 > 1){
            return `${(value / 1000000).toFixed(1)}M`;
        }

        if(value / 1000 > 1){
            return `${(value / 1000).toFixed()}K`;
        }

        return value;
    }
}