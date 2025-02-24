"use client";
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { LuNotebookText } from "react-icons/lu";
import { FaRegSmile, FaRegHeart } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";

const icons = [
    { icon: <LuNotebookText size={35} />, key: "notebook" },
    { icon: <FaRegSmile size={35} />, key: "smile" },
    { icon: <FaRegHeart size={35} />, key: "heart" },
    { icon: <MdOutlineStar size={35} />, key: "star" },
    { icon: <IoIosRocket size={35} />, key: "rocket" },
];

const LoadingPage = () => {
    const [currentIconIndex, setCurrentIconIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, 2000); // Change icon every 1.5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-2">
            <div className='absolute top-4 text-center'>
                <p className='font-bold text-4xl righteous-regular'>Agendive</p>
                <q className='text-xs text-gray-600 font-bold'>The Hive for Your Agenda</q>
            </div>
            <div className="relative flex items-center justify-center h-[75px] w-[75px]">
                <div className="animate-spin rounded-full h-[75px] w-[75px] border-b-[4px] border-gray-900"></div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={icons[currentIconIndex].key}
                        initial={{ x: "50%", opacity: 0, scale: 0.5 }} // Start off-screen to the right
                        animate={{ x: 0, opacity: 1, scale: 1 }} // Move to center
                        exit={{ x: "-50%", opacity: 0, scale: 0.5 }} // Exit off-screen to the left
                        transition={{
                            duration: 0.8, // Smooth sliding duration
                            type: "tween",
                        }}
                        className="absolute flex items-center justify-center h-[50px] w-[50px] rounded-full bg-white"
                    >
                        {icons[currentIconIndex].icon}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className='absolute bottom-2 text-center'>
                <div className="flex divide-x divide-gray-300">
                    <p className="text-sm text-gray-500 px-2">All rights reserved</p>
                    <p className="text-sm text-gray-500 px-2">&copy; 2024 Agendive</p>
                </div>
            </div>
        </div>
    )
}

export default LoadingPage