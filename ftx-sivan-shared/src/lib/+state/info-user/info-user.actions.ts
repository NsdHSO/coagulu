import { createAction, props } from '@ngrx/store';
import { InfoUserEntity } from './info-user.models';
const prefixForm = 'FormDync';
export const initInfoUser = createAction('[InfoUser Page] Init');

export const loadInfoUserSuccess = createAction(
  `[${prefixForm}/API] Load InfoUser Success`,
  props<{ infoUser: InfoUserEntity[] }>()
);

export const infoUserValueChange = createAction(
  `[${prefixForm}] Info User Changed`,
  props<any>()
);

export const loadInfoUserFailure = createAction(
  `[${prefixForm}/API] Load InfoUser Failure`,
  props<{ error: any }>()
);
