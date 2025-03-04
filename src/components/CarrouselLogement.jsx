import { useState } from "react";
import left from "../assets/image/vector-left.svg";
import right from "../assets/image/vector-right.svg";

export default function Carrousel({ slides }) {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<section id="carrousel-container">
			
			{length > 1 && (
				<img
					src={left}
					alt="gauche"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt="droite"
					onClick={nextSlide}
					className="rightArrow"
				/>
			)}
			{slides.map((slide, index) => (
				<div key={index} className="slider">
					{index === current && <img src={slide} alt="appartement à louer" />}
					{index == current && (
						<span className="slider-number">
							{current + 1}/{length}
						</span>
					)}
				</div>
				
			))}
		</section>
	);
}

