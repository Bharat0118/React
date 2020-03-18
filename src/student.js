import React from 'react';


const student=({ name , cls, rollno, subject})=>{
return (<div>
<h1 className="text-primary">Bharat's</h1>
<table border="1" className="App mt-3 text-center">
     <thead className="text-danger">
        <tr>
            <th>
                Name
            </th>
            <th>
                Class
            </th>
            <th>
                Rollno.
            </th>
            <th>
                Subject
            </th>
        </tr>
    </thead>
    <tbody className="text-primary">
        <td>{name}</td>
        <td>{cls}</td>
        <td>{rollno}</td>
        <td>{subject}</td>
    </tbody>
</table>
</div>
)}
export default student;