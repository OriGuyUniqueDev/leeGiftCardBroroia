/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";

interface GreetingProps {}

const Greeting: FunctionComponent<GreetingProps> = () => {
	return (
		<div className="text-2xl font-medium text-center mt-7 fourth">
			<h1>לברוריה האהובה,</h1>
			<p> פינוק מאיתנו - תודה על הכל!</p>
			<p>אוהבים אותך הכי בעולם.</p>
			<p>משפחת חג'ג'</p>
		</div>
	);
};

export default Greeting;
