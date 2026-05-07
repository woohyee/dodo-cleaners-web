import Link from 'next/link';
import type { Metadata } from 'next';

const playfairStyle = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontWeight: 600,
  letterSpacing: '-0.5px',
} as const;

const playfairItalicStyle = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontStyle: 'italic',
  fontWeight: 400,
} as const;

export const metadata: Metadata = {
  title: 'Goodbye',
  description: 'Thank you for visiting dodo cleaners.',
};

export default function ByePage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12">
      <h1
        className="text-3xl md:text-5xl text-uber-black mb-4"
        style={playfairStyle}
      >
        Thank you for visiting
      </h1>
      <p
        className="text-xl md:text-2xl text-body-gray mb-8"
        style={playfairItalicStyle}
      >
        dodo cleaners
      </p>

      <div className="bg-uber-white p-8 rounded-xl shadow-uber-card max-w-md w-full">
        <p className="text-base md:text-lg text-body-gray mb-6 leading-relaxed">
          You can safely close this window now,
          <br />
          or return to our homepage anytime.
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-3 bg-uber-black text-uber-white rounded-pill text-sm font-medium hover:bg-body-gray transition-colors"
        >
          Return to Home
        </Link>
      </div>

      <p className="mt-8 text-sm text-muted-gray">
        See you again soon!
      </p>
    </div>
  );
}
