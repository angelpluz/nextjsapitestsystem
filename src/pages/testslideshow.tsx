// pages/test-slide-show.tsx

import React from 'react';
import CustomSlideShow from '../components/CustomSlideShow'; // Update the import path to where your component is located

const TestSlideShowPage = () => {
  return (
    <div>
      <h1>Test Slide Show</h1>
      {/* Include the CustomSlideShow component on the page */}
      <CustomSlideShow />
    </div>
  );
};

export default TestSlideShowPage;
