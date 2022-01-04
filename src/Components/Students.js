import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import './Styles/main.css'


const rows = [
    {
        "Id": "1",
        "Name": "John",
        "Age": "21",
        "Course": "MERN",
        "Batch": "2021",
    },

    {
        "Id": "2",
        "Name": "Madara",
        "Age": "32",
        "Course": "MERN",
        "Batch": "2017"
    },

    {
        "Id": "3",
        "Name": "Sahil",
        "Age": "24",
        "Course": "MERN",
        "Batch": "2021"
    },

    {
        "Id": "4",
        "Name": "Aneesh",
        "Age": "21",
        "Course": "MERN",
        "Batch": "2019"
    },

    {
        "Id": "5",
        "Name": "Gojo",
        "Age": "24",
        "Course": "MERN",
        "Batch": "2017"
    },

    {
        "Id": "6",
        "Name": "Obito",
        "Age": "19",
        "Course": "MERN",
        "Batch": "2020"
    },

];



const Students = () => {
    return (
      <div>
          <div className="heading" >
                <h1 className="studHeading">Student Details</h1>
                <button className="addStudent btn">Add New Student</button>
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.Id}
                             
                            >
                                <TableCell component="th" scope="row"> {row.Name}</TableCell>
                                <TableCell align="right">{row.Age}</TableCell>
                                <TableCell align="right">{row.Course}</TableCell>
                                <TableCell align="right">{row.Batch}</TableCell>
                                <TableCell align="right"> <Link to="">Edit</Link> </TableCell>
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




