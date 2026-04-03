import { useQuery } from "@tanstack/react-query"; 
import { error } from "console";

const fetchCloudData = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=8");

  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();

  return data.products.slice(0, 4).map((_: any, index: number) => ({
    id: index,
    name: `Cluster ${String.fromCharCode(65 + index)}`,
    cpu: Math.floor(Math.random() * 2000) + 500,
    ram: Math.floor(Math.random() * 1500) + 300,
    storage: Math.floor(Math.random() * 500),
    network: Math.floor(Math.random() * 400),
    gpu: Math.floor(Math.random() * 900),
    efficiency: Math.floor(Math.random() * 60),
  }));
};

export const useApiData = () => {
  return useQuery({
    queryKey: ["cloud-data"],
    queryFn: fetchCloudData,
    staleTime: 1000 * 60 * 5,
  });
};