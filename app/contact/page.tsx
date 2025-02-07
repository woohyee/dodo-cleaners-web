import { MapPin, Phone, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Visit Dodo Cleaners at 2500 Appleby Line Unit E1, Burlington, or call us at 905-315-9995. Professional wet cleaning services with convenient hours.',
  openGraph: {
    title: 'Contact Us | Dodo Cleaners',
    description:
      'Visit Dodo Cleaners at 2500 Appleby Line Unit E1, Burlington, or call us at 905-315-9995. Professional wet cleaning services with convenient hours.',
  },
};

export default function Contact() {
  return (
    <div className="space-y-8 mt-4">
      <div className="flex items-center justify-center gap-6 mb-12">
        <Image
          src="/dodocontactus.jpg"
          alt="Contact Us"
          width={80}
          height={80}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Contact Us
        </h1>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-8 py-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 p-4">
              <div className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 mt-1" />
                <p>2500 Appleby Line Unit E1, Burlington, ON L7L 0A2</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="flex-shrink-0" />
                <p>905-315-9995</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <p>Mon-Fri: 09:30am - 06:00pm</p>
                  <p>Sat: 10:00am - 03:00pm</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="w-full h-[350px] relative overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.0876983015174!2d-79.80595908787829!3d43.34611537112853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b61f5d4f3b4b7%3A0x8f8b2f8a6c1d1f1e!2s2500%20Appleby%20Line%20Unit%20E1%2C%20Burlington%2C%20ON%20L7L%200A2%2C%20Canada!5e0!3m2!1sen!2sus!4v1685123456789!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
