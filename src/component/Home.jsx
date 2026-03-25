import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Home = () => {

  const team = [
    {
      name: "चौधरी कैलाश चंद जैन",
      role: "चेयरमैन",
      image: `${assets.Cman}`
    },
    {
      name: "नीतेश राजपूत",
      role: "अध्यक्ष",
      image: `${assets.nitesh}`,
    },
    {
      name: "आशीष लोधी",
      role: "उपाध्यक्ष",
      image: `${assets.aashish}`,
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Header - Blue Bar */}
      <header className="bg-[#1a237e] text-white py-4 px-6 text-center shadow-lg">
        <h1 className="text-xl md:text-3xl font-bold tracking-wide leading-tight">
          खिरखिरी तुइयापानी स्पोर्ट्स क्लब, खिरखिरी के तत्वाधान में
        </h1>
        <p className="text-lg md:text-2xl mt-2 font-semibold">
          रात्रिकालीन क्रिकेट टूर्नामेंट
        </p>
      </header>

      <div className="max-w-6xl w-full px-4 mx-auto my-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            <span className="border-b-4 border-orange-500 pb-2">हमारी आयोजन समिति</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Photo Frame */}
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-xl mb-6 transform transition hover:scale-105">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Details */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-lg font-semibold text-orange-600 bg-orange-50 px-4 py-1 rounded-full mt-2 inline-block">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Main Hero Section */}
      <main className="flex flex-col items-center justify-center py-12 px-4">
        {/* League Logo & Title Container */}
        <div className="relative flex flex-col items-center max-w-4xl w-full border-4 border-orange-500 rounded-3xl p-8 bg-gradient-to-b from-orange-50 to-white shadow-2xl">

          {/* Season Badge */}
          <div className="absolute -top-6 bg-orange-600 text-white px-8 py-2 rounded-full font-black text-xl shadow-md">
            SEASON - 2.0
          </div>

          {/* Banner Content */}
          <div className="text-center mt-4">
            <h2 className="text-4xl md:text-7xl font-extrabold text-[#00a8cc] drop-shadow-sm mb-4">
              खिरखिरी प्रीमियर लीग <span className="text-orange-600">2026</span>
            </h2>

            <div className="relative group mb-10 mt-4">
              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

              <div className="relative">
                {/* Slanted Design (Skew) */}
                <div className="bg-black transform -skew-x-12 border-r-8 border-orange-500 px-8 py-4 shadow-2xl flex items-center justify-center">
                  <h3 className="transform skew-x-12 text-2xl md:text-5xl font-black tracking-tighter italic">
                    <span className="text-white">PLAYER'S </span>
                    <span className="text-orange-500">REGISTRATION</span>
                    <span className="text-white block md:inline md:ml-2">FORM</span>
                  </h3>
                </div>

                {/* Bottom Decorative Line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-1"></div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-6 mt-6 w-full justify-center">
            <Link to="/pay-to-register" className="group relative">
              <div className="absolute -inset-0.5 bg-orange-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <button className="relative bg-orange-600 hover:bg-orange-700 text-white text-2xl font-bold py-5 px-12 rounded-lg transition-all transform hover:scale-105 shadow-xl w-full">
                Register Now 🏏
              </button>
            </Link>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl w-full px-4">
          <div className="bg-blue-50 p-6 rounded-xl border-t-8 border-blue-800 shadow-sm text-center">
            <h4 className="text-blue-900 font-bold text-xl mb-2">Registration Fee</h4>
            <p className="text-3xl font-black text-gray-800">₹ 500</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl border-t-8 border-orange-500 shadow-sm text-center">
            <h4 className="text-orange-900 font-bold text-xl mb-2">Tournament Type</h4>
            <p className="text-3xl font-black text-gray-800">Night Match</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border-t-8 border-blue-800 shadow-sm text-center">
            <h4 className="text-blue-900 font-bold text-xl mb-2">Location</h4>
            <p className="text-2xl font-black text-gray-800">Tuiyapni Aganwadi Ground, khhirkhiri</p>
          </div>
        </div>
      </main>

      

      {/* Footer */}
      <footer className="mt-12 py-6 bg-gray-100 text-center border-t border-gray-300">
        <p className="text-gray-600 font-medium">© 2026 khhirkhiri Sports Club, khhirkhiri | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
