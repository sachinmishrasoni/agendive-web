import Icon from '@/components/common/Icon'
import { Button } from 'antd'
import React from 'react'

const AddButton = () => {
  return (
    <Button type='text' shape='round' size='large' className='!p-0 !pr-2.5 !bg-violet-100 border-2 !border-violet-200 hover:shadow-sm'>
      <div className='p-2.5 flex items-center justify-center bg-violet-200 rounded-full shadow-sm'>
        <Icon name="plus" size={20} />
      </div>
      <p>Create</p>
    </Button>
  )
}

export default AddButton