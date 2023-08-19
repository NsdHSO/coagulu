import { inject, Injectable } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { TypeConstantEnum } from '../utils';
import * as i0 from "@angular/core";
export class GenerateFormBuilderService {
    constructor() {
        this._fb = inject(FormBuilder);
    }
    buildFormFromJson(jsonData) {
        console.log(this.buildFormGenerate(jsonData));
        return this.buildFormGenerate(jsonData);
    }
    extractValidator(item) {
        let validators = [];
        if (item.validators && item.validators.length > 0) {
            validators = item.validators.map((validatorConfig) => this.getValidator(validatorConfig));
        }
        return validators;
    }
    // eslint-disable-next-line
    getValidator(validatorConfig) {
        const { type, option, errorMsg } = validatorConfig;
        switch (type) {
            case TypeConstantEnum.REQUIRED:
                return (control) => control.value
                    ? null
                    : { error: errorMsg || 'This field Is must' || true };
            case TypeConstantEnum.MIN:
                if (typeof option === TypeConstantEnum.NUMBER) {
                    // Check if option is a number
                    const numOption = option;
                    return (control) => control.value >= numOption ? null : { error: errorMsg || true };
                }
                else {
                    throw new Error('Other Error extract validator'); // Handle other
                    // cases or throw an error
                }
            case TypeConstantEnum.MIN_CHAR:
                if (typeof option === TypeConstantEnum.NUMBER) {
                    // Check if option is a number
                    const numOption = option;
                    return (control) => String(control.value).length >= numOption ||
                        String(control.value).length === 0
                        ? null
                        : { error: errorMsg || true };
                }
                else {
                    throw new Error('Other Error extract validator'); // Handle other
                    // cases or throw an error
                }
            case TypeConstantEnum.PATTERN:
                if (typeof option === TypeConstantEnum.STRING ||
                    option instanceof RegExp) {
                    const pattern = typeof option === TypeConstantEnum.STRING
                        ? new RegExp(option)
                        : option;
                    return (control) => (pattern instanceof RegExp ? pattern.test(control.value) : false)
                        ? null
                        : { error: errorMsg || true };
                }
                else {
                    throw new Error('Invalid option for pattern validator');
                }
            case TypeConstantEnum.EMAIL:
                return (control) => {
                    if (!control.value) {
                        return null; // Allow empty values for the email validator
                    }
                    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    return emailPattern.test(control.value)
                        ? null
                        : { error: errorMsg || true };
                };
            // Add more cases for other validator types as needed
            default:
                // Return null for unknown validator types
                throw new Error('Please Implement this Validator');
        }
    }
    buildFormGenerate(data) {
        if (data.values) {
            //eslint-disable-next-line
            const group = {};
            data.values.forEach((item) => {
                if (item.values) {
                    group[item.label ?? ''] = this.buildFormGenerate(item);
                }
                else if (item.bulkValues) {
                    group[item.label ?? ''] = this._fb.array(item.bulkValues.map((subItem) => this.buildFormGenerate(subItem)));
                }
                else {
                    const validators = this.extractValidator(item);
                    group[item.label ?? ''] = this._fb.control(item.value || null, validators);
                }
            });
            return this._fb.group(group);
        }
        else if (data.bulkValues) {
            return this._fb.array(data.bulkValues.map((subItem) => this.buildFormGenerate(subItem)));
        }
        else {
            const validators = this.extractValidator(data);
            return this._fb.control(data.value || null, validators);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: GenerateFormBuilderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: GenerateFormBuilderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: GenerateFormBuilderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1nZW5lcmF0ZS1mb3JtLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mdHgtZm9ybXMvc3JjL2xpYi9mdHgtZm9ybXMvc2VydmljZS9zZXJ2aWNlLWdlbmVyYXRlLWZvcm0tYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFFTCxXQUFXLEdBSVosTUFBTSxnQkFBZ0IsQ0FBQztBQU94QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBSzVDLE1BQU0sT0FBTywwQkFBMEI7SUFIdkM7UUFJbUIsUUFBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztLQWtINUM7SUFoSEMsaUJBQWlCLENBQUMsUUFBeUI7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBMkI7UUFDMUMsSUFBSSxVQUFVLEdBQWtCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pELFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQ25ELElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQ25DLENBQUM7U0FDSDtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCwyQkFBMkI7SUFDM0IsWUFBWSxDQUFDLGVBQTBCO1FBQ3JDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLGVBQWUsQ0FBQztRQUNuRCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssZ0JBQWdCLENBQUMsUUFBUTtnQkFDNUIsT0FBTyxDQUFDLE9BQTJCLEVBQUUsRUFBRSxDQUNyQyxPQUFPLENBQUMsS0FBSztvQkFDWCxDQUFDLENBQUMsSUFBSTtvQkFDTixDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxJQUFJLG9CQUFvQixJQUFJLElBQUksRUFBRSxDQUFDO1lBQzVELEtBQUssZ0JBQWdCLENBQUMsR0FBRztnQkFDdkIsSUFBSSxPQUFPLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7b0JBQzdDLDhCQUE4QjtvQkFDOUIsTUFBTSxTQUFTLEdBQUcsTUFBZ0IsQ0FBQztvQkFDbkMsT0FBTyxDQUFDLE9BQTBCLEVBQUUsRUFBRSxDQUNwQyxPQUFPLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLElBQUksSUFBSSxFQUFFLENBQUM7aUJBQ25FO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLGVBQWU7b0JBQ2pFLDBCQUEwQjtpQkFDM0I7WUFDSCxLQUFLLGdCQUFnQixDQUFDLFFBQVE7Z0JBQzVCLElBQUksT0FBTyxNQUFNLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxFQUFFO29CQUM3Qyw4QkFBOEI7b0JBQzlCLE1BQU0sU0FBUyxHQUFHLE1BQWdCLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxPQUEwQixFQUFFLEVBQUUsQ0FDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUzt3QkFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQzt3QkFDaEMsQ0FBQyxDQUFDLElBQUk7d0JBQ04sQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsZUFBZTtvQkFDakUsMEJBQTBCO2lCQUMzQjtZQUNILEtBQUssZ0JBQWdCLENBQUMsT0FBTztnQkFDM0IsSUFDRSxPQUFPLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNO29CQUN6QyxNQUFNLFlBQVksTUFBTSxFQUN4QjtvQkFDQSxNQUFNLE9BQU8sR0FDWCxPQUFPLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNO3dCQUN2QyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBZ0IsQ0FBQzt3QkFDOUIsQ0FBQyxDQUFFLE1BQWlCLENBQUM7b0JBQ3pCLE9BQU8sQ0FBQyxPQUFvQixFQUFFLEVBQUUsQ0FDOUIsQ0FBQyxPQUFPLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUMvRCxDQUFDLENBQUMsSUFBSTt3QkFDTixDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxJQUFJLElBQUksRUFBRSxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7aUJBQ3pEO1lBQ0gsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLO2dCQUN6QixPQUFPLENBQUMsT0FBb0IsRUFBRSxFQUFFO29CQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTt3QkFDbEIsT0FBTyxJQUFJLENBQUMsQ0FBQyw2Q0FBNkM7cUJBQzNEO29CQUNELE1BQU0sWUFBWSxHQUNoQixrREFBa0QsQ0FBQztvQkFDckQsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7d0JBQ3JDLENBQUMsQ0FBQyxJQUFJO3dCQUNOLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQztZQUNKLHFEQUFxRDtZQUNyRDtnQkFDRSwwQ0FBMEM7Z0JBQzFDLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFRCxpQkFBaUIsQ0FDZixJQUFxQjtRQUVyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZiwwQkFBMEI7WUFDMUIsTUFBTSxLQUFLLEdBQTJCLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN4RDtxQkFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQ2xFLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMvQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FDeEMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQ2xCLFVBQVUsQ0FDWCxDQUFDO2lCQUNIO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO2FBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDbEUsQ0FBQztTQUNIO2FBQU07WUFDTCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7OEdBbEhVLDBCQUEwQjtrSEFBMUIsMEJBQTBCLGNBRnpCLE1BQU07OzJGQUVQLDBCQUEwQjtrQkFIdEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZvcm1BcnJheSxcbiAgRm9ybUJ1aWxkZXIsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXAsXG4gIFZhbGlkYXRvckZuLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBEYXRhRm9ybUJ1aWxkZXIsXG4gIE5lc3RlZFZhbHVlLFxuICBTZWN0aW9uLFxuICBWYWxpZGF0b3IsXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgVHlwZUNvbnN0YW50RW51bSB9IGZyb20gJy4uL3V0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEdlbmVyYXRlRm9ybUJ1aWxkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfZmIgPSBpbmplY3QoRm9ybUJ1aWxkZXIpO1xuXG4gIGJ1aWxkRm9ybUZyb21Kc29uKGpzb25EYXRhOiBEYXRhRm9ybUJ1aWxkZXIpOiBhbnkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYnVpbGRGb3JtR2VuZXJhdGUoanNvbkRhdGEpKTtcbiAgICByZXR1cm4gdGhpcy5idWlsZEZvcm1HZW5lcmF0ZShqc29uRGF0YSk7XG4gIH1cblxuICBleHRyYWN0VmFsaWRhdG9yKGl0ZW06IFNlY3Rpb24gfCBOZXN0ZWRWYWx1ZSk6IFZhbGlkYXRvckZuW10ge1xuICAgIGxldCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG4gICAgaWYgKGl0ZW0udmFsaWRhdG9ycyAmJiBpdGVtLnZhbGlkYXRvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdmFsaWRhdG9ycyA9IGl0ZW0udmFsaWRhdG9ycy5tYXAoKHZhbGlkYXRvckNvbmZpZykgPT5cbiAgICAgICAgdGhpcy5nZXRWYWxpZGF0b3IodmFsaWRhdG9yQ29uZmlnKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkYXRvcnM7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZ2V0VmFsaWRhdG9yKHZhbGlkYXRvckNvbmZpZzogVmFsaWRhdG9yKTogVmFsaWRhdG9yRm4gfCBhbnkge1xuICAgIGNvbnN0IHsgdHlwZSwgb3B0aW9uLCBlcnJvck1zZyB9ID0gdmFsaWRhdG9yQ29uZmlnO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBUeXBlQ29uc3RhbnRFbnVtLlJFUVVJUkVEOlxuICAgICAgICByZXR1cm4gKGNvbnRyb2w6IHsgdmFsdWU6IHVua25vd24gfSkgPT5cbiAgICAgICAgICBjb250cm9sLnZhbHVlXG4gICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgIDogeyBlcnJvcjogZXJyb3JNc2cgfHwgJ1RoaXMgZmllbGQgSXMgbXVzdCcgfHwgdHJ1ZSB9O1xuICAgICAgY2FzZSBUeXBlQ29uc3RhbnRFbnVtLk1JTjpcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09IFR5cGVDb25zdGFudEVudW0uTlVNQkVSKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgb3B0aW9uIGlzIGEgbnVtYmVyXG4gICAgICAgICAgY29uc3QgbnVtT3B0aW9uID0gb3B0aW9uIGFzIG51bWJlcjtcbiAgICAgICAgICByZXR1cm4gKGNvbnRyb2w6IHsgdmFsdWU6IG51bWJlciB9KSA9PlxuICAgICAgICAgICAgY29udHJvbC52YWx1ZSA+PSBudW1PcHRpb24gPyBudWxsIDogeyBlcnJvcjogZXJyb3JNc2cgfHwgdHJ1ZSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3RoZXIgRXJyb3IgZXh0cmFjdCB2YWxpZGF0b3InKTsgLy8gSGFuZGxlIG90aGVyXG4gICAgICAgICAgLy8gY2FzZXMgb3IgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgfVxuICAgICAgY2FzZSBUeXBlQ29uc3RhbnRFbnVtLk1JTl9DSEFSOlxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gVHlwZUNvbnN0YW50RW51bS5OVU1CRVIpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiBvcHRpb24gaXMgYSBudW1iZXJcbiAgICAgICAgICBjb25zdCBudW1PcHRpb24gPSBvcHRpb24gYXMgbnVtYmVyO1xuICAgICAgICAgIHJldHVybiAoY29udHJvbDogeyB2YWx1ZTogbnVtYmVyIH0pID0+XG4gICAgICAgICAgICBTdHJpbmcoY29udHJvbC52YWx1ZSkubGVuZ3RoID49IG51bU9wdGlvbiB8fFxuICAgICAgICAgICAgU3RyaW5nKGNvbnRyb2wudmFsdWUpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgOiB7IGVycm9yOiBlcnJvck1zZyB8fCB0cnVlIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPdGhlciBFcnJvciBleHRyYWN0IHZhbGlkYXRvcicpOyAvLyBIYW5kbGUgb3RoZXJcbiAgICAgICAgICAvLyBjYXNlcyBvciB0aHJvdyBhbiBlcnJvclxuICAgICAgICB9XG4gICAgICBjYXNlIFR5cGVDb25zdGFudEVudW0uUEFUVEVSTjpcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHR5cGVvZiBvcHRpb24gPT09IFR5cGVDb25zdGFudEVudW0uU1RSSU5HIHx8XG4gICAgICAgICAgb3B0aW9uIGluc3RhbmNlb2YgUmVnRXhwXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPVxuICAgICAgICAgICAgdHlwZW9mIG9wdGlvbiA9PT0gVHlwZUNvbnN0YW50RW51bS5TVFJJTkdcbiAgICAgICAgICAgICAgPyBuZXcgUmVnRXhwKG9wdGlvbiBhcyBzdHJpbmcpXG4gICAgICAgICAgICAgIDogKG9wdGlvbiBhcyBSZWdFeHApO1xuICAgICAgICAgIHJldHVybiAoY29udHJvbDogRm9ybUNvbnRyb2wpID0+XG4gICAgICAgICAgICAocGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCA/IHBhdHRlcm4udGVzdChjb250cm9sLnZhbHVlKSA6IGZhbHNlKVxuICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgOiB7IGVycm9yOiBlcnJvck1zZyB8fCB0cnVlIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG9wdGlvbiBmb3IgcGF0dGVybiB2YWxpZGF0b3InKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSBUeXBlQ29uc3RhbnRFbnVtLkVNQUlMOlxuICAgICAgICByZXR1cm4gKGNvbnRyb2w6IEZvcm1Db250cm9sKSA9PiB7XG4gICAgICAgICAgaWYgKCFjb250cm9sLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gQWxsb3cgZW1wdHkgdmFsdWVzIGZvciB0aGUgZW1haWwgdmFsaWRhdG9yXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGVtYWlsUGF0dGVybiA9XG4gICAgICAgICAgICAvXlthLXpBLVowLTkuXyUrLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9JC87XG4gICAgICAgICAgcmV0dXJuIGVtYWlsUGF0dGVybi50ZXN0KGNvbnRyb2wudmFsdWUpXG4gICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgIDogeyBlcnJvcjogZXJyb3JNc2cgfHwgdHJ1ZSB9O1xuICAgICAgICB9O1xuICAgICAgLy8gQWRkIG1vcmUgY2FzZXMgZm9yIG90aGVyIHZhbGlkYXRvciB0eXBlcyBhcyBuZWVkZWRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIFJldHVybiBudWxsIGZvciB1bmtub3duIHZhbGlkYXRvciB0eXBlc1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBJbXBsZW1lbnQgdGhpcyBWYWxpZGF0b3InKTtcbiAgICB9XG4gIH1cblxuICBidWlsZEZvcm1HZW5lcmF0ZShcbiAgICBkYXRhOiBEYXRhRm9ybUJ1aWxkZXJcbiAgKTogRm9ybUdyb3VwIHwgRm9ybUFycmF5IHwgRm9ybUNvbnRyb2wge1xuICAgIGlmIChkYXRhLnZhbHVlcykge1xuICAgICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnN0IGdyb3VwOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICBkYXRhLnZhbHVlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnZhbHVlcykge1xuICAgICAgICAgIGdyb3VwW2l0ZW0ubGFiZWwgPz8gJyddID0gdGhpcy5idWlsZEZvcm1HZW5lcmF0ZShpdGVtKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLmJ1bGtWYWx1ZXMpIHtcbiAgICAgICAgICBncm91cFtpdGVtLmxhYmVsID8/ICcnXSA9IHRoaXMuX2ZiLmFycmF5KFxuICAgICAgICAgICAgaXRlbS5idWxrVmFsdWVzLm1hcCgoc3ViSXRlbSkgPT4gdGhpcy5idWlsZEZvcm1HZW5lcmF0ZShzdWJJdGVtKSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLmV4dHJhY3RWYWxpZGF0b3IoaXRlbSk7XG4gICAgICAgICAgZ3JvdXBbaXRlbS5sYWJlbCA/PyAnJ10gPSB0aGlzLl9mYi5jb250cm9sKFxuICAgICAgICAgICAgaXRlbS52YWx1ZSB8fCBudWxsLFxuICAgICAgICAgICAgdmFsaWRhdG9yc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX2ZiLmdyb3VwKGdyb3VwKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEuYnVsa1ZhbHVlcykge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZiLmFycmF5KFxuICAgICAgICBkYXRhLmJ1bGtWYWx1ZXMubWFwKChzdWJJdGVtKSA9PiB0aGlzLmJ1aWxkRm9ybUdlbmVyYXRlKHN1Ykl0ZW0pKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IHRoaXMuZXh0cmFjdFZhbGlkYXRvcihkYXRhKTtcbiAgICAgIHJldHVybiB0aGlzLl9mYi5jb250cm9sKGRhdGEudmFsdWUgfHwgbnVsbCwgdmFsaWRhdG9ycyk7XG4gICAgfVxuICB9XG59XG4iXX0=