import React from "react";

export type TimelineEvent = {
  time: string;
  title: string;
  description?: string;
  location?: string;
};

export type TimelineProps = {
  events: TimelineEvent[];
  className?: string;
};

/**
 * Mobile‑first vertical timeline. Render any number of events by passing props.
 */
export default function Timeline({ events, className }: TimelineProps) {
  return (
    <div className={className}>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gray-200 dark:bg-gray-700" />

        <ul className="space-y-8">
          {events.map((e, idx) => (
            <li key={idx} className="relative pl-12">
              {/* Dot */}
              <span className="absolute left-[10px] top-1.5 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-900" />

              <time className="block text-sm text-gray-500 dark:text-gray-400">
                {e.time}
              </time>
              <h3 className="mt-0.5 text-base font-semibold text-gray-900 dark:text-gray-100">
                {e.title}
              </h3>
              {e.location && (
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {e.location}
                </div>
              )}
              {e.description && (
                <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                  {e.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

