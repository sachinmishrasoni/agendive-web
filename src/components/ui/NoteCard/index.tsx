import Icon from '@/components/common/Icon'
import { Button, Dropdown, MenuProps } from 'antd'
import React from 'react'

const NoteCard = () => {
    const menuItes: MenuProps['items'] = [
        { key: '1', icon: <Icon name="edit" size={17} />, label: 'Edit' }, 
        { key: '2', icon: <Icon name="delete" size={17} />, label: 'Delete', danger: true },
        { key: '3', icon: <Icon name="share" size={17} />, label: 'Share' },
    ];
    return (
        <>
        {/* <div className='w-full bg-white p-3 rounded-lg shadow-sm space-y-2 border-b-2 border-violet-400'>
            <p className='font-bold text-xl leading-4'>Note Title</p>
            <p className='text-xs text-gray-500'>23 Feb 2023</p>

            <div className='w-full h-[150px] bg-gray-200 rounded-lg'></div>
        </div> */}
        <div className='w-full bg-white p-3 rounded-lg shadow-sm space-y-2 border-b-2 border-violet-400'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <div className='p-2.5 py rounded-full border-2 border-violet-400'>
                        {/* <p className='font-bold leading-5 text-lg'>24</p> */}
                        <Icon name="calendar" size={24} className='text-violet-400'/>
                    </div>
                    <div className='leading-4 ml-1'>
                        <p className='text-xs'>9:00 AM</p>
                        <p className='text-xs'>Feb 2023</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <Button shape='round' type='text' size='large'><Icon name="heart" size={20} /></Button>
                    <Dropdown arrow menu={{ items: menuItes }}>
                        <Button shape='circle' type='text' size='large' ><Icon name="more" size={20} /></Button>
                    </Dropdown>
                </div>
            </div>

            <div>
                <p className='font-bold text-xl'>Note Topic</p>
                <p className='text-md text-gray-500 line-clamp-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit eaque quaerat animi quae culpa unde pariatur maxime, reiciendis nisi libero nihil quasi repellat a. Sint soluta rerum eius facilis, voluptate fugit nam laborum fugiat optio saepe illo ipsam odio, eligendi, eveniet eos repudiandae? Eos neque necessitatibus tempora suscipit voluptate.</p>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <Icon name="people" size={15} className='text-violet-400' />
                    <p>03 Share</p>
                </div>
                {/* <Button shape='round' type='text' size='large'><Icon name="share" size={20} /></Button> */}
            </div>
        </div>
        </>
    )
}

export default NoteCard