// main domain
export const domain = 'http://localhost:4000/api';

export const AuthAPI = {
    signup : '/v1/auth/register',
    signIn : '/v1/auth/login',
    verifyOtp : '/v1/auth/verify-otp',
    signOut : '/v1/auth/logout'
}

export const UserAPI = {
    details : '/v1/user/details'
}