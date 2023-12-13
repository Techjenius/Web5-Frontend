import nftimg from '../../assets/nftimg.png'
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'
import apple from '../../assets/apple.svg'

const Signup = () => {
  return (
    <div className="auth-container row vh-100">
        <div className="col auth-img d-flex justify-content-center align-items-center text-center">
            <img src={nftimg} alt="manset" width={300}/>
            <h5 className='text-white mt-3'>Begin your decentralized Journey with Musing</h5>
            <p style={{color: '#151515'}}>Our platform let you have control over your data while you experience a seamless play-time with favourites.</p>
        </div>
        <div className="col auth-form d-flex bg-white align-items-center text-center ">
            <h5 className='color-y'>Sign up to Enjoy Unlimited Playlist</h5>
            <div className="btn-auth-container">
                <button className='btn-auth mb-2 d-flex w-100'>
                    <img src={google} alt="google" />
                    <p>Continue with Google</p>
                </button>
                <button className='btn-auth mb-2 d-flex w-100'>
                    <img src={facebook} alt="facebook" />
                    <p>Continue with Facebook</p>
                </button>
                <button className='btn-auth mb-2 d-flex w-100'>
                    <img src={apple} alt="apple" />
                    <p>Continue with Apple</p>
                </button>
                <button className='btn-auth mb-2 d-flex w-100'>
                    <p>Continue with Phone Number</p>
                </button>

            </div>
        </div>
    </div>
  )
}

export default Signup