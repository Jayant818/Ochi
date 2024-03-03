import React from "react";

const About = () => {
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed="0.9"
			className="w-full p-20  bg-[#cdea68] rounded-t-xl"
		>
			<h1 className="font-['Neue_Montreal_Regular'] text-[4vw] leading-none text-[#004d43]">
				Ochi is a strategic partner for fast-grow­ing tech businesses that need
				to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
				peo­ple.
			</h1>
			<div className="mt-20 border-t-[1px] border-[#4f5d1d] flex gap-5 pt-10">
				<div className="w-1/2 ">
					<h1 className="text-[4vw] text-[#004d43] ">Our approach</h1>
					<button className="bg-black text-white uppercase flex gap-5 items-center px-6 py-4 rounded-full mt-6">
						Read More
						<div className="w-2 h-2 bg-white rounded-full"></div>
					</button>
				</div>
				<div className="w-1/2 h-[70vh] rounded-xl bg-[#004d43] "></div>
			</div>
		</div>
	);
};

export default About;
