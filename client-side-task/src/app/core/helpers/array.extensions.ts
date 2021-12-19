export class ArrayExtensions {
    static calculateSum<T>(items: T[], projectionFunc: (item: T) => number): number {
        return items
            .reduce((tempSum: number, item: T) => {
                return tempSum + projectionFunc(item);
            }, 0);
    }
}