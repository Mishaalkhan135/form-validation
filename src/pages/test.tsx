import { useState } from "react";

const test = () => {
	const [inputValue, setInputValue] = useState("");
	const [isErrorVisible, setIsErrorVisible] = useState(false);

	const handleSubmit = (event: any) => {
		event.preventDefault();
		if (inputValue.length === 0) {
			setIsErrorVisible(true);
		} else {
			setIsErrorVisible(false);
			// Do something with the input value
			console.log(inputValue);
		}
	};

	const handleInputChange = (event: any) => {
		setInputValue(event.target.value);
		if (event.target.value.length > 0) {
			setIsErrorVisible(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				placeholder='Enter something...'
				color='black'
			/>
			{isErrorVisible ? (
				<div>Please enter something in the input field.</div>
			) : (
				<button type='submit'>Submit</button>
			)}
		</form>
	);
};

export default test;
