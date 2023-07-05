import { useState } from 'react';
import Background from './components/background/Background';
import { GlobalStyles } from './styles/globalStyles';
import Form from './components/form/Form';

const App = () => {
	// const [name, setName] = useState('JANE APPLESEED');
	// const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
	// const [month, setMonth] = useState('00');
	// const [year, setYear] = useState('00');
	// const [cvc, setCvc] = useState('000');

	const [cardData, setCardData] = useState({
		name: 'JANE APPLESEED',
		cardNumber: '0000000000000000',
		month: '00',
		year: '00',
		cvc: '000'
	});

	return (
		<>
			<div className='wrapper'>
				<GlobalStyles />
				<Background cardData={cardData} />
				<Form cardData={cardData} setCardData={setCardData} />
			</div>
		</>
	);
};

export default App;
