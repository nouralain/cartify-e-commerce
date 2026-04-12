"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/interfaces/ICategory";
import { IResponse } from "@/interfaces/IResponse";

export default function SearchBar({
  categories,
}: {
  categories: IResponse<ICategory[]>;
}) {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("all");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue === "" && selectValue==="all") {
      router.push("/");
    } else {
     if(selectValue!=="all"){
         router.push(`/search?q=${encodeURIComponent(searchValue)}&category=${selectValue}`);
     }else{
         router.push(`/search?q=${encodeURIComponent(searchValue)}`);
     }
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="grow flex h-10 rounded-md overflow-hidden bg-white text-black focus-within:ring-2 focus-within:ring-[#ff9900] w-full md:w-1/2"
    >
      <Select value={selectValue} onValueChange={(value)=>setSelectValue(value)}>
        <SelectTrigger className="w-fit py-0">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All Departments</SelectItem>
            {categories.data.map((cat) => (
              <SelectItem value={cat._id} key={cat._id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="grow px-3 text-[#0f1111] focus:outline-none"
        placeholder="Search products"
      />
      <button
        type="submit"
        className="bg-[#ff9900] px-4 flex items-center justify-center"
      >
        <Search className="h-5 w-5 text-[#0f1111]" />
      </button>
    </form>
  );
}
