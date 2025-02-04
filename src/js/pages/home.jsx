import React, { useState, useEffect } from "react";
import SecondCounter from "../component/SecondCounter";
import './home.css';

const Home = () => {

	const [counterValues, setCounterValues] = useState([0, 0, 0, 0, 0, 0]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounterValues(prevValue => {
				const newValues = [...prevValue];
				newValues[5] = (newValues[5] + 1) % 10;

				if (newValues[5] === 0) {
					newValues[4]++;
				}

				if (newValues[4] === 10){
					newValues[3]++
					newValues[4] = 0
				}

				if (newValues[3] === 10){
					newValues[2]++
					newValues[3] = 0
				}

				if (newValues[2] === 10){
					newValues[1]++
					newValues[2] = 0
				}

				return newValues;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="container myWatch">
				<div className="row">
					<SecondCounter item={<i className="fa-solid fa-stopwatch"></i>} width={120} />
					{counterValues.map((value, index) => (
						<SecondCounter key={index} item={value} />
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
