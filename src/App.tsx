import { useState } from 'react';
import './App.css';

function App() {
	const [values, setValues] = useState(['1', '2']);

	function updateValue(newValue: string, index: number) {
		setValues((prev) => prev.map((box, i) => (i === index ? newValue : box)));
	}

	function cleanDash(value: string, index: number) {
		if (value === '_') {
			setValues((prev) => prev.map((box, i) => (i === index ? '' : box)));
		}
	}

	function addBox(index: number) {
		setValues((prev) => [
			...prev.slice(0, index + 1),
			'_',
			...prev.slice(index + 1),
		]);
	}

	return (
		<>
			<main>
				<div className='items'>
					{values.map((value, index) => (
						<div className='item' key={index}>
							<input
								type='text'
								value={value}
								onFocus={(e) => cleanDash(e.currentTarget.value, index)}
								onChange={(e) => updateValue(e.currentTarget.value, index)}
							/>
							{index < values.length - 1 && (
								<span className='addItem' onClick={() => addBox(index)}></span>
							)}
						</div>
					))}
				</div>
			</main>
		</>
	);
}

export default App;
