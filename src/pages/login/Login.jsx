import manset from '../../assets/man-set.png'
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'
import apple from '../../assets/apple.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth-container row ">
        <div className="col auth-img d-flex justify-content-center align-items-center text-center">
            <img src={manset} alt="manset" className='img-fluid' />
            <h5 className='text-white mt-3'>Enjoy Seamless Playlist with Musing</h5>
            <p style={{color: '#151515'}}>Listen to your favourite artist with no interruption on musing </p>
        </div>
        <div className="col auth-form-container d-flex bg-white">
            <h5 className='color-y my-5 text-center'>Log in to Musing</h5>
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
                    <p className='mt-3'>Continue with Phone Number</p>
                </button>
            </div>
            <Link to="/" className='color-y my-2 text-end fgpass'>Forgot Password?</Link>
            <div className='d-flex align-items-center justify-content-center px-4 orline-container gap-1' >
                <span className='or-line'></span>
                <span>Or</span>
                <span className='or-line'></span>
            </div>
            <form className='auth-form my-3 gap-3'>
                <input type="email" placeholder='Email or username' />
                <input type="password" placeholder='Password' />
                <button className='linear-btn py-2 mx-5'>Login</button>
            </form>
            <p className='text-center'>New here? <Link to='/signup' className='color-y'>Signup</Link> </p>
        </div>
    </div>
  )
}

export default Login