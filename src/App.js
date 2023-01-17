import React, { useState } from "react";
import "./App.css";
import plusIcon from "./icons/plus.svg";
import trashIcon from "./icons/trash.svg";

function App() {
	const [list, setList] = useState([]);
	const [articleName, setArticleName] = useState("");
	const [articleAmount, setArticleAmount] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newItem = { name: articleName, amount: articleAmount, id: list.length + 1 };
		setList([...list, newItem]);

		setArticleName("");
		setArticleAmount("");
	};

	const removeItem = (id) => {
		const newList = list.filter((item) => item.id !== id);
		setList(newList);
	};

	return (
		<div className="App">
			<div>
				<p>neuen Artikel hinzufügen:</p>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={articleName}
						onChange={(e) => setArticleName(e.target.value)}
						placeholder="Artikel"
					/>
					<input
						type="number"
						value={articleAmount}
						onChange={(e) => setArticleAmount(e.target.value)}
						placeholder="Menge"
					/>
					<button type="submit" title="Artikel hinzufügen">
						<img src={plusIcon} alt="hinzufügen" />
					</button>
				</form>
			</div>
			<hr />
			<ul>
				{list.map((item) => (
					<li key={item.id}>
						<div>
							{item.name} ({item.amount})
						</div>
						<button title="Artikel löschen" onClick={() => removeItem(item.id)}>
							<img src={trashIcon} alt="löschen" />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
