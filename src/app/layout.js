import { Reem_Kufi } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/page";


const reemKufi = Reem_Kufi({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: "Helios Company",
  description: "Created by chyx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={reemKufi.className}>
      <body>
        <div className="App">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
