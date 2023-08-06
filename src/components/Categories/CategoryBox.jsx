import qs from 'query-string';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
const CategoryBox = ({ category }) => {
  const { label } = category;
  const [params, setParams] = useSearchParams();
  const value = params.get('category');
  // console.log(value);
  const navigate = useNavigate()
  const hanldeQueryString = ()=> {
    let currentQuery = {};
    if(params){
      currentQuery = qs.parse(params.toString());
    };
    const updatedQuery = {
      ...currentQuery, 
      category: label,
    };
    const url= qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery
      },
      {skipNull: true}
    )
    navigate(url)
  }
  return (
    <div
      className="grid cursor-pointer place-items-center gap-2 p-3 border-b-2 hover:text-neutral-900 border-transparent text-neutral-400"
      onClick={hanldeQueryString}
    >
      <category.icon size={26}></category.icon>
      {category.label}
    </div>
  );
};

export default CategoryBox;