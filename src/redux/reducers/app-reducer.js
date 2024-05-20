const initinalState = {
  appName: "Solio",
  isLoggedIn : false,
  userdata : null,
};

export const AppActions = {
  // will be added in future
  SET_USER_DATA : 'SET_USER_DATA',
  SET_USER_LOGGED_IN : 'SET_USER_LOGGED_IN',
  SET_USER_LOGGED_OUT : 'SET_USER_LOGGED_OUT'
};

export const appReducer = (state = initinalState, action) => {
  switch (action.type) {
    
    case AppActions.SET_USER_DATA : 
      return {
        ...state,
        userdata : action.payload
      }

    case AppActions.SET_USER_LOGGED_IN : 
      return {
        ...state,
        isLoggedIn : true
      }

    case AppActions.SET_USER_LOGGED_OUT : 
      return {
        ...state,
        isLoggedIn : false
      }

    default:
      return state;
  }
};
