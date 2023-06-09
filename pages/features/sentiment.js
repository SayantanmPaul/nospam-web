import React from "react";

export default function Sentiment(){
    return(
        <div className="lg:p-12 p-4 flex flex-col h-screen lg:gap-5">
            <h1  style={{fontFamily:'Poppins, sans-serif'}} className="lg:text-3xl text-2xl font-bold  text-[#256D85] tracking-normal">
                Sentiment Analysis
            </h1>
            <div className="greenbox relative flex-1 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 rounded-lg bg-[#80FFDB]">
                <div className=" flex flex-col justify-center  items-center gap-2">
                    <h1  style={{fontFamily:'Poppins, sans-serif'}} className="lg:text-2xl text-md font-bold  text-[#256D85] tracking-normal">This feature isn't avaiable yet</h1>
                    <p  style={{fontFamily:'Poppins, sans-serif'}} className="lg:text-sm text-xs font-bold text-center  text-[#256D85] tracking-normal">This project currently in the development stage, please checkout again!</p>
                </div>
            </div>
        </div>
    );
}