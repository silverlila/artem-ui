import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type FieldProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
};
export function Field({ label, name, type = 'text', ...rest }: FieldProps) {
  return (
    <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        {...rest}
        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
      />
    </div>
  );
}
