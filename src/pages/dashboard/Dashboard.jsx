import "./dashboard.css";
import vid from "../../assets/vidlibrary.svg";
import acc from "../../assets/acc.svg";
import top from "../../assets/top.png";
import explore from "../../assets/explore.svg";
import musimg from "../../assets/musimg.png";
import mic from "../../assets/mic.svg";
import queue from "../../assets/queue.svg";
import laptop from "../../assets/laptop.svg";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard row gap-3">
        <div className="side-bar row gap-3  col">
          <div className="side-links bg-white border-dash col">
            <div className="color-by p-3 my-2 rounded-3 fw-bold">
              {" "}
              <i class="fa-solid fa-house"></i> Home
            </div>
            <div className="my-2 p-3">
              <i class="fa-solid fa-magnifying-glass"></i> Search
            </div>
          </div>
          <div className="side-playlists p-3 border-dash bg-white col">
            <div className="top-head d-flex justify-content-between">
              <h5>Top Artist</h5>
              <div>
                <i class="fa-solid fa-plus pe-4"></i>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="playlist-content-1 d-flex justify-content-around">
              <button>Artists</button>
              <button>Playlist</button>
              <button>Album</button>
            </div>
            <div className="playlist-recent d-flex justify-content-between">
              <img src={vid} alt="libray-video" />
              <p>Recent</p>
            </div>
            <div className="playlist-list">
              <div className="list-pone d-flex gap-3">
                <div className="linear-btn img-p"></div>
                <div className="p-name">
                  <h5>November 2023</h5>
                  <p>
                    Playlist <sup>*</sup> Musing
                  </p>
                </div>
              </div>
              <div className="list-pone d-flex gap-3">
                <div className="linear-btn img-p"></div>
                <div className="p-name">
                  <h5>Top Songs 2023</h5>
                  <p>
                    Playlist <sup>*</sup> Musing
                  </p>
                </div>
              </div>
              <div className="list-pone d-flex gap-3">
                <div className="linear-btn img-p"></div>
                <div className="p-name">
                  <h5>Billy Elish</h5>
                  <p>
                    Playlist <sup>*</sup> Musing
                  </p>
                </div>
              </div>
              <div className="list-pone d-flex gap-3">
                <div className="linear-btn img-p"></div>
                <div className="p-name">
                  <h5>Travis Scott</h5>
                  <p>
                    Playlist <sup>*</sup> Musing
                  </p>
                </div>
              </div>
              <div className="list-pone d-flex gap-3">
                <div className="linear-btn img-p"></div>
                <div className="p-name">
                  <h5>Micheal Seven</h5>
                  <p>
                    Playlist <sup>*</sup> Musing
                  </p>
                </div>
              </div>
              <div className="list-pone d-flex gap-3">
                <div className="linear-btn img-p"></div>
                <div className="p-name">
                  <h5>Jean </h5>
                  <p>
                    Playlist <sup>*</sup> Musing
                  </p>
                </div>
              </div>
              <div className="list-pone d-flex gap-3">
                <div className="linear-btn img-p"></div>
                <div className="p-name">
                  <h5>Sundail </h5>
                  <p>
                    Playlist <sup>*</sup> Musing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-content py-5 border-dash col bg-white">
          <div className="dashboard-header d-flex align-items-center justify-content-between">
            <div className="arrow-icons">
              <i class="fa-solid fa-circle-chevron-left pe-4 "></i>
              <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
            <div className="acount-details d-flex gap-3">
              <div className="color-by px-2 py-1 rounded-4">Join Premium</div>
              <div className="bell bg-black rounded-5 text-center ">
                <i class="fa-regular fa-bell pt-2 text-white"></i>
              </div>
              <div className="bell bg-black rounded-5  text-center">
                <i class="far fa-user-friends  pt-2 text-white"></i>
              </div>
              <div className="rounded-5 text-center">
                <img src={acc} alt="acc" />
              </div>
            </div>
          </div>
          <h2 className="py-3">Hello Midey!</h2>
          <div className="latest d-flex">
            <div className="d-flex latest-content">
              <img src={top} alt="top" height={100} width={100} />
              <div className="color-by d-flex align-items-center px-3">
                <h5>Top 2023 Songs</h5>
              </div>
            </div>
            <div className="d-flex latest-content">
              <img src={top} alt="top" height={100} width={100} />
              <div className="color-by d-flex align-items-center px-3">
                <h5>Karoke Moment</h5>
              </div>
            </div>
            <div className="d-flex latest-content">
              <img src={top} alt="top" height={100} width={100} />
              <div className="color-by d-flex align-items-center px-3">
                <h5>Collections</h5>
              </div>
            </div>
            <div className="d-flex latest-content">
              <img src={top} alt="top" height={100} width={100} />
              <div className="color-by d-flex align-items-center px-3">
                <h5>Best of 2023 </h5>
              </div>
            </div>
            <div className="d-flex latest-content">
              <img src={top} alt="top" height={100} width={100} />
              <div className="color-by d-flex align-items-center px-3">
                <h5>Most Played</h5>
              </div>
            </div>
          </div>
          <div className="new m-4 text-center py-5">
            <h2>2023 Try Something New</h2>
            <p>Unleash the 2023 web5 protection kit</p>
            <div>
              <button className="color-by checkout px-5 py-1">
                Check it out{" "}
              </button>
            </div>
          </div>
          <div className="explore-container">
            <h5>Explore our NFTs</h5>
            <div className="explore-content d-flex gap-3 ">
              <img src={explore} alt="explore" className="rounded-2" />
              <img src={explore} alt="explore" className="rounded-2" />
              <img src={explore} alt="explore" className="rounded-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="musing-audio-bar d-flex justify-content-between color-by px-5 py-2">
        <div className="musing-one gap-2 d-flex">
          <img src={musimg} alt="pic" />
          <div className=" ">
            <h5>Musing</h5>
            <p className="text-white">Paul Bush</p>
          </div>
        </div>
        <div className="music-audio">
          <img src={mic} className="" alt="mic" />
          <img src={queue} className="" alt="queue" />
          <img src={laptop} className="" alt="laptop" />
          <audio controls>
            <source src="." type="audio/mp3" />
          </audio>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
