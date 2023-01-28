import { IProduct } from "../interfaces/products";

const categories: string[] = ["All products", "Packaging", "Drinware", "Apparel", "Notebooks", "Backpacks"];

const products: IProduct[] = [
  {
    id: "1",
    images: ["https://res.cloudinary.com/matiaskaufman/image/upload/v1674928231/mfs3rej4hffxy2x6fmew.jpg"],
    inStock: 34,
    title: "Notebook gamer",
    price: 2123,
    type: "notebooks",
  },
  {
    id: "2",
    images: ["https://res.cloudinary.com/matiaskaufman/image/upload/v1674928232/xfkdp1nxt4pvx4cgohd2.jpg"],
    inStock: 55,
    title: "Backpack modern",
    price: 1423,
    type: "backpacks",
  },
  {
    id: "4",
    images: ["https://res.cloudinary.com/matiaskaufman/image/upload/v1674928231/usac2rj4rx51qa0ogvix.jpg"],
    inStock: 39,
    title: "Shirt white men",
    price: 423,
    type: "apparel",
  },
  {
    id: "5",
    images: ["https://res.cloudinary.com/matiaskaufman/image/upload/v1674928231/duahtulgqphcwbqnab16.jpg"],
    inStock: 926,
    title: "Shirt black men",
    price: 543,
    type: "apparel",
  },
  {
    id: "6",
    images: ["https://res.cloudinary.com/matiaskaufman/image/upload/v1674928231/gnhi1dxbcki54nk5tiwb.jpg"],
    inStock: 97,
    title: "Backpack black",
    price: 123,
    type: "backpacks",
  },
  {
    id: "8",
    images: ["https://res.cloudinary.com/matiaskaufman/image/upload/v1674928231/nrsnetjz5lu13mqg3uzo.jpg"],
    inStock: 23,
    title: "Drinware happy smile",
    price: 523,
    type: "drinware",
  },
  {
    id: "9",
    images: ["https://res.cloudinary.com/matiaskaufman/image/upload/v1674928231/zfxp6fkwllwo3kv99xnk.jpg"],
    inStock: 5,
    title: "Shirt men dots",
    price: 623,
    type: "apparel",
  },
];

export { categories, products };
