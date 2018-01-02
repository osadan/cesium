import { Action } from '@ngrx/store';
import { AppAction, AppActionsTypes } from '../actions/app.actions';
import { Component } from '@angular/core';

export interface IAppState {
  featuers: Map<string, Component>;
}

const intialAppState = {
  features: new Map<string, Component>()
};



export function appReducer(store = intialAppState , action: AppAction) {
  switch (action.type) {
    case AppActionsTypes.ADD_FEATURE:
      const featuresList = new Map(store.features);
        featuresList.set(action.payload.name, action.payload.component)
      return {...store, feature: featuresList };

  }

}
