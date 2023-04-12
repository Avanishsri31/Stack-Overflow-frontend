import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { userVerify } from '../../actions/otp'
import { useSelector } from 'react-redux';

const Otp = () => {
  const [otp, setOtp] = useState("");

  const currentUser = useSelector(state => state.currentUserReducer)
  const navigate = useNavigate();

  const Authenticate = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your Otp")
    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error("Enter Valid Otp")
    } else if (otp.length < 6) {
      toast.error("Otp Length minimum 6 digit")
    } else {

      const response = await userVerify(currentUser?.result?._id,currentUser?.result?.email,otp);
      if (response.status === 200) {
        navigate("/AskQuestion")
      } else {
        toast.error(response.response.data.error)
      }
    }
  }

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Please Enter Your OTP Here</h1>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="otp">OTP</label>
              <input type="text" name="otp" id="" onChange={(e) => setOtp(e.target.value)} placeholder='Enter Your OTP' />
            </div>
            <button className='btn' onClick={Authenticate}>Submit</button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Otp