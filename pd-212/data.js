// Данные карточек
export const data = [
  {
    id: "0",
    name: "Poäng Armchair",
    category: "Chair",
    description:
      "A comfortable armchair with a unique design, perfect for relaxation.",
    details: {
      features: [
        "Durable frame made of high-quality materials.",
        "Comfortable cushioning for extended seating.",
        "Ergonomic design for optimal support.",
        "Available in multiple upholstery options.",
        "Assembly required; tools and instructions included.",
      ],
      dimensions: {
        width: "75 cm",
        height: "95 cm",
        depth: "80 cm",
      },
      materials: ["Fabric upholstery", "Wooden frame"],
      careInstructions:
        "Regularly vacuum or brush to remove dust. Clean with a damp cloth if necessary.",
      colors: ["Blue", "Gray", "Beige"],
    },
    rating: "4.7",
    price: "79.99",
    imgSrc: "../assets/products/product-1.avif",
    isFavorite: true,
    cartQuantity: 1,
  },
  {
    id: "1",
    name: "MALM Bed Frame",
    category: "Bed",
    description:
      "A sturdy bed frame with a minimalist design, available in various sizes.",
    details: {
      features: [
        "Sturdy construction with solid wood.",
        "Available in different sizes and colors.",
        "Minimalist design for modern interiors.",
        "Adjustable bed sides for growing with the child.",
        "Easy to assemble; tools and instructions included.",
      ],
      dimensions: {
        width: "160 cm",
        length: "200 cm",
        height: "100 cm",
      },
      materials: ["Particleboard", "Fiberboard", "Solid wood"],
      careInstructions:
        "Wipe clean with a damp cloth. Use mild soap if necessary. Dry with a clean cloth.",
      colors: ["White", "Black", "Brown"],
    },
    rating: "4.3",
    price: "199.00",
    imgSrc: "../assets/products/product-2.avif",
    isFavorite: true,
    cartQuantity: 1,
  },
  {
    id: "2",
    name: "TÄRENDÖ Bench",
    category: "Bench",
    description:
      "A simple and practical bench suitable for both indoor and outdoor use.",
    details: {
      features: [
        "Made from solid pine, a natural and renewable material.",
        "Suitable for indoor and outdoor use.",
        "Easy to assemble; tools and instructions included.",
      ],
      dimensions: {
        width: "110 cm",
        height: "75 cm",
        depth: "35 cm",
      },
      materials: ["Solid pine"],
      careInstructions:
        "Wipe clean with a mild soapy solution. Wipe dry with a clean cloth.",
      colors: ["Natural wood"],
    },
    rating: "2.3",
    price: "29.99",
    imgSrc: "../assets/products/product-3.avif",
    isFavorite: false,
    cartQuantity: 1,
  },
  {
    id: "3",
    name: "HEMNES Bed Frame",
    category: "Bed",
    description:
      "A classic bed frame with storage options and a timeless design.",
    details: {
      features: [
        "Solid wood construction for durability and a natural feel.",
        "Ample storage space under the bed.",
        "Classic design that blends with various interior styles.",
        "Easy to assemble; tools and instructions included.",
      ],
      dimensions: {
        width: "160 cm",
        length: "200 cm",
        height: "110 cm",
      },
      materials: ["Solid pine", "Fiberboard"],
      careInstructions:
        "Wipe clean with a damp cloth. Wipe dry with a clean cloth.",
      colors: ["White stain", "Black-brown"],
    },
    rating: "3.8",
    price: "249.00",
    imgSrc: "../assets/products/product-4.avif",
    isFavorite: false,
    cartQuantity: 1,
  },
  {
    id: "4",
    name: "FLISAT Children's Bench",
    category: "Children's Furniture",
    description:
      "A small, sturdy bench designed specifically for children's use.",
    details: {
      features: [
        "Solid pine wood, a durable and renewable material.",
        "Designed for children's comfort and safety.",
        "Easy to assemble; tools and instructions included.",
      ],
      dimensions: {
        width: "62 cm",
        height: "35 cm",
        depth: "23 cm",
      },
      materials: ["Solid pine"],
      careInstructions:
        "Wipe clean with a mild soapy solution. Wipe dry with a clean cloth.",
      colors: ["Natural wood"],
    },
    rating: "1.0",
    price: "24.99",
    imgSrc: "../assets/products/product-5.avif",
    isFavorite: false,
    cartQuantity: 1,
  },
  {
    id: "5",
    name: "BRIMNES Bed Frame with Storage",
    category: "Bed",
    description:
      "A practical bed frame with ample storage space underneath, ideal for smaller bedrooms.",
    details: {
      features: [
        "Integrated storage space under the bed.",
        "Adjustable bed sides allow the use of mattresses of different thicknesses.",
        "Easy to assemble; tools and instructions included.",
      ],
      dimensions: {
        width: "140 cm",
        length: "200 cm",
        height: "47 cm",
      },
      materials: ["Particleboard", "Fiberboard"],
      careInstructions:
        "Wipe clean with a damp cloth. Wipe dry with a clean cloth.",
      colors: ["White", "Black"],
    },
    rating: "2.2",
    price: "349.00",
    imgSrc: "../assets/products/product-6.avif",
    isFavorite: false,
    cartQuantity: 1,
  },
  {
    id: "6",
    name: "FRIHETEN Sofa Bed",
    category: "Sofa Beds",
    description:
      "A versatile sofa bed with storage space and a comfortable design, perfect for smaller living spaces.",
    details: {
      features: [
        "Storage space under the chaise lounge.",
        "The lid stays open so you can safely and easily take things in and out.",
        "You can place the chaise lounge section to the left or right of the sofa, and switch whenever you like.",
        "Easy to assemble; tools and instructions included.",
      ],
      dimensions: {
        width: "230 cm",
        depth: "151 cm",
        height: "66 cm",
      },
      materials: ["Particleboard", "Fiberboard"],
      careInstructions:
        "Wipe clean with a damp cloth. Wipe dry with a clean cloth.",
      colors: ["Gray", "Dark gray"],
    },
    rating: "1.7",
    price: "599.00",
    imgSrc: "../assets/products/product-7.avif",
    isFavorite: true,
    cartQuantity: 1,
  },
  {
    id: "7",
    name: "SUNDVIK Children's Bed",
    category: "Children's Furniture",
    description:
      "A sturdy and safe bed designed for children, with a timeless design that grows with them.",
    details: {
      features: [
        "Solid pine wood, a durable and renewable material.",
        "Adjustable bed sides allow the use of mattresses of different thicknesses.",
        "Easy to assemble; tools and instructions included.",
      ],
      dimensions: {
        width: "70 cm",
        length: "160 cm",
        height: "80 cm",
      },
      materials: ["Solid pine"],
      careInstructions:
        "Wipe clean with a mild soapy solution. Wipe dry with a clean cloth.",
      colors: ["White"],
    },
    rating: "3.0",
    price: "129.00",
    imgSrc: "../assets/products/product-8.avif",
    isFavorite: false,
    cartQuantity: 1,
  },
];
