import NavBar from "./NavBar"
import HeroSection from "./HeroSection"
import backgroundImage from "../assets/Hero.jpeg"

function Landing() {
return (
    <main className="">
        <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img src={ backgroundImage} alt="Background" className="w-full h-full object-cover" />
            {/* Overlay to darken the image slightly */}
            <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
            <NavBar />
            <HeroSection />
        </div>
        </div>
    </main>
)
}

export default Landing

