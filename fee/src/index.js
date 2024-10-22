import react from "react";
import reactdom from "react-dom"
import {App,Table,Card,Shuffle,Card1,Card2,User} from "./components"
import data from "./data.json"
import $ from "jquery"
let obj_arr1=data["obj-arr2"]
let obj_arr=data["obj-arr"]
Shuffle(obj_arr);
Shuffle(obj_arr1);
reactdom.render(
    <User name={data.name} />,document.getElementById("user-name")
)

reactdom.render(
    <div className="flex flex-wrap" >
        <Card name={obj_arr[0].name} link={obj_arr[0].link} ide={obj_arr[0].id}/>
        <Card name={obj_arr[1].name} link={obj_arr[1].link} ide={obj_arr[1].id}/>
        <Card name={obj_arr[2].name} link={obj_arr[2].link} ide={obj_arr[2].id}/>
        <Card name={obj_arr[3].name} link={obj_arr[3].link} ide={obj_arr[3].id}/>
        <Card name={obj_arr[4].name} link={obj_arr[4].link} ide={obj_arr[4].id}/>
        <Card name={obj_arr[5].name} link={obj_arr[5].link} ide={obj_arr[5].id}/>
    </div>,document.getElementById("middle-root1")
);

reactdom.render(
    <div className="flex flex-wrap">
        <Card name={obj_arr1[0].name} link={obj_arr1[0].link} />
        <Card name={obj_arr1[1].name} link={obj_arr1[1].link} />
        <Card name={obj_arr1[2].name} link={obj_arr1[2].link} />
        <Card name={obj_arr1[3].name} link={obj_arr1[3].link} />
        <Card name={obj_arr1[4].name} link={obj_arr1[4].link} />
        <Card name={obj_arr1[5].name} link={obj_arr1[5].link} />
    </div>,document.getElementById("middle-root2")
);






$("#sidebar").hide()
$("#brand").on("click",()=>{
    $("#sidebar").toggle("fast");
    $("#right").toggleClass("w-1/3").toggleClass("w-1/6");
})

let id_arr=[]
for (const id_d in data["obj-arr"]) {
    id_arr.push(data["obj-arr"][id_d].id);
}
// document.querySelectorAll("button").forEach(button => {
//     if(self.)
// })