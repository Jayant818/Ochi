import Image from "next/image";
import React from "react";

const Featured = () => {
	return (
		<div className="w-full py-20 ">
			<div className="border-b-[1px] border-zinc-800 ">
				<h1 className="text-[4vw] font-light  tracking-tight leading-none mb-6 px-[6vw]">
					Featured projects
				</h1>
			</div>
			<div className="cards flex gap-10 mt-10 px-20">
				{/* yaha pe fixed width de rakhi hai to scale kar rahe hai to koi problem nhi aa rahi agar fixed width nhi hoti to jab dusri image choti hoti to dusri image fhel jati isko avoid karne k liye hame ek fixed width ka div banana padta phir ek orr div uski w-full or h-full phir uske under image deni padti*/}
				<div className="card w-1/2 h-[70vh]  rounded-lg  relative">
					<div className="absolute  left-full top-1/2 -translate-y-[50%] -translate-x-[50%] ">
						<h1 className="text-[7vw] text-[#9cb446]  tracking-tight leading-none ">
							FYDE
						</h1>
					</div>
					<div className="w-full h-full hover:scale-75 overflow-hidden">
						<Image
							src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
							alt="Fyde_Illustration_Crypto_2"
							className="w-full h-full object-cover"
							width={100}
							height={100}
						/>
					</div>
				</div>
				<div className="card w-1/2 h-[70vh]  rounded-lg relative ">
					<div className="absolute  right-full top-1/2   -translate-y-[50%] translate-x-[50%]">
						<h1 className="text-[7vw] text-[#9cb446]  tracking-tight leading-none ">
							VISE
						</h1>
					</div>
					<div className="w-full h-full hover:scale-75 overflow-hidden">
						<Image
							src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
							alt="Fyde_Illustration_Crypto_2"
							className="w-full h-full object-cover"
							width={100}
							height={100}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
