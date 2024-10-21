import react from "react";
import reactdom from "react-dom"

// export function Card(param){
//     return(
//         <div className={"bg-teal-300 text-yellow-200 p-2 m-4 w-40 rounded-md duration-200 hover:duration-200 hover:animate-ping "}>
//             <img src={param.link} ></img>
//             <p>{param.name}</p>
//         </div>
//     );
// }

export function App(param){
    return(
        <div className="navbar flex bg-black justify-between items-center p-6">
        <div className="brand font-serif text-white text-2xl">{param.name}</div>
        <div className="search-container flex items-center">
            <input type="text" name="search" placeholder="search" className="px-2 py-1 rounded"></input>
            <button type="submit" className="p-2 bg-gray-600 text-white rounded">
                <i className="fa fa-search"></i>
            </button>
        </div>
    </div>
    
    )
}


export function Table(){
       return(
        <table className="border  border-separate border-spacing-2 bg-black font-serif ">
        <tr>
            <td className="w-4/5 rounded-lg bg-gray-400 text-left px-40  hover:bg-gray-600 hover:duration-200 duration-200">
                 <div className="box1 text-white">Hits</div>
            </td>
          
            <td className="w-4/5 rounded-lg bg-gray-400 text-left px-40  hover:bg-gray-600 hover:duration-200 duration-200">
                <div className="box1 text-white">Liked Songs</div>
            </td>
        
            <td className="w-4/5 rounded-lg bg-gray-400 text-left px-40  hover:bg-gray-600 hover:duration-200 duration-200">
                <div className="box1 text-white">New Songs</div>
            </td>
    </tr>
    <tr>
            <td className="w-4/5 rounded-lg bg-gray-400 text-left px-40  hover:bg-gray-600 hover:duration-200 duration-200">
                <div className="box1 text-white">Karan Aujla</div>
            </td>
        
            <td className="w-4/5 rounded-lg bg-gray-400 text-left px-40  hover:bg-gray-600 hover:duration-200 duration-200">
                <div className="box1 text-white">Arijit Singh</div>
            </td>
        
            <td className="w-4/5 rounded-lg bg-gray-400 text-left px-40 hover:bg-gray-600 hover:duration-200 duration-200">
                <div className="box1 text-white">Sidhu Moosewala</div>
            </td>
        </tr>
    </table>
       )
}


export function Card(param){
    return(
        <div className={"bg-gray-400 text-white p-2 m-4 w-1/6 h-50 rounded-md hover:bg-gray-500 hover:duration-200 duration-200 "}>            
        <img src={param.link} classNAme="w-full h-full object-cover" ></img>
           <p className="text-center">{param.name}</p>
        </div>
    )
}


export function Shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) { 

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


export function Card1(param){
    return(
        <div> 
        <div className={"bg-gray-400 text-white p-2 m-4 w-1/6 rounded-md hover:bg-gray-500 hover:duration-200 duration-200"}>            
        <img src={param.link} classNAme="w-full h-full object-cover" ></img>
           <p className="text-center">{param.name}</p>
        </div>
        </div>
    )
}


export function Card2(param){
    return(
        <div className={"bg-gray-400 text-white p-2 m-4 w-1/6 rounded-md hover:bg-gray-500 hover:duration-200 duration-200"}>            
        <img src={param.link} classNAme="w-full h-full object-cover" ></img>
           <p className="text-center">{param.name}</p>
        </div>
    )
}

