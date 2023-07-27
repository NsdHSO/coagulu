import {Directive, Input} from '@angular/core';

@Directive({
    selector : '[patchFormGroupValues]',
    standalone : true,
})
export class PatchFormGroupValueDirective {
    @Input() formGroup: any;

    @Input() set patchFormGroupValues(val: any) {
        console.log(val);
        if (!val) {
            return;
        }
        this.formGroup.patchValue(
            val,
            {emitEvent : false},
        );
    }
}
