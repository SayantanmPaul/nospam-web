import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { CgMenuRight } from 'react-icons/cg';

const NewNavbar = () => {
  const [nav, setnav] = useState(false);
  const handleNav = () => {
    setnav(!nav);
  };
  return (
    <Disclosure as="nav">
      <Disclosure.Button className="absoulte top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-white group">
        <button onClick={handleNav}>
          <div className=" lg:hidden block pl-60 ">
            {nav ? <BiDotsHorizontalRounded size={24} color="#256D85" /> : <CgMenuRight size={24} color="#256D85" />}
          </div>
        </button>
      </Disclosure.Button>
      <div className="p-6 w-1/2 h-screen bg-green-100  fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-300 "></div>
    </Disclosure>
  );
};
export default NewNavbar;
