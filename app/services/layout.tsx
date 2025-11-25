import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | DevOps Duoo - Consultation & Coaching',
  description: 'Explore our comprehensive DevOps services including cloud infrastructure, CI/CD pipelines, consultation, and professional coaching for career growth and technical skills.',
  keywords: ['DevOps services', 'DevOps consultation', 'DevOps coaching', 'career guidance', 'technical training', 'cloud infrastructure', 'CI/CD', 'Kubernetes'],
  openGraph: {
    title: 'Our Services | DevOps Duoo',
    description: 'Professional DevOps services, career consultation, and technical coaching',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
