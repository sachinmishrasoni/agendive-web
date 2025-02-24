import Icon from '@/components/common/Icon'
import { Avatar, Button } from 'antd'
import React from 'react'

const BlogCard = () => {
    return (
        <div className='blog-card w-full bg-white p-3 rounded-lg shadow-sm space-y-2'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <Avatar size={50} style={{ backgroundColor: '#87d068' }} >JN</Avatar>
                    <div className='ml-2'>
                        <p className='font-bold'>John Doe</p>
                        <p className='text-sm text-gray-500'>10th Jan 2023</p>
                    </div>
                </div>
                <Button shape='circle' type='text' size='large'><Icon name="more" size={24} /></Button>
            </div>
            <div className='w-full h-[200px] bg-gray-200 rounded-lg'></div>
            <div className=''>
                <p className='font-bold text-xl'>Blog Topic</p>
                <p className='text-md text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit eaque quaerat animi quae culpa unde pariatur maxime</p>
            </div>


            <div className='flex items-center divide-x-2 w-full pt-3'>
                <div className='flex-1 text-center'>
                    <Button shape='round' type='text' size='large'>
                        <Icon name="like" size={20} />
                        <p className=''>250</p>
                    </Button>
                </div>
                <div className='flex-1 text-center'>
                    <Button shape='round' type='text' size='large'>
                        <Icon name="comment" size={20} />
                        <p className=''>36</p>
                    </Button>
                </div>
                <div className='flex-1 text-center'>
                    <Button shape='round' type='text' size='large'>
                        <Icon name="share" size={20} />
                        <p className=''>8</p>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default BlogCard