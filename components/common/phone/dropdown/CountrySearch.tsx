import React from 'react';
import { SearchIcon } from '@/components/icons';

interface CountrySearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function CountrySearch({
  search,
  setSearch,
}: CountrySearchProps) {
  return (
    <div className="flex gap-2 items-center border-b px-2 pb-2 mb-1 border-neutral-100">
      <SearchIcon className="h-4" />
      <input
        type="text"
        className="w-full outline-none focus-within:ring-0 bg-transparent text-sm"
        placeholder="Search country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
