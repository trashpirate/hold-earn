"use client";
import { useEffect, useState } from "react";
import { isAddress } from "viem";

interface ReflectionData {
  reflections: number;
  balance: number;
  pureBalance: number;
  totalInSum: number;
  totalOutSum: number;
}

export default function ReflectionChecker() {
  const [address, setAddress] = useState<string>("");
  const [reflectionData, setReflectionData] = useState<ReflectionData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReflections(walletAddress: string) {
      if (!isAddress(walletAddress)) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/reflections?address=${encodeURIComponent(walletAddress)}`);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch reflections');
        }

        const data: ReflectionData = await response.json();
        setReflectionData(data);
      } catch (err) {
        console.error('Error fetching reflections:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch reflections');
        setReflectionData(null);
      } finally {
        setLoading(false);
      }
    }

    if (address.trim()) {
      // Debounce the API call
      const timeoutId = setTimeout(() => {
        fetchReflections(address.trim());
      }, 500);

      return () => clearTimeout(timeoutId);
    } else {
      setReflectionData(null);
      setError(null);
    }
  }, [address]);

  return (
    <div className="bg-white/5 p-4 rounded-lg h-fit">
      <h3 className="font-bold text-lg">EARN Reflection Checker</h3>
      <form>
        <input
          className="w-full h-8 p-2 indent-1 border-gray-300 rounded-md text-black"
          type="text"
          placeholder="Enter wallet address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </form>

      <div className="h-8 mt-2">
        {loading && <div className="text-yellow-400">Loading...</div>}
        {error && <div className="text-red-400">Error: {error}</div>}
        {reflectionData && !loading && !error && (
          <div className="text-green-400">
            Reflections: {reflectionData.reflections.toLocaleString()} EARN
          </div>
        )}
      </div>

      {/* Optional: Show additional details */}
      {reflectionData && !loading && !error && (
        <div className="text-sm text-gray-300 mt-2">
          <div>Current Balance: {reflectionData.balance.toLocaleString()} EARN</div>
          <div>Pure Balance: {reflectionData.pureBalance.toLocaleString()} EARN</div>
        </div>
      )}
    </div>
  );
}