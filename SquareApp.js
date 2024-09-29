import {useState, useRef} from "react";
import axios from "axios";

function SquareApp(){
const rNum = useRef();
const [num, setNum] = useState("");
const [msg, setMsg] = useState("");

const hNum =(event)=>{setNum(event.target.value);}

const find = (event)=>{
event.preventDefault();

if(num === ""){
alert("Enter number");
setMsg("");
rNum.current.fovus();
return;
}

let url = "http://localhost:9000/find";
let data = {params : {number:num}};
axios.get(url, data)
.then(res=>{
setMsg(res.data.msg)
}).catch(err=>{setMsg("Error" +err);});
}

return(
<>
<center>
<h1>Sqaure Application</h1>
<form onSubmit = {find}>
<input type = "number" step = "any" placeholder = "Enter number" ref = {rNum} onChange = {hNum}/><br/><br/>
<input type = "submit" value = "Find Square"/>
</form>
<h2>{msg}</h2>
</center>
</>
)
}

export default SquareApp;