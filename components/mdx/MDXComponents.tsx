import { Aside } from "@/components/mdx/Aside";
import { Callout } from "@/components/mdx/Callout";
import { MdxCard } from "@/components/mdx/MdxCard";
import React, { ReactNode } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className: string;
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, className, children }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingId = children?.toString() ?? "";

  return (
    <HeadingTag id={headingId} className={className}>
      {children}
    </HeadingTag>
  );
};

interface MDXComponentsProps {
  [key: string]: React.FC<any>;
}

const MDXComponents: MDXComponentsProps = {
  h1: (props) => (
    <Heading level={1} className="text-4xl font-bold mt-6 mb-4" {...props} />
  ),
  h2: (props) => (
    <Heading
      level={2}
      className="text-3xl font-semibold mt-6 mb-4 border-b-2 border-gray-200 pb-2"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      level={3}
      className="text-2xl font-semibold mt-6 mb-4"
      {...props}
    />
  ),
  h4: (props) => (
    <Heading level={4} className="text-xl font-semibold mt-6 mb-4" {...props} />
  ),
  h5: (props) => (
    <Heading level={5} className="text-lg font-semibold mt-6 mb-4" {...props} />
  ),
  h6: (props) => (
    <Heading
      level={6}
      className="text-base font-semibold mt-6 mb-4"
      {...props}
    />
  ),
  hr: (props) => <hr className="border-t border-gray-600" {...props} />,
  p: (props) => <p className="mt-4 mb-4" {...props} />,
  a: (props) => (
    <a
      className="text-blue-600 dark:text-blue-400 no-underline hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props) => <ul className="list-disc pl-5 mt-0 mb-4" {...props} />,
  ol: (props) => <ol className="list-decimal pl-5 mt-0 mb-4" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  code: (props) => (
    <code
      className="bg-gray-600 rounded px-[0.3rem] py-[0.2rem] font-mono"
      data-language={props["data-language"] || "plaintext"}
      {...props}
    />
  ),
  pre: (props) => (
    <pre className="bg-gray-600 rounded p-4 overflow-x-auto my-2 relative">
      {props["data-language"] && (
        <span className="absolute top-2 right-2 text-xs text-gray-300">
          {props["data-language"]}
        </span>
      )}
      {props.children}
    </pre>
  ),
  blockquote: (props) => (
    <blockquote
      className="pl-4 border-l-4 border-gray-200 my-4 text-gray-500 italic"
      {...props}
    />
  ),
  img: (props) => (
    <img
      className="w-full md:w-[70%] rounded-2xl border-4 border-main justify-center mx-auto shadow-lg"
      loading="lazy"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-bold" {...props} />,
  table: (props) => (
    <div className="my-6 w-full overflow-x-auto">
      <table
        className="w-full text-gray-200 bg-gray-800 shadow-lg rounded-lg"
        {...props}
      />
    </div>
  ),
  tr: (props) => <tr className="border-t border-gray-500" {...props} />,
  th: (props) => (
    <th
      className="px-4 py-2 font-bold text-left bg-gray-900 text-white [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  Aside,
  Callout,
  Card: MdxCard,
  Gacha,
};

export default MDXComponents;
