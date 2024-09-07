# QuickShop Store

QuickShop Store is a streamlined e-commerce web application designed to offer users a seamless shopping experience. Built using modern web technologies, this app allows users to browse a wide selection of products, view detailed information, and manage their shopping carts efficiently. The system is engineered to ensure data persistence and responsiveness, delivering an optimal user experience across devices.
## Features

  1. **Product List Page:**

    👉 Display a list of products fetched from an external API.

    👉 Each product shows essentials details: title, image, price, and a brief description.

    👉 "Add to Cart" button for quick product selection.

  2. **Product Details Page:**

    👉 Display more in-depth product information when a product is clicked.

    👉 Users can add the product to their cart directly from this page.

  3. **Shopping Cart:**

    👉 Display all the products added to the cart.

    👉 Users can see the total price of items in the cart and proceed to purchase.

  4. **Persistent Cart:**

    👉 Cart data is saved and remains persistent even if the page is refreshed.

    👉 State Management is handled using Redux.

   5. **Responsive Design:**
     
    👉 The application is fully responsive, offering a seamless experience across devices.
    


    
## Tech Stack

**Frontend:**
   
   👉 React (Vite)
   
   👉 Redux (State Management)

   👉 Tailwind CSS

**Backend:**

   👉 External API: (EscuelaJS API)
    
## API Integration

This application uses the open API provided by `EscuelaJS` to fetch product data. The data is dynamically rendered on the product list page and product details page.




## Usage

**Browsing Products:**

    👉 On the homepage, users can browse all available products. Each product displays its title, image, price, and a short description.

    👉 Clicking on a product will navigate the user to a detailed page where they can view more information.

**Managing Cart:**

    👉 Users can add products to their cart by clicking the "Add to Cart" button.

    👉 The shopping cart icon in the navigation bar shows the total number of items.

    👉 Users can view their cart, manage items, and see the total price.

**Persistent Cart:**

    👉 The cart state is stored using Redux, allowing users to continue their shopping session even after refreshing the page.




## Installation

To run this project locally, follow these steps:

1. **Clone the repository:** 
   
   `git clone https://github.com/Rahul9214/quickshop-store.git`

2. **Navigate to the project directory:**

   `cd quickshop-store`

3. **Install dependencies:**

   `npm install`

4. **Start the development server:**

   `npm run dev`

5. **Open your browser and go to:**

   `http://localhost:5173`
 
## Live Demo
Check out the live demo here..

https://quick-shop-store.vercel.app/
