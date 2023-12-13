import manset from '../../assets/man-set.png'
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'
import apple from '../../assets/apple.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth-container row vh-100">
        <div className="col auth-img d-flex justify-content-center align-items-center text-center">
            <img src={manset} alt="manset" width={300}/>
            <h5 className='text-white mt-3'>Enjoy Seamless Playlist with Musing</h5>
            <p style={{color: '#151515'}}>Listen to your favourite artist with no interruption on musing </p>
        </div>
        <div className="col auth-form d-flex bg-white  align-items-center">
            <h5 className='color-y my-5'>Log in to Musing</h5>
            <div className="btn-auth-container">
                <button className='btn-auth mb-3 d-flex w-100'>
                    <img src={google} alt="google" />
                    <p className='mt-3'>Continue with Google</p>
                </button>
                <button className='btn-auth mb-3 d-flex w-100'>
                    <img src={facebook} alt="facebook" />
                    <p className='mt-3'>Continue with Facebook</p>
                </button>
                <button className='btn-auth mb-3 d-flex w-100'>
                    <img src={apple} alt="apple" />
                    <p className='mt-3'>Continue with Apple</p>
                </button>
                <button className='btn-auth mb-2 d-flex w-100'>
                    <p>Continue with Phone Number</p>
                </button>
            </div>
            <div className='w-100'>

            <Link className='color-y text-end'>Forgot Password?</Link>
            </div>
        </div>
    </div>
  )
}

export default Login