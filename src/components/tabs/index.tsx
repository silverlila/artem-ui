import { Tab } from '@headlessui/react';
import React from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export function TabGroup({ children }: React.PropsWithChildren<any>) {
  return <Tab.Group>{children}</Tab.Group>;
}
export const TabList = ({ children }: React.PropsWithChildren<any>) => (
  <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
    {children}
  </Tab.List>
);
export const TabItem = ({ title }: { title: string }) => (
  <Tab
    key={title}
    className={({ selected }) =>
      classNames(
        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary-700',
        'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-400 focus:outline-none focus:ring-2',
        selected
          ? 'bg-white shadow'
          : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
      )
    }
  >
    {title}
  </Tab>
);
export const TabPanel = ({ children }: React.PropsWithChildren<any>) => (
  <Tab.Panel
    className={classNames(
      'rounded-xl bg-white p-3',
      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
    )}
  >
    {children}
  </Tab.Panel>
);
export function Tabs({
  tabs,
  children,
}: React.PropsWithChildren<any> & { tabs: string[] }) {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-400/20 p-1">
        {tabs.map((tab: any, index: React.Key | null | undefined) => (
          <Tab
            key={index}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-500 hover:bg-white/[0.12] hover:text-gray-400'
              )
            }
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">{children}</Tab.Panels>
    </Tab.Group>
  );
}
