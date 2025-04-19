import { motion } from "framer-motion";

interface LoadingIndicatorProps {
  percentage: number;
}

// 로딩 인디케이터 컴포넌트
export default function LoadingIndicator({
  percentage,
}: LoadingIndicatorProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <h1 className="font-clash text-4xl mb-4">Hyein Kim</h1>
        <div className="w-64 h-1 bg-gray-200 rounded-full">
          <motion.div
            className="h-full bg-black rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="mt-2 text-sm">{`${percentage}% 로딩 중...`}</p>
      </div>
    </motion.div>
  );
}
