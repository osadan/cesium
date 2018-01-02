import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { MapActionsTypes, RegisterFeature } from '../../features/map/actions/map.actions';
import { AddFeature } from '../actions/app.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class CoreEffects {
  @Effect()
  registerMapComponent$ = this.actions$
    .ofType<RegisterFeature>(MapActionsTypes.REGISTER_FEATURE_COMPONENT).pipe(
      map(({ payload }) => new AddFeature(payload))
    );

  constructor(public actions$: Actions) {
  }
}
