import Seo from "@/common/Seo";
import Layout from "@/layout/Layout";
import HeroSection from "@/landingpage/HeroSection";
import AboutSection from "@/landingpage/About";
import ExpertiseSection from "@/landingpage/Experties";
import ProductsSection from "@/landingpage/ProductSection";
import ProjectGallery from "@/landingpage/ProjectGallery ";
import NewGallery from "@/containers/NewGallery";
import VideoGallery from "@/containers/VideoGallery";
import FaqSection from "@/landingpage/FaqSection";

export default function Home() {
    return (
        <Layout>
            <Seo
                title="SkyExchin — Premium Services"
                descrption="SkyExchin — your trusted partner for premium services delivered with precision and excellence."
            />
            <HeroSection />
            <AboutSection />
            <ExpertiseSection />
            <ProductsSection />
            <NewGallery />
            <VideoGallery />
            <ProjectGallery />
            <FaqSection />
        </Layout>
    );
}
