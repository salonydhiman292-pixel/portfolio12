import profilePic from '../assets/salonypic.jpeg'

function Hero3D() {
  return (
    <div className="h-[320px] w-full md:h-[420px] flex items-center justify-center">
      <img
        src={profilePic}
        alt="Profile"
        className="h-64 w-64 rounded-full object-cover shadow-lg"
      />
    </div>
  )
}

export default Hero3D
