"use client";
import React, { useState } from 'react'
import { Layout, Menu, MenuProps } from 'antd'
import { FaVaadin } from 'react-icons/fa6';
import { usePathname, useRouter } from 'next/navigation';
import { IconList } from '@/utils/iconList';
import { siderStyle } from '@/styles/layoutStyles';

const { Sider } = Layout;

const Sidebar = () => {
    const router = useRouter();
    const pathname = usePathname() || "";
    const [collapsed] = useState(true);

    const items: MenuProps['items'] = [
        {
            key: '/',
            icon: <IconList.home />,
            label: 'Home',
            onClick: () => router.push('/')
        },
        {
            key: '/blogs',
            icon: <IconList.blog />,
            label: 'Blogs'
        },
        {
            key: '/todos',
            icon: <IconList.todo />,
            label: 'Todos',
            onClick: () => router.push('/todos'),
            children: [
                {
                    key: '/todos/task',
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
            icon: <IconList.note />,
            label: 'Notes',
            onClick: () => router.push('/notes')
        },
        {
            key: '/projects',
            icon: <IconList.dashboard />,
            label: 'Projects'
        },
        {
            key: '/wallet',
            icon: <IconList.wallet />,
            label: 'Wallet'
        },
        {
            key: '/settings',
            icon: <IconList.settings />,
            label: 'Settings'
        },
    ];

    return (
        <Sider theme='light' trigger={null} collapsible collapsed={collapsed} style={siderStyle} className='hidden md:block'>
            <div className='h-[64px] px-2 flex items-center justify-center'>
                {
                    collapsed ? (
                        <div className='flex items-center justify-center p-4 rounded-full bg-gray-50'>
                            <FaVaadin size={25} className='rotate-180 text-violet-800' />
                        </div>
                    ) : (
                        <div className='w-full flex items-center justify-center gap-2 p-2 bg-gray-50 rounded-md'>
                            <FaVaadin size={24} className='rotate-180 text-violet-800' />
                            <p className='font-bold text-2xl righteous-regular'>Agendive</p>
                        </div>
                    )
                }
            </div>
            <Menu theme="light" selectedKeys={[pathname]} mode="inline" items={items} />
        </Sider>
    )
}

export default Sidebar