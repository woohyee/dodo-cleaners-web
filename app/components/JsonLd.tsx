export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DryCleaningOrLaundry',
    name: 'Dodo Cleaners',
    image: 'https://dodocleaners.ca/logo.png',
    description: 'Professional wet cleaning services in Burlington',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2500 Appleby Line Unit E1',
      addressLocality: 'Burlington',
      addressRegion: 'ON',
      postalCode: 'L7L 0A2',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.346115,
      longitude: -79.805959,
    },
    url: 'https://dodocleaners.ca',
    telephone: '+19053159995',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
    priceRange: '$$',
    sameAs: [
      'https://www.facebook.com/dodocleaners', // 실제 소셜 미디어 링크로 수정 필요
      'https://www.instagram.com/dodocleaners',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
