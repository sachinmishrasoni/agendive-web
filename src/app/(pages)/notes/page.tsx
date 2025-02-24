import Icon from '@/components/common/Icon'
import NoteCard from '@/components/ui/NoteCard'
import { IconName } from '@/utils/iconList'
import { Segmented, SegmentedProps } from 'antd'
import React from 'react'

const NotesPage = () => {
  const cellComp = (label: string, iconName: IconName) => (
    <div className='flex flex-row md:flex-row items-center p-1'>
        <Icon name={iconName} size={20} />
        <p className='text-sm ml-2'>{label}</p>
      </div>
  );
  
const items: SegmentedProps['options'] = [
  {
    label: cellComp('All Notes', 'all'),
    value: 'all-notes',
  },
  {
    label: cellComp('Favorite', 'heart'),
    value: 'favorite',
  },
  {
    label: cellComp('Shared', 'people'),
    value: 'shared',
  },
  {
    label: cellComp('Private', 'lock'),
    value: 'private',
  },
]
return (
  <div className='space-y-2'>
    <div>
      <Segmented size='large' shape='round' block options={items} />
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {
        Array(10).fill(0).map((_, index) => (
          <NoteCard key={index} />
        ))
      }
    </div>
  </div>
)
}

export default NotesPage