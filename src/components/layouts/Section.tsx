import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  sectionClass?: string;
  wrapperClass?: string;
  bgColor?: string;
  padding?: string;
}

const Section = ({
  children,
  sectionClass = "w-full min-h-screen",
  wrapperClass = "container mx-auto px-4",
  bgColor = "bg-white",
  padding = "py-16",
}: SectionProps) => {
  return (
    <section className={`${padding} ${bgColor} ${sectionClass}`}>
      <div className={`${wrapperClass}`}>{children}</div>
    </section>
  );
};

export default Section;
