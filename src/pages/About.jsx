function Home() {
  return (
    <section id="about" className="min-h-screen p-16 flex flex-col justify-center max-w-[1200px] mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-12 text-[#13294B]">About Me</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Welcome to my portfolio</h3>
            <p className="text-gray-600 mb-4">
              stuff
            </p>
            <p className="text-gray-600 mb-6">
              stuff
            </p>
            
            <div className="skills-section">
              <h4 className="text-lg font-semibold mb-3">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1D96CD]/10 text-[#13294B] px-3 py-1 rounded-full text-sm font-medium">None</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="profile-image-placeholder">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-6xl font-bold">
                NL
              </div>
              <p className="text-sm text-gray-500">Profile Photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
