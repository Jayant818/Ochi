import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed="0.1"
			className=" w-full py-20  bg-[#004d43] rounded-t-3xl mt-32"
		>
			<div className="border-t-2  border-b-2  border-zinc-300 flex whitespace-nowrap items-center overflow-hidden">
				<motion.h1
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
					className="text-[18vw]  uppercase  font-semibold leading-none tracking-tight pr-20"
				>
					We are Ochi
				</motion.h1>
				<motion.h1
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
					className="text-[18vw]  uppercase  font-semibold leading-none tracking-tight pr-20"
				>
					We are Ochi
				</motion.h1>
			</div>
		</div>
	);
};

export default Marquee;
