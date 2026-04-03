"use client";

import { motion } from "framer-motion";
import { tokens } from "@/tokens/tokens";

export default function DataTable({ data }: { data: any[] }) {
  return (
    <div className="overflow-x-auto border rounded-xl">
      <table className="w-full text-sm">
        <thead className="text-xs uppercase tracking-wide opacity-70">
          <tr>
            <th className="p-3 text-left">Cluster</th>
            <th className="p-3">CPU</th>
            <th className="p-3">RAM</th>
            <th className="p-3">Storage</th>
            <th className="p-3">Network</th>
            <th className="p-3">GPU</th>
            <th className="p-3">Efficiency</th>
            <th className="p-3">Total</th>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-t hover:bg-white/5 transition"
                style={{ borderColor: tokens.colors.borderPrimary }}
              >
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.cpu}</td>
                <td className="p-3">{item.ram}</td>
                <td className="p-3">{item.storage}</td>
                <td className="p-3">{item.network}</td>
                <td className="p-3">{item.gpu}</td>
                <td className="p-3">{item.efficiency}</td>
                <td className="p-3 font-semibold">${total}</td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}