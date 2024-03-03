"use client";
import React, { useEffect, useState } from "react";

const Eyes = () => {
	const [angle, setAngle] = useState(0);
	// starting mai chalega bas
	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			// console.log(e);
			// e.clientX, e.clientY

			let x = e.clientX;
			let y = e.clientY;

			// ab inka center se difference nikalege\
			let deltaX = x - window.innerWidth / 2;
			let deltaY = y - window.innerHeight / 2;

			// ab hume inka angle nikalna hai
			// tan inverse of deltaY/deltaX
			let angle = Math.atan2(deltaY, deltaX);

			// ab ye radian mai aaya hai
			// hume degree mai convert karna hai
			// 1 radian = 180/pi degree orr 52.2958
			angle = (angle * 180) / Math.PI;
			// store karle ek state mai
			setAngle(angle - 180);
		});
	});
	return (
		//Background
		<div
			data-scroll
			data-speed="-0.7"
			className="relative w-full h-screen bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center"
		>
			{/* daba */}
			<div className="flex gap-5 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
				{/* white circle - flex use kiya hai to center black circle*/}
				<div className="w-[10vw] h-[10vw] rounded-full bg-zinc-100 flex items-center justify-center">
					{/* black circle  - flex */}
					<div className="w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center">
						{/* ye hamare ek rectangle hai jiko rotate karege to eyeball bhi rotate hongi orr eyeball recatngle ke start mai placed hai  */}
						<div
							style={{ transform: ` rotate(${angle}deg)` }}
							className={`w-[100%] h-[2vw] flex justify-start `}
						>
							{/* Eye Ball */}
							<div className="w-[2vw] h-[2vw] rounded-full bg-white"></div>
						</div>
					</div>
				</div>
				{/* white circle - flex use kiya hai to center black circle*/}
				<div className="w-[10vw] h-[10vw] rounded-full bg-zinc-100 flex items-center justify-center">
					{/* black circle  - flex */}
					<div className="w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center">
						{/* ye hamare ek rectangle hai jiko rotate karege to eyeball bhi rotate hongi orr eyeball recatngle ke start mai placed hai  */}
						<div
							style={{ transform: ` rotate(${angle}deg)` }}
							className={`w-[100%] h-[2vw] flex justify-start `}
						>
							{/* Eye Ball */}
							<div className="w-[2vw] h-[2vw] rounded-full bg-white"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Eyes;
