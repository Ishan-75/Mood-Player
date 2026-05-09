import { motion } from "framer-motion";

export default function Intro({ setStarted }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-10 max-w-2xl w-full shadow-2xl text-center z-10"
    >
      <h1 className="text-5xl font-bold mb-4">
        Hello Suga 💖
      </h1>

      <p className="text-zinc-300 text-lg mb-10">
        I made a little place for your moods ✨
      </p>

      <button
        onClick={() => setStarted(true)}
        className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-2xl text-lg font-semibold transition"
      >
        Enter ✨
      </button>
    </motion.div>
  );
}