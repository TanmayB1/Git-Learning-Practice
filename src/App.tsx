

import DrawSvg from "draw-fill-svgs"

const App=()=>{

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="445" height="296" viewBox="0 0 845 596" className="ai-assistance-svg" fill="none">
      <DrawSvg fillStyle={{fill:"black",fillMode:"forwards",delay:"3s",duration:"1s"}} drawStyle={{stroke:"red",strokeWidth:"2px",duration:"3s",delay:"0s",fillMode:"forwards"}}>
      <g>
        <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
        </g>
      </DrawSvg>
      </svg>
    </div>
  )
}

export default App