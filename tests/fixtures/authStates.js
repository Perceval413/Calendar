export const initialState = {
  state: "checking", //authenticated not-authenticated,
  user: {},
  errorMessage: undefined,
}

export const authenticatedState = {
  state: "authenticated", //authenticated not-authenticated,
  user: {
    uid: 'abc',
    name: 'Fernando'
  },
  errorMessage: undefined,
}

export const notAuthenticatedState = {
  state: "not-authenticated", //authenticated not-authenticated,
  user: {},
  errorMessage: undefined,
}