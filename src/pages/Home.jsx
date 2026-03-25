import React from 'react'
import Carousel from '../component/Carousel'
import { FaRegUserCircle } from "react-icons/fa";
import Like from '../component/Like';
import { FaRegCommentDots } from "react-icons/fa6";
import Share from '../component/Share';

function Home() {
  return (
    <>
        <div className='bg-gray-900 py-8 min-h-screen'>
          <div className='py-4 border-gray-800 border-2 max-w-xl mx-auto my-4 rounded-2xl bg-gray-800 shadow-xs'>
            <div className='mx-16 my-8'> 
            <div className='text-white text-lg font-bold mb-4 flex items-center gap-2'>
              <FaRegUserCircle size={36} />
              <div className='grid grid-rows-2'>
                <span>Ryu331</span>
                <span className='text-xs text-gray-400'>14/06/2022</span>
              </div>
            </div>
            <div className='flex flex-col mb-4'>
              <div className='text-gray-100 font-bold'>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>
              <div className='text-gray-400 text-sm/5'>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi accusamus hic? At est non placeat consectetur facere aspernatur quidem. Iusto voluptatum quis quidem pariatur blanditiis, quas animi exercitationem possimus?</span>
              </div>
            </div>
            <div>
            <Carousel />
            </div>
            <div className='flex mt-4 gap-4 items-center '>
              <Like />
              <FaRegCommentDots className='text-white hover:text-blue-800 cursor-pointer'/>
              <Share />
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home