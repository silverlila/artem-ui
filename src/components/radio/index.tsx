import { useState } from 'react';
import { RadioGroup as RadioGroupUI } from '@headlessui/react';
import React from 'react';

export interface RadioGroupProps {
  label: string;
  description: string;
}
export default function RadioGroup({ items }: { items: RadioGroupProps[] }) {
  const [selected, setSelected] = useState(items[0]);

  return (
    <RadioGroupUI value={selected} onChange={setSelected}>
      <RadioGroupUI.Label className="sr-only">Server size</RadioGroupUI.Label>
      <div className="space-y-2">
        {items.map(item => (
          <RadioGroupUI.Option
            key={item.label}
            value={item}
            className={({ active, checked }) =>
              `${
                active
                  ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-300'
                  : ''
              }
                  ${
                    checked
                      ? 'bg-primary-900 bg-opacity-75 text-white'
                      : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
            }
          >
            {({ checked }) => (
              <>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <RadioGroupUI.Description
                        as="span"
                        className={`inline ${
                          checked ? 'text-sky-100' : 'text-primary-500'
                        }`}
                      >
                        <span>{item.description}</span>
                      </RadioGroupUI.Description>
                    </div>
                  </div>
                  {checked && (
                    <div className="shrink-0 text-white">
                      <CheckIcon className="h-6 w-6" />
                    </div>
                  )}
                </div>
              </>
            )}
          </RadioGroupUI.Option>
        ))}
      </div>
    </RadioGroupUI>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
