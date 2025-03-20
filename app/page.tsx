
"use client"; // Mark this component as a Client Component

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [userInput, setUserInput] = useState(""); // State to store user input
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]); // State to store chat messages

  // Effect to apply dark mode to the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Function to handle user input and generate a response
  const handleSendMessage = () => {
    if (userInput.trim() === "") return; // Ignore empty messages

    // Add the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userInput, isUser: true },
    ]);

    // Generate a response (you can replace this with an API call or more complex logic)
    const response = generateResponse(userInput);

    // Add the bot's response to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: response, isUser: false },
    ]);

    // Clear the input field
    setUserInput("");
  };

  // Function to generate a response based on user input
  const generateResponse = (input: string) => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return "Hello! How can I assist you today?";
    } else if (lowerInput.includes("how are you")) {
      return "I'm just a bot, but I'm here to help!";
    } else if (lowerInput.includes("thank you")) {
      return "You're welcome! 😊";
    } else if (lowerInput.includes("bye")) {
      return "Goodbye! Have a great day!";
    } else {
      return "I'm sorry, I didn't understand that. Can you please clarify?";
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:bg-gray-900 dark:text-white">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-amber-500 dark:text-white mb-6">
            This is my home pages
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to our platform. We create amazing experiences through innovative solutions 
            and thoughtful design.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
            Key Features
          </h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-800 text-xl">✨</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Feature One
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 dark:text-green-800 text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Feature Two
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 dark:text-purple-800 text-xl">🛠️</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Feature Three
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-100 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their experience with our platform.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Sign Up Now
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">My Website</h3>
            </div>
            <div className="flex space-x-6">
              <a href="/About" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blogs</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} My Website. All rights reserved.
          </div>
        </footer>

        {/* Chatbot */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg"
        >
          💬
        </button>
        {chatOpen && (
          <div className="fixed bottom-20 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <div className="text-gray-900 dark:text-white font-medium mb-4">
              Chat with us
            </div>

            {/* Chat Messages */}
            <div className="h-60 overflow-y-auto mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    message.isUser ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg ${
                      message.isUser
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            />

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}