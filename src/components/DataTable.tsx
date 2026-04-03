"use client";

import { motion } from "framer-motion";
import { tokens } from "@/tokens/tokens";

export default function DataTable({ data }: { data: any[] }) {
  return (
    <div className="overflow-x-auto border rounded-xl">
      <table className="w-full min-w-[720px] text-xs md:text-sm">
        <thead className="text-xs uppercase tracking-wide opacity-70">
          <tr>
            <th className="p-2 md:p-3 text-left whitespace-nowrap">Cluster</th>
            <th className="p-2 md:p-3 whitespace-nowrap">CPU</th>
            <th className="p-2 md:p-3 whitespace-nowrap">RAM</th>
            <th className="p-2 md:p-3 whitespace-nowrap">Storage</th>
            <th className="p-2 md:p-3 whitespace-nowrap">Network</th>
            <th className="p-2 md:p-3 whitespace-nowrap">GPU</th>
            <th className="p-2 md:p-3 whitespace-nowrap">Efficiency</th>
            <th className="p-2 md:p-3 whitespace-nowrap">Total</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            const total = 
              item.cpu +
              item.ram +
              item.storage + 
              item.network +
              item.gpu;

            return (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-t hover:bg-white/5 transition"
                style={{ borderColor: tokens.colors.borderPrimary }}
              >
                <td className="p-2 md:p-3 whitespace-nowrap">{item.name}</td>
                <td className="p-2 md:p-3 whitespace-nowrap">{item.cpu}</td>
                <td className="p-2 md:p-3 whitespace-nowrap">{item.ram}</td>
                <td className="p-2 md:p-3 whitespace-nowrap">{item.storage}</td>
                <td className="p-2 md:p-3 whitespace-nowrap">{item.network}</td>
                <td className="p-2 md:p-3 whitespace-nowrap">{item.gpu}</td>
                <td className="p-2 md:p-3 whitespace-nowrap">{item.efficiency}</td>
                <td className="p-2 md:p-3 font-semibold whitespace-nowrap">${total}</td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}