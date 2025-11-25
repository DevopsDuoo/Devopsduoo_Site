import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - DevOps Experts & Consulting Team",
  description: "Meet the DevOps Duoo team in Pune. Expert consultants specializing in cloud infrastructure, automation, and DevOps transformation. Learn about our mission, values, and expertise.",
  openGraph: {
    title: "About DevOps Duoo - Expert Team & Mission",
    description: "Professional DevOps consulting team in Pune specializing in cloud infrastructure and automation solutions.",
    url: 'https://devopsduoo.com/about',
  },
  alternates: {
    canonical: 'https://devopsduoo.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
