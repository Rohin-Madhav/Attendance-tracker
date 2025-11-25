import React, { useEffect, useState } from 'react'

function StudentsList() {
 

  useEffect(()=>{
  const fetchStudents =  ()=>{
    try {
      const data = localStorage.getItem('studentList')
          console.log(data);    
    } catch (error) {
      console.log(error.message);
    }
  }
  fetchStudents()
  },[])
  return (
    <div>
     
    </div>
  )
}

export default StudentsList
