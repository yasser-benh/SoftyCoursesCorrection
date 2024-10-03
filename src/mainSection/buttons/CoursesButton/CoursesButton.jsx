import './CoursesButton.css'
import { useState } from 'react'
export default function Button ({name ,className , onClick}) {
    
return (
    <button className={className} onClick={onClick}>{name}</button>
)

}