import Link from "next/link";
import React from "react";
import { DSACardsType } from "@/types/collection";
import Image from "next/image";
import Modal from "@/components/modal/Modal";

const DSACard = ({
  id,
  url,
  imageurl,
  title,
  source_code,
  explanation,
}: DSACardsType) => {
  return (
    <>
      <div
        key={id}
        className="max-w-sm bg-white px-6 h-full pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
      >
        <div className="relative">
          {imageurl ? (
            <Image width={360} src={imageurl} height={360} alt={title} />
          ) : (
            <video
              width="360"
              height="360"
              className="w-full rounded-xl"
              controls
            >
              <source src={url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
          {title}
        </h1>
        <div className="my-4">
          <div className="inline-flex rounded-md shadow-sm mt-3 " role="group">
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
              <svg
                className="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <Modal Btntitle="explanation" title={title} body={explanation} />
            </div>
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
              <svg
                className="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>
              <Modal Btntitle="source_code" title={title} code={source_code} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DSACard;
