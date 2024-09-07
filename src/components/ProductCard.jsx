/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
        <p className="text-primary font-bold mb-2">${product.price}</p>
        <p className="text-sm text-gray-600 mb-4 h-12 overflow-hidden">{product.description.slice(0, 60)}...</p>
        <div className="flex justify-between items-center">
          <Link to={`/product/${product.id}`} className="text-secondary hover:text-secondary-dark transition-colors">
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;