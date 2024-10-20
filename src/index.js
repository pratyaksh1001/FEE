import react from "react"
import reactdom from "react-dom"


function Card(param){
    return(
        <div>
            <p>{param.name}</p>
        </div>
    )
}

reactdom.render(<Card name={"pratyaksh"}/>,document.getElementById("root"))