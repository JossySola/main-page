import { Link } from "react-router";
import { motion } from "framer-motion";

export default function MainMenu () {
    return <nav className="flex flex-col gap-4 m-5">
        <motion.div initial={{ scale: 1, x: -5 }} style={{ rotate: -10 }} whileHover={{ scale: 1.3 }} className="w-fit">
            <Link to="/art" className="
            relative bg-linear-to-tr from-blue-500 from-5% to-blue-300 to-100% text-white pl-3 pr-3 pt-2 pb-2 rounded-2xl text-2xl w-fit
            before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0 before:border-12 before:border-solid before:border-transparent before:border-b-0 before:border-l-0 before:border-t-blue-500 before:mb-[-7.8px] before:rotate-30">
                Art
            </Link>
        </motion.div>
        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.3 }} className="w-fit">
            <Link to="/portfolio" className="
            relative bg-linear-to-tr from-blue-500 from-5% to-blue-300 to-100% text-white pl-3 pr-3 pt-2 pb-2 rounded-2xl text-2xl w-fit
            before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0 before:border-12 before:border-solid before:border-transparent before:border-b-0 before:border-l-0 before:border-t-blue-500 before:mb-[-7.8px] before:rotate-30">
                Portfolio
            </Link>
        </motion.div>
        <motion.div initial={{ scale: 1 }} style={{ rotate: 380 }} whileHover={{ scale: 1.3 }} className="w-fit">
            <Link to="/contact" className="
            relative bg-linear-to-tr from-blue-500 from-5% to-blue-300 to-100% text-white pl-3 pr-3 pt-2 pb-2 rounded-2xl text-2xl w-fit
            before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0 before:border-12 before:border-solid before:border-transparent before:border-b-0 before:border-l-0 before:border-t-blue-500 before:mb-[-7.8px] before:rotate-30">
                Contact
            </Link>
        </motion.div>
    </nav>
}