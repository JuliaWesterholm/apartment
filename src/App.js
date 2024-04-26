import React, { useState } from 'react'; // Import React and useState hook
import './App.css'; // Import CSS file
import apartment1 from './images/apartment1.jpg'; // Import image files
import apartment2 from './images/apartment2.jpg';
import apartment3 from './images/apartment3.jpg';



function App() {
  const [imageIndex, setImageIndex] = useState(0); // Declare state variable for image index
  const [showWishlistMessage, setShowWishlistMessage] = useState(false); // Declare state variable for wishlist message visibility

  const images = [apartment1, apartment2, apartment3]; // Create array of image paths

  // Function to handle displaying next image
  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle displaying previous image
  const handlePreviousImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to handle adding to wishlist 
  const handleLike = () => {
    setShowWishlistMessage(true); // Show wishlist message
    setTimeout(() => {
      setShowWishlistMessage(false); // Hide wishlist message after 3 seconds
    }, 3000); // 3 seconds
  };

  // Function to handle clicking on wishlist button
  const handleWishlistClick = () => {
    // Construct the apartment details to be displayed in the popup window
    const apartmentDetails = `
      <div>
        <h2>Luxurious Urban Retreat in the Heart of Metro City</h2>
        <img src="${images[0]}" alt="Apartment" style="width: 100%;" />
        <h3>Apartment Features</h3>
        <ul>
          <li>Spacious and light-filled interiors adorned with modern finishes and designer touches.</li>
          <li>Expansive windows offering breathtaking views of the city skyline and surrounding greenery.</li>
          <li>Open-concept living areas ideal for entertaining, featuring high ceilings and premium hardwood flooring throughout.</li>
          <li>Gourmet kitchens equipped with state-of-the-art stainless steel appliances, sleek quartz countertops, and ample cabinet space for storage.</li>
          <li>Tranquil bedrooms boasting plush carpeting, generous closet space, and en-suite bathrooms for ultimate privacy and comfort.</li>
          <li>Elegant bathrooms with luxurious fixtures, deep soaking tubs, and contemporary vanity units.</li>
        </ul>
        <h3>Amenities</h3>
        <ul>
          <li>Inviting rooftop terrace with panoramic views, perfect for relaxing or socializing with friends and neighbors.</li>
          <li>Fully-equipped fitness center featuring cutting-edge cardio and strength training equipment for maintaining an active lifestyle.</li>
          <li>Stylish resident lounge and co-working spaces, ideal for remote work or casual gatherings.</li>
          <li>Secure bike storage and repair station for eco-conscious commuters.</li>
          <li>24/7 concierge service providing personalized assistance and ensuring peace of mind for all residents.</li>
        </ul>
        <p>
          Explore the Neighborhood: Conveniently located in the vibrant heart of Metro City, our apartment community offers easy access to an eclectic array of dining, shopping, and entertainment destinations. Just steps away from renowned cultural landmarks, trendy boutiques, and bustling cafes, residents can immerse themselves in the vibrant energy of city living while enjoying the tranquility of our luxurious retreat.
        </p>
        <p>
          Experience Elevated Living at [Apartment Name]. Discover the epitome of urban luxury and sophistication at [Apartment Name]. Contact us today to schedule a private tour and experience the unparalleled lifestyle that awaits you in the heart of Metro City.
        </p>
      </div>
    `;

    // Open a popup window and display the apartment details
    const popupWindow = window.open('', '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
    popupWindow.document.body.innerHTML = apartmentDetails;
  };

  // JSX to render the component
  return (
    <div className="container">
      <div className="wishlist-button tooltip">
        <button onClick={handleWishlistClick}>Wishlist</button>
        <span className="tooltiptext">
          <img src={images[0]} alt="Apartment" style={{ width: '100%' }} />
          <h1>Luxurious Urban Retreat</h1>
        </span>
      </div>
      <div className="image-container">
        <img src={images[imageIndex]} alt="Apartment" className="apartment-image" />
        <button onClick={handlePreviousImage}>Previous</button>
        <button onClick={handleNextImage}>Next</button>
      </div>
      <div className="description">
        <h2>Luxurious Urban Retreat in the Heart of Metro City</h2>
        <p>
          Welcome to our exquisite urban retreat nestled in the vibrant heart of Metro City. This meticulously crafted apartment offers a seamless blend of contemporary elegance and urban convenience, providing residents with an unparalleled living experience.
        </p>
        <h3>Apartment Features</h3>
        <ul>
          <li>Spacious and light-filled interiors adorned with modern finishes and designer touches.</li>
          <li>Expansive windows offering breathtaking views of the city skyline and surrounding greenery.</li>
          <li>Open-concept living areas ideal for entertaining, featuring high ceilings and premium hardwood flooring throughout.</li>
          <li>Gourmet kitchens equipped with state-of-the-art stainless steel appliances, sleek quartz countertops, and ample cabinet space for storage.</li>
          <li>Tranquil bedrooms boasting plush carpeting, generous closet space, and en-suite bathrooms for ultimate privacy and comfort.</li>
          <li>Elegant bathrooms with luxurious fixtures, deep soaking tubs, and contemporary vanity units.</li>
        </ul>
        <h3>Amenities</h3>
        <ul>
          <li>Inviting rooftop terrace with panoramic views, perfect for relaxing or socializing with friends and neighbors.</li>
          <li>Fully-equipped fitness center featuring cutting-edge cardio and strength training equipment for maintaining an active lifestyle.</li>
          <li>Stylish resident lounge and co-working spaces, ideal for remote work or casual gatherings.</li>
          <li>Secure bike storage and repair station for eco-conscious commuters.</li>
          <li>24/7 concierge service providing personalized assistance and ensuring peace of mind for all residents.</li>
        </ul>
        <p>
          Explore the Neighborhood: Conveniently located in the vibrant heart of Metro City, our apartment community offers easy access to an eclectic array of dining, shopping, and entertainment destinations. Just steps away from renowned cultural landmarks, trendy boutiques, and bustling cafes, residents can immerse themselves in the vibrant energy of city living while enjoying the tranquility of our luxurious retreat.
        </p>
        <p>
          Experience Elevated Living at SkyView Apartments. Discover the epitome of urban luxury and sophistication. Contact us today to schedule a private tour and experience the unparalleled lifestyle that awaits you in the heart of Metro City.
        </p>
        <button onClick={handleLike}>Like</button>
      </div>
      {showWishlistMessage && (
        <div className="wishlist-message">
          Added to your wishlist
        </div>
      )}
    </div>
  );
}

export default App;
