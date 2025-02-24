"use client";
import React, { useState } from 'react'
import { Layout, Menu, MenuProps, theme, FloatButton } from 'antd'
import Icon from '@/components/common/Icon';
import { FaVaadin } from 'react-icons/fa6';
import { IconList } from '@/utils/iconList';
import { siderStyle } from '@/styles/layoutStyles';
import { usePathname, useRouter } from 'next/navigation';
import AppMenuDrawer from '@/components/appMenuDrawer';
import Header from './Header';
import BottomNav from './BottomNav';


const { Sider, Content } = Layout;
// const { useBreakpoint } = Grid;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname() || "";
    const [collapsed] = useState(true);
    const [openDrawer, setOpenDrawer] = useState(false);
    const {
        // token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // const screens = useBreakpoint();

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

    // const handleMenuBtn = () => {
    //     if (screens.md === false) {
    //         // Screen is smaller than md breakpoint (mobile)
    //         setOpenDrawer(!openDrawer);
    //     } else {
    //         // Screen is md or larger
    //         setCollapsed(!collapsed);
    //     }
    // };
    return (
        <Layout style={{ minHeight: '100vh' }}>
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
            <Layout>
                <Header />
                <Content className='pt-2 pb-16 md:pb-2 px-3 md:px-4'>
                    {children}
                </Content>

                <FloatButton className='!w-16 !h-16 md:!w-14 md:!h-14 !bottom-[70px] !right-[15px] ' shape='circle' type='primary' icon={<Icon name="plus" size={20} />} />
                <BottomNav />
                <AppMenuDrawer open={openDrawer} onClose={() => setOpenDrawer(!openDrawer)} />
            </Layout>
        </Layout>
    )
}

export default AppLayout