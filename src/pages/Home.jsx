import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <h1>Home</h1>
      </div>
      <Footer />
    </div>
  );
}
