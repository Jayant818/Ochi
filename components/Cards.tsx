import Image from "next/image";
import React from "react";

const Cards = () => {
	return (
		<div className="w-full  cards h-screen px-20 flex items-center gap-5">
			<div className="card_container w-1/2 h-[50vh] ">
				<div className="card relative   bg-[#004d43] w-full h-full flex items-center justify-center rounded-xl">
					<button className="absolute bottom-5 left-5 rounded-xl px-4 py-2 border-2 border-zinc-700 font-light text-sm">
						&copy; 2024
					</button>
					<Image
						src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
						width={100}
						height={100}
						alt="logo"
					/>
				</div>
			</div>
			<div className="card_container w-1/2 h-[50vh] flex gap-5 ">
				<div className="card relative   bg-[#212121] w-1/2 h-full flex items-center justify-center rounded-xl">
					<button className="absolute bottom-5 left-5 rounded-xl px-4 py-2 border-2 border-zinc-700 uppercase">
						Rating 5.0 on clutch
					</button>
					<Image
						src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
						width={100}
						height={100}
						alt="logo"
					/>
				</div>
				<div className="card relative   bg-[#212121] w-1/2 h-full flex items-center justify-center rounded-xl">
					<button className="absolute bottom-5 left-5 rounded-xl px-4 py-2 border-2 border-zinc-700 uppercase">
						Business Bootcamp Aluminai
					</button>
					<Image
						src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
						width={100}
						height={100}
						alt="logo"
					/>
				</div>
			</div>
		</div>
	);
};

export default Cards;
