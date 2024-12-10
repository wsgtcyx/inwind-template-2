"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

const TOC = () => {
  const [headings, setHeadings] = useState<
    { text: string; id: string; level: string }[]
  >([]);

  useEffect(() => {
    const articleElement = document.getElementById("article");
    if (!articleElement) return;

    const extractedHeadings = Array.from(
      articleElement.querySelectorAll("h2, h3")
    ).map((heading) => ({
      text: heading.textContent || "",
      id: heading.id || "",
      level: heading.nodeName,
    }));

    setHeadings(extractedHeadings);
  }, []);

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto">
      <ul className="space-y-1.5">
        {headings.map(({ text, id, level }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className={`
                group flex items-center gap-2
                py-1.5 pl-3 pr-2 rounded-md
                border-l-2 border-transparent
                hover:border-primary/50
                hover:bg-primary/5
                text-slate-600 dark:text-slate-400
                hover:text-primary dark:hover:text-primary
                transition-all duration-200
                ${level === "H3" ? "ml-4" : ""}
              `}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              <FaChevronRight 
                className={`
                  w-2.5 h-2.5 
                  opacity-0 group-hover:opacity-100 
                  transform -translate-x-1 group-hover:translate-x-0
                  transition-all duration-200
                  text-primary/70
                `}
              />
              <span className={`
                ${level === "H2" ? "font-medium text-[0.95rem]" : "text-[0.9rem]"}
              `}>
                {text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TOC;