export default function RatingStars({ rating }) {
    const totalStars = 5;
    const filledStars = parseInt(rating, 10);

    return (
        <section id="rating-container">
            {[...Array(totalStars)].map((_, index) => (
                <span key={index} className={index < filledStars ? "star filled" : "star empty"}>
                    ★
                </span>
            ))}
        </section>
    );
}
