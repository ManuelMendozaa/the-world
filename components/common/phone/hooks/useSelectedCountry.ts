import React from 'react';
import { Country, Phone } from '@/models';

export function useSelectedCountry(countries: Country[], value: Phone) {
  const selectedCountry = React.useMemo(() => {
    const country = countries.find((c) => String(c.iso) === value.country);
    if (country) return country;
    const US = countries.find((c) => c.iso === 'US') as Country;
    return US;
  }, [value]);

  return selectedCountry;
}
