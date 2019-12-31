import * as React from "react";
import "./CollectionItem.styles.scss";

import { RouteComponentProps, withRouter } from "react-router-dom";

import { Icategories } from "../../assets/data/directory.data";

interface ICollectionItem extends Icategories, RouteComponentProps {}

const CollectionItem: React.FC<ICollectionItem> = ({
  id,
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match
}) => {
  const handleClick = (): void => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <div className={`${size ? "collection_item-large" : "collection_item"}`}>
      <div
        className={`${
          size ? "collection_item-large__img" : "collection_item__img"
        }`}
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="collection_item__title" onClick={handleClick}>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default withRouter(CollectionItem);
