import React from 'react';
import { Country, Phone } from '@/models';
import { CheckIcon } from '@/components/icons';
import { parseNumber } from '../utils';

interface CountryOptionProps {
  country: Country;
  lang: 'es' | 'en';
  selected: boolean;
  value: Phone;
  onChange: (value: Phone) => void;
  setShowCountryList: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CountryOption({
  country,
  lang,
  selected,
  value,
  onChange,
  setShowCountryList,
}: CountryOptionProps) {
  const onSelect = () => {
    onChange({
      country: country.iso,
      code: `+${country.code}`,
      number: parseNumber(value.number ?? '', country) || '',
    });
    setShowCountryList(false);
  };
  return (
    <li
      className="hover:bg-neutral-100 p-2 rounded-md cursor-pointer transition-colors duration-300 text-sm flex items-center justify-between"
      onClick={onSelect}
    >
      <div className="flex items-center gap-2">
        {country.flag?.icon}
        <p>
          {country.name[lang]} (+{country.code})
        </p>
      </div>
      {selected && <CheckIcon className="h-4 text-neutral-600" />}
    </li>
  );
}
