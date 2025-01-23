import React from "react";
const Foot= ()=>{

     return   <footer className="py-10 bg-gray-800 text-white text-center">
            <div className="container mx-auto">
              <p className="mb-4">Connect with me:</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/owaish-khan-352a02230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-500"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/owaishkhan18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-gray-400"
                >
                  GitHub
                </a>
                <a
                  href="mailto:your-owaishkhan18@gmail.com"
                  className="text-xl hover:text-yellow-400"
                >
                  Email
                </a>
              </div>
            </div>
          </footer>
      
     
    

    
}

export default Foot ;