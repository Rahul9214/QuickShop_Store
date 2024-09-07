import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
          QuickShop Store
        </Link>
        <Link to="/cart" className="flex items-center space-x-2 bg-primary hover:bg-primary-dark px-4 py-2 rounded-full transition-colors">
          <span>🛒</span>
          <span className="bg-white text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {itemCount}
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;