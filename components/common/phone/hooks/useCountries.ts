import React from 'react';
import {
  PhoneNumberUtil,
  PhoneNumberFormat,
  RegionCode,
} from 'google-libphonenumber';
import { Country } from '@/models';
import { isoCountries } from '../data';
import { countryFlags } from '../data/flags';

const phoneUtil = PhoneNumberUtil.getInstance();

export function useCountries(search: string, lang: 'es' | 'en') {
  const getPhoneStructure = (region: RegionCode, code: number): string => {
    const sample = phoneUtil.getExampleNumber(region);
    let structure = phoneUtil
      .format(sample, PhoneNumberFormat.INTERNATIONAL)
      .replace(`+${code}`, '')
      .replace(/\d/g, '_')
      .trim();

    return structure;
  };

  const countries: Country[] = React.useMemo(() => {
    const regions = phoneUtil.getSupportedRegions();

    const _countries = regions.map((region) => {
      const code = phoneUtil.getCountryCodeForRegion(region);
      const structure = getPhoneStructure(region, code);
      const flag = countryFlags[region];

      return {
        code,
        flag,
        iso: region,
        name: isoCountries[region],
        structure,
      };
    });

    const searchedCountries = _countries.filter((country) =>
      country.name[lang].toLowerCase().includes(search.toLowerCase())
    );

    return searchedCountries.sort((a, b) =>
      a.name[lang].localeCompare(b.name[lang])
    );
  }, [search]);

  return countries;
}
