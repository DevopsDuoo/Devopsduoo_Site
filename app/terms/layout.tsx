import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | DevOps Duoo",
  description: "DevOps Duoo's terms of service. Review the terms and conditions for using our DevOps consulting, coaching, and professional services.",
  openGraph: {
    title: "Terms of Service | DevOps Duoo",
    description: "Terms and conditions for using our DevOps services",
  }
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
