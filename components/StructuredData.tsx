import React from 'react';

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PlumbingService',
    'name': 'FLowcity Plumbing',
    'image': 'https://flowcityplumbing.com/og-image.jpg',
    '@id': 'https://flowcityplumbing.com',
    'url': 'https://flowcityplumbing.com',
    'telephone': '+1-800-356-9248',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '100 Metro Plaza, Suite 400',
      'addressLocality': 'Metro City',
      'addressRegion': 'NY',
      'postalCode': '10001',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 40.7128,
      'longitude': -74.0060,
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      'opens': '00:00',
      'closes': '23:59',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '482',
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Plumbing Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': '24/7 Emergency Plumbing',
            'description': 'Rapid response 24/7 emergency pipe burst, flood shutoff, and severe drain blockage relief.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Leak Detection & Repair',
            'description': 'Non-invasive acoustic and thermal imaging water leak detection and repair.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Hydro-Jetting Drain Cleaning',
            'description': 'High-pressure hydro jetting and video camera main sewer line clearing.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Water Heater Repair & Installation',
            'description': 'Tankless upgrades and traditional water heater repair and installation.',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
