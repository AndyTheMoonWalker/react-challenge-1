import { useState } from 'react';
import './App.css';

function App() {
	const [values, setValues] = useState([1, 2, 3, 4]);

	return (
		<>
			<main>
				<div className='items'>
					{values.map((value, index) => (
						<div className='item' key={index}>
							<input type='text' value={value} />
							<span className='addItem'>
								<input type='text' value='' />
							</span>
						</div>
					))}
				</div>
			</main>
		</>
	);
}

export default App;
