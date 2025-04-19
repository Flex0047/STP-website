import Logo from "./Logo"

function NavBar() {
const navItems = ["Home", "History", "Vision", "Services" , "SChool"]

return (
    <header className="container mx-auto px-4 py-4">
    <div className="flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className=" md:block  ">
        <ul className="flex space-x-1 rounded-full bg-white/20 px-3 py-2 backdrop-blur-sm">
            {navItems.map((item) => (
            <li key={item}>
                <a href={`/${item.toLowerCase()}`} className="px-4 py-2 text-white hover:text-white/80">
                {item}
                </a>
            </li>
            ))}
        </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
        <a
            href="/sign-in"
            className="rounded-full bg-white/20 px-6 py-2 text-white backdrop-blur-sm transition hover:bg-white/30"
        >
            sign in
        </a>
        <a href="/sign-up" className="rounded-full bg-red-800 px-6 py-2 text-white transition hover:bg-red-700">
            sign up
        </a>
        </div>
    </div>
    </header>
)
}

export default NavBar
