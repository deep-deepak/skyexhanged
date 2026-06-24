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
// import QuickLinksSection from "@/landingpage/QuickLinksSection";
import FaqSection from "@/landingpage/FaqSection";

export default function Home() {
    return (
        <Layout>
            <Seo
                title="SkyExchin - Trusted Online Cricket Exchange Platform | Sports Exchange"
                descrption="SkyExchin is a trusted online cricket exchange platform offering seamless sports exchange experience, live cricket exchange, secure transactions, and 24/7 customer support."
                canonical="https://skyexchin.com/"
            />
            <h1 className="sr-only">Trusted Online Cricket Exchange Platform - SkyExchin</h1>
            <HeroSection />
            {/* <QuickLinksSection /> */}
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
