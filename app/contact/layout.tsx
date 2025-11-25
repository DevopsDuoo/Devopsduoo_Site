import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get DevOps Consulting & Support",
  description: "Contact DevOps Duoo in Pune for expert DevOps consulting. Located at Shivneri Plaza, Kothrud. Reach us via email, phone, or our contact form for DevOps solutions.",
  keywords: [
    "DevOps consulting Pune",
    "Contact DevOps services",
    "DevOps support Kothrud",
    "DevOps consultation India",
  ],
  openGraph: {
    title: "Contact DevOps Duoo - Get Expert Consulting",
    description: "Reach out to DevOps Duoo for professional DevOps consulting and services in Pune, India.",
    url: 'https://devopsduoo.com/contact',
  },
  alternates: {
    canonical: 'https://devopsduoo.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
