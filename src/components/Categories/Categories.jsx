import React from 'react';
import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
    return (
      <Container>
        <div className="flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((category) => (
            <CategoryBox category={category} key={category.label}></CategoryBox>
          ))}
        </div>
      </Container>
    );
};

export default Categories;