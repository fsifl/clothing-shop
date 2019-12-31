import hats from "../images/categories/hats.png";
import jackets from "../images/categories/jackets.png";
import men from "../images/categories/men.png";
import sneakers from "../images/categories/sneakers.png";
import womens from "../images/categories/womens.png";

export interface Icategories {
  title: string;
  imageUrl: string;
  id: number;
  size?: string;
  linkUrl: string;
}

export const categories: Icategories[] = [
  {
    title: "hats",
    imageUrl: hats,
    id: 1,
    linkUrl: "shop/hats"
  },
  {
    title: "jackets",
    imageUrl: jackets,
    id: 2,
    linkUrl: "shop/jackets"
  },
  {
    title: "sneakers",
    imageUrl: sneakers,
    id: 3,
    linkUrl: "shop/sneakers"
  },
  {
    title: "womens",
    imageUrl: womens,
    size: "large",
    id: 4,
    linkUrl: "shop/womens"
  },
  {
    title: "mens",
    imageUrl: men,
    size: "large",
    id: 5,
    linkUrl: "shop/mens"
  }
];
