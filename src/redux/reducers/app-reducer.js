const initinalState = {
  appName: "Solio",
  isLoggedIn : true,
  userdata : null,
  isSideBarOpened : false
};

export const AppActions = {
  SET_USER_DATA : 'SET_USER_DATA',
  SET_USER_LOGGED_IN : 'SET_USER_LOGGED_IN',
  SET_USER_LOGGED_OUT : 'SET_USER_LOGGED_OUT',

  SET_SIDEBAR_OPENED : 'SET_SIDEBAR_OPENED',
  SET_SIDEBAR_CLOSED : 'SET_SIDEBAR_CLOSED'
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

    case AppActions.SET_SIDEBAR_OPENED : 
      return {
        ...state,
        isSideBarOpened : true
      }

    case AppActions.SET_SIDEBAR_CLOSED : 
      return {
        ...state,
        isSideBarOpened : false
      }

    default:
      return state;
  }
};
