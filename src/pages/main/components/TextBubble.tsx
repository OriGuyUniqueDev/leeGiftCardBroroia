/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import CircleMaskIcon from "./CircleMaskIcon";
import Greeting from "./Greeting";

interface TextBubbleProps {}

const TextBubble: FunctionComponent<TextBubbleProps> = () => {
	return (
		<div className="relative z-40 flex flex-col items-center justify-center w-11/12 text-black bg-white first drop-shadow-2xl shadow-black h-52 rounded-2xl mt-36 ">
			<CircleMaskIcon />
			<Greeting />
		</div>
	);
};

export default TextBubble;
