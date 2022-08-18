import React from 'react'
import './SubcardTwo.css'
import { useNavigate } from 'react-router-dom'

const SubcardTwo = () => {
    const navigate = useNavigate()
    return (
        <>
            <div class="progress__container">
                <div class="circle__finished circle__after__finish" >1</div>
                <div class="circle circle__finished circle__before">2</div>
                <div class="circle" style={{ color: "gray" }}>3</div>
                <div class="just__circle" style={{ color: "gray" }}>4</div>
            </div>
            <div className='Subcard SubcardTwo'>
                <h2>Let's set up a home for all your work</h2>
                <h5>You can always create another workspace later</h5>
                <form>
                    <label>Workspace Name</label>
                    <input type="text" placeholder='Eden' />
                    <label>Workspace URL<span>(optional)</span></label>
                    <div className="subcardTwo__url">
                        <span>www.eden.com/</span>
                        <input type="text" placeholder='Example' />
                    </div>

                    <input type="submit" value="Create workspace" className='btn' onClick={() => navigate('/thirdPage')} />
                </form>
            </div>
        </>
    )
}

export default SubcardTwo