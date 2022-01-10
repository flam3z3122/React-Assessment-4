import React, { createContext } from "react";
import { useState } from "react";


export const ContextApi = createContext();

export const Studentdata = (props) => {
    const [student , setStudent] = useState([
    {    
        "id": "1",
        "Name": "John",
        "Age": "21",
        "Course": "MERN",
        "Batch": "Sep",
    },

    {
        "id": "2",
        "Name": "Madara",
        "Age": "32",
        "Course": "MERN",
        "Batch": "Oct"
    },

    {
        "id": "3",
        "Name": "Sahil",
        "Age": "24",
        "Course": "MERN",
        "Batch": "Sep"
    },

    {
        "id": "4",
        "Name": "Aneesh",
        "Age": "21",
        "Course": "MERN",
        "Batch": "Aug"
    },

    {
        "id": "5",
        "Name": "Gojo",
        "Age": "24",
        "Course": "MERN",
        "Batch": "Oct"
    },

    {
        "id": "6",
        "Name": "Obito",
        "Age": "19",
        "Course": "MERN",
        "Batch": "Aug"
    },
    ])

    return (
        <ContextApi.Provider value={[student , setStudent]}>
            {props.children}
        </ContextApi.Provider> 
    )
}

export default Studentdata