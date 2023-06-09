import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import refresh from '../public/refresh.png'
import Link from "next/link";
import { InfinitySpin } from "react-loader-spinner";

export default function Flask() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [comment, setComment] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/flaskapi', { comment });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error(error);
    }
  }

  // to refresh to the main model
  const handleRefresh = () => {
    setComment('');
    setPrediction('');
  }

  // clear result while there's no data input and changing the previous input
  const handleInputChange = (e) => {
    setComment(e.target.value);
    setPrediction('');
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center h-full items-center ">
            <InfinitySpin width="200" color="#4fa94d"  />
        </div>
      ) : (
        <div className="flex items-center justify-center lg:pt-5 pt-4">
          <div className="greenbox md:mx-6 mx-4 w-[100%] h-screen rounded-lg bg-[#80FFDB]">
            <div className="flex flex-col lg:px-12 px-4 lg:pt-12 md:pt-8 pt-4 lg:gap-5 gap-2">
              <div className="flex flex-row">
                <p className="lg:text-3xl md:text-2xl text-xl text-[#256D85] font-bold tracking-tide uppercase lg:block md:block hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Write/
                </p>
                <p className="lg:text-3xl md:text-2xl text-xl text-[#256D85] font-bold tracking-tide uppercase lg:block md:block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Paste down your comment here
                </p>
              </div>

              {/* input box */}
              <form onSubmit={handleSubmit}>
                <textarea
                  value={comment}
                  onChange={handleInputChange}
                  rows={15}
                  placeholder="Begin writing your text here"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  className="w-full rounded-xl border-[2px] border-solid border-[#00cc76] bg-white bg-clip-padding px-3 py-2 lg:text-lg text-sm transition ease-in-out focus:border-[#00CC76] focus:bg-white placeholder:opacity-50  focus:text-[#256D85] focus:outline-none"
                />

                {/* submit button */}
                <div className="flex flex-row gap-4">
                  <button type="submit" className="py-5 lg:flex lg:justify-center flex-none">
                    <a href="#_" className="box-border relative z-0 inline-flex items-center justify-center w-auto px-8 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-500 rounded-lg cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-400 ease focus:outline-none">
                      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                      <span className="relative z-20 flex items-center lg:text-md md:text-sm text-xs lg:px-6">
                        <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        Preedict
                      </span>
                    </a>
                  </button>
                  <button onClick={handleRefresh}>
                    <Image src={refresh} alt="refresh" width={38} className="lg:w-9 w-8" />
                  </button>
                </div>
                {comment && prediction !== '' && (
                  <div>
                    {prediction === 1 ? (
                      <p className="lg:text-2xl md:text-xl text-rose-600 font-black tracking-normal lg:block md:block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Spam comment detected
                      </p>
                    ) : (
                      <p className="lg:text-2xl md:text-xl text-indigo-700 font-black tracking-normal lg:block md:block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        It's not a spam comment
                      </p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
