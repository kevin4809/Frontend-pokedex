import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/user.slice';
import trainer from '../assets/trainer.png'
import { RiSendPlaneFill } from "react-icons/ri";
import letter from '../assets/letter.png'
const UserInput = () => {

    const [userName, setUserName] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getName = () => {
        dispatch(changeName(userName))
        navigate("/pokemons")
    }

    return (
        <div className="all-content-userInput">
            <img className='letter-pokemon img-fluid mx-auto d-block' src={letter} alt="" />
            <div className='container position-absolute top-50 start-50 translate-middle '>
                <div className="card text-center card-inpunt" >
                    <h1 className='tittle-input-card'>Hello trainer!!</h1>
                    <h3 >Give me your name to start</h3>
                    <img className='img-fluid position-absolute top-50 start-100 translate-middle img-trainer' src={trainer} alt="" />
                    <div className='card-body'>
                        <input
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                        />
                         <button  onClick={getName}><RiSendPlaneFill /></button>
                    </div>

                </div>



            </div>
        </div>




    )
}

export default UserInput