import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import {
  combineLatest,
  Observable,
  of,
  shareReplay,
  Subject,
  switchMap,
  tap,
  using,
} from 'rxjs';
import { formValueChange } from '../../+state/stepper.actions';
import { selectStepperEntities } from '../../+state/stepper.selectors';

@Injectable({ providedIn: 'root' })
export class StepperService {
  /**
   * An instance of the Store class injected using @ngrx/store.
   * @type {Store}
   * @private
   */
  private readonly _stepperStore = inject(Store);
  /**
   * An instance of the FormBuilder class injected from '@angular/forms'.
   * @type {FormBuilder}
   * @private
   */
  private readonly _fb = inject(FormBuilder);
  /**
   * Flag URL Subject for tracking flag changes.
   * @type {Subject}
   */
  public flagUrl$ = new Subject();
  /**
   * FormGroup representing the stepper form.
   * @type {FormGroup}
   */
  public steppForm = this._fb.group({
    intro: this._fb.group({
      icon: '',
      check: this._fb.control(false),
      id: '',
      values: {},
    }),
    infoUser: this._fb.group({
      check: this._fb.control(true),
      icon: '',
      id: '',
      info: this._fb.group({
        familyNumber: 0,
        roleOfMember: this._fb.array([
          this._fb.group({
            id: 0,
            value: '',
            check: false,
          }),
          this._fb.group({
            id: 0,
            value: '',
            check: false,
          }),
        ]),
        childrens: this._fb.control(0),
      }),
    }),
    spendMoney: this._fb.group({
      id: '',
      icon: '',
      check: this._fb.control(false),
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
    }), // Exteotera graph
    reserveBook: this._fb.group({
      icon: '',
      id: '',
      check: this._fb.control(false),
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
    }),
  });
  /**
   * Observable that emits the value of form changes.
   * @type {Observable}
   */
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
  //    public buttonDisable$ = this.formValue$.pipe(
  //        tap(v => console.log(v, 'Ivsan')),
  //        switchMap(v => {
  //            return this.flagUrl$
  //        }),
  //        tap(v => console.log(v, 'Ivan')),
  //        switchMap(v => {
  //            return this.flagUrl$.pipe(switchMap((value: any) => of((this.steppForm?.controls as any)[value].controls.check.value), //eslint-disable-line
  //            ), tap(console.log));
  //        }),
  //        tap(console.log),
  //    );

  public buttonDisable$ = combineLatest([this.formValue$, this.flagUrl$]).pipe(
    switchMap(
      (valuesCombined: any): Observable<boolean> =>
        of(!valuesCombined[0][valuesCombined[1]].check)
    )
  );

  /**
   * Retrieves the observable for form values.
   * @type {Observable}
   */
  get formValues$() {
    return this.formValue$;
  }

  /**
   * Retrieves the stepper form.
   * @type {FormGroup}
   */
  get stepperForm() {
    return this.steppForm;
  }

  /**
   * Adds a new role to the 'roleOfMember' array in 'infoUser' control.
   */
  public addRoleOfMember() {
    const newRole = this._fb.group({
      id: 0,
      value: '',
      check: false,
    });

    this.stepperForm.controls.infoUser.controls.info.controls.roleOfMember.push(
      newRole
    );
  }
}
