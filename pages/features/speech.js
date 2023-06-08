import React, { useState, useEffect } from "react";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";
import { Comment } from  'react-loader-spinner';
import axios from "axios";

// fetching the api key from Assemblyai
const assemblyApi = axios.create({
  baseURL: 'https://api.assemblyai.com/v2',
  headers: {
    authorization: process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
    'content-type': 'application/json'
  }
});

// initial state of the audio details
const initialState = {
  url: null,
  blob: null,
  chunks: null,
  duration: {
    h: 0,
    m: 0,
    s: 0,
  }
};

export default function Speech() {
  const [audioDetails, setAudioDetails] = useState(initialState);
  const [transcript, setTranscript] = useState({ id: '' });
  const [isLoading, setIsLoading] = useState(false);

  // repeated interval function
  useEffect(() => {
    const interval = setInterval(async () => {
      if (transcript.id && transcript.status !== 'completed' && isLoading) {
        try {
          const { data: transcriptData } = await assemblyApi.get(`/transcript/${transcript.id}`);
          setTranscript({ ...transcript, ...transcriptData });
          // status completed when pullAudio is completed

        } catch (err) {
          console.error(err);
        }
      } else {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isLoading, transcript]);
 
  // recording stop func
  const handleAudioStop = (data) => {
    setAudioDetails(data);
  };

  // reset audio function
  const handleReset = () => {
    setAudioDetails({ ...initialState });
    setTranscript({ id: '' });
  };

  // uploading audio file vvia post send post request to the api
  const handleAudioUpload = async (audioFile) => {
    try {
      const { data: uploadResponse } = await assemblyApi.post('/upload', audioFile);
  
      const { data } = await assemblyApi.post('/transcript', {
        audio_url: uploadResponse.upload_url,
        sentiment_analysis: true,
        entity_detection: true,
        iab_categories: true,
      });
  
      setTranscript({ id: data.id });
  
      const interval = setInterval(async () => {
        try {
          const { data: transcriptData } = await assemblyApi.get(`/transcript/${data.id}`);
          setTranscript((prevTranscript) => ({
            ...prevTranscript,
            ...transcriptData,
          }));
  
          if (transcriptData.status === 'completed') {
            clearInterval(interval);
          }
        } catch (err) {
          console.error(err);
          clearInterval(interval);
        }
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };
  
  // frontend
  return (
    <div className="lg:p-14 p-4">
      <h1 className="text-2xl font-bold mb-4">This is Speech and Text Detection Menu</h1>
  
      {transcript.status === 'completed' ? (
        <p>{transcript.text}</p>
      ) : (
        <div className="flex items-center justify-center">
          <Comment visible={true} height={40} width={40} ariaLabel="comment-loading" wrapperStyle={{}} color="#fff" backgroundColor="#57CC99"/>
        </div>
      )}

      <Recorder
        record={true}
        audioURL={audioDetails.url}
        handleAudioStop={handleAudioStop}
        handleAudioUpload={handleAudioUpload}
        handleReset={handleReset}
      />
    </div>
  );
}
