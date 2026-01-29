import { useState } from "react";

export interface AccordionItem {
  id: number | string;
  title: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItem;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItemComponent = ({
  item,
  isActive,
  onMouseEnter,
}: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[300px] md:w-[400px]" : "w-[50px] md:w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        // onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
              : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

interface LandingAccordionProps {
  items: AccordionItem[];
}

export function ImageAccordion({ items }: LandingAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-2 md:gap-4 overflow-x-hidden p-4 w-full">
      {items.map((item, index) => (
        <AccordionItemComponent
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => handleItemHover(index)}
        />
      ))}
    </div>
  );
}
