"use client";

import { motion } from "framer-motion";
import { tokens } from "@/tokens/tokens";

type Props = {
  data: any[];
  level: string;
  onClick: (name: string) => void;
};

export default function Chart({ data, level, onClick }: Props) {
  const values = data.map((item) => item.cpu);
  const maxCpu = Math.max(...values);
  const minCpu = Math.min(...values);

  return (
    <motion.div
      key={level}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative h-48 md:h-64 mb-12 md:mb-16"
    >
      {/* Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-full border-t"
            style={{ borderColor: tokens.colors.borderPrimary }}
          />
        ))}
      </div>

      {/* Bars */}
      <div className="relative flex items-end h-full gap-4 md:gap-10 px-2 overflow-x-auto md:overflow-visible">
        {data.map((item, index) => {
          const range = maxCpu - minCpu || 1;
          const normalized = (item.cpu - minCpu) / range;
          const heightPercent = normalized * 80 + 20;

          return (
            <div
              key={index}
              className="flex flex-col items-center min-w-[70px] md:flex-1 cursor-pointer group h-full justify-end"
              onClick={() => onClick(item.name)}
            >
              {/* Bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${heightPercent}%` }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="w-10 md:w-14 rounded-2xl group-hover:scale-105"
                style={{
                  background: tokens.colors.accentSuccess,
                }}
              />

              {/* Label */}
              <span className="mt-2 text-xs md:text-sm text-gray-400 group-hover:text-white transition text-center">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}