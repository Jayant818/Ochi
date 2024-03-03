"use client";
import LandingPage from "@/components/LandingPage";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Eyes from "@/components/Eyes";
import Featured from "@/components/Featured";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
// import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function Home() {
	// const locomotiveScroll = new LocomotiveScroll();
	useEffect(() => {
		async function getLocomotive() {
			const Locomotive = (await import("locomotive-scroll")).default;
			const scroll = new Locomotive();
		}

		getLocomotive();
	}, []);
	return (
		<>
			<LandingPage />
			<Marquee />
			<About />
			<Eyes />
			<Featured />
			<Cards />
			<Footer />
		</>
	);
}
