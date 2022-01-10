import React from "react";
import { useState, useContext, useEffect } from "react";
import { ContextApi } from './Context'
import { Link, useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import './Styles/main.css'

const EditStudent = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useContext(ContextApi);

  const [info, setInfo] = useState({
    id: "",
    Name: "",
    Age: "",
    Course: "",
    Batch: ""
  })


  const handleChange = (e) => {
    const name = e.target.id
    const value = e.target.value
    setInfo({ ...info, [name]: value })
    console.log(info);
  }


  useEffect(() => {
    student.forEach((stud) => {
      if (stud.id === id) {
        console.log("Id Matched :", student.id, "=", id);

        setInfo({
          "Name": stud.Name,
          "Age": stud.Age,
          "Course": stud.Course,
          "Batch": stud.Batch
        });
      }
    });
  }, [id, student]);

  const handleSubmit = () => {

    if (info.Name === '' || info.Age === '' || info.Course === '' || info.Batch === '') {
      alert("Please fill the data inside")

    } else {
      setStudent((stud) =>
        student.map((value, index) =>
          value.id === id ? {
            id: id,
            Name: info.Name,
            Age: info.Age,
            Course: info.Course,
            Batch: info.Batch
          }
            : value
        ))

      navigate("/students");


    }
  };

  return (
    <div >

      <div className='d-flex justify-content-between mx-3 my-5'>
        <TextField className='mx-5' color="secondary" value={info.Name} onChange={handleChange} fullWidth id="Name" label="Name" />
        <TextField className='mx-5' color="secondary" value={info.Age} onChange={handleChange} fullWidth id="Age" label="Age" />
      </div>

      <div className='d-flex justify-content-between mx-3 my-5'>
        <TextField className='mx-5' color="secondary" value={info.Course} onChange={handleChange} fullWidth id="Course" label="Course" />
        <TextField className='mx-5' color="secondary" value={info.Batch} onChange={handleChange} fullWidth id="Batch" label="Batch" />
      </div>

      <div className='d-flex justify-content-end mx-5'>

        <button className="mx-4 close"><Link  style={{ textDecoration:"none",color:"black" }} to="/students" > Close </Link> </button>
        <button className="mx-3 submit" onClick={handleSubmit}> Submit </button>
      </div>
    </div>
  );
}

export default EditStudent;