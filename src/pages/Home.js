import EndlessDisc_Banner from "../assets/EndlessDisc_Banner";
import RadioPlayer from "../components/AudioPlayer";
import AddOption from "../components/AddOption";

const Home = () => {
  return (
    <div className="home page">
      <h1>Home</h1>
      <EndlessDisc_Banner width="80%" height="auto" />
      <br></br>
      <br></br>
      <audio controls>
        <source
          src="https://strm112.1.fm/back280s_mobile_mp3"
          type="audio/mpeg"
        />
      </audio>
      <ul>
        <AddOption />
      </ul>
    </div>
  );
};

export default Home;
