import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div>
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

                <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 mb-4">
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                    Text speech
                  </li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                    Google auth
                  </li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                    Chart
                  </li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                    CryptoCurrecny Price App
                  </li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                    Aspect Ratio Calculator
                  </li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                    Typeing Test
                  </li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                  Github API
                  </li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                  Recipe Guide App
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
              <div className="p-7 rounded-xl bg-yellow-100 dark:bg-neutral-700/70">
                <h3 className="text-xl font-semibold mb-7">Extension</h3>

                <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 mb-4">
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                  Chrome Todo list 
                  </li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                  Chrome Translator 
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
                <h3 className="text-xl font-semibold mb-7">DSA</h3>
                <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 mb-4">
                  <li className="font-medium text-gray-500 dark:text-gray-400">Graph</li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">Sorting</li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">Queues</li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">Trees</li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">Bubble sorting</li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">Searching</li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">Hash Table</li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">Linked List</li>
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
                <h3 className="text-xl font-semibold mb-7">React</h3>
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
                <h3 className="text-xl font-semibold mb-7">Nodejs</h3>
                <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                  <li className="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">
                    Auth saved in db
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
                <h3 className="text-xl font-semibold mb-7">Games</h3>
                <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 mb-4">
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                    Spin wheel Game
                  </li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                    BreakOut game
                  </li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                  Soduco
                  </li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                  minesweeper
                  </li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">
                  2048 Game
                  </li>
                </ol>
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
                <h3 className="text-xl font-semibold mb-7">Full UI</h3>
                <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 mb-4">
                  <li className="font-medium text-gray-500 dark:text-gray-400">Blog Home page</li>
                  <li className="font-medium text-gray-500 dark:text-gray-400">E-commerce Home page</li>
                </ol>
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
      {/* <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
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
        <li>Game release calender</li>
        <li>Email sender app</li>
        <li>Text Encryptor</li>
        <li>Multi step form</li>
        <li>Sudoku</li>
        <li>Video Player</li>
        <li>Image generator</li>
        <li>Chatbot</li>
        <li>3D Model</li>
        <li>Chat app</li>
      </ol> */}
    </div>
  );
};

export default Projects;
