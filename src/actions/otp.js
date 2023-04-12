import * as api from '../api'

export const userVerify = async(_id,email,otp) => {
    try {
        return await api.userVerify(_id,email,otp)

    } catch (error) {
        console.log(error)
    }
}

export const sendOtpFunction = async(_id,email) => {
    try {
        return await api.sendOtpFunction(_id,email);

    } catch (error) {
        console.log(error)
    }
}