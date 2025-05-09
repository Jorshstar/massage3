import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  avatar?: string;
  rating: number;
  text: string;
}

interface TestimonialSliderProps {
  testimonials?: Testimonial[];
  autoplaySpeed?: number;
}

const TestimonialSlider = ({
  testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5,
      text: "The deep tissue massage was exactly what I needed. My chronic back pain has significantly improved after just three sessions. Highly recommended!",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5,
      text: "I've tried many massage therapists over the years, but none compare to this experience. The hot stone therapy was incredibly relaxing and therapeutic.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      rating: 4,
      text: "The Swedish massage was so relaxing I almost fell asleep! The ambiance of the space is perfect and the therapist was very professional and skilled.",
    },
    {
      id: 4,
      name: "David Thompson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rating: 5,
      text: "After months of stress and tension, the therapeutic massage was exactly what I needed. I left feeling like a new person. Will definitely be back!",
    },
  ],
  autoplaySpeed = 5000,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isAutoplay) {
      interval = setInterval(() => {
        nextTestimonial();
      }, autoplaySpeed);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoplay, autoplaySpeed]);

  // Pause autoplay when user interacts with slider
  const handleInteraction = () => {
    setIsAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    const timeout = setTimeout(() => setIsAutoplay(true), 10000);
    return () => clearTimeout(timeout);
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto px-4 py-12 bg-background"
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <div className="overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <Card className="border-none shadow-lg bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <Avatar className="h-20 w-20 border-2 border-primary/20">
                      <AvatarImage
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary text-lg">
                        {testimonials[currentIndex].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  <blockquote className="mb-6">
                    <p className="text-lg md:text-xl italic text-foreground/90">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </blockquote>

                  <p className="font-semibold text-lg text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              handleInteraction();
            }}
            className={`h-2.5 rounded-full transition-all ${currentIndex === index ? "w-8 bg-primary" : "w-2.5 bg-primary/30"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full h-10 w-10 shadow-md hover:bg-primary/10"
        onClick={() => {
          prevTestimonial();
          handleInteraction();
        }}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full h-10 w-10 shadow-md hover:bg-primary/10"
        onClick={() => {
          nextTestimonial();
          handleInteraction();
        }}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default TestimonialSlider;
