const initinalState = {
    socialPlatforms : [],
    userSocialsList : []
  };
  
  export const SocialActions = {
    SET_SOCIAL_PLATFORMS  : 'SET_SOCIAL_PLATFORMS',
    SET_USER_SOCIALS_LIST : 'SET_USER_SOCIALS_LIST', 
  };
  
  export const socialReducer = (state = initinalState, action) => {
    switch (action.type) {
      
        case SocialActions.SET_SOCIAL_PLATFORMS : 
            return {
                ...state,
                socialPlatforms : action.payload
            }

        case SocialActions.SET_USER_SOCIALS_LIST : 
            return {
                ...state,
                userSocialsList : action.payload
            }
  
      default:
        return state;
    }
  };
  