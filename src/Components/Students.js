import React, { useContext } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import './Styles/main.css'
import { ContextApi } from './Context'
import { NavLink , useNavigate } from "react-router-dom";


const Students = () => {

   
    const [student] = useContext(ContextApi) ;
    
    return (
      <div>
          <div className="heading" >
                <h1 className="studHeading">Student Details</h1>
                <button className="addStudent btn" > <NavLink  style={{ textDecoration:"none" , color: "white" }} to="/addstudent">Add New Student</NavLink></button>
          </div>

        <div className="table">

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> <strong>Name</strong></TableCell>
                            <TableCell align="right"><strong>Age</strong></TableCell>
                            <TableCell align="right"><strong>Course</strong></TableCell>
                            <TableCell align="right"><strong>Batch</strong></TableCell>
                            <TableCell align="right"><strong>Edit</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {student.map((stud) => (
                            <TableRow
                                key={stud.id}
                             
                            >
                                <TableCell component="th" scope="row"> {stud.Name}</TableCell>
                                <TableCell align="right">{stud.Age}</TableCell>
                                <TableCell align="right">{stud.Course}</TableCell>
                                <TableCell align="right">{stud.Batch}</TableCell>
                                <TableCell align="right"> <NavLink to={`/addstudent/${stud.id}`}>Edit</NavLink> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            </div>

        </div>    
    )
}

export default Students




