import React from 'react';

const Base64Image = ({imageData}) => {
    console.log('mbaduko' + imageData);

  return (
    <div>
      {imageData}
      <img class="profile_image" height="300px" src={imageData} alt="Base64 Image" />
    </div>
  );
};

export default Base64Image;