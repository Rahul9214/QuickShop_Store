import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductById } from '../services/api';
import { addToCart } from '../redux/cartSlice';
import { ShoppingCart } from "lucide-react";
 
const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="container mx-auto py-8 px-4 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img src={product.images[0]} alt={product.title} className="h-64 w-full object-cover md:w-64" />
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Additional Information</h2>
            <p><strong>Category:</strong> {product.category?.name || 'N/A'}</p>
            <p><strong>Brand:</strong> {product.brand || 'N/A'}</p>
            <p><strong>In Stock:</strong> {product.inStock ? 'Yes' : 'No'}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-800">${product.price}</span>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center"
            >
              <ShoppingCart size={24} className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;