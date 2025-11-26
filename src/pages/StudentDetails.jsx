import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function StudentDetails() {
  const { id } = useParams()
  const [details, setDetails] = useState({})

  useEffect(() => {
    const fetchDetails = () => {
      try {
        
        const sevedDetailsString = localStorage.getItem("studentList")
        if (sevedDetailsString) {
          const detailsArray = JSON.parse(sevedDetailsString)
          const foundData = detailsArray.find(i => i.id === parseInt(id))
          setDetails(foundData)
          console.log(foundData)
        } else {
          console.log("no data found")
        }
      } catch (error) {
        console.error("Data fetching err", error);
      }
    }
    fetchDetails()
  }, [id])

  return (
    <div className="min-h-screen gradient-to-br from-teal-50 to-teal-100 p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-teal-800">Profile Card</h1>
          <div className="h-1 w-20 bg-teal-600 mt-2 rounded-full"></div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to from-teal-500 to-teal-600 h-32"></div>
          
          {/* Card Content */}
          <div className="px-8 py-6 -mt-16">
            {/* Avatar Placeholder */}
            <div className="w-32 h-32 bg-teal-700 rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-6">
              <span className="text-4xl font-bold text-white">
                {details.studentName?.charAt(0).toUpperCase()}
              </span>
            </div>

            {/* Student Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-1">
                  {details.studentName}
                </h2>
                <p className="text-sm text-teal-600 font-medium">
                  Student ID: {details.id}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Email</p>
                      <p className="text-sm text-gray-800 font-semibold">{details.studentEmail}</p>
                    </div>
                  </div>
                </div>

                {/* Class */}
                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Class</p>
                      <p className="text-sm text-gray-800 font-semibold">
                        {details.studentClass?.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Division */}
                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200 md:col-span-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Division</p>
                      <p className="text-sm text-gray-800 font-semibold">
                        Division {details.studentDivision?.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails