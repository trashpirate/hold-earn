/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  async redirects() {
    return [
      {
        source: '/0x0',
        destination: '/flamelings/0x0',
        permanent: true,
      },
      {
        source: '/0x13',
        destination: '/flamelings/0x13',
        permanent: true,
      },
      {
        source: '/0x21',
        destination: '/flamelings/0x21',
        permanent: true,
      },
      {
        source: '/0x156',
        destination: '/flamelings/0x156',
        permanent: true,
      },
      {
        source: '/0x159',
        destination: '/flamelings/0x159',
        permanent: true,
      },
      {
        source: '/0x177',
        destination: '/flamelings/0x177',
        permanent: true,
      },
      {
        source: '/0x222',
        destination: '/flamelings/0x222',
        permanent: true,
      },
      {
        source: '/0x237',
        destination: '/flamelings/0x237',
        permanent: true,
      },
    ]
  },
  async headers() {
   return [
     {
       // matching all API routes
       source: "/api/token-price",
       headers: [
         { key: "Access-Control-Allow-Credentials", value: "true" },
         { key: "Access-Control-Allow-Origin", value: "*" }, // replace this with your actual origin
         { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
       ]
     }
   ]
 }
  // images: {
  //   domains: ["bafybeifzdbsgwpnj37c3tzj4pkut3b2pgf2u75mf3zmbto657ep2ubwf6a.ipfs.nftstorage.link"],
  // },
};

module.exports = nextConfig;
