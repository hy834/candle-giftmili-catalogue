import React from 'react';

function About() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: '60px', // Space between navbar and about text
    paddingBottom: '60px',
    backgroundColor: '#FFE4E1', 
    backgroundImage: `url(${process.env.PUBLIC_URL}/pinkie.png)`,
    backgroundRepeat: 'no-repeat', // Prevent background image from repeating
    backgroundSize: 'cover', // Cover entire container with background image
  };

  const boxStyle = {
    background: 'rgba(255, 255, 255, 0.4)', // Adjust the opacity here (0.7 for 70% opacity)
    padding: '20px',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)', // Soft white glow
    borderRadius: '10px',
    maxWidth: '800px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <section>
          <h5 className="main-heading">Our Company</h5>
          <div className="underline mx-auto"></div>
          <p>
          We are artists passionate about art and craft, and all things handcrafted. In between managing home & family, we have chosen to take our dreams forward and make it large. Hence GIFTMILI was born in 2018.

“We love to, we can and so why not” is the attitude that inspires us. The fact that we can share our heartfelt creations with people and cater to their gifting needs is a motivating factor.

Our range of products includes chocolates, soaps, candles, handicrafts, Decoupage artwork, and more. Anything that’s handcrafted has its own charm. The special ingredient here is, of course, the extra love and care that comes with the passion to do something beautiful and classic. We are delighted to see the smile and happy feeling in our customers' eyes.

We strive to showcase our creativity by personally handcrafting and designing our products to cater to all the tastes and needs of our customers. This brings us joy—the organic process of creating products that are a symbol of love and care. We love to customize our products to the requirements of our esteemed customers.

We appreciate your feedback about our products to improve our art further.
          </p>
          <p>
          We take joy in seeing our customers' smiles and strive to customize our creations to fit their preferences. Our goal is to create products that symbolize love and care. Your feedback is valuable to us as it helps improve our art and ensures that we continue to meet your needs with passion and creativity.


          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
