import ReadExtra from './readmoreandless';

const Overview = () => {
  return (
    <div>
      <div className="flex flex-col lg:gap-6 gap-3">
        <div className="lg:pt-0 pt-2">
          <h1
            style={{ fontFamily: 'Fjalla One, sans-serif' }}
            className=" lg:text-5xl md:text-4xl text-3xl font-medium lg:leading-10 leading-5 tracking-tight text-[#2D7D90]"
          >
            Overview
          </h1>
        </div>
        <div className="">
          <p
            style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.7' }}
            className=" lg:text-2xl md:text-xl text-lg leading-10  text-[#003049] antialiased text-justify "
          >
            The project NoSpam aims to develop a machine learning algorithm that can accurately classify comments on
            YouTube videos as either spam or legitimate, based on various features such as the text content, the user's
            history, and the frequency of the comment. By identifying and filtering out spam comments, the project seeks
            to improve the user experience for viewers and creators on the platform, reduce the amount of unwanted
            content, and mitigate the negative effects of spam such as phishing attempts, scams, and malware.
          </p>
          <ReadExtra>
            Over 2.5 billion people access Youtube once a month and has 50 million subscribers according to 2021 survey.
            Thus the audience of youtube spam detection can be may be youtube content creators, youtube viewers, youtube
            advertisers, platform administrators. Overall ,a spam detection project is valuable tool for any
            organization that wants to project its users from unwanted spams and potential security issues. While there
            are some potential drawbacks ,the benefits of using spam detection project far outweigh the potential
            downsides. With its high accuracy, versatility and potential to improve overall communication security, a
            spam detection project is a wise investment for any organization looking to stay ahead of the game in
            rapidly evolving digital landscape.
          </ReadExtra>
          <p
            style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.7' }}
            className=" lg:text-2xl md:text-xl text-lg leading-10 py-4  text-[#003049] antialiased text-justify "
          >
            Check out the project report we have created{' '}
            <a
              className="text-[#256D85] hover:text-[#2D70F3] hover:underline italic duration-300 px-1"
              href="https://drive.google.com/file/d/1njNnbrGLOH7NA8WsZQrOmno_65v_-Uyn/view?usp=sharing"
            >
              click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Overview;
