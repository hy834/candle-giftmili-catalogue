import React, { useState } from 'react';

// Import the images
import lemonSachet from './images/lemonsac.jpeg';
import waxPacket from './images/waxpack.jpeg';
import roseSachet from './images/roseaquasachet.jpeg';

const Sachet = () => {
  const [ingredientsVisibility, setIngredientsVisibility] = useState({}); // Object to track ingredient visibility per product
  const [modalImage, setModalImage] = useState(null);

  const toggleIngredients = (id) => {
    setIngredientsVisibility(prevState => ({
      ...prevState,
      [id]: !prevState[id] // Toggle visibility for the specific product
    }));
  };

  const openModal = (image) => {
    setModalImage(image); // Set the image to be shown in the modal
  };

  const closeModal = () => {
    setModalImage(null); // Hide the modal
  };

  // Define card data
  const cardData = [
    { id: 1, name: 'Lemon Scented Wax Sachet', cost: '150/-', image: lemonSachet, ingredients: 'Soy wax, Essential oils' },
    { id: 2, name: 'Scented Wax Pellet Pack', cost: '150/-', image: waxPacket, ingredients: 'Soy wax, Essential oils' },
    { id: 3, name: 'Rose & Aqua Fresh Scented Wax Sachet', cost: '150/-', image: roseSachet, ingredients: 'Soy wax, Essential oils' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.productsContainer}>
        {cardData.map(product => (
          <div key={product.id} style={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.productImage}
              onClick={() => openModal(product.image)} // Open modal on image click
            />
            <div style={styles.productInfo}>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productCost}>{product.cost}</p>
              {ingredientsVisibility[product.id] && (
                <p style={styles.ingredients}>
                  Ingredients: {product.ingredients}
                </p>
              )}
              <button
                onClick={(e) => { e.stopPropagation(); toggleIngredients(product.id); }} // Prevent modal from opening
                style={styles.showMoreButton}
              >
                {ingredientsVisibility[product.id] ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        ))}
      </div>
      {modalImage && (
        <div style={styles.modal} onClick={closeModal}>
          <img src={modalImage} alt="Full Size" style={styles.modalImage} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: '60px',
    paddingBottom: '60px',
    backgroundColor: '#FFE4E1',
    backgroundImage: `url(${process.env.PUBLIC_URL}/pinkie.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  productsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 250px)',
    gap: '70px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCard: {
    borderRadius:'8px',
    overflow: 'hidden',
    width: '280px',
    height: '330px', // Increased height to fit the new content
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
    background: 'rgba(255, 255, 255, 0.6)', 
    backdropFilter: 'blur(15px)', // Increased blur effect
    position: 'relative',
    textAlign: 'center',
    padding: '10px',
    cursor: 'pointer', // Indicate that the card is clickable
  },
  productImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  productInfo: {
    marginTop: '10px',
  },
  productName: {
    fontSize: '14px',
    margin: '0',
    marginBottom: '5px', // Space between name and cost
    color: '#f58497',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  productCost: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '15px', // Space between cost and ingredients
    color: '#e02f61',
  },
  ingredients: {
    margin: '10px 0',
    fontSize: '12px',
    color: '#555',
  },
  showMoreButton: {
    backgroundColor: '#f58497',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  modal: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
  },
  modalImage: {
    maxWidth: '90%',
    maxHeight: '80%',
  },
};

export default Sachet;
