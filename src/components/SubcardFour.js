import React from 'react'
import './SubcardFour.css'
import { TiTick } from 'react-icons/ti'

const SubcardFour = () => {
    return (
        <>
            <div class="progress__container">
                <div class="circle__finished circle__after__finish" >1</div>
                <div class="circle__finished circle__after__finish">2</div>
                <div class="circle__finished circle__after__finish">3</div>
                <div class="just__circle__blue">4</div>
            </div>
            <div className='Subcard SubcardFour'>
                <TiTick className='SubcardFour__tick' />
                <h2>Congratulations, Eren!</h2>
                <h5>You have completed onboarding, you can start using the Eden!</h5>
                <button className='btn'>Launch Eden</button>
            </div>
        </>
    )
}

export default SubcardFour