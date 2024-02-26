'use client';
import React from 'react';
import PhoneInput from '@/components/common/phone/PhoneInput';
import { Phone } from '@/models';

export default function Home() {
  const [phone, setPhone] = React.useState<Phone>({ code: '+1', number: '' });
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div className="w-[250px]">
        <PhoneInput value={phone} onChange={(_phone) => setPhone(_phone)} />
      </div>
    </main>
  );
}
