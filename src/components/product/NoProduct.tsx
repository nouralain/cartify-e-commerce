import { Search } from "lucide-react";
import React from "react";

export default function NoProduct() {
  return (
    <div className="text-center py-20">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
        <Search />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">No Products Found</h3>
      <p className="text-gray-500 mb-6">
Try checking your spelling or use more general terms <br/>
Check each product page for other buying options.      </p>
      <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors">
        Clear Filters
      </button>
    </div>
  );
}
