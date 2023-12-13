import "./footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="footer p-5">
      <div className="company d-flex justify-content-between align-items-center">
        <img src={logo} alt="logo" />
        <div className="newsletter d-flex align-items-center">
          <h3>
            OUR <span style={{ color: "#E6C30A" }}>NEWSLETTER</span>
          </h3>
          <div className="newsletter-content ps-3 pe-5 py-2">
            <i class="fa-solid fa-envelope pe-2"></i> 
            <input
              type="email"
              className=""
              placeholder=" Enter your email..."
            />
          </div>
          <button className="newsletter-content p-2">
            SUBSCRIBE <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
      <div className="footer-links py-5 row">
        <ul className="col">
          <li>
            <i class="fa-regular fa-paper-plane pb-3 color-y pe-3"></i>Telegram: @Musingofficial
          </li>
          <li>
            <i class="fa-brands fa-facebook-f pb-3 color-y pe-3"></i> Facebook: @Musing.page
          </li>
          <li>
            <i class="fa-brands fa-discord pb-3 color-y pe-3"></i>Discord: @Musingoff
          </li>
          <li>
            <i class="fa-brands fa-twitter pb-3 color-y pe-3"></i> Twitter: @Musing_official
          </li>
        </ul>
        <ul className="col">
            <li><h4>MENU</h4></li>
            <li className="color-by width-stroke"></li>
            <li>About</li>
            <li>Community</li>
            <li>NFTs</li>
            <li>RoadMap</li>
        </ul>
        <ul className="col">
            <li><h4>TOKEN/NFTs</h4></li>
            <li className="color-by width-stroke"></li>
            <li>Opensea</li>
            <li>Sound SDK</li>
            <li>Emojam</li>
            <li>Royal</li>
        </ul>
        <div className="col">
            <h4>FOLLOW US</h4>
            <div className="color-by width-stroke"></div>
            <div>
            <i class="fa-regular fa-paper-plane   pe-3"></i>
            <i class="fa-brands fa-facebook-f  pe-3"></i>
            <i class="fa-brands fa-discord pe-3"></i>
            <i class="fa-brands fa-twitter  pe-3"></i>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
