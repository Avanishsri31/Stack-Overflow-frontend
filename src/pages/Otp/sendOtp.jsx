import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { sendOtpFunction } from '../../actions/otp';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Otp.css'


const SendOtp = () => {
    const [email, setEmail] = useState("");
    const [spiner,setSpiner] = useState(false);
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.currentUserReducer)
    const sendotp = async(e) => {
        e.preventDefault()
        if (email === "") {
            toast.error("Enter Your Email !")
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        } else {
            setSpiner(true)
            console.log(email)
            const response = await sendOtpFunction(currentUser?.result?._id,{email :currentUser?.result?.email});
            // console.log(response);
    
            if (response.status === 200) {
                setSpiner(false)
                navigate("/Verify",{state:email})
            } else {
                toast.error(response.response.data.error);
            }
        }
    }
  return (
    <>
            <section>
                <div className="form_data">
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
                        </div>
                        <button className='btn' onClick={sendotp}> Authenticate
                        {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
                        </button>
                    </form>
                </div>
                <ToastContainer />
            </section>
        </>
  )
}

export default SendOtp