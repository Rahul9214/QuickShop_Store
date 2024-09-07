import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;