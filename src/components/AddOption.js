import React, { useState } from "react";
import "./AddOption.css";
import { IoAdd } from "react-icons/io5";

function AddOption() {
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({
		title: "",
		artist: "",
		source: "",
		image: null,
	});

	const toggleForm = () => {
		setShowForm(!showForm);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFileChange = (e) => {
		console.log(e.target.files[0]);
		setFormData({ ...formData, image: e.target.files[0] });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await setFormData(formData);
			console.log(formData);
			const response = await fetch("http://localhost:5000/add-radio", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			if (!response.ok) {
				throw new Error("Network response not ok");
			}
			const result = await response.json();
			console.log(`Form response: ${result}`);

			setFormData({
				title: "",
				artist: "",
				source: "",
				image: null,
			});
			setShowForm(false);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<li>
			{showForm ? (
				<form onSubmit={handleSubmit} className="add">
					<div className="info">
						<div className="album-art">
							<label htmlFor="image">Artwork:</label>
							<input
								type="file"
								id="image"
								name="image"
								onChange={handleFileChange}
							/>
						</div>
						<div className="track-text">
							<input
								className="input"
								type="text"
								placeholder="Title"
								id="title"
								name="title"
								value={formData.title}
								onChange={handleInputChange}
							/>
							<br />
							<input
								className="input"
								type="text"
								placeholder="Station Name"
								id="artist"
								name="artist"
								value={formData.artist}
								onChange={handleInputChange}
							/>
							<br />
						</div>
					</div>
                    <input
								className="input-source"
								type="text"
								placeholder="Source"
								id="source"
								name="source"
								value={formData.source}
								onChange={handleInputChange}
							/>
					<div className="bottom-buttons">
                    <button type="submit" className="form-button">
						+ Add Station
					</button>
					<button type="button" className="form-button" onClick={toggleForm}>
						x Cancel
					</button>
                    </div>
				</form>
			) : (
				<button onClick={toggleForm} className="add-hidden">
					<h1>+ Add</h1>
				</button>
			)}
		</li>
	);
}

export default AddOption;