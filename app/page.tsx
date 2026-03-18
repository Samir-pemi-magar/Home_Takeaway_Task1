"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="items-center h-screen justify-center w-full gap-5 flex flex-col">
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => router.push("/Task1")}
      >
        Task1
      </button>

      <button
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        onClick={() => router.push("/Task2")}
      >
        Task2
      </button>
    </div>
  );
}
