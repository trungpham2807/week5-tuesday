import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Result from './components/Results';
import CountButton from './components/CountButton';
import {Form, Button} from 'react-bootstrap'
import DatePicker from "react-datepicker";


function App(){
  // const [count, setCount] = useState(0); //[0,function]
  // const [email, setEmail] = useState(""); //[emptyS,function]
  // const [password, setPassword] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const [dataForm, setDataForm] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:"",
    gender:"",
    essay:"",
    date:"",
    age:"",
  })//[emptyS,function]
  // console.log(useState());
  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };
  // const handleDecrement = () => {
  //   setCount(count - 1);
  // };
  const {name, email, phone, password, age, essay, confirmPassword} = dataForm;
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = {email, password};
    console.log("data form", dataForm);
  }
  const handleEmail = (event) => {
    const newObj = {...dataForm};
    newObj.email = event.target.value
    setDataForm(newObj);
  }
  const handlePassword = (event) => {
    // const newObj = {...dataForm};
    // newObj.password = event.target.value
    // setDataForm(newObj);
    setDataForm({...dataForm, password: event.target.value});
  }
  const handlePhoneNumber = (event) => {
    const newObj = {...dataForm};
    newObj.phone = event.target.value
    setDataForm(newObj);
  }
 
  const handleOnChange = (event) => {
    console.log(event.target.name);
    const name = event.target.name; 
    setDataForm({...dataForm, [name]: event.target.value});
  }


  return (
  <div className="App">
<Form>
<Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Name" 
    name = "name"
    value={name}
    onChange = {handleOnChange}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              name="age"
              value={age}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicGender">
    <Form.Label>Gender</Form.Label>
    <Form.Check type="checkbox" label="Male" />
    <Form.Check type="checkbox" label="Female" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email" 
    placeholder="Enter email"
    name="email"
    onChange = {handleOnChange}
    value={email}
    required
     />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Date of Birth</Form.Label>
    <DatePicker selected={startDate} 
    onChange={(date) => setStartDate(date)}  
    />
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Check type="checkbox" placeholder="Enter your phone number" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


    </div>
  );
}
export default App;
    /* <button onClick ={handleDecrement}> - </button>
    <button onClick ={handleIncrement}> + </button> */

    // <CountButton  count = {count} setCount = {setCount} value={-1}/>
    // <CountButton  count = {count} setCount = {setCount} value={-10}/>
    // <Result count = {count}/>
    // <CountButton  count = {count} setCount = {setCount} value={1}/>
    // <CountButton  count = {count} setCount = {setCount} value={10}/>

    
//     <form onSubmit = {handleSubmit}>
//   <label for="email">Email:</label>
//   <input type="text" id="email" name="email" value={email} onChange = {handleEmail} />
//   <br />
//   <label for="password">Password:</label>
//   <input type="password" id="password" name = {password} onChange = {handlePassword}/>
//   <br />
//   <label for="phoneNumber">PhoneNumber:</label>
//   <input type="number" id="phoneNumber" name ="phone" onChange = {handleOnChange}/>
//   <br />
//   <button type="submit" value="Submit">
//     Submit
//   </button>
// </form>