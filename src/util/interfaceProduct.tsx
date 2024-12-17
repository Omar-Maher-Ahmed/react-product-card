
import product7 from "../assets/Products/product7.png";



export interface Product {
    id: number;
    image?: string;
    title: string;
    category: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    }


export const Products: Product[] = [
{
id: 1,
image: "/src/assets/Products/product7.png",
title: "Gucci duffle bag",
category: "Clothes",
price: 960,
originalPrice: 1160,
discount: 35,
},
{
id: 2,
image: "/src/assets/Products/product7.png",
title: "RGB Liquid CPU Cooler",
category: "Headphones",
price: 1960,
},
{
id: 3,
image: "/src/assets/Products/product7.png",
title: "GP1 Shooter USB Gamepad",
category: "Gaming",
price: 550,
},
{
id: 4,
image: "/src/assets/Products/product7.png",
title: "Quilted Satin Jacket",
category: "Clothes",
price: 750,
},
{
id: 5,
image: "/src/assets/Products/product7.png",
title: "Gucci duffle bag",
category: "Clothes",
originalPrice: 1160,
discount: 25,
price: 960,
},
{
id: 6,
image: "/src/assets/Products/product7.png",
title: "Quilted Satin Jacket",
category: "Clothes",
price: 1160,
},
{
id: 7,
image: "/src/assets/Products/product7.png",
title: "Quilted Satin Jacket",
category: "Clothes",
price: 560,
},
{
id: 8,
image: "/src/assets/Products/product7.png",
title: "Quilted Satin Jacket",
category: "Clothes",
price: 200,
},
{
id: 9,
image: "/src/assets/Products/product7.png",
title: "Quilted Satin Jacket",
category: "Clothes",
price: 360,
},
{
id: 10,
image: "/src/assets/Products/product7.png",
title: "Quilted Satin Jacket",
category: "Clothes",
price: 960,
},
{
id: 11,
image: "/src/assets/Products/product7.png",
title: "Quilted Satin Jacket",
category: "Clothes",
price: 1160,
},
{
id: 12,
image: "/src/assets/Products/product7.png",
title: "Quilted Satin Jacket",
category: "Clothes",
price: 500,
},

];

