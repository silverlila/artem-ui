import { Popover as PopOver, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Fragment } from 'react';

export function Popover({
  title,
  children,
}: React.PropsWithChildren<{ title: string }>) {
  return (
    <div className="relative">
      <PopOver className="relative">
        {({ open }) => (
          <>
            <PopOver.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>{title}</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </PopOver.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopOver.Panel className="absolute left-0 z-10 mt-3  transform px-4 sm:px-0 lg:max-w-3xl">
                {children}
              </PopOver.Panel>
            </Transition>
          </>
        )}
      </PopOver>
    </div>
  );
}
