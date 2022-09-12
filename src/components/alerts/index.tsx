import React from 'react';
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';

export interface AlertProps {
  type: 'success' | 'error' | 'warning';
  title: string;
  message: string;
}
const alertTypeIcon: Record<'success' | 'error' | 'warning', JSX.Element> = {
  success: <CheckCircleIcon className="h-5 w-5 text-green-400" />,
  error: <XCircleIcon className="h-5 w-5 text-red-400" />,
  warning: <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" />,
};
const alertTypeColor: Record<'success' | 'error' | 'warning', string> = {
  success: 'green',
  error: 'red',
  warning: 'yellow',
};
export function Alert({ type, title, message }: AlertProps) {
  const icon: any = alertTypeIcon[type];
  return (
    <div className={`rounded-md border bg-${alertTypeColor[type]}-50 p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-3">
          <h3
            className={`text-sm font-medium text-${alertTypeColor[type]}-800`}
          >
            {title}
          </h3>
          <div className={`mt-2 text-sm text-${alertTypeColor[type]}-700`}>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
