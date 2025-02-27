export default function TagLogement({ tags }) {
	return (
		<section id="tags-container">
			{tags.map((tag, index) => (
				<span key={index} className="tag">
					{tag}
				</span>
			))}
		</section>
	);
}
