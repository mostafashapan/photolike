import React, {useState} from 'react'
import  Cat from '../img/dog.jpg'
import { FaRegSmileWink } from "react-icons/fa";
import { IoIosBody } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

export default function Likephoto() {


    const  mystyle={

        backgroundColor:"#0fb299",
        color:"",
        position:"center",
        width:"300px",
        pointer:"cursor"

    };


    const [like, setLike] = useState(false);
    const  onTogglelike=()=>{
        console.log("mostafa")


        if( ! like){
            {
                setLike(true)
            }
            }
          else
            {
                setLike(false)
            }



        }

    return (
        <>
        <div className="container text-center mt-5 bg-dark-subtleg" style={mystyle} >
            <div className="container"> likes   <span> number 0</span> </div>
            <div className="container " >  Likephoto </div>
            <img className="card-img " src={Cat} style={{height:"fit-content" }}/>

            <div className="container"   >
                <FaRegSmileWink size={70} />
                bhhhhhhhh
                { like ? (<AiFillHeart className="text-danger"
                    onClick={onTogglelike}  size={70} />):
               ( <CiHeart  size={70}  onClick={onTogglelike}/>)  }
            </div>


        </div>
            </>
    )
}
