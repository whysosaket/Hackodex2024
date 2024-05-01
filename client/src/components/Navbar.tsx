

const Navbar = () => {
  return (
    <nav className="flex justify-between px-12 py-3 border-b-white/20 border-b-2">
        <h1 className="font-bold text-3xl">Hackodex</h1>
        <button className="border border-[#4F00F6] px-6 rounded-xl font-semibold cursor-pointer hover:bg-white/10">
            Sign In
        </button>
    </nav>
  )
}

export default Navbar