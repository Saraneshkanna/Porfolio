import {BallCanvas} from "./Ball";
import {languages , gameDev, webDev, technologies} from "../constants"
import "../styles/SkillBalls.css"
import { Canvas } from "@react-three/fiber";
import {Perf} from 'r3f-perf'

const SkillBalls = () =>{
    return(
        // <div style="flex flex-row flex-wrap justify-center gap-10"></div>
        <div >
            <div className="mainDiv">
                {technologies.map((technology) => (
                    <div className="heart" key={technology.name}>
                        <BallCanvas icon1={technology.icon1} icon2={technology.icon2}/>
                        <p>{technology.name}</p>
                    </div> 
                ))}
            </div>
            {/* <div className="mainDiv">
                {gameDev.map((technology) => (
                    <div className="heart" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                        <p>{technology.name}</p>
                    </div> 
                ))}
            </div>
            <div className="mainDiv">
                {webDev.map((technology) => (
                    <div className="heart" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                        <p>{technology.name}</p>
                    </div> 
                ))}
            </div> */}
            
        </div>
    )
}

export default SkillBalls;