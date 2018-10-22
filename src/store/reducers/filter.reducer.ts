import * as fromFilter from '../actions/filter.action';

const statusInit: fromFilter.validFilter = 'all';


export function filterReducer(state = statusInit, action: fromFilter.actions): fromFilter.validFilter {
  switch (action.type) {
    case fromFilter.FILTER:
       return action.filter;
    default:
      return state;
  }
}
