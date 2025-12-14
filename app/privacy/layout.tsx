import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | DevOps Duoo",
  description: "DevOps Duoo's privacy policy. Learn how we collect, use, and protect your personal information when you use our DevOps consulting services.",
  openGraph: {
    title: "Privacy Policy | DevOps Duoo",
    description: "Learn about our data protection practices and privacy commitment",
  }
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
