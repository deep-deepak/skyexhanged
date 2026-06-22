import Seo from "@/common/Seo";
import Layout from "@/layout/Layout";
import HeroSection from "@/landingpage/HeroSection";
import AboutSection from "@/landingpage/About";
import PopularitySection from "@/landingpage/PopularitySection";
import HowItWorksSection from "@/landingpage/HowItWorksSection";
import TrustSection from "@/landingpage/TrustSection";
import SignUpSection from "@/landingpage/SignUpSection";
import LoginSection from "@/landingpage/LoginSection";
import MobileLoginSection from "@/landingpage/MobileLoginSection";
import ApkGuideSection from "@/landingpage/ApkGuideSection";
import SportsBettingSection from "@/landingpage/SportsBettingSection";
import CasinoGamesSection from "@/landingpage/CasinoGamesSection";
import TrendingBettingSection from "@/landingpage/TrendingBettingSection";
import PromotionsSection from "@/landingpage/PromotionsSection";
import PaymentMethodsSection from "@/landingpage/PaymentMethodsSection";
import DepositWithdrawalSection from "@/landingpage/DepositWithdrawalSection";
import WithdrawFundsSection from "@/landingpage/WithdrawFundsSection";
import TestimonialsSection from "@/landingpage/TestimonialsSection";
import WhyChooseSection from "@/containers/WhyChooseSection";
import HistorySection from "@/containers/HistorySection";
import QuickLinksSection from "@/landingpage/QuickLinksSection";
import FaqSection from "@/landingpage/FaqSection";

export default function Home() {
    return (
        <Layout>
            <Seo
                title="SkyExchin — Premium Services"
                descrption="SkyExchin — your trusted partner for premium services delivered with precision and excellence."
            />
            <HeroSection />
            <QuickLinksSection />
            <AboutSection />
            <PopularitySection />
            <HowItWorksSection />
            <WhyChooseSection />
            <HistorySection />
            <TrustSection />
            <SignUpSection />
            <LoginSection />
            <MobileLoginSection />
            <ApkGuideSection />
            <SportsBettingSection />
            <CasinoGamesSection />
            <TrendingBettingSection />
            <PromotionsSection />
            <PaymentMethodsSection />
            <DepositWithdrawalSection />
            <WithdrawFundsSection />
            <TestimonialsSection />
            <FaqSection />
        </Layout>
    );
}
