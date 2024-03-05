"use client";

import { useState } from "react";
import NextImage from "next/image";

const ImageEditor = () => {
  const themes = [
    { name: "Default", style: "", filter: "grayscale(0%)" },
    { name: "Grayscale", style: "grayscale", filter: "grayscale(100%)" },
    { name: "Sepia", style: "sepia", filter: "sepia(100%)" },
    {
      name: "Border",
      style: "border border-2 border-gray-500",
      filter: "grayscale(0%)",
    },
  ];

  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("#000");
  const [theme, setTheme] = useState(themes[0]);

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  const handleThemeChange = (e) => {
    setTheme(themes.find((t) => t.name === e.target.value));
    console.log("theme", theme);
    console.log("theme name", theme.name);
    console.log("theme style", theme.style);
  };

  const handlePositionX = (e) => {
    setPositionX(e.target.value);
  };

  const handlePositionY = (e) => {
    setPositionY(e.target.value);
  };

  const handleImageUpload = (e) => {
    // Handle image upload logic here (e.g., using FileReader or an API)
    const imageUrl = e.target.files[0];
    setUploadedImageUrl(URL.createObjectURL(imageUrl));
  };

  const handleDownload = () => {
    // Create a canvas to draw the image
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = uploadedImageUrl;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      if (!img.src.toLowerCase().endsWith(".png")) {
        console.warn("Image format might not be compatible with filters.");
      }

      ctx.filter = "sepia(100%)";
      console.log(ctx.filter, theme.filter);

      ctx.drawImage(img, 0, 0);

      ctx.font = `${fontSize}px sans-serif`;
      ctx.fillStyle = fontColor;
      ctx.fillText(text, positionX, positionY);

      // Convert canvas to a data URL (PNG format)
      const dataUrl = canvas.toDataURL("image/png");

      // Create a temporary link and trigger download
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "edited_image.png";
      link.click();
    };
  };

  return (
    <div className="w-[90%] lg:w-2/3 xl:w-2/3 mx-auto rounded-lg shadow-md bg-white overflow-hidden h-2/3 m-8 py-8">
      <h2 className="text-center text-2xl font-bold underline pb-6">
        Image Editor
      </h2>
      <div className="flex flex-col lg:flex-row xl:flex-row items-center justify-center xl:justify-between lg:justify-between bg-white w-[90%] mx-auto">
        <div className="mb-4 w-[90%]">
          {uploadedImageUrl && (
            <div className="relative h-[500px] w-full lg:w-[500px] xl:w-[500px]">
              <NextImage
                src={uploadedImageUrl}
                alt="Uploaded Image"
                className={`object-contain lg:object-cover xl:object-cover h-full w-[90%] ${theme.style}`}
                width={500}
                height={500}
              />
              {/* Text Overlay */}
              <div className="absolute top-1/4 left-1/4"></div>
            </div>
          )}
        </div>
        <div className="flex flex-col mb-4 w-[90%] xl:w-full lg:w-full">
          <label>Select Image to Edit : </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4"
          />
          <label>Write text to add on Image : </label>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text"
            className="mb-4 border border-gray-600 px-1 py-2 rounded-sm"
          />
          <label>Select the font size : </label>
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
            min={10}
            max={50}
            className="mb-4 border border-gray-500 px-1 py-2 rounded-sm"
          />
          <label>Select the font color : </label>
          <input
            type="color"
            value={fontColor}
            onChange={handleFontColorChange}
            className="mb-4 border border-gray-500 px-1 py-2 rounded-sm w-[100%]"
          />
          <label>Select the horizontal position : </label>
          <input
            type="range"
            min={0}
            max={500}
            value={positionX}
            onChange={handlePositionX}
            className="mb-4"
          />
          <label>Select the vertical position : </label>
          <input
            type="range"
            min={0}
            max={500}
            value={positionY}
            onChange={handlePositionY}
            className="mb-4"
          />
          <label>Select the Theme : </label>
          <select
            value={theme.name}
            onChange={handleThemeChange}
            className="mb-4 border border-gray-500 px-1 py-2 rounded-sm"
          >
            {themes.map((theme) => (
              <option key={theme.name} value={theme.name}>
                {theme.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleDownload}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Save Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
