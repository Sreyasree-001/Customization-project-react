import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FileUploaderNeon from "./FileUploadeerNeon";

const ImageUploaderNeon = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      height: 180,
      weight: 80,
      build: "athletic",
      text: "",
    },
  });

  const [text, setText] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleKeyDown = (e) => {
    const lines = e.target.value.split('\n');
    if (e.key === 'Enter' && lines.length >= 3) {
      e.preventDefault();
    } else {
      const trimmedText = lines.slice(0, 3).join('\n');
      setText(trimmedText);
    }
  };

  return (
    <div className="p-6 h-full w-auto min-h-screen flex justify-center items-center bg-black text-cyan-300 font-mono">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center justify-center space-y-6 sm:w-3/4"
      >
        <div className="flex flex-col w-full sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-10">
          <div className="my-4 sm:w-full">
            <FileUploaderNeon/>
          </div>

          <div className="flex flex-col space-y-6 sm:w-1/2 text-cyan-300">
            <div>
              <label className="text-pink-400">Height</label>
              <input
                type="number"
                min="0"
                max="300"
                {...register("height")}
                placeholder="Height (cm)"
                className="bg-black text-cyan-200 border border-cyan-400 rounded-md p-2 w-full shadow-[0_0_10px_cyan] mt-1"
              />
            </div>
            <div>
              <label className="text-pink-400">Weight</label>
              <input
                type="number"
                min="0"
                max="300"
                {...register("weight")}
                placeholder="Weight (kg)"
                className="bg-black text-cyan-200 border border-cyan-400 rounded-md p-2 w-full shadow-[0_0_10px_cyan] mt-1"
              />
            </div>
            <div>
              <label className="text-pink-400">Build</label>
              <select
                {...register("build")}
                className="bg-black border border-cyan-400 text-cyan-200 p-2 rounded-md w-full shadow-[0_0_10px_cyan] mt-1"
              >
                <option value="lean">Lean</option>
                <option value="regular">Regular</option>
                <option value="athletic">Athletic</option>
                <option value="big">Big</option>
              </select>
            </div>
          </div>
        </div>

        <textarea
          {...register("text")}
          value={text}
          placeholder="Enter text (max 3 lines)..."
          className="bg-black text-cyan-200 border border-pink-400 p-3 w-full mx-4 rounded-md shadow-[0_0_10px_pink] resize-none overflow-hidden"
          rows={3}
          onKeyDown={handleKeyDown}
        />

        <button
          type="submit"
          className="mt-4 bg-black border-2 border-cyan-400 text-cyan-300 px-6 py-2 rounded-md hover:bg-cyan-600 hover:text-black transition shadow-[0_0_15px_cyan] cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImageUploaderNeon;
