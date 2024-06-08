import React from "react";

const Footer = () => {
  return (
    // Footer container with background color and gradient
    <footer className="bg-gray-100 text-gray-700 py-10 px-4 mt-[100px] bg-gradient-to-b from-orange-200 to-white">
      <div className="container mx-auto text-center">
        
        {/* Main heading of the footer */}
        <h1 className="text-5xl font-semibold mb-4">TOINGG</h1>
        
        {/* Subheading with text and a heart icon */}
        <p className="text-2xl font-medium mb-8 text-white">
          We are here to grow your business
          <span className="text-red-500">❤️</span>
        </p>
        
        {/* List of footer links */}
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 text-lg font-normal">
          <li>
            <a href="#">Terms and conditions</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="#">Help center</a>
          </li>
          <li>
            <a href="#">API docs</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
        
        {/* Social media icons */}
        <div className="flex justify-center items-center gap-4 mb-4">
          {/* Social media icon 1 */}
          <a href="#" className="text-blue-500">
            <img 
              src="https://s3-alpha-sig.figma.com/img/1a84/e8fe/c32cd2d933185c3da22a70664c6f62f9?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiCdWFMzWQUBQDZDmgcwuXI8vuw6CDSYqHb8PTSOi0gvCBucHsG66opjAMYUOuZk7QUaBRWPBSQDuj2e-bCqIQStcOyx~uv~T78qO~AUIKRsBhnUn68ayL4HhezCnLP7NJaYbVsGkQ1PGgw2GSrdZ0sPZNl-HU8j-LYKzPRfS5xIX0Pyr3BxS2guFKIXR48cjYsfv3crUB0WyluIOSeWll3tYt0AtqHnZ2W8m3FFuip~~6Zzpv-aEjNsuZISBJFiOwf9-hn4oeIDczlXYV0JzuCMSYFPtoMp9Ye3I31XMWYbd3D6SYKb~B7HyKm5pNrUYeEjLX~YrXckOMrNReTtXg__" 
              width={39} height={37}
            />
          </a>
          {/* Social media icon 2 */}
          <a href="#" className="text-red-500">
            <img 
              src="https://s3-alpha-sig.figma.com/img/003f/abf5/8c73c2a450d7b7fb235847d17daceb13?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N1kJSqrRVnjpDfA4cyplHAkNPWtM8TDwUQyib0esGS3PpGnbhTp2jbOUEa0nrJn~5wWBLISeu1To1oP8CPhe4IU6Frd8oZs9KGHEkbpM1qgl07QcbcUToZaFfoHan0QntTjetvKf3jUzjD9FzZ6LknlJYWhiaPT~8Rv7fUeHheiIvKaERvuvmUOKL2fVTNvbFdADBq04Sd5jlpev9LZC~vmilTSU0ZNiH7dEX4eg~3djdYKwV~X98GWxzsNyez7ERMqT1OXxvKOY-VAOm1FryaC~ZRxnID72oj03vjH6-WxhQI1Rinnjf0c7rfo8NR8vSVyLchJDAjDRd432yNSQ4g__" 
              width={39} height={37}
            />
          </a>
          {/* Social media icon 3 */}
          <a href="#" className="text-black">
            <img 
              src="https://s3-alpha-sig.figma.com/img/622e/86bb/462087aaf7d626058a22c81f22c63f53?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X~ZeDBUek0E8I7l45Oil4GqSPI9vtTUVdYF4zTYpkNaULA2af4F7YKrLVh3w51v8hkILEf66R0bFCX48yIotUExY2TT9m21MSAi-Rl~4CJ~dkhRu1Wn9wTb~dM9zv6oRkMPet1OK8pl4RgezLrMrKnbO0v4tzk2e30pSjMnSOAoUO~TNMFkQ0RFn3IT~34Yf0OVEvtBJiSg6zbhFjiPyRbxk2NfcfpP7i1PDA6Dbwa6yW2-WAFZltENEy9uUDnUbzADK9x7O-HEHA3rD6BuILWfYN4~pXsdkIPOztw2Nal7IE5FV4DQJKhk29XtgZBFD6An2KomZn7nWODnQ6WANWg__" 
              width={30} height={30}
            />
          </a>
          {/* Social media icon 4 */}
          <a href="#" className="text-purple-500">
            <img 
              src="https://s3-alpha-sig.figma.com/img/e623/a85d/8424125545366ecb24af94862a9f83c6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UyypDTNuUrzpkdPXcsTYED5Ytb8oPMlqTVf2FuGTVbJ4aONV7uq2rHO3AOiNxVQjJ0AmkxNGPPuPeJPdD2XuJ~5v76p3gX9r0xhm7C4P7LjyNwrGCR20dppqxFTCjxaoSnHS~ZhxAXxrn7bRYvC8asVvfNRmZJlWDd8TNRol4npJwM-Dr4ZwAw9giv4DBGCnSNnpvWRjCzIBKp00FS7hqDXQOHOQtQaJoZ25gfA8HRwYO6o3Jkcz35EGIov~QRbS-BOkPCasU5FseV~o1fMfUvrlcGrARWankOF-cxK61i7SIE4Z5sGC8lum5mppyERZg7T~xOCEONFQh8V~4T36NA__" 
              width={39} height={37}
            />
          </a>
        </div>
        
        {/* Copyright text */}
        <p className="text-sm mb-2 font-medium text-base">
          Copyright © 2024 Toingg Inc. All rights reserved.
        </p>
        
        {/* Link to join the community */}
        <a href="#" className="text-gray-500 hover:text-gray-700 font-normal text-base">
          Join our community
          <i className="fab fa-discord"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
