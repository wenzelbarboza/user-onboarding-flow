import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Subcard.css'

const Subcard = () => {
    const navigate = useNavigate()

    return (
        <>
            <div class="progress__container">
                <div class="circle circle__finished circle__before">1</div>
                <div class="circle" style={{ color: "gray" }} >2</div>
                <div class="circle" style={{ color: "gray" }}>3</div>
                <div class="just__circle" style={{ color: "gray" }}>4</div>
            </div>
            <div className='Subcard'>
                <h2>Welcome! First things first....</h2>
                <h5>you can always chang them later</h5>
                <form>
                    <label>steve jobs</label>
                    <input type="text" placeholder='enter name' />
                    <label>steve</label>
                    <input type="text" placeholder='disp name' />
                    <input type="submit" value="submit" className='btn' onClick={() => navigate('/secondPage')} />
                </form>
            </div>
        </>
    )
}

export default Subcard