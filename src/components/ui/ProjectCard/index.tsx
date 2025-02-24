import React from 'react'
import Icon from '@/components/common/Icon';
import { Avatar, Button, Progress, Tag } from 'antd';
import { IoIosMore } from "react-icons/io";

const ProjectCard = () => {
    return (
        <div className='project-card bg-white p-3 border rounded-lg shadow-lg space-y-2 cursor-pointer hover:bg-gray-50'>
            <div>
                <div className='flex items-start justify-between'>
                    <div>
                        <p className='text-sm text-violet-600 font-semibold'>Design</p>
                        <h3 className='text-xl font-bold'>Projects Name</h3>
                    </div>
                    <Button shape='circle' type='text' size='small'><IoIosMore size={20} /></Button>
                </div>
                <p className='text-sm text-gray-500 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex saepe ducimus explicabo in nemo, quisquam possimus temporibus optio maiores voluptatum ipsam architecto voluptates cumque numquam beatae dolor, animi debitis, quam a consequatur eveniet mollitia provident. Id placeat consectetur adipisci, nulla nisi reprehenderit neque illo impedit mollitia, esse veniam commodi.</p>
            </div>

            <div className='flex items-center justify-between gap-3'>
                <div className='flex items-center gap-2'>
                    <Icon name='calendar' className='text-violet-400' size={15} />
                    <p className='text-sm'>23 Feb 2023</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Icon name='flag' className='text-violet-400' size={15} />
                    <p className='text-sm'>23 March 2023</p>
                </div>
            </div>

            <div>
                <p className='text-sm font-semibold text-gray-500 leading-3'>Progress</p>
                <Progress percent={80} size={'small'} />
            </div>

            <div className='flex items-center justify-between'>
                <Avatar.Group size={30} max={{
                    count: 3,
                    style: {
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                        fontSize: '12px',
                        fontWeight: 'bold',
                    }
                }}>
                    <Avatar className='!bg-violet-100 !text-violet-800 !text-[12px] !font-semibold'>AN</Avatar>
                    <Avatar className='!bg-violet-100 !text-violet-800 !text-[12px] !font-semibold'>KF</Avatar>
                    <Avatar className='!bg-violet-100 !text-violet-800 !text-[12px] !font-semibold'>RY</Avatar>
                    <Avatar className='!bg-violet-100 !text-violet-800 !text-[12px] !font-semibold'>QW</Avatar>
                    <Avatar className='!bg-violet-100 !text-violet-800 !text-[12px] !font-semibold'>OP</Avatar>
                </Avatar.Group>

                <Tag className='!px-2 !py-[1px] !text-md !rounded-full font-semibold' color='cyan'>Pending</Tag>
            </div>
        </div>
    )
}

export default ProjectCard;