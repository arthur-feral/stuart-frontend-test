const getToastDomain = state => state.toast;
export const isToastVisible = state => getToastDomain(state).isVisible;
