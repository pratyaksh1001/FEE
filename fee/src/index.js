import react from "react";
import reactdom from "react-dom"
import {App,Table,Card,Shuffle,Card1,Card2,User} from "./components"
import data from "./data.json"
import $ from "jquery"
let obj_arr=[
    {link:"./karan.webp",name:"This is Karan Aujla"},
    {link:"./sidhu.webp",name:"Sidhu Moosewala"},
    {link:"./arijit.jpg",name:"Arijit Singh"},
    {link:"./taylor.jpg",name:"This is Taylor Swift"},
    {link:"./kumar.jpg",name:"Kumar Sanu"},
    {link:"./nimrat.jpg",name:"This is Nimrat Khaira"}
];
Shuffle(obj_arr);
reactdom.render(
    <User name={data.name} />,document.getElementById("user-name")
)

reactdom.render(
    <div className="flex">
        <Card name={obj_arr[0].name} link={obj_arr[0].link} />
        <Card name={obj_arr[1].name} link={obj_arr[1].link} />
        <Card name={obj_arr[2].name} link={obj_arr[2].link} />
        <Card name={obj_arr[3].name} link={obj_arr[3].link} />
        <Card name={obj_arr[4].name} link={obj_arr[4].link} />
        <Card name={obj_arr[5].name} link={obj_arr[5].link} />
    </div>,document.getElementById("middle-root1")
);







$("#sidebar").hide()
$("#brand").on("click",()=>{
    $("#sidebar").toggle("fast");
    $("#right").toggleClass("w-1/3").toggleClass("w-1/6");
})

