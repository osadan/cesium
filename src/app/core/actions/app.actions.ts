import { Action } from '@ngrx/store';

export enum AppActionsTypes {
  ADD_FEATURE = '[App] add feature'
}

export class AddFeature implements Action {
  readonly type = AppActionsTypes.ADD_FEATURE;

  constructor(public payload: { name, component }) {
  }
}

export type AppAction = AddFeature ;
