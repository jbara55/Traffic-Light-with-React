import React, { useState } from "react";

const Home = () => {
	const [Color, setColor] = useState("");

	return (
		<div className="text-center">
			<div className="poste"></div>
			<div className="box">
				<div
					onClick={() => setColor("roja")}
					className={
						"roja" + (Color == "roja" ? " brillarojo" : "")
					}></div>
				<div
					onClick={() => setColor("amarilla")}
					className={
						"amarilla" +
						(Color == "amarilla" ? " brillaamarillo" : "")
					}></div>
				<div
					onClick={() => setColor("verde")}
					className={
						"verde" + (Color == "verde" ? " brillaverde" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
