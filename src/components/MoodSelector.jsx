import { motion } from "framer-motion";
import { moods } from "../data/songs";

export default function MoodSelector({ setSelectedMood }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
      {moods.map((item, index) => (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={index}
          onClick={() => setSelectedMood(item)}
          className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-left shadow-lg`}
        >
          <div className="text-4xl mb-4">
            {item.emoji}
          </div>

          <h2 className="text-2xl font-bold">
            {item.mood}
          </h2>
        </motion.button>
      ))}
    </div>
  );
}