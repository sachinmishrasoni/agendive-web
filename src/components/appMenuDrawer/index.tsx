"use client";
import { Avatar, Button, Divider, Drawer, Menu, MenuProps } from 'antd'
import React from 'react'
import Icon from '../common/Icon'
import { usePathname, useRouter } from 'next/navigation';

const AppMenuDrawer = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    const router = useRouter();
    const pathname = usePathname() || ""; 

    const navigate = (path: string) => {
        router.push(path);
        onClose();
    }
    const menuItems: MenuProps['items'] = [
        {
            key: '/',
            icon: <Icon name="home" />,
            label: 'Home',
            onClick: () => navigate('/')
        },
        {
            key: '/blog',
            icon: <Icon name="blog" />,
            label: 'Blog',
            onClick: () => navigate('/blogs')
        },
        {
            key: '/todos',
            icon: <Icon name="todo" />,
            label: 'My Todos',
            onClick: () => navigate('/todos'),
            children: [
                {
                    key: '/todos/task',
                    icon: <Icon name="todo" />,
                    label: 'Todos',
                    // onClick: () => router.push('/todos/active')
                },
                {
                    key: '/todos/completed',
                    label: 'Shared Todos',
                    // onClick: () => router.push('/todos/completed')
                },
            ]
        },
        {
            key: '/notes',
            icon: <Icon name="note" size={22} />,
            label: 'Notes',
            onClick: () => navigate('/notes')
        },
        {
            key: '/projects',
            icon: <Icon name="dashboard" size={22} />,
            label: 'Projects',
            onClick: () => navigate('/projects')
        },
        {
            key: '/money-manager',
            icon: <Icon name="wallet" size={22} />,
            label: 'Money Manager',
            onClick: () => navigate('/money-manager')
        },
        {
            key: '/settings',
            icon: <Icon name="settings" />,
            label: 'Settings',
            onClick: () => navigate('/settings')
        },
    ]
    return (
        <Drawer
            open={open}
            onClose={onClose}
            title={<p className='font-bold text-2xl font-righteous'>Agendive</p>}
            placement='left'
            width={325}
            closable={false}
            extra={<Button type='text' shape='circle' size='middle' onClick={onClose}><Icon name="close" size={24} /></Button>}
            footer={
                <Button
                    type='primary'
                    className='w-full text-sm !rounded-full !bg-violet-600 !py-5'
                >Logout</Button>
            }
        >
            <div className='w-full p-3 bg-gray-100 rounded-lg flex flex-col items-center'>
                <Avatar size={65} icon={<Icon name="profile" size={40} color="black" />} />
                <p className='font-bold text-lg'>Good morning, John Doe</p>
            </div>

            <Divider orientation="left" orientationMargin={5} className='font-semibold !my-2'>Menu</Divider>

            <Menu mode="inline" items={menuItems} style={{ border: 'none' }} selectedKeys={[pathname]} />
            {/* Menu Items */}
            {/* <div className='space-y-2'>
                {
                    menuItems.map((item, index) => (
                        <div key={index}
                            className='flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg cursor-pointer'

                        >
                            {item.icon}
                            <p className='font-semibold text-lg md:text-sm'>{item.label}</p>
                        </div>
                    ))
                }
            </div> */}
        </Drawer>
    )
}

export default AppMenuDrawer