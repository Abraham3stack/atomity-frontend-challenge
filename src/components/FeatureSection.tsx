"use client";

import { useState } from "react";
import { useApiData } from "@/hooks/useApiData";
import Chart from "./Chart";
import DataTable from "./DataTable";
import { motion } from "framer-motion";
import { tokens } from "@/tokens/tokens";

export default function FeatureSection() {
  const { data = [], isLoading, isError } = useApiData();

  const [level, setLevel] = useState<"cluster" | "namespace" | "pod">("cluster");
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null);
  const [selectedNamespace, setSelectedNamespace] = useState<string | null>(null);

  // Loading state
  if (isLoading) {
    return (
      <section className="p-10 text-center">
        <p>Loading insights...</p>
      </section>
    );
  }

  // Error state
  if (isError) {
    return (
      <section className="p-10 text-center text-red-500">
        <p>Failed to load data</p>
      </section>
    );
  }

  // Transform data
  const transformedData = data.map((item: any) => {
    if (level === "namespace") {
      return {
        ...item,
        name: item.name.replace("Cluster", "Namespace"),
        cpu: Math.floor(item.cpu * 0.6),
      };
    }

    if (level === "pod") {
      return {
        ...item,
        name: item.name.replace("Cluster", "Pod"),
        cpu: Math.floor(item.cpu * 0.3),
      };
    }

    return item;
  })

  // Click Handler
  const handleClick = (name: string) => {
    if (level === "cluster") {
      setLevel("namespace");
      setSelectedCluster(name);
    } else if (level === "namespace") {
      setLevel("pod");
      setSelectedNamespace(name);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto px-6 py-20"
      style={{ color: tokens.colors.textPrimary }}
    >
      {/* Title */}
      <div className="flex items-center justify-between mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold tracking-tight"
        >
          {level === "cluster" && "Cluster"}
          {level === "namespace" && `${selectedCluster} - Namespace`}
          {level === "pod" && `${selectedCluster} - ${selectedNamespace} - Pods`}
        </motion.h2>
        <div className="px-4 py-2 rounded-full border text-sm opacity-80">
          Last 30 Days
        </div>
      </div>

      {/* Aggregation badge */}
      <div className="mb-10">
        <div className="inline-block px-4 py-2 rounded-lg border text-sm">
          <span className="opacity-60">Aggregated by:</span>{" "}
          <span className="font-medium capitalize">{level}</span>
        </div>
      </div>

      {/* Back btn */}
      {level !== "cluster" && (
        <button
          onClick={() => {
            if (level === "pod") {
              setLevel("namespace");
              setSelectedNamespace(null);
            } else {
              setLevel("cluster");
              setSelectedCluster(null);
            }
          }}
          className="mb-6 text-sm opacity-70 hover:opacity-100 transition"
        >
          ← Back
        </button>
      )}

      {/* Chart */}
      <Chart data={transformedData} level={level} onClick={handleClick} />

      {/* Table */}
      <DataTable data={transformedData} />      
    </motion.section>
  );
}