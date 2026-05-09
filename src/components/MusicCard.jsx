import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export default function MusicCard({
    selectedMood,
    setSelectedMood,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl z-10"
        >
            <img
                src={selectedMood.image}
                alt=""
                className="w-full h-72 object-cover rounded-2xl mb-6 shadow-lg"
            />

            <p className="text-pink-300 mb-3">
                {selectedMood.message}
            </p>

            <h2 className="text-3xl font-bold">
                {selectedMood.title}
            </h2>

            <p className="text-zinc-400 mb-6">
                {selectedMood.artist}
            </p>

            <button
                className={`w-full bg-gradient-to-r ${selectedMood.color} py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 text-lg hover:scale-105 transition`}
            >
                <FaPlay />
                Playing Now
            </button>

            <div className="mt-6 rounded-xl overflow-hidden">
                <iframe
                    src={selectedMood.embed}
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="eager"
                />
            </div>

            <button
                onClick={() => setSelectedMood(null)}
                className="mt-6 text-zinc-400 hover:text-white transition"
            >
                ← Back
            </button>
        </motion.div>
    );
}