
import React, { useState } from 'react'
import './Map1.css'

const personaldetails = [
    {id:1, name: "Anwar", role: "developer"},
    {id:2, name: "Farhan", role: "Tester"},
    {id:3, name: "Anwar Farhan", role: "HR"},

]




const sortemp = personaldetails.sort((a,b) => a.name.localeCompare(b.name))

const filtermap = personaldetails.filter((personaldetail) => (personaldetail.role === "Tester"))

const sortemps = personaldetails.sort((a,b) => (b.id) - (a.id))

const Map1 = () => {

    const [search, setSearch] = useState("")

    const filtername = personaldetails.filter((personaldetail) => 
    personaldetail.role.toLowerCase().includes(search.toLowerCase()))

  return (

    <div>

        <div>
            <label htmlFor="name">Employee Name: </label>
            <input type="text"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)} />
                   
                   {filtername.map((personaldetail) =>

            <div key={personaldetail.id}>
                {personaldetail.id} - {personaldetail.name} - {personaldetail.role}
            </div>)}
        </div>

     <br></br>
     <br></br>
     <br></br>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                </tr>
            </thead>
            
                <tbody>
                    {sortemp.map((personaldetail) => (
                        <tr key={personaldetail.id}>
                            <td>{personaldetail.id}</td>
                            <td>{personaldetail.name}</td>
                            <td>{personaldetail.role}</td>
                        </tr>

                    ))}
                    
                </tbody>
            
        </table>

        <br></br>
        <br></br>
        <br></br>



         <ul>
        {sortemp.map((personaldetail) => (
            <li key={personaldetail.id}>
                ID: {personaldetail.id}
                Name: {personaldetail.name}
                Role: {personaldetail.role}
            </li>

        ))}
      </ul>

      <br></br>
      <br></br>
      <br></br>

        <div>
            {sortemp.map((personaldetail ) => (

            <div key={personaldetail.id}>
                {personaldetail.id} - {personaldetail.name} - {personaldetail.role}
        </div>))}
     </div>

     <br></br>
     <br></br>
     <br></br>

      <div>
        {filtermap.map((personaldetail) => (
            <div key={personaldetail.id}>
                {personaldetail.id} - {personaldetail.name} - {personaldetail.role}

            </div>
        ))}
      </div>

      <br></br>
     <br></br>
     <br></br>

      <div>
            {sortemps.map((personaldetail ) => (

            <div key={personaldetail.id}>
                {personaldetail.id} - {personaldetail.name} - {personaldetail.role}
        </div>))}
     </div>

     <br></br>
     <br></br>
     <br></br>

    
    </div>
  )
}

export default Map1
