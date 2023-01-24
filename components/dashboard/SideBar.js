import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { FaMobile } from 'react-icons/fa';
import { BiChevronsLeft } from 'react-icons/bi';
import { BiChevronsRight } from 'react-icons/bi';


const sidebarVariants = {
    sidebarOpen: {
        width: "260px",
        transition: {
            // when: "beforeChildren",
            // delay: 0.1,
        },
    },

    sidebarClosed: {
        width: "0px",
        transition: {
            delay: 0.1,

        }
    },

};

const LinkBoxVariants = {
    sidebarOpen: {
        x: '0',
        opacity: 1,
        transition: {
            // delay: 0.1,
            type: 'tween'
        }
    },
    sidebarClosed: {
        x: '-100vw',
        opacity: 0,
        transition: {
            delay: 0.1
        }
    },
};


const SideBar = () => {
    const [open, setOpen] = useState(true)
    const [rotate, setRotate] = useState(false)


    // sidebar toggler 
    const handleToggler = () => {
        setOpen(!open)
    }

    return (
        <div className="lg:block hidden relative">
            {/* toggler  */}
            <div className={`${open ? '' : 'absolute top-0 left-0 '} delay-500`}>
                <div>
                    <div className="text-2xl pl-2 text-white py-2 px-2 flex justify-center items-center bg-[#458fd0]">
                        {
                            !open ? <BiChevronsRight
                                onClick={() => handleToggler()}
                                className="cursor-pointer"
                            /> : <div>
                                <h4 className="text-2xl pl-2 text-white">
                                    <motion.span
                                        animate={{
                                            rotate: rotate ? 180 : 0
                                        }}
                                        transition={{ ease: 'easeInOut' }}
                                    >
                                        <BiChevronsLeft
                                            onClick={() => handleToggler()}
                                            className="cursor-pointer"

                                        />
                                    </motion.span>
                                </h4>
                            </div>
                        }

                    </div>
                </div>
            </div>
            {/* nav link  */}
            <motion.div
                variants={sidebarVariants}
                animate={open ? "sidebarOpen" : "sidebarClosed"}

                className='ml-0 bg-white'
            >
                <motion.div className='' variants={LinkBoxVariants}

                >
                    <div className="overflow-x-hidden sidebar dark:shadow-2xl  " >
                       
                        <div className="px-5 mt-16">
                            <motion.ul className=" h-[100vh]" >
                               
                                <div
                                    smooth to='/#about'
                                >
                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 220, } }}
                                        className="flex gap-2 dark:text-white dark:border-b-white mt-5 pb-3 text-[#212529] font-bold text-[18px] li-style justify-start items-center cursor-pointer"> <span className=""><FaUserAlt /></span> Customer List</motion.li>
                                </div>
                                <div
                                    smooth to='/#service'
                                >
                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 220, } }}
                                        className="flex gap-2 dark:text-white dark:border-b-white mt-5 pb-3 text-[#212529] font-bold text-[18px] li-style justify-start items-center cursor-pointer"><span className=""><BsFillGearFill /></span> Order List</motion.li>
                                </div>
                                <div
                                    smooth to='/#contact'
                                >
                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 220, } }}
                                        className="flex gap-2 dark:text-white dark:border-b-white mt-5 pb-3 text-[#212529] font-bold text-[18px] li-style justify-start items-center cursor-pointer"><span className=""><FaMobile /></span> Product List</motion.li>
                                </div>
                                <div
                                    smooth to='/#contact'
                                >
                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 220, } }}
                                        className="flex gap-2 dark:text-white dark:border-b-white mt-5 pb-3 text-[#212529] font-bold text-[18px] li-style justify-start items-center cursor-pointer"><span className=""><FaMobile /></span> Add Product</motion.li>
                                </div>
                               
                            </motion.ul>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SideBar;
