/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

const recentSearches = [
  "smartphone cases",
  "new iphones",
  "budget phones",
  "screen protectors",
];

function SearchBox() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement your search logic here
    setIsOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <Search className="w-5 h-5 text-white" strokeWidth={1} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search Products</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="grid gap-4 py-4">
            <div className="flex items-center gap-2">
              <Input
                id="search"
                placeholder="Type to search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="col-span-3"
              />
              <Button type="submit">Search</Button>
            </div>
            {recentSearches.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-medium">Recently searched</h4>
                <ul className="space-y-2">
                  {recentSearches.map((item, index) => (
                    <li key={index}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left"
                        onClick={() => {
                          setSearchQuery(item);
                          handleSearch(new Event("submit") as any);
                        }}
                      >
                        <Search className="mr-2 h-4 w-4" />
                        {item}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SearchBox;
