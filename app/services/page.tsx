import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Professional wet cleaning services at Dodo Cleaners. We offer expert care for all types of garments including shirts, suits, dresses, and more.',
  openGraph: {
    title: 'Our Services | Dodo Cleaners',
    description:
      'Professional wet cleaning services at Dodo Cleaners. We offer expert care for all types of garments including shirts, suits, dresses, and more.',
  },
};

export default function Services() {
  const services = [
    {
      name: 'Wet Cleaning',
      description:
        'A gentle, eco-friendly cleaning service for delicate garments.',
      image: '/water.jpg',
    },
    {
      name: 'Shirt & Casual Wear Laundry',
      description:
        'We provide thorough cleaning and perfect ironing for your shirts and everyday clothes.',
      image: '/clean_towels.jpg',
    },
    {
      name: 'Bedding Laundry',
      description:
        'Get your large items like blankets and comforters fresh and clean.',
      image: '/clean_duvet.jpg',
    },
    {
      name: 'Leather & Suede Cleaning',
      description:
        'Professional care to keep your leather and suede items looking like new.',
      image: '/leather_jacket.jpg',
    },
    {
      name: 'Curtain & Carpet Cleaning',
      description:
        'Clean and refresh your home with professionally washed curtains and carpets.',
      image: '/curtains.jpg',
    },
    {
      name: 'Alteration & Custom Care',
      description:
        'Tailoring and alterations to keep your clothes fitting perfectly.',
      image: '/alteration.jpg',
    },
    {
      name: 'Wedding Gown Cleaning & Preservation',
      description:
        'Preserve your special memories with expert cleaning and care for your wedding gown.',
      image: '/wedding_gown.jpg',
    },
    {
      name: 'Shoes Care',
      description:
        'Keep your shoes in top condition with professional cleaning and care services.',
      image: '/shoes.jpg',
    },
  ];

  return (
    <div className="space-y-8 mt-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-y-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center text-center"
          >
            <div className="relative w-32 h-32 mb-3 transform transition-all duration-300 group-hover:scale-110">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="rounded-full object-cover transition-all duration-300 group-hover:shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <h2 className="text-lg font-semibold mb-2 text-purple-700 transition-colors duration-300 group-hover:text-purple-900">
              {service.name}
            </h2>
            <div className="absolute top-[85%] opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-b from-purple-50 to-white shadow-xl rounded-lg p-4 z-10 w-72 transform -translate-x-1/2 left-1/2 border-2 border-purple-200 backdrop-blur-sm">
              <p className="text-gray-900 text-base font-medium">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
