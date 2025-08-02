function P1() {
  return (
    <section id="projects" className="min-h-screen p-16 flex flex-col justify-center max-w-[1200px] mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-12 text-[#13294B]">My Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-8">
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_6px_-1px_rgba(19,41,75,0.1)] border border-[#1D96CD]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(19,41,75,0.15)]">
          <h3 className="text-xl font-semibold mb-4 text-[#13294B]">Project</h3>
          <p className="text-black mb-6">
            Desc
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-[#1D96CD]/10 text-[#13294B] px-3 py-1 rounded-full text-sm font-medium">Technologies</span>

          </div>
          <div className="flex gap-4">
            <a href="#" className="px-4 py-2 rounded-lg no-underline font-medium transition-all duration-300 bg-[#1D96CD] text-white hover:bg-[#13294B]">Live Demo</a>
            <a href="#" className="px-4 py-2 rounded-lg no-underline font-medium transition-all duration-300 border border-[#1D96CD] text-[#13294B] hover:bg-[#1D96CD]/10">GitHub</a>
          </div>
        </div>

        

        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_6px_-1px_rgba(19,41,75,0.1)] border border-[#1D96CD]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(19,41,75,0.15)]">
          <h3 className="text-xl font-semibold mb-4 text-[#13294B]">other project</h3>
          <p className="text-black mb-6">
            desc here
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-[#1D96CD]/10 text-[#13294B] px-3 py-1 rounded-full text-sm font-medium">technology</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="px-4 py-2 rounded-lg no-underline font-medium transition-all duration-300 bg-[#1D96CD] text-white hover:bg-[#13294B]">Live Demo</a>
            <a href="#" className="px-4 py-2 rounded-lg no-underline font-medium transition-all duration-300 border border-[#1D96CD] text-[#13294B] hover:bg-[#1D96CD]/10">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default P1
