"use client";
import Icon from '@/components/common/Icon'
import TodoCard from '@/components/ui/TodoCard'
import { Button, Checkbox, Input, Segmented } from 'antd'
import React, { useState } from 'react'

const TodoPage = () => {
  const [value, setValue] = useState<string | number>('Todos');
  // console.log(value, 'value');
  return (
    <main className='todo-page space-y-2 md:space-y-3'>
      {/* <div className='w-full bg-white p-2 rounded-full shadow-sm flex items-center justify-between'> */}
      <Segmented size='large' shape='round' block options={['All Task', 'Personal', 'Assigned', 'Shared']} value={value} onChange={setValue} />
      {/* </div> */}

      <Input
        placeholder='Add Todo'
        size='middle'
        suffix={<Button shape='circle' type='primary' size='large'><Icon name="plus" size={18} /></Button>}
        className='!text-lg shadow-sm !rounded-full !pr-1.5'
      />

      {/* <div className='w-full bg-white p-2 rounded-full shadow-sm flex items-center justify-between'>
        <Tag className='!px-2 !py-[2px] !text-md !rounded-full font-semibold' closable color='cyan'>Pending</Tag>

        <Button shape='circle' type='text' size='middle'>
          <Icon name="filter" size={20} />
        </Button>
      </div> */}


      {
        value === 'Todos' ? (
          <div className='space-y-2 md:space-y-3'>
            {
              Array(15).fill(0).map((_, index) => (
                <div key={index} className="w-full bg-white p-3 rounded-lg shadow-sm border flex items-center justify-between group">
                  <Checkbox className="circle-checkbox !text-lg !font-semibold">
                    Todo Name
                  </Checkbox>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button shape="circle" type="text" size="middle">
                      <Icon name="edit" size={18} />
                    </Button>
                    <Button shape="circle" type="text" size="middle">
                      <Icon name="delete" size={18} />
                    </Button>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <div className='space-y-2 md:space-y-3'>
            {
              Array(15).fill(0).map((_, index) => (
                <TodoCard key={index} />
              ))
            }
          </div>
        )
      }


    </main>
  )
}

export default TodoPage