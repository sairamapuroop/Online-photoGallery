import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const Modal = ({ selectedImg,setSelectedImg }) => {

    const handleClick = (event) => {
        if(event.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImg} alt="clicked pic" 
                initial={{ y: "-100vh" }}
                animate={{ y: "0"}}
            />
        </motion.div>
    )
}

export default Modal;