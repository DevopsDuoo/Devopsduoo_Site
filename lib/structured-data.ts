export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "DevOps Duoo",
  "image": "https://devopsduoo.com/logo.png",
  "@id": "https://devopsduoo.com",
  "url": "https://devopsduoo.com",
  "telephone": "+918788202975",
  "email": "devopsduoo@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shivneri Plaza, Gujrat Colony, Kothrud",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411038",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5074, // Update with exact coordinates
    "longitude": 73.8077
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/devopsduoo",
    "https://github.com/devopsduoo",
    "https://twitter.com/devopsduoo"
  ],
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "serviceType": [
    "DevOps Consulting",
    "CI/CD Pipeline Setup",
    "Cloud Infrastructure Management",
    "Container Orchestration",
    "Infrastructure Automation",
    "Monitoring and Logging Solutions"
  ]
};
