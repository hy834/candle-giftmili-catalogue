import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Importing images
import tinCandlesImg from './images/babytin.jpeg';
import designerCrystalCandlesImg from './images/flowercrys.jpeg';
import decoupageCandlesImg from './images/decoflo.jpeg';
import yogaCandlesImg from './images/yogafull.jpeg'; // Reuse if applicable
import waxSachetsImg from './images/lemonsac.jpeg'; // Reuse if applicable
import jarCandlesImg from './images/soy.jpeg';

const productsData = [
  { id: 1, name: 'Tin Candles', image: tinCandlesImg, path: '/tin-candles' },
  { id: 2, name: 'Designer Crystal Candles', image: designerCrystalCandlesImg, path: '/designer-crystal-candles' },
  { id: 3, name: 'Decoupage Candles', image: decoupageCandlesImg, path: '/decoupage-candles' },
  { id: 4, name: 'Yoga Candles', image: yogaCandlesImg, path: '/yoga-candles' },
  { id: 5, name: 'Wax Sachets', image: waxSachetsImg, path: '/wax-sachets' },
  { id: 6, name: 'Jar Candles', image: jarCandlesImg, path: '/jar-candles' },
];

const ProductCardWithHover = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link 
      to={product.path} 
      style={styles.link} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        style={{
          ...styles.productCard,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <img src={product.image} alt={product.name} style={styles.productImage} />
        <div style={styles.productInfo}>
          <h3 style={styles.productName}>{product.name}</h3>
        </div>
      </div>
    </Link>
  );
};

const ProductsPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.productsContainer}>
        {productsData.map(product => (
          <ProductCardWithHover key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: '60px', // Space from navbar
    paddingBottom: '60px',
    backgroundColor: '#FFE4E1', // Background color
    backgroundImage: `url(${process.env.PUBLIC_URL}/pinkie.png)`, // Background image
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  productsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 300px)',
    gap: '16px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCard: {
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '300px',
    height: '200px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.8)', // Translucent background
    backdropFilter: 'blur(10px)', // Glowy effect
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative', // Ensure productInfo is correctly positioned
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  productInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'rgba(255, 255, 255, 0.7)',
    padding: '10px',
  },
  productName: {
    fontSize: '15px',
    margin: '0',
    color:'#eb3b81',
    fontFamily: '"Quicksand", sans-serif',
    fontWeight: 'bolder',
  },
  link: {
    textDecoration: 'none', // Remove default underline
    color: 'inherit', // Inherit text color from productCard
  },
};

export default ProductsPage;
