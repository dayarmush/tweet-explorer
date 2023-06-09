import Buttons from "./Buttons";
import { useState } from "react";

function SignUp() {

  const blankForm = {
    'username': '',
    'password': '',
    'firstName': '',
    'lastName': '',
    'tweets': []
  }

  const [form, setForm] = useState(blankForm)

  function handleFormChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setForm(pre => {
      return {...pre, [key]: value}
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(r => r.json())
    .then(setForm(blankForm))
  }

  return ( 
    <div className="form">
      <form onSubmit={handleSubmit} className="form">      
        <input 
          type="text" 
          id="firstName"
          name="firstName" 
          placeholder="First Name" 
          value={form.firstName}
          onChange={handleFormChange}
        />

        <input 
          type="text" 
          id="lastName"
          name="lastName" 
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleFormChange}
        />

        <input 
          type="text" 
          id="username" 
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleFormChange}
        />

        <input 
          id="password"
          type="password" 
          name="password" 
          placeholder="Password"
          value={form.password}
          onChange={handleFormChange}
        />

        <Buttons text="Submit"/>
      </form>
    </div>
     );
}

export default SignUp;