import ShoppingCart from '../components/ShoppingCart';

const CartPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Shopping Cart</h1>
      <ShoppingCart />
    </div>
  );
};

export default CartPage;