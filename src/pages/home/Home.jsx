import Header from "../../components/header/Header";
import "./home.css";
import hip1 from '../../assets/hip.svg'
import flow from '../../assets/fl.svg'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="text-center text-white banner-text">
        <h1>Enjoy secure decentralised music</h1>
        <h1>
          Enriching the 🤝 <span className="banner-style">Artist & Fan</span>{" "}
          Relationship
        </h1>
        <h5 className="text-center m-4">
          Enjoy the power of decentralisation! Explore extensive library of
          tracks stored on a decentralised network, with enhanced security, and
          uninterrupted music-streaming{" "}
        </h5>
        <button className="linear-btn p-2 m-5">Experience music in web5</button>
      </div>
      <div className="home-content-one row">
        <div className="col text-white">
          <button className="linear-btn p-2 px-3 mb-3">NFTs</button>
          <h5>$MUSING, <br/> the best NFTs market place</h5>
        </div>
        <div className="col home-content-one-img d-flex">
          <img src={hip1} className="col hip" alt="hip1" />
          <img src={flow} className="col" alt="flow" />
        </div>
      </div>
    </div>
  );
};

export default Home;
