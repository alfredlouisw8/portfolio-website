import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	skill: Skill;
};

function Skill({ skill }: Props) {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				initial={{
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				src={urlFor(skill.image).url()}
				className="rounded-full border border-gray-500 object-cover h-full w-full max-w-[8rem] md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale grayscale-0 transition duration-300 ease-in-out"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-full w-full max-w-[8rem] md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
				<div className="flex items-center justify-center h-full">
					<p className="text-xl md:text-3xl font-bold text-black opacity-100">
						{skill.progress}%
					</p>
				</div>
			</div>
		</div>
	);
}

export default Skill;
