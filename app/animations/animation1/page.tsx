// app/animations/animation-1/page.tsx
"use client";

import { motion } from "framer-motion";

export default function Animation1Page() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-8 bg-white rounded-2xl shadow-xl text-center"
      >
        <h2 className="text-2xl font-semibold mb-2">Hello, Framer Motion!</h2>
        <p>This card fades in and moves up on load.</p>
      </motion.div>
    </main>
  );
}
