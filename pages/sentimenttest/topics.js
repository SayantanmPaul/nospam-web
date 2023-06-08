import React from 'react';

export default function Topics({ transcript }) {
  return (
    <>
      <h2 style={{fontFamily: 'Poppins, sans-serif'}} className=' font-bold'>Topics Detected: </h2>
      <p style={{fontFamily: 'Poppins, sans-serif'}} className=" bg-gray-200 rounded-full py-1 px-2 text-sm">
        {Object.keys(transcript.iab_categories_result.summary)
          .filter((topic) => transcript.iab_categories_result.summary[topic] > 0.6)
          .map((topic) => (
            <span className='inline-block bg-gray-300 rounded-full py-1 px-2 m-1 text-xs' key={topic}>{topic.split('>').pop()}</span>
          ))}
      </p>
    </>
  );
}
