import { Directive, Input } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    Validator,
    ValidationErrors,
    FormGroup,
} from '@angular/forms';

@Directive({
    selector: '[appConfirmEqualValidator]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ConfirmEqualValidatorDirective,
            multi: true,
        },
    ],
})
export class ConfirmEqualValidatorDirective implements Validator {
    @Input('appConfirmEqualValidator') controlNameToCompare: string[] = [];
    validationResult: any;
    validate(control: FormGroup): ValidationErrors | null {

        const controlA = control.controls[this.controlNameToCompare[0]]
        const controlB = control.controls[this.controlNameToCompare[1]]
        
        return controlA?.value === controlB?.value
            ? null
            : { confirmEqual: true }
    }
}
