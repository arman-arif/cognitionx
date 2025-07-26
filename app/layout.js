import "./globals.css";

export const metadata = {
  title: "CognitionX | Assignment 8",
  description: "CognitionX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-satoshi">
        <div className="flex h-screen mx-auto bg-white max-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
