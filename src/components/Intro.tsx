export default function Intro() {
  return (
    <div id="home" className="px-3 sm:px-8 lg:px-20 mx-auto">
      <div className="absolute top-0 left-0 w-[200px] h-[300px] pointer-events-none z-0 bg-gradient-to-br from-white-500 via-gray-400 to-transparent blur-[200px] opacity-40 rounded-full" />
      <div className="sm:max-w-3xl rounded px-32 mx-5">
        <div className="text-4xl sm:text-5xl mb-4">🤭</div>

        <div className="text-gray-500 text-sm sm:text-base mb-3">
          Hola, I'm{' '}
          <span className="text-white/70 font-medium">Shorya</span> — developer, designer, and a lil bit of a creator.
        </div>

        <div className="text-gray-500 w-full text-sm sm:text-base">
          I'm currently a{' '}
          <span className="text-white/70 font-medium">Computer Science</span> student
          <div>
            and building{' '}
            <span className="text-white/70 font-medium">mymentalhealth.com</span> all on my own.
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-5 sm:flex-row items-start sm:items-center mt-10 space-y-4 sm:space-y-0 px-32 sm:space-x-10">
        {/* Contact Button */}
        <div className="flex items-center cursor-pointer text-[#5AAAFF] hover:text-[#4794e0] transition-colors duration-200">
          Contact
          <img src="/arr.svg" alt="arrow" className="ml-2 w-4 h-4" />
        </div>

        {/* View Resume Button */}
        <div className="flex items-center cursor-pointer text-[#BABABA] hover:text-[#9f9f9f] transition-colors duration-200">
          View Resume
          <img src="/arrow-up-right.svg" alt="arrow" className="ml-2 w-4 h-4" />
        </div>
      </div>

      <div className="flex mx-5 flex-col sm:flex-row sm:space-x-7 my-8 mb-2 px-32 text-gray-400 text-sm sm:text-base">
        <div>Projects</div>

        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <span>Tech Stack</span>
          <span className="w-1 h-1 rounded-full bg-blue-300 animate-ping"></span>
        </div>
      </div>

      <hr
        className="mx-auto my-2 w-[78%] h-[0.250px] bg-[#343643] border-0"
      />
    </div>
  );
}
