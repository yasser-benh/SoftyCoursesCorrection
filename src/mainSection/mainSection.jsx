import CoursesButton from './buttons/CoursesButton/CoursesButton'
import BackendDetails from './CoursesDetails/Backend-Section/BackendDetails'
import './mainSection.css'
import { useState } from 'react'
import Submit from './buttons/CoursesButton/submittButton/SubmitButton/Submit'
import { Routes, Route , Link } from 'react-router-dom'
export default function MainSection () { 
        const routesArr = [{
            path:'/Frontend',
            element:''
        },
        {
            path:'/ProgrammingLanguages',
            element:''
        },
        {
            path:'/Backend',
            element:<BackendDetails/>
        },
    ]
    const [isActive, setIsActive] = useState ('Frontend')

    

    return (<section className='main-container'>
        <div className='title'>
            <h1>Courses</h1>
            <p>Unbeatable prices, Starting from <span className="old-price">1299dt</span> <span className="new-price">799dt</span></p>
        </div>
            

        <div className='btns'>
            <Link to='frontend'><CoursesButton name ='Frontend Devlopment' className={ isActive == 'Frontend' ? 'courses-btn-active' : 'courses-btn'}
            onClick={()=> setIsActive ('Frontend')}/></Link>

            <Link to= 'ProgrammingLanguages'><CoursesButton name ='Programming Languages' className={ isActive == 'ProgrammingLanguages' ? 'courses-btn-active' : 'courses-btn'}
            onClick={()=> setIsActive ('ProgrammingLanguages')}/></Link>

            <Link to = 'Backend'><CoursesButton name ='Backend Devlopment'  className={ isActive == 'Backend' ? 'courses-btn-active' : 'courses-btn'}
            onClick={()=> setIsActive ('Backend')}/></Link>

        </div>
        
        <div className='details'>
        <Routes>
            {
                routesArr.map((route) =><Route path={route.path} element={route.element}/>)
            }
        </Routes>
        </div>
        
        <Submit name='Get in Touch'/>
       
    </section>)
}