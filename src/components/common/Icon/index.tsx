import { IconList, IconName } from '@/utils/iconList';
import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '', className }) => {
  const IconComponent = IconList[name] as IconType;

  if (!IconComponent) {
    return <span>Icon not found</span>;
  }

  return <IconComponent className={className} size={size} color={color} />;
};

export default Icon;
