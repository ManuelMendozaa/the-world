import React from 'react';
import { Phone } from '@/models';
import { parseNumber } from './utils';
import { useCountries, useSelectedCountry } from './hooks';
import CountrySelector from './CountrySelector';

interface PhoneInputProps {
  codeType?: 'iso' | 'number' | 'flag' | 'emoji';
  lang?: 'es' | 'en';
  name?: string;
  id?: string;
  value: Phone;
  onChange: (value: Phone) => void;
}

export default function PhoneInput({
  codeType = 'iso',
  lang = 'en',
  name,
  id,
  value,
  onChange,
}: PhoneInputProps) {
  const [search, setSearch] = React.useState<string>('');
  const countries = useCountries(search, lang);
  const selectedCountry = useSelectedCountry(countries, value);

  return (
    <div className="w-full border border-neutral-200 rounded-lg">
      <div className="flex gap-2 items-center text-neutral-700">
        <CountrySelector
          countries={countries}
          lang={lang}
          onChange={onChange}
          value={value}
          selectedCountry={selectedCountry}
          codeType={codeType}
          search={search}
          setSearch={setSearch}
        />
        <p className="font-light text-sm text-neutral-400">{value.code}</p>
        <input
          id={id}
          name={name}
          type="text"
          className="transition-colors duration-300 outline-none focus-within:ring-0 bg-transparent w-full text-sm"
          value={value?.number}
          onChange={(e) => {
            const number = parseNumber(e.target.value, selectedCountry);
            if (number === null) return;
            onChange({ ...value, number });
          }}
        />
      </div>
    </div>
  );
}
