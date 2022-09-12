import React from 'react';
import { Disclosure as UiDisclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export interface DisclosureProps {
  title: string;
}
export function Disclosure({
  title,
  children,
}: React.PropsWithChildren<DisclosureProps>) {
  return (
    <div className="w-full">
      <div className="w-full max-w-md rounded-2xl bg-white p-2">
        <UiDisclosure>
          {({ open }: any): JSX.Element => (
            <>
              <UiDisclosure.Button className="flex w-full justify-between rounded-lg bg-primary-100 px-4 py-2 text-left text-sm font-medium text-primary-900 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75">
                <span>{title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-primary-500`}
                />
              </UiDisclosure.Button>
              <UiDisclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {children}
              </UiDisclosure.Panel>
            </>
          )}
        </UiDisclosure>
      </div>
    </div>
  );
}
