
import React, { useState } from 'react'

const employees = [
    {id:1, name: "Albert", role: "Developer", Company: "khkr"},
    {id:2, name: "ben", role: "tester", Company: "khkr"},
    {id:3, name: "lisa", role: "Hr", Company: "khkr"},
    {id:4, name: "kate", role: "manager", Company: "khkr"}
]

const sortingemp = employees.sort((a , b) => a.name.localeCompare(b.name))

const Mapandsort1 = () => {

    const [search, setSearch] = useState("")

    const filternames = employees.filter((employees) =>
    employees.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div>

        <div>
             <label htmlFor="name">Search Employee here: </label>
            <input type="text" 
                   value={search}
                   onChange={(e) => setSearch(e.target.value)} />
            {filternames.map((employee) => (
                <div key={employee.id}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>company</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.role}</td>
                                <td>{employee.Company}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            ))}
        </div>

        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Company</th>
                </tr>
            </thead>

            <tbody>
                {sortingemp.map((emp) => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.role}</td>
                        <td>{emp.Company}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Mapandsort1
