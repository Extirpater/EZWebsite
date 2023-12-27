import React from "react";
import { styles } from "../styles";
const Home = () => {
  return (
    <div className=" h-screen flex flex-grow justify-center items-center flex-col bg-slate-300 space-y-5 ">
      <div class="shadow-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Edward B. Zhang
        </h1>

        <p class="mb-3 text-xl font-bold text-green-600	 dark:text-gray-400">
          Dartmouth College <span className="text-[#00693e]">| CS + Math</span>
        </p>
        <p class="mb-10 text-xl font-base text-gray-700 dark:text-gray-400">
          DartUp Team Co-Founder
          <br></br>
          Digital Pathology ML Researcher at EDIT DHMC
          <br></br>
          Data & Machine Learning @ <u>Kaggle</u> | Master Rank
        </p>

        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow">
          Resume
        </button>
      </div>
      <div class="shadow-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-1 text-2xl font-bold text-green-600	 dark:text-gray-400">
          Previous Experience
        </p>
        <p class="text-lg font-base text-gray-700 dark:text-gray-400">
          Software Engineer @ PearX Startup -{" "}
          <a href="https://www.delilah.ai">
            <u>Delilah AI</u>
          </a>{" "}
        </p>
        <p class="mb-10 text-lg font-base text-gray-700 dark:text-gray-400">
          AI Research @ Lee Computational AI Optahmololgy Lab
        </p>
      </div>
    </div>
  );
};

export default Home;
