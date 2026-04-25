"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { apiClient } from "@/lib/api-client";
import { useState } from "react";
import { Heart } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

export function AddToWishlistButton({ productId }: { productId: string }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToWishlist = async (e: React.MouseEvent) => {
    e.preventDefault(); 
    
    // Redirect if not logged in
    if (status === "unauthenticated" || !session?.user?.token) {
      router.push("/auth/signin");
      return;
    }

    setLoading(true);
    try {
      await apiClient.addToWishlist(productId, session.user.token);
      setIsAdded(true);
    } catch (error) {
      console.error("Failed to add to wishlist", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleAddToWishlist}
      disabled={loading || status === "loading"}
      className="absolute top-2 right-2 z-20 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md border border-gray-200 hover:bg-gray-100 transition-colors flex items-center justify-center"
      title="Add to Wishlist"
    >
      {loading ? (
        <Spinner className="size-5 animate-spin text-gray-500" />
      ) : (
        <Heart className={`size-5 ${isAdded ? 'fill-[#e47911] text-[#e47911]' : 'text-gray-500 hover:text-red-500'}`} />
      )}
    </button>
  );
}
