import React from 'react'
import { Avatar, Badge, Button, Layout, theme } from 'antd';
import Icon from '../common/Icon';
import { FaVaadin } from 'react-icons/fa6';

const { Header: AntHeader } = Layout;

const Header = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <AntHeader style={{ padding: 0, position: 'sticky', top: 0, background: colorBgContainer }}
            className='!px-3 flex items-center justify-between !rounded-b-xl !border-b-2 md:!rounded-none z-50 shadow-sm'
        >
            <div className='flex items-center h-full'>
                <Button shape='circle' type='text' size='large' className='!w-12 !h-12 !text-violet-800'
                    // onClick={() => handleMenuBtn()}
                >
                    {/* <Icon name="menuleft" size={24} /> */}
                    <FaVaadin size={30} className='rotate-180' />
                </Button>
                <div className='leading-none select-none cursor-pointer px-2 pb-1.5 pt-0.5 rounded-md hover:bg-gray-100'>
                    <div className='flex items-center'>
                        <p className='text-xs'>Today</p>
                        <Icon name="arrowdown" size={12} />
                    </div>
                    <p className='font-bold text-2xl righteous-regular leading-5'>Todos</p>
                </div>
            </div>
            <div className='h-full flex items-center gap-1'>
                <Button shape='circle' type='text' size='large'>
                    <Icon name="search" size={20} />
                </Button>
                {/* <AddButton /> */}
                <Button shape='circle' type='text' size='large'>
                    <Badge count={3} size='small' offset={[-2, 2]}>
                        <Icon name="notification" size={20} />
                    </Badge>
                </Button>
                <Button shape='circle' type='text' size='large' className='border-2 border-violet-400'>
                    <Avatar size={40} shape='circle' icon={<Icon name="profile" size={20} />}
                        className='!bg-white !text-gray-500'
                    // src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
                    />
                </Button>
            </div>
        </AntHeader>
    )
}

export default Header