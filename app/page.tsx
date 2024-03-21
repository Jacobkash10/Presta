import Avantage from "@/components/Home/Avantage/Avantage";
import Avis from "@/components/Home/Avis/Avis";
import BadgesPlus from "@/components/Home/Badges_plus/BadgesPlus";
import Banner from "@/components/Home/Banner/Banner";
import Blog from "@/components/Home/Blog/Blog";
import Entreprise from "@/components/Home/Entreprise/Entreprise";
import How from "@/components/Home/How/How";
import Prestataire from "@/components/Home/Prestataire/Prestataire";
import Services from "@/components/Home/Services/Services";
import Trust from "@/components/Home/Trust/Trust";

export default function Home() {
  return (
    <div className="pt-20">
      <Banner />
      <Services />
      <BadgesPlus />
      <Trust />
      <How />
      <Prestataire />
      <Avis />
      <Entreprise />
      <Blog />
      <Avantage />
    </div>
  );
}
