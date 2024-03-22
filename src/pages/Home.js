import EndlessDisc_Banner from "../assets/EndlessDisc_Banner";
import AudioPlayer from "../components/AudioPlayer";

const Home = () => {
    return (
      <div className="home page">
        <h1>Home</h1>
        <EndlessDisc_Banner width="80%" height="auto" />
        <br></br><br></br>
        <audio controls>
          <source src="https://strm112.1.fm/back280s_mobile_mp3" type="audio/mpeg" />
        </audio>
        <AudioPlayer src="https://strm112.1.fm/back280s_mobile_mp3" img="https://pea.fm/uploads/posts/2021-03/1615135575_1_fm-a-list-80s.png" title="Back to the 80's" artist="1.FM" />
      </div>
    );
  };
  
  export default Home;
  