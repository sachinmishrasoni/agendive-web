"use client";
import { Button } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IconList } from '@/utils/iconList';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
    { label: 'Home', icon: IconList.home, path: '/' },
    { label: 'Todos', icon: IconList.todo, path: '/todos' },
    { label: 'Projects', icon: IconList.dashboard, path: '/projects' },
    { label: 'Notes', icon: IconList.note, path: '/notes' },
    { label: 'Events', icon: IconList.calendar, path: '/events' },
    { label: 'Blogs', icon: IconList.blog, path: '/blogs' },
    { label: 'Wallet', icon: IconList.wallet, path: '/wallet' },
    { label: 'Settings', icon: IconList.settings, path: '/settings' },
];

const getSlidesPerView = (width: number) => {
    if (width < 150) return 1;
    if (width < 250) return 3;
    if (width < 350) return 3;
    if (width < 600) return 5;
    return 7;
};

const breakpoints = {
    0: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    150: {
        slidesPerView: 3,
        spaceBetween: 0,
    },
    250: {
        slidesPerView: 3,
        spaceBetween: 0,
    },
    350: {
        slidesPerView: 5,
        spaceBetween: 0,
    },
    600: {
        slidesPerView: 7,
        spaceBetween: 0,
    },
};

const BottomNav = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const router = useRouter();
    const pathname = usePathname() || "";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);
    // const [visibleSlides, setVisibleSlides] = useState(getSlidesPerView(window.innerWidth));
    const [isReady, setIsReady] = useState(false);

    const activeIndex = navItems.findIndex((item) => item.path === pathname);
    const [activeTab, setActiveTab] = useState(activeIndex >= 0 ? activeIndex : 0);

    useEffect(() => {
        setActiveTab(activeIndex >= 0 ? activeIndex : 0); // Update state if pathname changes
    }, [pathname]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setVisibleSlides(getSlidesPerView(window.innerWidth)); // Now safe to access window

            const handleResize = () => {
                setVisibleSlides(getSlidesPerView(window.innerWidth));
            };

            window.addEventListener("resize", handleResize);
            setIsReady(true); // Mark component as client-ready
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const handleItemClick = (index: number) => {
        setActiveTab(index);

        const path = navItems[index].path;
        router.push(path);

        if (swiperRef.current) {
            const lastVisibleIndex = currentIndex + visibleSlides - 1;
            const firstVisibleIndex = currentIndex;

            if (index >= lastVisibleIndex) {
                // If clicking last visible item, move forward
                swiperRef.current.slideNext();
            } else if (index <= firstVisibleIndex) {
                // If clicking first visible item, move backward
                swiperRef.current.slidePrev();
            }
        }
    };

    if (!isReady) return null;

    return (
        <nav className='bottom-nav min-h-14 fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center rounded-t-lg overflow-hidden md:hidden'>
            {/* Previous Button */}
            <Button type='text' className='!h-[100%] !py-5 !px-0.5 !rounded-none'
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={currentIndex === 0}
            >
                <IoIosArrowBack size={18} className={currentIndex === 0 ? 'text-gray-200' : ''} />
            </Button>

            {/* Navigation Items */}
            <Swiper
                slidesPerView={visibleSlides}
                // spaceBetween={5}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setVisibleSlides(swiper.params.slidesPerView as number || 1);
                }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                style={{ height: '100%' }}
                breakpoints={breakpoints}
                className="nav-swiper"
            >
                {navItems.map((item, index) => (
                    <SwiperSlide key={index} className=''>
                        <Button
                            type='text'
                            className='!w-full !h-full !py-2 !px-0.5 !rounded-full flex-col !gap-0 !text-gray-600 !relative'
                            size='large'
                            shape='circle'
                            icon={<item.icon size={24} className={`mt-0.5 z-10 transition-all duration-500 ${activeTab === index ? "!text-violet-800 rotate-6 scale-110" : ""}`} />}
                            // onClick={() => setActiveTab(index)}
                            onClick={() => handleItemClick(index)}

                        >
                            {activeTab === index && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute inset-0 bg-violet-50 rounded-full -z-10"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <p className={`text-[10px] leading-3 transition-all duration-700 ${activeTab === index ? '-translate-y-2 opacity-0' : 'opacity-100'}`}>{item.label}</p>
                            <p className={`text-[10px] leading-3 z-20 absolute bottom-[3px] bg-violet-800 text-white px-2 py-0.5 rounded-full transition-all duration-500 
                            ${activeTab === index ? 'opacity-100 translate-y-0' : 'translate-y-2 opacity-0'}`}>{item.label}</p>

                            {/* Active indicator */}
                            {activeTab === index && (
                                <motion.div
                                    className="absolute top-0 w-3 h-1 bg-violet-600 rounded-full"
                                    initial={{ y: -5, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: 'spring', duration: 1 }}
                                />
                            )}
                        </Button>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Next Button */}
            <Button
                type='text'
                className='!h-[100%] !py-5 !px-0.5 !rounded-none'
                onClick={() => swiperRef.current?.slideNext()}
                disabled={currentIndex + visibleSlides >= navItems.length}  // Properly detect last slide
            >
                <IoIosArrowForward size={18} className={currentIndex + visibleSlides >= navItems.length ? 'text-gray-200' : ''} />
            </Button>
        </nav>
    )
}

export default BottomNav