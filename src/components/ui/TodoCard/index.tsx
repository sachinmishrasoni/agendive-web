"use client";
import React, { useState } from 'react'
import Icon from '@/components/common/Icon'
import { Avatar, Badge, Button, Checkbox, Collapse, CollapseProps, Dropdown, MenuProps, Tag } from 'antd'
import { motion } from 'framer-motion';

const TodoCard = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const menuItes: MenuProps['items'] = [{ key: '1', icon: <Icon name="edit" size={17} />, label: 'Edit' }, { key: '2', icon: <Icon name="delete" size={17} />, label: 'Delete', danger: true }];

    const toggleExpand = () => {
        setIsExpanded(!isExpanded); // Toggle the state
    };

    const statusItem: MenuProps['items'] = [
        { key: '1', label: 'Pending', icon: <Icon name="pending" />, style: { color: 'red', }, },
        { key: '2', label: 'In Progress', icon: <Icon name="progress" />, style: { color: 'orange', } },
        { key: '3', label: 'Completed', icon: <Icon name="done" />, style: { color: 'green', } },
    ];

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <Checkbox className='circle-checkbox !text-lg !font-semibold' >Todo Name</Checkbox>,
            children: <div>
                <p className='!text-xs'>
                    Todo Description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a aut dolorem beatae magnam odit neque exercitationem tempore tenetur consequatur.
                </p>
                <div className='my-2'>
                    <div className='flex items-center justify-between'>
                        <p className='!text-md !font-semibold'>Sub Tasks (3)</p>
                        <Button shape="round" size='small' type='text'><Icon name="plus" size={20} /></Button>
                    </div>
                    <div className='space-y-2 px-2'>
                        {[1, 2, 3].map((item, index) => (
                            <div key={index} className='bg-white p-1.5 pl-4 mt-3 rounded-full flex items-center justify-between shadow-sm'>
                                <Checkbox className='circle-checkbox !text-md !rounded-full'>Sub Task {item}</Checkbox>
                                <div className='flex items-center gap-2'>
                                    <Button shape='circle' type='text' size='middle'>
                                        <Avatar size={25} style={{ backgroundColor: '#87d068' }}>JD</Avatar>
                                    </Button>
                                    {/* <Button shape='circle' type='text' size='middle'><Icon name="edit" size={18} /></Button> */}
                                    <Button shape='circle' type='text' size='middle'><Icon name="more" size={20} /></Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full bg-gray-200 p-3 rounded-lg shadow-sm'>
                    foter
                </div>
            </div>,
            extra: <div className='flex items-center gap-1'>
                <Tag className='!px-2 !py-[2px] !text-xs !rounded-full font-semibold' color='yellow'>Medium</Tag>
                <Dropdown menu={{ items: menuItes }}>
                    <Button shape='circle' type='text' size='small' ><Icon name="more" size={20} /></Button>
                </Dropdown>
            </div>
        }
    ]
    return (
        <>
            {/* <Collapse bordered={false} items={items} /> */}
            <main className='w-full bg-white p-3 rounded-lg shadow-sm border'>
                {/* Header */}
                <header className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        {/* <Button shape='circle' type='text' size='middle' onClick={() => toggleExpand()}>
                            <Icon name="arrowforward" size={18}
                                className={`transform transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-90' : 'rotate-0'
                                    }`} />
                        </Button> */}
                        <Button shape='circle' type='text' size='middle'>
                            <Icon name="done" size={24} />
                        </Button>
                        {/* <Checkbox className='circle-checkbox !text-lg !font-semibold' >Todo Name</Checkbox> */}
                        <p className='!text-lg !font-semibold'>Todo Name</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Badge count={3} color='red' size='small' />
                        <Tag className='!px-2 !py-0 !text-[10px] !rounded-full font-semibold' color='warning'>Medium</Tag>
                        {/* <Dropdown placement='bottomLeft' arrow={{ pointAtCenter: true }} menu={{ items: menuItes }}>
                            <Button shape='circle' type='text' size='small'><Icon name="more" size={20} /></Button>
                        </Dropdown> */}
                        <Button shape='circle' type='text' size='middle' onClick={() => toggleExpand()}>
                            <Icon name="arrowforward" size={18}
                                className={`transform transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-90' : 'rotate-0'
                                    }`} />
                        </Button>
                    </div>
                </header>
                <motion.section
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`overflow-hidden ${isExpanded ? 'mt-2 bg-gray-100 p-2 rounded-lg' : ''}`}
                >
                    <p className='!text-xs'>
                        Todo Description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a aut dolorem beatae magnam odit neque exercitationem tempore tenetur consequatur.
                    </p>
                    <div className='my-2'>
                        <div className='flex items-center justify-between'>
                            <p className='!text-md !font-semibold'>Sub Tasks (3)</p>
                            <Button shape="round" size='small' type='text'><Icon name="plus" size={20} /></Button>
                        </div>
                        <div className='space-y-2 px-2'>
                            {[1, 2, 3].map((item, index) => (
                                <div key={index} className='bg-white p-1.5 mt-3 rounded-full flex items-center justify-between shadow-sm'>
                                    {/* <Checkbox className='circle-checkbox !text-md !rounded-full'>Sub Task {item}</Checkbox> */}
                                    <Dropdown menu={{ items: statusItem, selectable: true, defaultSelectedKeys: ['1'] }} >
                                        <Button shape='circle' type='text' size='middle'>
                                            <Icon name="pending" size={24} />
                                        </Button>
                                    </Dropdown>
                                    <div className='flex items-center gap-2'>
                                        <Button shape='circle' type='text' size='middle'>
                                            <Avatar size={25} style={{ backgroundColor: '#87d068' }}>JD</Avatar>
                                        </Button>
                                        {/* <Button shape='circle' type='text' size='middle'><Icon name="edit" size={18} /></Button> */}
                                        <Button shape='circle' type='text' size='middle'><Icon name="more" size={20} /></Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>
                {/* footer */}
                {/* <footer className='flex items-center divide-x-2 w-full py-1.5'>
                    <div className='flex-1 text-center'>
                        <p>Feb 26</p>
                    </div>
                    <div className='flex-1 text-center'>
                        <Badge status="processing" text="In Progress" />
                    </div>
                    <div className='flex-1 text-center'>
                        <p>John Doe</p>
                    </div>
                </footer> */}
                <footer className='pl-2.5 pt-1.5 flex items-center justify-between'>
                    <Badge status="processing" text="In Progress" className='!text-xs' />
                    <Dropdown placement='bottomLeft' arrow={{ pointAtCenter: true }} menu={{ items: menuItes }}>
                        <Button shape='circle' type='text' ><Icon name="more" size={20} /></Button>
                    </Dropdown>
                </footer>
            </main>
        </>
    )
}

export default TodoCard