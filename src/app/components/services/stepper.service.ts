import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { shareReplay, tap, using } from 'rxjs';
import { formValueChange } from '../../+state/stepper.actions';
import { selectStepperEntities } from '../../+state/stepper.selectors';
import { generateRandomId } from '../../+state/mock';

@Injectable()
export class StepperService {
  private readonly _stepperStore = inject(Store);
  private readonly _fb = inject(FormBuilder);
  steppForm = this._fb.group({
    intro: {
      icon: '',
      check: false,
      id: '',
      values: {},
    },
    name: '',
    infoUser: this._fb.group({
      check: false,
      icon: '',
      id: '',
      info: this._fb.group({
        familyNumber: 0,
        roleOfMember: this._fb.array([
          this._fb.group(
            { id: 0, value: '', check: false },
            { id: 0, value: '', check: false }
          ),
        ]),
        childrens: this._fb.control(0),
      }),
    }),
    spendMoney: {
      id: '',
      icon: '',
      check: false,
      values: {
        incoming: null,
        spendMoney: null,
        revenue: null,
        categorySpendMoney: [
          {
            id: '',
            value: null,
            label: '',
            scope: [
              {
                id: '',
                label: '',
                check: false,
              },
            ],
          },
        ],
        recommendations: [
          {
            check: false,
            label: '',
          },
        ],
      },
    }, // Exteotera graph
    reserveBook: {
      icon: '',
      id: '',
      check: false,
      values: {
        id: '',
        graph: {
          id: '',
          values: [
            {
              id: '',
              label: '',
              start: null,
              end: null,
            },
          ],
          howMannyMonth: null,
        },
        reserve: {
          id: '',
          currentReserve: {},
          recommendationReserve: {},
          howMannyMonth: null,
        },
        details: {
          id: '',
          check: false,
          values: [],
        },
        modals: {
          setBookType: {},
          sumBook: {},
        },
      },
    },
  });
  private formValue$ = using(
    () =>
      this.stepperForm.valueChanges
        .pipe(
          tap(
            (values) =>
              this._stepperStore.dispatch(formValueChange(values as any)) //eslint-disable-line
          )
        )
        .subscribe(),
    () => this._stepperStore.select(selectStepperEntities)
  ).pipe(shareReplay());

  get formValues$() {
    return this.formValue$;
  }

  get stepperForm() {
    return this.steppForm;
  }
}
