import { motion } from "framer-motion"
import localFont from "next/font/local"

const fontMono = localFont({
  src: "../../public/font/CommitMono-400-Regular.otf",
})

export default function Home() {
  const spinTransition = {
    loop: Infinity, // Loop the animation forever
    ease: "linear", // Use a linear easing for constant speed
    duration: 4, // Duration for one complete rotation
  }
  // Define the style for the circle with stripes or gradient
  const circleStyle = {
    backgroundImage:
      "conic-gradient(from 0deg at 50% 50%, #ef4444, #f59e0b, #10b981, #3b82f6, #6366f1, #8b5cf6, #ec4899, #ef4444)",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  }
  return (
    <main
      className={`flex min-h-screen flex-col bg-[#3d3782] items-center justify-center ${fontMono.className}`}
    >
      <div className="flex flex-col h-screen w-full items-center justify-center mb-8 space-y-8">
        <motion.div
          className="bg-blue-500 rounded-full w-20 h-20" // Adjust the size and color as needed
          style={circleStyle} // Apply the gradient style
          animate={{ rotateY: 360 }} // Rotate around the Y axis by 360 degrees
          transition={spinTransition} // Use the defined transition for spinning
        />

        <div className="flex flex-col items-center justify-center space-y-2">
          <span className="text-white text-[45px] font-mono">Kuzushi Labs</span>
          <span className="text-white text-[20px] font-mono italic">
            decentralised dissonance
          </span>
        </div>

        <div className="flex">
          <button
            // onClick={onClick}
            className="bg-teal-300 px-6 py-2 font-bold text-lg text-black rounded shadow-md border-2 italic hover:bg-teal-400 transition-colors"
          >
            hi!
          </button>
        </div>
      </div>
    </main>
  )
}
