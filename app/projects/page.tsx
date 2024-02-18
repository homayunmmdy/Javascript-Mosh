import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div >
      <div className="py-20 flex items-center justify-center">
        <div className="container">
          <div className="mx-auto max-w-4xl sm:text-center">
            <img
              src="assets/images/landing/index-21.png"
              className="w-40 mx-auto"
              alt=""
            />
            <h2 className="md:text-5xl text-3xl font-semibold tracking-tight">
              List of the Project that will add
            </h2>
            <div className="flex justify-center">
              <p className="md:w-1/2 mt-6 text-xl/8 font-medium text-gray-500 dark:text-gray-400">
                In this section I put list of the project that wil add soon if
                you have any idea plese send to us from media
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grikd-cols-1 gap-6 mt-16">
            <div>
              <div className="p-7 rounded-xl bg-amber-100 dark:bg-neutral-700/70">
                <h3 className="text-xl font-semibold mb-7">Home page</h3>

                <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                  <li className="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">
                    weather app
                  </li>
                </ol>

                <Link
                  href="/"
                  className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 dark:bg-neutral-900 dark:hover:bg-purple-500 dark:hover:text-white "
                >
                  Home Page
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className=" h-5 w-5 ms-3"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <div className="p-7 rounded-xl bg-emerald-100 dark:bg-neutral-700/70">
                <h3 className="text-xl font-semibold mb-7">
                  DSA
                </h3>
                <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                  <li className="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">
                    weather app
                  </li>
                </ol>
                <Link
                  href="/DSA"
                  className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 dark:bg-neutral-900 dark:hover:bg-purple-500 dark:hover:text-white "
                >
                  DSA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className=" h-5 w-5 ms-3"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <div className="p-7 rounded-xl bg-red-100 dark:bg-neutral-700/70">
                <h3 className="text-xl font-semibold mb-7">
                  React
                </h3>
                <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                  <li className="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">
                    weather app
                  </li>
                </ol>
                <Link
                  href="#"
                  className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 dark:bg-neutral-900 dark:hover:bg-purple-500 dark:hover:text-white "
                >
                  React
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className=" h-5 w-5 ms-3"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <div className="p-7 rounded-xl bg-red-100 dark:bg-neutral-700/70">
                <h3 className="text-xl font-semibold mb-7">
                  Nodejs
                </h3>
                <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                  <li className="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">
                    weather app
                  </li>
                </ol>
                <Link
                  href="/"
                  className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 dark:bg-neutral-900 dark:hover:bg-purple-500 dark:hover:text-white "
                >
                  Node js
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className=" h-5 w-5 ms-3"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <div className="p-7 rounded-xl bg-amber-100 dark:bg-neutral-700/70">
                <h3 className="text-xl font-semibold mb-7">
                  Games
                </h3>
                <p className="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">
                  Comming Soon
                </p>
                <Link
                  href="#"
                  className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 dark:bg-neutral-900 dark:hover:bg-purple-500 dark:hover:text-white "
                >
                  Games
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className=" h-5 w-5 ms-3"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <div className="p-7 rounded-xl bg-emerald-100 dark:bg-neutral-700/70">
                <h3 className="text-xl font-semibold mb-7">
                  Full UI
                </h3>
                <p className="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">
                  Share your project idea or features with us.
                </p>
                <Link
                  href="/"
                  className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 dark:bg-neutral-900 dark:hover:bg-purple-500 dark:hover:text-white "
                >
                  Full UI
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className=" h-5 w-5 ms-3"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        List of the project will add
      </h2>
      <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
        <li>weather app</li>
        <li>Text speech</li>
        <li>Google auth</li>
        <li>Spin wheel Game</li>
        <li>Chart</li>
        <li>react typescript tailwind starter</li>
        <li>BreakOut game</li>
        <li>CryptoCurrecny Price App</li>
        <li>Aspect Ratio Calculator</li>
        <li>Typeing Test</li>
        <li>Soduco</li>
        <li>Github API</li>
        <li>minesweeper</li>
        <li>Recipe Guide App</li>
        <li>Expenses Tracker</li>
        <li>Chrome Translator Extension</li>
        <li>Chrome Todo list Extension</li>
        <li>Image Color Picker</li>
        <li>2048 Game</li>
        <li>Form Validation</li>
        <li>Newsletter</li>
        <li>Calculator App</li>
        <li>JSON Parcer</li>
        <li>Alarm App</li>
        <li>Chess</li>
        <li>To do list</li>
        <li>Flappy</li>
        <li>Speech to text</li>
        <li>Snake Game</li>
        <li>Budgetting App</li>
        <li>Life code editor</li>
        <li>Word Guessing </li>
        <li>Coin Flip Game</li>
        <li>QR Code generator</li>
        <li>Tik Tac Toe</li>
        <li>Music player</li>
        <li>Map</li>
        <li>Pong game</li>
        <li>Authntication</li>
        <li>Restfull API</li>
        <li>Movie Guide</li>
        <li>Password Generator</li>
        <li>adding card</li>
        <li>Currency Converter</li>
        <li>Drag and Drop Todo list</li>
        <li>Event Calendar</li>
        <li>Transalte</li>
        <li>Graph (DSA)</li>
        <li>Sorting (DSA)</li>
        <li>Searching (DSA)</li>
        <li>Hash Table (DSA)</li>
        <li>Linked List (DSA)</li>
        <li>Queues (DSA)</li>
        <li>Trees (DSA)</li>
        <li>Bubble sorting (DSA)</li>
        <li>Game release calender</li>
        <li>Email sender app</li>
        <li>Text Encryptor</li>
        <li>Multi step form</li>
        <li>Quizz app</li>
        <li>Sudoku</li>
        <li>Video Player</li>
        <li>Image generator</li>
        <li>Chatbot</li>
        <li>3D Model</li>
        <li>Chat app</li>
      </ol>
    </div>
  );
};

export default Projects;
