import React, {useState} from "react";
import "./Amazed.css";
import Video from "../../../assets/video/BUGATTI.mp4";
import Bugatti from "../../../assets/img/Bugatti.png";
import Star from "../../../assets/img/Star1.svg";

function playVideo(isPlay){
    if (isPlay){
        document.getElementById('main_video').play()
    }
        else{
        // document.getElementById('main_video').pause();
        document.getElementById('main_video').load();
    }
}

export default function Amazed(){

    const [isPlay, setIsPlay] = useState(false);
    // let isPlay = false;

    return(

    <section className="amazed">
        <img className="star" src={Star} alt=""/>
            <div>
                <h1>Be amazed by the power</h1>
                <h3>Speed and economy together in one place, use and abuse your car's potential.</h3>
            </div>
            <video onClick={()=> {
                setIsPlay(!isPlay)
                playVideo(isPlay)
                }
            }
                   poster={Bugatti} id="main_video">
                <source src={Video} type="video/mp4"/>
            </video>
    </section>
);
}