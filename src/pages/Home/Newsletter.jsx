import React from 'react'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
         <h2 className="text-3xl font-semibold text-center capitalize mb-8">
         Follow products and discounts on Instagram
        </h2>

        {/* insta grid */}
        <div className='flex flex-wrap gap-4 items-center justify-center mb-20'>
            <Link><img src="public/images/category/27.webp" alt="" /></Link>
            <Link><img src="public/images/category/91Zsk83ljAS._SY879.jpg" width={200}height={200} alt="" /></Link>
            <Link><img src="public/images/category/ONEPIECE5_copy.webp" width={200}height={200}alt="" /></Link>
            <Link><img src="public/images/category/medium-anime-poster-frame-yuji-itadori-jujutsu-kaisen-black-original-imagmgdx4gyhvxfs.webp" width={200}height={200}alt="" /></Link>
            <Link><img src="public/images/category/91e0NLogEcL._AC_UF1000,1000_QL80_.jpg" width={200}height={200}alt="" /></Link>
            <Link><img src="public/images/category/Brothers-Innovation-Posters-Anime-Dragon_Ball_Goku-Image-1.webp"width={200}height={200} alt="" /></Link>
        </div>

        {/* newsletter */}
        <div>
        <h2 className="text-3xl font-semibold text-center capitalize mb-8">
        Or subscribe to the newsletter
        </h2>
        <form className='md:w-1/2 mx-auto text-center'>
            <input type="email" name="email" id="email" placeholder='Email address...' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4'/>
            <input type="submit" value="SUBMIT" className='bg-black text-white px-6 py-1 rounded-sm' />
        </form>
        </div>
    </div>
  )
}

export default Newsletter