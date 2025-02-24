"use client";
import React from "react";

const Loading = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-2">
            <div className='absolute top-4 text-center'>
                <p className='font-bold text-4xl righteous-regular'>Agendive</p>
                <q className='text-xs text-gray-600 font-bold'>The Hive for Your Agenda</q>
            </div>
            <div className="relative flex items-center justify-center h-[75px] w-[75px]">
                <div className="animate-spin rounded-full h-[75px] w-[75px] border-b-[4px] border-gray-900"></div>
            </div>
        </div>
    );
}

export default Loading