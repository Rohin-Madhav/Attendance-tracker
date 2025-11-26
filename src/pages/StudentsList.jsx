import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function StudentsList() {
  const [studentData, setStudentData] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchStudents = () => {
      // Note: localStorage is not available in Claude artifacts
      // In your actual app, this will work fine
      const savedData = localStorage.getItem('studentList')
      if (savedData) {
        try {
          const parseData = JSON.parse(savedData)
          setStudentData(parseData)
          console.log(parseData);
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    fetchStudents()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to from-teal-50 to-teal-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-teal-800">Students List</h1>
          <div className="h-1 w-20 bg-teal-600 mt-2 rounded-full"></div>
          <p className="text-teal-600 mt-2">
            Total Students: <span className="font-semibold">{studentData.length}</span>
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to from-teal-500 to-teal-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Division
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-100">
                {studentData.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <svg className="w-16 h-16 text-teal-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <p className="text-gray-500 text-lg">No students found</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  studentData.map((s, index) => (
                    <tr 
                      key={s.id} 
                      className="hover:bg-teal-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {s.studentName?.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <span className="text-gray-800 font-medium">
                            {s.studentName}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                          {s.studentClass?.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                          {s.studentDivision?.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select className="px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition bg-white text-gray-700 text-sm">
                          <option value="">Select status</option>
                          <option value="present">Present</option>
                          <option value="absent">Absent</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => navigate(`/studentDetails/${s.id}`)}
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition duration-200 focus:ring-4 focus:ring-teal-300"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>View</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        {studentData.length > 0 && (
          <div className="mt-6 text-center text-sm text-teal-600">
            Showing {studentData.length} student{studentData.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentsList