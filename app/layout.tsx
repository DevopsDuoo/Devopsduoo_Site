import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://devopsduoo.com'), // Update with your actual domain
  title: {
    default: "DevOps Duoo - Expert DevOps Solutions & Consulting Services",
    template: "%s | DevOps Duoo"
  },
  description: "Professional DevOps consulting and services in Pune, India. We specialize in CI/CD pipelines, cloud infrastructure, automation, containerization, and monitoring solutions. Transform your development workflow with expert DevOps implementation.",
  keywords: [
    "DevOps services Pune",
    "DevOps consulting India",
    "CI/CD pipeline setup",
    "Cloud infrastructure management",
    "Docker Kubernetes consulting",
    "AWS Azure DevOps",
    "Infrastructure automation",
    "DevOps transformation",
    "Continuous integration deployment",
    "Terraform Ansible services"
  ],
  authors: [{ name: "DevOps Duoo" }],
  creator: "DevOps Duoo",
  publisher: "DevOps Duoo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://devopsduoo.com',
    siteName: 'DevOps Duoo',
    title: 'DevOps Duoo - Expert DevOps Solutions & Consulting Services',
    description: 'Professional DevOps consulting services in Pune. Specializing in CI/CD, cloud infrastructure, automation, and monitoring solutions.',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'DevOps Duoo - Expert DevOps Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps Duoo - Expert DevOps Solutions',
    description: 'Professional DevOps consulting services specializing in CI/CD, cloud infrastructure, and automation.',
    images: ['/og-image.jpg'],
    creator: '@devopsduoo', // Update with your Twitter handle
  },
  alternates: {
    canonical: 'https://devopsduoo.com',
  },
  verification: {
    google: 'your-google-verification-code', // Add after Google Search Console setup
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
