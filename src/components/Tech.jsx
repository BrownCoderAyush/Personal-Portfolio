import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { BallCanvas, ComputersCanvas } from "./canvas"



const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
       {/* <div className="w-28 h-28">
          <BallCanvas icon={technologies[0].icon}/>
        </div> */}
    </div>
  )
}

export default SectionWrapper(Tech,"");