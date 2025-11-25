import React, { useState } from "react";

function AddNew() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [calss, setClass] = useState("");
  const [division, setDivision] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudentData = {
      studentName: name,
      studentEmail: email,
      studentClass: calss,
      studentDivision: division,
      id: Date.now(),
    };

    const existingStudentData = localStorage.getItem("studentList");

    let existingStudents = [];
    if (existingStudentData) {
      try {
        const parsedData = JSON.parse(existingStudentData);

        if (Array.isArray(parsedData)) {
          existingStudents = parsedData;
        } else {
          console.warn(
            "Data in localStorage was not an array, overwriting with new list."
          );
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
    existingStudents.push(newStudentData);
    localStorage.setItem("studentList", JSON.stringify(existingStudents));
    console.log("Form Submitted!");
    console.log(existingStudents);
    setName("");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Add New Student
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6 space-y-6"
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              placeholder="Enter student name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              placeholder="Enter student email"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Class
              </label>
              <select
                value={calss}
                onChange={(e) => setClass(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition bg-white"
                required
              >
                <option value="">Select class</option>
                <option value="eight">8</option>
                <option value="nine">9</option>
                <option value="ten">10</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Division
              </label>
              <select
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition bg-white"
                required
              >
                <option value="">Select division</option>
                <option value="a">A</option>
                <option value="b">B</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-teal-700 cursor-pointer transition duration-200 focus:ring-4 focus:ring-teal-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNew;
