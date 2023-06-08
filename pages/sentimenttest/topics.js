import React from 'react';

export default function Topics({ transcript }) {
  return (
    <>
        {Object.keys(transcript.iab_categories_result.summary)
          .filter((topic) => transcript.iab_categories_result.summary[topic] > 0.6)
          .map((topic) => (
            <span className='inline-block bg-gray-300 rounded-full py-1 px-2 m-1 text-xs' key={topic}>{topic.split('>').pop()}</span>
          ))}
    </>
  );
}
