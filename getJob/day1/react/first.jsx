// React में controlled और uncontrolled components का फर्क बताओ example के साथ।


//=====> when to use the controlled component

// 1) when we need Real time validation  (email format, password strength, confirm password)
// 2) if form values jo hai ui ko effect kar rahe ho like (disabled/enabled or hide/show)
// 3) data submit karne se manipulte karna ho 
// 4) form library use hore hai like hook-form and formik

// I use controlled components when I need predictable state, instant validation, 
// and full control over form behavior.


// =====>Downside (mention once)
// Every keystroke → re-render
// Large forms → performance impact

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

// when do we need this type of forms 

// Simple forms where validation is minimal
// Large forms (performance matters)
// Third-party DOM based libraries
// date pickers
// file upload
// Legacy code integration
// One-time value read (on submit only)

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