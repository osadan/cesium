import { Action } from '@ngrx/store';

export enum MapActionsTypes {
  REGISTER_FEATURE_COMPONENT = '[Map] register feature component'
}

export class RegisterFeature implements Action {
  readonly type = MapActionsTypes.REGISTER_FEATURE_COMPONENT ;

  constructor(public payload: { name, component }) {
  }
}

export type MapAction = RegisterFeature ;
