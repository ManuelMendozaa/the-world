import React from 'react';
import { ChevronDownIcon } from '@/components/icons';
import { Country, Phone } from '@/models';
import { useCloseOnClick } from '@/hooks';
import { CountryDropdown } from './dropdown';

interface CountrySelectorProps {
  codeType?: 'iso' | 'number' | 'flag' | 'emoji';
  value: Phone;
  selectedCountry: Country;
  countries: Country[];
  onChange: (value: Phone) => void;
  lang: 'es' | 'en';
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function CountrySelector({
  codeType = 'iso',
  value,
  selectedCountry,
  countries,
  onChange,
  lang,
  search,
  setSearch,
}: CountrySelectorProps) {
  const [showCountryList, setShowCountryList] = React.useState(false);

  const ref = React.useRef(null);
  useCloseOnClick(ref, () => setShowCountryList(false));

  React.useEffect(() => {
    if (showCountryList) {
      const input = document.getElementById('phone-input-country-search');
      input?.focus();
    }
  }, [showCountryList]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 border-r border-neutral-200"
        onClick={() => setShowCountryList(!showCountryList)}
      >
        <span className="text-sm">
          {codeType === 'iso' ? selectedCountry?.iso : value.code}
        </span>
        <ChevronDownIcon className="h-4 text-neutral-500" />
      </button>
      {showCountryList && (
        <CountryDropdown
          countries={countries}
          lang={lang}
          search={search}
          setSearch={setSearch}
          selectedCountry={selectedCountry}
          value={value}
          onChange={onChange}
          setShowCountryList={setShowCountryList}
        />
      )}
    </div>
  );
}
