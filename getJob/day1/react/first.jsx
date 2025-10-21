// React में controlled और uncontrolled components का फर्क बताओ example के साथ।

import { useState } from "react";

const app = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setProfileData({
        ...profileData,[name]:value
    })
  }
  return (
    <div className="flex item-center">
      <input
        name="name"
        type="text"
        value={profileData.name}
        onChange={(e)=>handleChange(e)}
      />
      <input
        name="email"
        type="email"
        value={profileData.email}
        onChange={(e)=>handleChange(e)}
      />
      <input
        name="age"
        type="number"
        value={profileData.age}
        onChange={(e)=>handleChange(e)}
      />
    </div>
  );
};

// for the uncontrolled conponent 

const app2=()=>{
    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const ageRef=useRef(null);

    const handleSubmit=()=>{
        console.log(nameRef.current.value,emailRef.current.value,ageRef.current.value)
    }
    return (
       <div>
           <input type="text" ref={nameRef}/>
           <input type="email" ref={emailRef}/>
           <input type="number" ref={ageRef}/>
           <button onClick={handleSubmit}>Submit</button>
       </div>
    )
}