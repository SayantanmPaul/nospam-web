import React from 'react';
import Highlighte from './highlighte';
import Topics from './topics';

export default function Result({ transcript }) {
  if (!transcript || !transcript.sentiment_analysis_results) {
    return null; 
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap justify-center">
        {transcript.sentiment_analysis_results.map((result, index) => (
          <Highlighte key={index} text={result.text} sentiment={result.sentiment} entities={transcript.entities} />
        ))}
      </div>
      <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold">Topics Detected:</h2>
      <div className="lg:flex lg:flex-row">
        <Topics transcript={transcript} />
      </div>
    </div>
  );
}
