const getRouterDomain = state => state.router;

export const getPickUp = state => getRouterDomain(state).pickUp;
export const getDropOff = state => getRouterDomain(state).dropOff;
export const isCreating = state => getRouterDomain(state).isCreating;
