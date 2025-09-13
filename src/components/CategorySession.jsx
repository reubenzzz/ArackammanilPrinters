import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CategoryCard from './CategoryCard';

// Import category images
import idCardsImg from '@/assets/id-cards.jpg';
import balloonPrintingImg from '@/assets/balloon-printing.jpg';
import signBoardsImg from '@/assets/sign-boards.jpg';
import bannersImg from '@/assets/banners.jpg';
import umbrellaPrintingImg from '@/assets/umbrella-printing.jpg';
import tshirtPrintingImg from '@/assets/tshirt-printing.jpg';

const categories = [
  { title: 'ID Cards', image: idCardsImg },
  { title: 'Balloon Printing', image: balloonPrintingImg },
  { title: 'Sign Boards', image: signBoardsImg },
  { title: 'Banners', image: bannersImg },
  { title: 'Umbrella Printing', image: umbrellaPrintingImg },
  { title: 'T-Shirt Printing', image: tshirtPrintingImg },
];

const CategoriesSection: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Explore all categories
            </h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              onClick={() => console.log(`Clicked ${category.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
