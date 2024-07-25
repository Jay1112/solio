// Backend APIs

export const AuthAPI = {
    signIn : '/v1/auth/login',
    signUp : '/v1/auth/register',
    signOut : '/v1/auth/logout'
}

export const UserAPI = {
    session : '/v1/user/details',
    personalInfo : '/v1/user/personal-info'
}