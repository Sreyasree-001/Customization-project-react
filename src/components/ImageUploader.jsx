import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FileUploader from "./Fileuploader";

const ImageUploader = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      height: 180,
      weight: 80,
      build: "athletic",
      text: "",
    },
  });

  
  const onSubmit = (data) => {
    console.log(data);
  };

   const handleKeyDown = (e) => {
    const lines = e.target.value.split('\n');
    if (e.key === 'Enter' && lines.length >= 3) {
      e.preventDefault();
    }
    else {
      // Optionally, you can trim the text to the first 3 lines
      const trimmedText = lines.slice(0, 3).join('\n');
      setText(trimmedText);
    }
  };

  return (
    <div className="p-4 h-full w-auto min-h-screen flex justify-center items-center bg-gradient-to-b from-black to-blue-950 jetbrains-mono-new">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center justify-center spaxe-y-4 sm:w-3/4 sm:space-y-6 md:space-y-8 lg:space-y-12"
      >
        <div className="flex flex-col w-full sm:flex-row justify-center space-y-4 sm:space-x-5 lg:space-x-10">
          <div className="my-4 h-full sm:w-full">
            <FileUploader />
          </div>

          <div className="flex flex-col space-y-5 sm:w-1/2 text-gray-300 my-5">
           <div>
             <label>Height</label>
            <input
              type="number"
              min="0"
              max="300"
              {...register("height")}
              placeholder="Height (cm)"
              className="border border-gray-400 p-2 rounded-md w-full mt-0.5"
            />
           </div>
            <div>
              <label>Weight</label>
            <input
              {...register("weight")}
              type="number"
              min="0"
              max="300"
              placeholder="Weight (kg)"
              className="border border-gray-400 p-2 rounded-md w-full mt-0.5"
            />
            </div>
            <div>
              <label>Build</label>
            <select
              {...register("build")}
              className="border border-gray-400 p-2 rounded-md w-full text-white  bg-transparent mt-0.5"
            >
              <option value="lean" className="bg-blue-950">Lean</option>
              <option value="regular" className="bg-blue-950">Regular</option>
              <option value="athletic" className="bg-blue-950">Athletic</option>
              <option value="big" className="bg-blue-950">Big</option>
            </select>
            </div>
          </div>
        </div>

        <textarea
          {...register("text")}
          placeholder="Enter text (max 3 lines)..."
          className="border border-gray-400 p-2 w-full mx-4 rounded-md text-neutral-400 "
          rows={3}
          onKeyDown={handleKeyDown}
        style={{ resize: 'none', overflow: 'hidden' }}
        />

        <button
          type="submit"
          className="mt-4 bg-transparent border-2 border-slate-600 shadow-md shadow-white text-white p-2 rounded-md hover:bg-blue-900 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImageUploader;
