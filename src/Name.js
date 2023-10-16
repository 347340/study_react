import React from 'react';

const NameInfo = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Name() {
  return (
    <>
      <h2>{NameInfo.name}</h2>
      <img classNameInfo="avatar" src={NameInfo.imageUrl} alt={'Photo of ' + NameInfo.name}
      style={{ width: NameInfo.imageSize, height: NameInfo.imageSize}} />
    </>
  );
}

export default Name;
