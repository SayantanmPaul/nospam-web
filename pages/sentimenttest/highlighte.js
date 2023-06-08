import React from 'react';

const sentimentColor = {
  positive: '#28DF99',
  negative: '#FFACAC',
  neutral: 'lightgrey',
};

export default function Highlighte({ text, sentiment }) {
  const backgroundColor = sentimentColor[sentiment.toLowerCase()];
  return (
    <p className=' rounded-sm px-1' style={{ display: 'inline-block', backgroundColor, fontFamily: 'Poppins, sans-serif', margin: '0 2px', }}>
      {text}
    </p>
  );
}
