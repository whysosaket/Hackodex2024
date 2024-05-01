import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

interface NavbarProps {
 setVisible: (value: boolean) => void
}


const Navbar: React.FunctionComponent<NavbarProps> = (props) => {

  const handleClick = () => {
    props.setVisible(true)
  }

  return (
    <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex justify-between px-12 py-3 border-b-white/20 border-b-2">
        <Link to="/" className="font-bold text-3xl">Hackodex</Link>
        <button onClick={handleClick} className="border border-[#4F00F6] px-6 rounded-xl font-semibold cursor-pointer hover:bg-white/10">
            Sign In
        </button>
    </motion.nav>
  )
}

export default Navbar