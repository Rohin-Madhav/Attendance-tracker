import React from "react";
import studentImg from '../assets/images/pexels-ron-lach-10646410.jpg';
import staffImg from '../assets/images/staff-meeting-group-young-modern-people-smart-casual-wear-discussing-something-while-working-creative-office-business-time.jpg';


function Home() {
  return (
    // Outer Container: Add a background, full screen height, and center content vertically and horizontally
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">

      {/* Main Content Wrapper: Use a grid layout to place text next to the images neatly */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">

        {/* Text Section */}
        <div className="text-center md:text-left p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Track The Attendance Here
          </h1>
          <p className="text-lg text-gray-600">
            Please utilize this interface to accurately record and manage attendance data.
          </p>
        </div>

        {/* Images Section: A nested grid for a collage effect */}
        <div className="grid grid-cols-2 gap-4">

          {/* Image 1: Students */}
          <div className="col-span-2">
            <img
              src={studentImg}
              alt="Students image"
              className="rounded-xl shadow-xl w-full object-cover h-64"
            />
          </div>

          {/* Image 2: Staff */}
          <div className="col-span-2">
            <img
              src={staffImg}
              alt="Staffs image"
              className="rounded-xl shadow-xl w-full object-cover h-64"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
