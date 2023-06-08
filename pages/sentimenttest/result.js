import React from 'react';
import Highlighte from './highlighte';

export default function Result({ transcript }) {
  return (
    <div>
      {transcript.sentiment_analysis_results.map((result, index) => (
        <Highlighte key={index} text={result.text} sentiment={result.sentiment} />
      ))}
    </div>
  );
}
    