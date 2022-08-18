import React from 'react'
import './SubcardThree.css'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const SubcardThree = () => {
    const navigate = useNavigate()
    return (
        <>
            <div class="progress__container">
                <div class="circle__finished circle__after__finish" >1</div>
                <div class="circle__finished circle__after__finish">2</div>
                <div class="circle circle__finished circle__before">3</div>
                <div class="just__circle" style={{ color: "gray" }}>4</div>
            </div>
            <div className='Subcard SubcardThree'>
                <h2>How are you planning to use Eden?</h2>
                <h5>We'll streamline your setup experience accordingly.</h5>
                <div className="subcardThree__selecrtorCard">
                    <div className="subcardThree__selecrtorCard__1">
                        <BsFillPersonFill className='icon' />
                        <h3>For myself</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo</p>
                    </div>
                    <div className="subcardThree__selecrtorCard__2">
                        <IoIosPeople className='icon' />
                        <h3>With my team</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo</p>
                    </div>
                </div>
                <button className='btn' onClick={() => navigate('/fourthPage')} > create workspace</button>
            </div>
        </>
    )
}

export default SubcardThree