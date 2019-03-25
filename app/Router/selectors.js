const getRouterDomain = state => state.router;

export const getFromAddress = state => getRouterDomain(state).from;
export const getPickUp = state => getRouterDomain(state).pickUp;
export const getDropOff = state => getRouterDomain(state).dropOff;
export const isFromInvalid = state => getRouterDomain(state).fromInvalid;
export const getToAddress = state => getRouterDomain(state).to;
export const isToInvalid = state => getRouterDomain(state).toInvalid;
export const isCreating = state => getRouterDomain(state).isCreating;
