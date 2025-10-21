"use client"
import React, { useState } from 'react'

const Parent = () => {
    const [profileData,setProfileData]=useState({
        name:"",
        email:"",
        age:""
    })

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setProfileData(()=>({...profileData,[name]:value}))
    }
  return (
    <div>
       <input name='name' type="text" className='border' value={profileData.name} onChange={handleChange}/>
       <input name='email' type="text" className='border' value={profileData.email} onChange={handleChange}/>
       <input name='age' type="number" className='border' value={profileData.age} onChange={handleChange}/>
    </div>
  )
}

export default Parent

// import React, { useState } from "react";

// const SimpleForm = () => {
//   const [name, setName] = useState(""); // ek state banayi

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={name}          // input ka value state se aa raha hai
//         onChange={(e) => setName(e.target.value)} // input me change hote hi state update
//       />
//       <p>Your name is: {name}</p>
//     </div>
//   );
// };

// export default SimpleForm;

