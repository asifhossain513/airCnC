import React from 'react';

const CategoryBox = ({ category }) => {
  return (
    <div className="grid place-items-center gap-2 p-3 border-b-2 hover:text-neutral-900 border-transparent text-neutral-400">
        <category.icon size={26}></category.icon>
        {category.label}
    </div>
  )
};

export default CategoryBox;