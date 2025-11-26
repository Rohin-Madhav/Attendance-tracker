import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='bg-sky-500/50 flex place-content-between p-4 px-8'>
        <div className='text-slate-900 text-lg font-bold'>
            <Link to={"/"}>Attendance Tracker</Link>
        </div>
        <div className='flex gap-3.5'>
            <Link className=' hover:text-white gap-2 ' to={"/addStudents"}>
            New Student
            </Link>
            <Link className=' hover:text-white' to={"/studentsList"}>
            Students List
            </Link>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
