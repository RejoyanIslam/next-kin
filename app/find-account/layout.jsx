// meta data
export const metadata = {
  title: "Account Recovery",
  description: "Account Recovery description",

  openGraph: {
    title: "Account Recovery",
    description: "KIN School Description",
    url: "KIN School url",
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/images/wings/blood.jpg",
        width: 800,
        height: 600,
        alt: "KIN Blood Image",
      },
      {
        url: "/images/wings/blood.jpg",
        width: 900,
        height: 800,
        alt: "KIN Blood Image",
      },

      { url: "/images/wings/blood.jpg" },
    ],
  },
  twitter: {
    title: "KIN FAQ",
    description: " School Description",
    images: {
      url: "/images/wings/blood.jpg",
      alt: "KIN School ",
    },
  },
};

export default function layout({ children }) {
  return <div>{children}</div>;
}