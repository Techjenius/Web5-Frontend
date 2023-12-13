import Header from "../../components/header/Header";
import "./home.css";
import hip1 from "../../assets/hip.svg";
import flow from "../../assets/fl.svg";
import musimg from "../../assets/musimg.png";
import mic from "../../assets/mic.svg";
import queue from "../../assets/queue.svg";
import laptop from "../../assets/laptop.svg";
import istock from "../../assets/istock.png";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home text-white">
      <Header />
      <div className="text-center  banner-text">
        <h1>Enjoy secure decentralised music</h1>
        <h1>
          Enriching the 🤝 <span className="banner-style">Artist & Fan</span>{" "}
          Relationship
        </h1>
        <h5 className="text-center m-4">
          Enjoy the power of decentralisation! Explore extensive library of
          tracks stored on a decentralised network, with enhanced security, and
          uninterrupted music-streaming
        </h5>
        <button className="linear-btn p-2 m-5">Experience music in web5</button>
      </div>
      <div className="home-content-one p-5 row">
        <div className="col  home-content-one-text">
          <button className="linear-btn p-2 px-4 mb-3">NFTs</button>
          <h5>
            $MUSING, <br /> the best NFTs market place
          </h5>
        </div>
        <div className="col home-content-one-img d-flex">
          <img src={hip1} className="col hip" alt="hip1" />
          <img src={flow} className="col" alt="flow" />
        </div>
        <p className=" ">Buy & Swap your favorite music NFTS</p>
      </div>
      <div className="music-display px-5 py-3 d-flex">
        <div className="music-imgs d-flex align-items-center justify-content-between">
          <img src={musimg} alt="pic" />
          <div className="music-vector-icon px-4">
            <i
              class="fa-solid fa-thumbs-down px-2 fs-5"
              style={{ color: "red" }}
            ></i>
            <i
              class="fa-solid fa-thumbs-up fs-5 px-2"
              style={{ color: "green" }}
            ></i>
            <i class="fa-solid fa-heart fs-5 px-2" style={{ color: "red" }}></i>
          </div>
          <div className=" ">
            <h5>Musing</h5>
            <p>Paul Bush</p>
          </div>
        </div>
        <div className="music-audio">
          <img src={mic} className="" alt="mic" />
          <img src={queue} className="" alt="queue" />
          <img src={laptop} className="" alt="laptop" />
          <audio controls="false">
            <source src="." type="audio/mp3" />
          </audio>
        </div>
      </div>
      <div className="musing-text-1 row px-5">
        <p className="col"></p>
        <p className="col">Musing</p>
      </div>
      <div className="home-banner-2 px-5 row align-items-center ">
        <div className="col text-center">
          <img src={istock} alt="istock" height={200} />
          <h3 className="mt-5">Deep House</h3>
          <h5 className="mt-2">Tecno Bar</h5>
        </div>
        <div className="col">
          <p className="musing-crypto">
            $Musing is more than a crypto, It’s the paramount currency for
            music.
          </p>
          <p>Listen & Earn</p>
          <button className="linear-btn p-2 webplayer">
            Webplayer Option <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>
      <div className="media-text p-5">
        <div>
          <i class="fa-regular fa-paper-plane color-y fs-5 pe-2"></i>
          <i class="fa-brands fa-twitter color-y fs-5 pe-2"></i>
          <i class="fa-brands fa-facebook-f fs-5 color-y "></i>
        </div>
        <div className="media-text d-flex text-center pt-3 flex-column ">
          <p>
            MUSING, a decentralised space for Music NFTs, where digital universe
            blends with creative assets.
          </p>
          <div className="std-test mb-5">
            <button className="linear-btn  p-2">Studio Testnet</button>
          </div>
          <p>
            Artists, fans, managers, and labels united within a comprehensive
            ecosystem. Earn immediate royalties, explore exclusive content, mint
            and trade <span className="color-y"> Fantokens</span>, as well as purchase and sell NFTs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
