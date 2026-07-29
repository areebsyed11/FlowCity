import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FLowcity Plumbing & Drain',
    short_name: 'FLowcity',
    description: '24/7 Rapid Emergency Plumbing & Drain Cleaning Services',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#00bbf9',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
