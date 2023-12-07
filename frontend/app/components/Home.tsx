import React from 'react';
import Carousel from './carousel/Carousel';

const Home: React.FC = () => {
  const carouselItems = [
    { id: 1, title: 'Slide 1', imageUrl: './carousel/carouselImages/.img1.png', description: 'Description for slide 1' },
    { id: 2, title: 'Slide 2', imageUrl: './carousel/carouselImages/.img2.png', description: 'Description for slide 2' },
    { id: 3, title: 'Slide 3', imageUrl: './carousel/carouselImages/.img3.png', description: 'Description for slide 3' },
  ];

  return (
    <div>
      <Carousel items={carouselItems} />
      <h2>Welcome to the Home Page!</h2>
      <p>This is the content of your home page.</p>
      {/* Add more components and content as needed */}
    </div>
  );
};

export default Home;