export default function PictureLogement({ host }) {


	return (
		<section id="picture-container">
            <div>
            <p>{host.name.split(" ")[0]}</p>
            <p>{host.name.split(" ")[1]}</p>
            </div>
            <img src={host.picture} alt="host" className="host-picture"/>
		</section>
	);
}

