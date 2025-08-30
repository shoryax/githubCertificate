import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Body from "@/components/Body";
import Footer from '@/components/Footer';
import Time from '@/components/Time';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Intro />
      <Body />
      <Footer />
      <Time />
    </div>
  );
}
