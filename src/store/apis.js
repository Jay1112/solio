// Backend APIs

export const AuthAPI = {
    signIn : '/v1/auth/login',
    signUp : '/v1/auth/register',
    signOut : '/v1/auth/logout',
    verifyOtp : '/v1/auth/verify-otp'
}

export const UserAPI = {
    session : '/v1/user/details',
    personalInfo : '/v1/user/personal-info'
}

export const SocialsAPI = {
    platforms : '/v1/socials/platforms',
    userPlatforms : '/v1/socials/user-platforms',
    createPlatform : '/v1/socials/create' 
}