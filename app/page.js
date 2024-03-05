/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const imageSrc =
    "https://images.unsplash.com/photo-1581431886288-e216ea4ccf3f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const uploadSrc =
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdW1lbnQlMjB1cGxvYWR8ZW58MHx8MHx8fDA%3D";

  const textSrc =
    "https://images.unsplash.com/photo-1608804375269-d077e2a2adaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNrZXRjaCUyMHRleHR8ZW58MHwwfDB8fHwy";

  const downloadSrc =
    "https://images.unsplash.com/photo-1694878981819-1084b2d7dd0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxkb3dubG9hZCUyMGljb258ZW58MHwwfDB8fHwy";

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 md:py-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-36  items-center">
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold leading-tight text-gray-800">
            Edit your images with ease
          </h1>
          <p className="text-xl text-gray-600">
            Our intuitive image editor offers powerful tools to enhance your
            photos.
          </p>
          <p className="text-xl text-gray-600">
            Unlock your creativity and boost your productivity with our
            intuitive and feature-rich text editor. Whether you're a writer,
            programmer, student, or professional, our web app provides the tools
            you need to craft, edit, and collaborate on your documents
            seamlessly.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition-all duration-200 w-full"
            onClick={() => router.push("/imageEditor")}
          >
            Start Editing
          </button>
        </div>
        <div className="hidden md:block">
          <Image
            src={imageSrc}
            alt="Person editing an image on a laptop"
            width={800}
            height={500} // Set appropriate dimensions based on the image
            layout="responsive" // Ensure responsive behavior
            className="w-full rounded-md shadow-md object-cover opacity-50"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 my-36  gap-8">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={uploadSrc} // Replace with your SVG icon
            alt="Upload icon"
            width={180}
            height={180}
            layout="fixed" // Maintain consistent size
            className="mb-4"
          />
          <h3 className="text-2xl font-medium text-gray-800">
            Upload and Edit
          </h3>
          <p className="text-gray-600">
            Upload your photos and apply various editing tools to create
            stunning visuals.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={textSrc} // Replace with your SVG icon
            alt="Text icon"
            width={180}
            height={180}
            layout="fixed"
            className="mb-4"
          />
          <h3 className="text-2xl font-medium text-gray-800">
            Add Text and Effects
          </h3>
          <p className="text-gray-600">
            Personalize your images with text overlays, filters, and other
            effects.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={downloadSrc} // Replace with your SVG icon
            alt="Share icon"
            width={180}
            height={180}
            layout="fixed"
            className="mb-4"
          />
          <h3 className="text-2xl font-medium text-gray-800">
            Share and Download
          </h3>
          <p className="text-gray-600">
            Easily share your edited images with friends or download them for
            future use.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center my-36">
        <p className="text-lg text-gray-600 mb-4">
          Ready to unleash your creativity?
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition-all duration-200"
          onClick={() => router.push("/imageEditor")}
        >
          Start Editing Now
        </button>
      </div>
    </div>
  );
}
