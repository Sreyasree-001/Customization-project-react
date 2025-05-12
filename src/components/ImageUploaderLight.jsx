import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FileUploaderLight from "./FileUploaderLight";

const ImageUploaderLight = () => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      height: 180,
      weight: 80,
      build: "athletic",
      text: "",
    },
  });

  const text = watch("text");

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleKeyDown = (e) => {
    const lines = e.target.value.split("\n");
    if (e.key === "Enter" && lines.length >= 3) {
      e.preventDefault();
    } else {
      const trimmedText = lines.slice(0, 3).join("\n");
      setValue("text", trimmedText);
    }
  };

  return (
    <div className="p-4 h-full w-auto min-h-screen flex justify-center items-center bg-gradient-to-b from-white to-gray-100 font-sans">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center justify-center space-y-6 sm:w-3/4 md:space-y-8 lg:space-y-12"
      >
        <div className="flex flex-col w-full sm:flex-row justify-center space-y-4 sm:space-x-5 lg:space-x-10">
          <div className="my-4 h-full sm:w-full">
            <FileUploaderLight/>
          </div>

          <div className="flex flex-col space-y-5 sm:w-1/2 text-gray-800 my-5">
            <div>
              <label>Height</label>
              <input
                type="number"
                min="0"
                max="300"
                {...register("height")}
                placeholder="Height (cm)"
                className="border border-gray-400 p-2 rounded-md w-full mt-0.5 bg-white"
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
                className="border border-gray-400 p-2 rounded-md w-full mt-0.5 bg-white"
              />
            </div>
            <div>
              <label>Build</label>
              <select
                {...register("build")}
                className="border border-gray-400 p-2 rounded-md w-full bg-white mt-0.5 text-gray-800"
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
          onChange={(e) => setValue("text", e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter text (max 3 lines)..."
          className="border border-gray-400 p-2 w-full mx-4 rounded-md text-gray-800 bg-white"
          rows={3}
          style={{ resize: "none", overflow: "hidden" }}
        />

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImageUploaderLight;
