import {BallCanvas} from "./Ball";
import {technologies} from "../constants"
import "../styles/SkillBalls.css"

const SkillBalls = () =>{
    return(
        // <div style="flex flex-row flex-wrap justify-center gap-10"></div>
        <div className="mainDiv">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div> 
            ))}
        </div>
    )
}

export default SkillBalls;