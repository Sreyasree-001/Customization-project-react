import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";

const FileUploaderNeon = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (file) => {
    if (file && file.size <= 10 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("File is too large. Max 10 MB.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  return (
    <>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`w-auto h-64 border-2 border-dashed rounded-lg p-6 text-center flex items-center justify-center transition shadow-xl
          ${
            dragActive
              ? "border-cyan-400 bg-black/80"
              : "border-pink-500 bg-black"
          }`}
        style={{
          boxShadow: dragActive
            ? "0 0 20px cyan"
            : "0 0 15px rgba(255,0,255,0.6)",
        }}
      >
        {!imagePreview ? (
          <div className="text-pink-400">
            <CiImageOn className="w-full h-10 lg:h-12 text-cyan-300 animate-pulse" />
            <p className="mt-2">Drop an image here or</p>
            <label
              htmlFor="upload"
              className="mt-2 inline-block cursor-pointer border border-cyan-300 text-cyan-200 px-4 py-2 rounded-md hover:bg-cyan-700 hover:text-white transition font-mono"
              style={{ boxShadow: "0 0 10px cyan" }}
            >
              Select File
            </label>
            <p className="text-xs mt-2 text-fuchsia-300">10 MB maximum</p>
            <p className="text-sm mt-2 text-purple-400">No image selected</p>
          </div>
        ) : (
          <img
            src={imagePreview}
            alt="Preview"
            className="max-h-full max-w-full object-contain rounded-md border-2 border-cyan-400"
            style={{ boxShadow: "0 0 15px cyan" }}
          />
        )}

        <input
          id="upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default FileUploaderNeon;
