import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="lg:w-full w-screen left-1/2 -translate-x-1/2 relative">
      <Image
        src="/contact.png"
        alt="contact background"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full md:h-auto sm:h-40 h-72"
      ></Image>
      <div className="absolute inset-0 dark:bg-black bg-white opacity-90"></div>
      <div className="absolute inset-0 flex sm:flex-row flex-col gap-2 items-center justify-center z-10 xl:px-12 px-8">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="/paper-plane.png"
            alt="paper plane"
            width={80}
            height={80}
            className="sm:flex hidden"
          ></Image>
          <div className="flex flex-col gap-2 sm:text-start text-center">
            <p className="text-primary xl:text-[32px] text-3xl font-medium">
              Get In Touch
            </p>
            <p className="text-subtitle xl:text-lg font-semibold">
              I’m currently looking for any new opportunities. Whether you have
              a question or just want to say hi, I’ll get back to you as soon as
              possible
            </p>
          </div>
        </div>
        <motion.a
          href="mailto:andikatirta001@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-row gap-2 items-center justify-center bg-accent-gradient rounded-[30px] w-[240px] h-[60px] px-5 py-4"
        >
          <span className="text-primary text-sm">Contact Me</span>
          <motion.svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-primary"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <g mask="url(#mask0_255_298)">
              <path d="M25.6279 12.4127C26.1458 13.5764 26.4284 14.7746 26.4758 16.0074C26.5241 17.2404 26.3623 18.4262 25.9904 19.5647C25.6179 20.7035 25.0482 21.7587 24.2813 22.7303C23.5147 23.7026 22.5757 24.5095 21.4643 25.1512C19.2271 26.4428 16.862 26.8218 14.3692 26.288C11.8772 25.7545 9.86689 24.4472 8.33818 22.3661L10.0702 21.3661C11.3239 22.9709 12.9329 23.9665 14.8972 24.3527C16.8621 24.7387 18.7178 24.4275 20.4643 23.4191C22.2108 22.4108 23.4078 20.9595 24.0555 19.0652C24.7037 17.1706 24.6505 15.2865 23.8958 13.4127L25.6279 12.4127ZM20.8411 14.0217L18.9801 20.8985L17.0335 20.3769L17.9852 16.8252L12.6808 19.8877L11.6808 18.1557L16.9852 15.0932L13.4677 14.1507L14.0109 12.1916L20.8411 14.0217ZM24.6279 10.6807L22.8958 11.6807C22.4509 11.11 21.9411 10.6103 21.3664 10.1816C20.792 9.7534 20.1755 9.40228 19.5169 9.12819L20.0476 7.14746C20.9733 7.51751 21.8237 7.99842 22.5988 8.59017C23.3733 9.18226 24.0496 9.8791 24.6279 10.6807ZM8.53668 15.4099C8.45307 16.1317 8.45324 16.8487 8.5372 17.5608C8.62082 18.2723 8.7985 18.9634 9.07023 19.634L7.33818 20.634C6.93312 19.7325 6.66782 18.7983 6.54229 17.8315C6.41734 16.8644 6.43022 15.8947 6.58094 14.9225L8.53668 15.4099ZM18.0919 6.66002L17.5578 8.58496C16.8504 8.49301 16.1448 8.49624 15.4411 8.59463C14.7379 8.69269 14.051 8.87759 13.3803 9.14932L12.3553 7.37396C13.2736 6.99777 14.2175 6.74144 15.1872 6.60498C16.1575 6.46819 17.1257 6.48654 18.0919 6.66002ZM11.6483 10.1493C11.0776 10.5943 10.5737 11.0969 10.1367 11.6571C9.70014 12.2171 9.34484 12.8263 9.07076 13.485L7.13668 12.985C7.46953 12.0615 7.9333 11.2068 8.52798 10.4208C9.12324 9.63452 9.82167 8.95223 10.6233 8.37396L11.6483 10.1493Z" />
            </g>
          </motion.svg>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
