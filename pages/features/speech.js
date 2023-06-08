import React, { useState, useEffect } from "react";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";
import Status from "../statuscheck/status";
import axios from "axios";
import Result from "../sentimenttest/result";
import Icon from '../../public/ai.svg';
import Image from "next/image";

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
      setIsLoading(true);

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
    <div className="lg:p-14 p-4 flex flex-col h-screen gap-5">
      <h1  style={{fontFamily:'Poppins, sans-serif'}} className="lg:text-3xl text-2xl font-bold  text-[#256D85] tracking-normal">
        Speech to Text Analysis
      </h1>
      <div className="bg-[#80FFDB] rounded flex justify-center items-center p-4 sm:p-6 md:p-8">
        {transcript.status === 'completed' ? (
          <p className="font-poppins">
            <Result transcript={transcript} />
          </p>
        ) : (
          <Status isLoading={isLoading} status={transcript.status} />
        )}
      </div>
  
      <div className="greenbox relative flex-1 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 rounded-lg bg-[#80FFDB]">
        <p style={{fontFamily:'Poppins, sans-serif'}} className=" font-bold text-md tracking-normal text-[#256D85] text-center hover:underline duration-300" >Record audioclip</p>
        <Recorder
          record={true}
          audioURL={audioDetails.url}
          handleAudioStop={handleAudioStop}
          handleAudioUpload={handleAudioUpload}
          handleReset={handleReset}
        />
        <div className=" lg:block hidden absolute right-6 bottom-5 justify-center ">
          <div className=" flex flex-row gap-2 items-center">
            <p style={{fontFamily:'Poppins, sans-serif'}} className=" font-bold text-xs">Powered by</p>
            <Image className=" inline-block bg-black p-1 rounded" src={Icon} width={90} alt="ai" height={20} />
            
          </div>
      </div>
      </div>
    </div>
  );        
  
}
