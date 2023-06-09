import React from 'react';

// highlighting color
const sentimentColor = {
  positive: '#28DF99',
  negative: '#FFACAC',
  neutral: 'lightgrey',
};

export default function Highlighte({ text, sentiment, entities }) {
  // Check if entities prop is provided
  if (!entities || !Array.isArray(entities)) {
    return <p>{text}</p>;
  }

  // Extracting entity text from the entities array
  const entityText = entities.map((e) => e.text);

  // Splitting the text into sections based on entity matches
  const sections = text.split(new RegExp(`(${entityText.join('|')})`, 'g'));

  // Background color based on the sentiment
  const backgroundColor = sentimentColor[sentiment.toLowerCase()] || 'lightgrey'; // Add fallback color

  return (
    <p
      className="rounded-sm px-1"
      style={{ display: 'inline-block', backgroundColor, fontFamily: 'Poppins, sans-serif', margin: '0 2px' }}
    >
      {sections.map((part, index) => {
        const matchEntity = entities.find((e) => e.text === part);
        if (matchEntity) {
          return (
            <span key={index} className="font-bold cursor-pointer" title={matchEntity.entity_type}>
              {part}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
}
