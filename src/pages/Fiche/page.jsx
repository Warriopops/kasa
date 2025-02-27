import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CarrouselLogement from '../../components/CarrouselLogement';
import PictureLogement from '../../components/PictureLogement';
import TagLogement from '../../components/TagLogement';
import RatingLogement from '../../components/RatingLogement';
import Category from '../../components/Category';

const FicheLogement = () => {
	const [pickedAppart, setPickedAppart] = useState(null);
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		console.log("params.id", params.id)
		const getData = async () => {
			try {
				const res = await axios.get("../src/data/db.json");
				const picked = res.data.find(({ id }) => id === String(params.id));
				console.log("picked", picked)
				setPickedAppart(picked);
				if (!picked) {
					navigate("/404", { state: { message: "Can't get data" } });
				}
			} catch (error) {
				console.error("Erreur lors de la récupération des données", error);
				navigate("/404", { state: { message: "Erreur de chargement" } });
			}
		};

		getData();
	}, []);

	return (
		pickedAppart && (
			<>
				<CarrouselLogement slides={pickedAppart.pictures} />
				<div className='picked-container'>
					<div className='picked-appart-title'>
						<h2>{pickedAppart.title}</h2>
						<p>{pickedAppart.location}</p>
					</div>
					<PictureLogement host={pickedAppart.host} />
				</div>
				<div className='tag-and-rate'>
					<TagLogement tags={pickedAppart.tags} />
					<RatingLogement rating={pickedAppart.rating} />
				</div>
				<div className='category-page-container'>
				<Category title="Description" content={pickedAppart.description}/>
				<Category title="Equipements" equipments={pickedAppart.equipments}/>
				</div>
			</>
		)
	);
};

export default FicheLogement;
