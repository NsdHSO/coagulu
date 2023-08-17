import { createAction, props } from '@ngrx/store';
import { ReserveEntity } from './reserve.models';
import { DataFormBuilder } from 'ngx-ftx-forms';

export const initReserve = createAction('[Reserve Page] Init');
const prefixStepper = 'Reserve';

export const loadReserveSuccess = createAction(
  '[Reserve/API] Load Reserve Success',
  props<{ reserve: ReserveEntity[] }>()
);

export const loadReserveFailure = createAction(
  '[Reserve/API] Load Reserve Failure',
  //eslint-disable-next-line
  props<{ error: any }>()
);
export const formValueChangeReserve = createAction(
  `[${prefixStepper}] Form Value change`,
  props<DataFormBuilder>()
);
