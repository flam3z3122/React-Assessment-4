import React, { useState } from "react";
import { ContextApi } from './Context'
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import './Styles/main.css'


const AddStudent = () => {

    const navigate = useNavigate();

    const [info, setInfo] = useState({
        id: "",
        Name: "",
        Age: "",
        Course: "",
        Batch: ""
    })


    const [student, setStudent] = useContext(ContextApi);



    const handleSubmit = (e) => {
        e.preventDefault();
        if (info.Name, info.Age, info.Course, info.Batch === "") {
            alert("Please fill the data inside")
        }
        else {
            if (!info.id === "") {
                setStudent((prev) => prev.map((stud) => (stud.id === info.id) ?

                    {
                        "id": (student.length + 1).toString(),
                        "Name": info.Name,
                        "Age": info.Age,
                        "Course": info.Course,
                        "Batch": info.Batch
                    } : stud

                ))
            } else {
                const newinfo = { ...info, id: `${student.length + 1}` }
                setStudent([...student, newinfo])
            }
        }
        navigate("/students")
    }

    const handleChange = (e) => {
        const name = e.target.id
        const value = e.target.value
        setInfo({ ...info, [name]: value })
        console.log(info);
    }


    return (
        <div>

            <div className='d-flex justify-content-between mx-3 my-5'>
                <TextField className='mx-5' color="secondary" value={info.Name} onChange={handleChange} fullWidth id="Name" label="Name" />
                <TextField className='mx-5' color="secondary" value={info.Age} onChange={handleChange} fullWidth id="Age" label="Age" />
            </div>

            <div className='d-flex justify-content-between mx-3 my-5'>
                <TextField className='mx-5' color="secondary" value={info.Course} onChange={handleChange} fullWidth id="Course" label="Course" />
                <TextField className='mx-5' color="secondary" value={info.Batch} onChange={handleChange} fullWidth id="Batch" label="Batch" />
            </div>

            <div className='d-flex justify-content-end mx-5'>

                <button className="mx-4 close"><Link to="/students" style={{ textDecoration:"none",color:"black" }} > Close </Link> </button>
                <button className="mx-3 submit" onClick={handleSubmit}> Submit </button>
            </div>

        </div>
    )

}

export default AddStudent