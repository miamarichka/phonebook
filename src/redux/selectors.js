export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const loadingStatus = state => state.contacts.isLoading;

export const hasError = state => state.contacts.error;

export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefresing = state => state.auth.isRefresing;


