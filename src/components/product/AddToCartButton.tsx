"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/api-client";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export function AddToCartButton({ productId }: { productId: string }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault(); 
    
    // Redirect if not logged in
    if (status === "unauthenticated" || !session?.user?.token) {
      router.push("/auth/signin");
      return;
    }

    setLoading(true);
    try {
      await apiClient.addToCart(productId, session.user.token);
    } catch (error) {
      console.error("Failed to add to cart", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleAddToCart}
      disabled={loading || status === "loading"}
      className="w-full mt-3 bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] rounded-full border border-transparent whitespace-nowrap font-medium flex items-center justify-center gap-2 shadow-[0_2px_5px_rgba(213,217,217,0.5)]"
    >
      {loading ? <Spinner className="size-4 animate-spin text-black" /> : "Add to cart"}
    </Button>
  );
}
