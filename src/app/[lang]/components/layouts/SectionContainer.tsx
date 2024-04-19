"use client";

export default function SectionContainer({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-wrap items-center xl:px-16 py-12 md:pt-20 md:pb-12">
      {children}
    </div>
  );
}
