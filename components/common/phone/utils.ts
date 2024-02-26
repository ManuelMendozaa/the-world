import { Country } from '@/models';

export function parseNumber(number: string, country?: Country): string | null {
  // Delete non-digit characters
  if (number.match(/\D/g)) number = number.replace(/\D/g, '');

  // Format based on country structure
  if (country) {
    number = number.split('').reduce((acc, digit) => {
      const index = acc.length;
      const char = country.structure[index];
      if (char === '_') return acc + digit;
      return acc + char + digit;
    }, '');

    if (number.length > country.structure.length) return null;
  }

  return number;
}
