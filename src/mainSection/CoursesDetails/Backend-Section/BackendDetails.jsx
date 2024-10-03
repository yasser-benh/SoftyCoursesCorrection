import Backend from "./Backend"

export default function BackendDetails () { 
    const coursArr = [{
        title:'Introduction To Node.JS',
        Discription :'Basic understanding of JavaScript is required, Any computer works — Windows, macOS or Linux',
        time:'8:30 AM - 12:00 PM',
        date:'Saturday, 03 Februrary',
        type :'Onsite/Online',
    },
    {title:'Introduction To Django',
        Discription:'Must be familiar with the basics of Python, Any computer works — Windows, macOS or Linux',
        time:'8:30 AM - 12:00 PM',
        date:'Soon',
        type :'Onsite/Online'}
    ]
        
    return (<> 
       {
        coursArr.map((cours) => <Backend cours={cours}/>)
       }

    
    </>)
}