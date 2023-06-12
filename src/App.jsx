import { useState } from 'react';
import Background from './components/background/Background';
import { GlobalStyles } from './styles/globalStyles';
import Form from './components/form/Form';

const App = () => {
	const [name, setName] = useState('JANE APPLESEED');
	const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
	const [month, setMonth] = useState('00');
	const [year, setYear] = useState('00');
	const [cvc, setCvc] = useState('000');

	return (
		<>
			<div className='wrapper'>
				<GlobalStyles />
				<Background
					name={name}
					cardNumber={cardNumber}
					month={month}
					year={year}
					cvc={cvc}
				/>
				<Form
					setName={setName}
					setCardNumber={setCardNumber}
					setMonth={setMonth}
					setYear={setYear}
					setCvc={setCvc}
				/>
			</div>
		</>
	);
};

export default App;
