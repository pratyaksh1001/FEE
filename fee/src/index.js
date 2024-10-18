import react from "react";
import reactdom from "react-dom"
import {App,Table,Card,Shuffle,Card1,Card2} from "./components"

var obj_arr=[
    {link:"./karan.webp",name:"This is Karan Aujla"},
    {link:"./sidhu.webp",name:"Sidhu Moosewala"},
    {link:"./arijit.jpg",name:"Arijit Singh"},
    {link:"./taylor.jpg",name:"This is Taylor Swift"},
    {link:"./kumar.jpg",name:"Kumar Sanu"},
    {link:"./nimrat.jpg",name:"This is Nimrat Khaira"}
];

var obj_arr1=[
    {link:"./karan top.jpg",name:"Winning Speech"},
    {link:"./Khoobsurat.jpg",name:"Khoobsurat"},
    {link:"./naina.jpg",name:"Naina"},
    {link:"./summer.jpg",name:"Summertime Sadness"},
    {link:"./tauba.jpg",name:"Tauba Tauba"},
    {link:"case.jpg",name:"Case"}
];

var obj_arr2=[
    {link:"./diljit.avif",name:"Diljit Dosanjh"},
    {link:"./sunidhi.jpg",name:"Sunidhi chauhan"},
    {link:"./ed.jpg",name:"Ed Sheeran"},
    {link:"./mohit.jpg",name:"Mohit Chauhan"},
    {link:"./billie.jpg",name:"Billie Eiliesh"},
    {link:"./parmish.jpg",name:"Parmish Verma"},
]
Shuffle(obj_arr);
reactdom.render(
    <div>
        <App name={"Nirvana"}/>
        <Table/>
    </div>,document.getElementById("root1")
);
 
reactdom.render(
    <div className="flex">
        <Card name={obj_arr[0].name} link={obj_arr[0].link} />
        <Card name={obj_arr[1].name} link={obj_arr[1].link} />
        <Card name={obj_arr[2].name} link={obj_arr[2].link} />
        <Card name={obj_arr[3].name} link={obj_arr[3].link} />
        <Card name={obj_arr[4].name} link={obj_arr[4].link} />
        <Card name={obj_arr[5].name} link={obj_arr[5].link} />
    </div>,document.getElementById("root")
); 


reactdom.render(
    <div className="flex">
        <Card name={obj_arr1[0].name} link={obj_arr1[0].link} />
        <Card name={obj_arr1[1].name} link={obj_arr1[1].link} />
        <Card name={obj_arr1[2].name} link={obj_arr1[2].link} />
        <Card name={obj_arr1[3].name} link={obj_arr1[3].link} />
        <Card name={obj_arr1[4].name} link={obj_arr1[4].link} />
        <Card name={obj_arr1[5].name} link={obj_arr1[5].link} />
        </div>,document.getElementById("root2")
);


reactdom.render(
    <div className="flex">
        <Card name={obj_arr2[0].name} link={obj_arr2[0].link} />
        <Card name={obj_arr2[1].name} link={obj_arr2[1].link} />
        <Card name={obj_arr2[2].name} link={obj_arr2[2].link} />
        <Card name={obj_arr2[3].name} link={obj_arr2[3].link} />
        <Card name={obj_arr2[4].name} link={obj_arr2[4].link} />
        <Card name={obj_arr2[5].name} link={obj_arr2[5].link} />
        </div>,document.getElementById("root3")
);