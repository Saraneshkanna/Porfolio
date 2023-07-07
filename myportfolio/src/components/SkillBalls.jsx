import {BallCanvas} from "./Ball";
import {technologies} from "../constants"
import "../styles/SkillBalls.css"

const SkillBalls = () =>{
    return(
        // <div style="flex flex-row flex-wrap justify-center gap-10"></div>
        <div className="mainDiv">
            {technologies.map((technology) => (
                <div className="heart" key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                    <p>{technology.name}</p>
                </div> 
            ))}
        </div>
    )
}

export default SkillBalls;