import React from 'react';
import { Country, Phone } from '@/models';
import CountryOption from './CountryOption';
import CountrySearch from './CountrySearch';

interface CountryDropdownProps {
  countries: Country[];
  lang: 'es' | 'en';
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: Country;
  value: Phone;
  onChange: (value: Phone) => void;
  setShowCountryList: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CountryDropdown({
  countries,
  lang,
  search,
  setSearch,
  selectedCountry,
  value,
  onChange,
  setShowCountryList,
}: CountryDropdownProps) {
  return (
    <div className="absolute top-1 left-0 w-[250px] bg-white border rounded-lg mt-10 max-h-[200px] overflow-y-auto hide-scrollbar py-2 px-1">
      <CountrySearch search={search} setSearch={setSearch} />
      <ul>
        {countries.map((country) => (
          <CountryOption
            key={country.iso}
            country={country}
            lang={lang}
            selected={country.iso === selectedCountry?.iso}
            value={value}
            onChange={onChange}
            setShowCountryList={setShowCountryList}
          />
        ))}
      </ul>
    </div>
  );
}
