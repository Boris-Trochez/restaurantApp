import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'upperCase'
})
export class upperCasePipe implements PipeTransform {
    transform( value: string): string {
        return value.toUpperCase();
    }
}