import nftimg from "../../assets/nftimg.png";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-container row ">
      <div className="col auth-img d-flex justify-content-center align-items-center text-center">
        <img src={nftimg} alt="nftimg" width={400} />
        <h5 className="text-white mt-3">
          Begin your decentralized Journey with Musing
        </h5>
        <p style={{ color: "#151515" }}>
          Our platform let you have control over your data while you experience
          a seamless play-time with favourites.
        </p>
      </div>
      <div className="col auth-form-container d-flex bg-white  align-items-center">
        <h5 className="color-y my-3">Sign up to Enjoy Unlimited Playlist</h5>
        <form className="auth-form my-3 gap-3">
          <p>
            Already have an account?
            <Link to="/login" className="fw-bold text-black">
              Signin
            </Link>
          </p>
          <label className="color-y">
            Email Address <sup className="text-danger">*</sup>
          </label>
          <input type="email" placeholder="Enter your email address" />
          <Link to="/" className="color-y my-2 fgpass">
            Use phone number instead
          </Link>

          <button className="linear-btn py-2 mx-5">Next</button>
        </form>
        <div className="d-flex align-items-center justify-content-center p-4 orline-container gap-1">
          <span className="or-line"></span>
          <span>Or</span>
          <span className="or-line"></span>
        </div>
        <div className="btn-auth-container">
          <button className="btn-auth mb-3 d-flex w-100">
            <img src={google} alt="google" />
            <p className="mt-3">Continue with Google</p>
          </button>
          <button className="btn-auth mb-3 d-flex w-100">
            <img src={facebook} alt="facebook" />
            <p className="mt-3">Continue with Facebook</p>
          </button>
          <button className="btn-auth mb-3 d-flex w-100">
            <img src={apple} alt="apple" />
            <p className="mt-3">Continue with Apple</p>
          </button>
          <button className="btn-auth mb-2 d-flex w-100">
            <p className="mt-3">Continue with Phone Number</p>
          </button>
          <div className="d-flex gap-1">
            <div>
              <input type="checkbox" />
            </div>
            <p>
              I certify that i have read and accept the <span className="color-y">Terms of Use and Privacy
              Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
