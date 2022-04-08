import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: 'strength'
})
export class StrengthPipe implements PipeTransform {
    constructor(){}

     transform(strength: number): string {
        if( strength < 10) {
            return 'debole';
        } else {
            if (strength > 20) {
                return 'OP';
            } else {
                return 'forte';
            }

        }

    }
}