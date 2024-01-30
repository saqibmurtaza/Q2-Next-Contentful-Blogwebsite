/** @type {import('next').NextConfig} */


const nextConfig = {
 
  env : {
    CONTENTFUL_SPACE_ID : "kc0zhjed3at6",
    CONTENTFUL_DELIVERY_ACCESS_TOKEN : "jN1XtDcsQGfdwvAzs5BP7UtL4_ErRsltI6nUFg285MQ"
  
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        
      },
    ],
  }

};

export default nextConfig;
