'use client';
import React, { JSX } from 'react';
import { Button, Image } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import FilterIcon from '@/assets/svg/filter.svg';
import SelectAllCars from './SelectAllCars';

export default function CarAllTab(): JSX.Element {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams!.toString());
  const tab = searchParams.get('tab') || 'all';

  return (
    <div className="flex flex-col gap-y-8 md:gap-x-8 md:flex-row justify-between md:items-center">
      <div className="flex gap-2 md:gap-4 lg:gap-8">
        <Button
          className={`border-secondary font-semibold text-xs md:text-base ${tab === 'all' ? 'bg-secondary text-white' : 'bg-white text-secondary'}`}
          variant="bordered"
          radius="full"
          onClick={() => {
            params.set('tab', 'all');

            window.history.pushState({}, '', `?${params.toString()}`);
          }}
        >
          All Cars
        </Button>
      </div>

      <div className="max-w-md w-full flex items-center justify-end gap-4">
        {<SelectAllCars />}
        <div>
          <Image src={FilterIcon.src} alt="Filter" radius="none" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
