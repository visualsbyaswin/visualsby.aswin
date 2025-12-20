import { useRef, useState } from "react";

import "./music.css";
import { player } from "../../assets/assets";

export default function MusicCard() {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlay = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       audioRef.current.play();
//       setIsPlaying(true);
//     }
//   };
const audioref=useRef(null)
const [isPlaying,setIsPlaying]=useState(false);

const togglePlay=()=>{
    if(isPlaying) {
        audioref.current.pause();
        setIsPlaying(false)
    }else{
        audioref.current.play();
        setIsPlaying(true)
    }
}
  return (
    <div className="card-music">
      <div className="im">
        <img src={player.musicplayer} alt="cover" className="cardimg" />
        <div onClick={togglePlay} className="player-control">{isPlaying ? "⏸" : "▶"}</div>
      </div>
      <div className="info">
        <h4 className="nowPlaying">NOW PLAYING</h4>
        <h3 className="title">FADED (SONG)</h3>
        <p className="artist">SOURCE (ALAN WALKER)</p>
      </div>

      <audio ref={audioref} src={player.mp3file}></audio>
    </div>
  );
}
