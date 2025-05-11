import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";

const FileUploader = () => {
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
        className={`w-auto h-64 border-2 border-dashed rounded-lg p-6 text-center flex items-center justify-center transition ${
          dragActive ? "border-blue-400 bg-blue-950" : "border-gray-500"
        }`}
      >
        {!imagePreview ? (
          <div className="text-gray-400">
            <CiImageOn className="w-full h-10 lg:h-12" />
            <p className="mt-2">Drop an image here or</p>
            <label
              htmlFor="upload"
              className="mt-2 inline-block cursor-pointer bg-gray-200 border-2 border-slate-900 text-black px-4 py-2 rounded-md shadow hover:bg-blue-700 hover:text-gray-300 transition"
            >
              Select File
            </label>
            <p className="text-xs mt-2 text-gray-400">10 MB maximum</p>
            <p className="text-sm mt-2 text-gray-400">No image selected</p>
          </div>
        ) : (
          <img
            src={imagePreview}
            alt="Preview"
            className="max-h-full max-w-full object-contain rounded-md"
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

export default FileUploader;
