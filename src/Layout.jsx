import React, { useState } from "react";
import "./Layout.css";
import sunIcon from "./icons/sun-high.svg";
import moonIcon from "./icons/moon.svg";
import githubIcon from "./icons/brand-github.svg";

export default function Layout(props) {
	const { children } = props;

	const [lightTheme, setLightTheme] = useState(false);

	const toggleTheme = () => {
		if (lightTheme) {
			document.body.className = "";
			setLightTheme(false);
		} else {
			document.body.className = "light";
			setLightTheme(true);
		}
	};

	return (
		<>
			<header>
				<nav>
					<h1>
						to<span className="text-primary">Buy</span>
					</h1>
					<button title="Theme wechseln" onClick={toggleTheme}>
						<img
							src={lightTheme ? moonIcon : sunIcon}
							alt="Theme wechseln"
						/>
					</button>
				</nav>
			</header>
			<main>{children}</main>
			<footer>
				<a
					href="https://github.com/riedadr/tobuy"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={githubIcon} alt="GitHub" />
				</a>
				<a
					href="https://tobuyadv.webdev.cit116.xyz"
				>
					to<span className="text-primary">Buy</span>
					<span className="text-warning">Advanced</span>
				</a>
				<a href="mailto:adrian.riedel@hof-university.de">
					Adrian Riedel
				</a>
			</footer>
		</>
	);
}
