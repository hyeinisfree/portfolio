import { motion } from 'framer-motion';

interface CustomCursorProps {
  x: number;
  y: number;
  text: string;
}

// 커스텀 커서 컴포넌트
export default function CustomCursor({ x, y, text }: CustomCursorProps) {
  return (
    <motion.div
      className="hidden sm:block font-yoonwoo text-xl info-box shadow-md w-max px-4 border-1 border-gray-100 rounded-2xl bg-white"
      animate={{
        x: x,
        y: y,
      }}
      transition={{
        type: 'spring',
        bounce: 0.1,
        stiffness: 700,
        damping: 30,
        mass: 0.3,
      }}
    >
      <div>{text}</div>
    </motion.div>
  );
}
