import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion" 

const Navbar = () => {
    return (
        <div className="navbar">
            {/*Sidebar*/}
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>My Portfolio</motion.span>
                <div className="social">
                    <a href="https://www.facebook.com/mark.n.dayrit/"><img src="/facebook.png" alt="" /></a>
                    <a href="https://www.instagram.com/niccollodeon/"><img src="/instagram.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar