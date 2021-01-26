import React from 'react';
import { View } from 'react-native';

const Bird = ({ birdBottom, birdLeft }) => {
  const birdWith = 50;

  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'blue',
        width: birdWith,
        height: 60,
        left: birdLeft - birdWith / 2,
        bottom: birdBottom,
      }}
    />
  );
};

export default Bird;
