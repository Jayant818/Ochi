import { text } from "stream/consumers";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

const LandingPage = () => {
	return (
		<div data-scroll data-scroll-speed="-.3" data-scroll-section>
			<div className=" text-structure px-20 mt-10">
				{["We Create", "Eye Opening", "Presentations"].map((item, index) => {
					return (
						<div key={index} className="masker">
							<div className="w-fit flex items-center">
								{index == 1 && (
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: "8vw" }}
										transition={{
											ease: [0.45, 0, 0.55, 1],
											delay: 0.5,
											duration: 1,
										}}
										className="w-[8vw] relative  h-[4.3vw] bg-green-500 rounded-md   mr-[1vw]"
									></motion.div>
								)}
								<h1 className="font-bold font-['Founders_Grotesk_X-Cond_Bold'] leading-[5vw] tracking-tighter   text-[6vw] uppercase ">
									{item}
								</h1>
							</div>
						</div>
					);
				})}
			</div>
			<div className="mt-28 border-t-[1px] border-zinc-800  flex justify-between items-center px-20 ">
				{[
					"For public and private companies",
					"From the first pitch to IPO",
				].map((item, index) => {
					return (
						<p
							key={index}
							className="font-light mt-4 text-sm tracking-tight leading-none "
						>
							{item}
						</p>
					);
				})}
				<div className="start flex gap-2 items-center">
					<div className="uppercase border-[1px] border-zinc-500 rounded-md tracking-tighter px-4 py-2 mt-4 text-sm ">
						Start the project
					</div>
					<div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500  rounded-full mt-4 ">
						<span className="rotate-45">
							<FaArrowUp />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
