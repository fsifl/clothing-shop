import React from "react";
import { Icategories, categories } from "../../assets/data/directory.data";
import CollectionItem from "./CollectionItem";
import "./CategoriesLayout.styles.scss";

export interface CategoriesProps {
  collection: Icategories[];
}

const Categories: React.SFC<CategoriesProps> = ({
  collection = categories
}) => {
  return (
    <div className="catergories-layout">
      {collection.map((category: Icategories) => (
        <CollectionItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Categories;
