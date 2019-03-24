const getAppDomain = state => state.app;

export const isDOMLoaded = state => getAppDomain(state).domLoaded;
