import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import prakashBhandari from '@/assets/testimonials/prakash-bhandari.svg';
import madavGhimire from '@/assets/testimonials/madav-ghimire.svg';
import basudevThapa from '@/assets/testimonials/basudev-thapa.png';
import basantaLalchan from '@/assets/testimonials/basanta-lalchan.svg';

const testimonials = [
  {
    id: 1,
    name: 'Prakash Bhandari',
    image: prakashBhandari,
    rating: 5,
    review: 'RACOIL lubricants deliver excellent engine protection and smooth performance. A reliable brand we trust.',
  },
  {
    id: 2,
    name: 'Madav Ghimire',
    image: madavGhimire,
    rating: 5,
    review: 'Consistent quality and great results. RACOIL products meet our daily operational needs perfectly.',
  },
  {
    id: 3,
    name: 'Basudev Thapa',
    image: basudevThapa,
    rating: 5,
    review: 'Very satisfied with the performance and durability. RACOIL oils perform well even in demanding conditions.',
  },
  {
    id: 4,
    name: 'Basanta Lalchan',
    image: basantaLalchan,
    rating: 5,
    review: 'Good quality products with dependable results. RACOIL has earned our long-term confidence.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Update items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const maxIndex = Math.ceil(testimonials.length / itemsPerSlide) - 1;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
            TRUSTED BY OUR <span className="text-primary">CUSTOMERS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear what our valued customers have to say about RACOIL products
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-accent transition-colors hidden sm:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-accent transition-colors hidden sm:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden px-2">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: maxIndex + 1 }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex gap-6 min-w-full"
                  style={{ flex: '0 0 100%' }}
                >
                  {testimonials
                    .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="flex-1 card-gradient rounded-xl p-6 border border-border shadow-lg min-w-0"
                      >
                        <div className="flex flex-col items-center text-center">
                          {/* Avatar */}
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          {/* Name */}
                          <h3 className="font-display text-lg md:text-xl tracking-wide text-foreground mb-2">
                            {testimonial.name}
                          </h3>

                          {/* Stars */}
                          <div className="flex gap-1 mb-4">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary"
                              />
                            ))}
                          </div>

                          {/* Review */}
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                            "{testimonial.review}"
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
