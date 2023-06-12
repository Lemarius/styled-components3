import { StyledForm, StyledInput, StyledLabel } from './styles';

const Form = ({ setName, setCardNumber, setMonth, setYear, setCvc }) => {
	return (
		<>
			<StyledForm onSubmit={e => e.preventDefault()}>
				<StyledLabel>CARDHOLDER NAME</StyledLabel>
				<StyledInput
					type='text'
					id='name'
					placeholder='e.g. Jane Appleseed'
					onChange={e => setName(e.target.value)}
				></StyledInput>
				<StyledLabel>CARD NUMBER</StyledLabel>
				<StyledInput
					type='text'
					id='number'
					placeholder='e.g. 1234 5678 9123 0000'
					onChange={e => setCardNumber(e.target.value)}
				></StyledInput>
				<StyledLabel>EXP. DATE (MM/YY)</StyledLabel>
				<StyledInput
					type='text'
					placeholder='MM'
					onChange={e => setMonth(e.target.value)}
				></StyledInput>
				<StyledInput
					type='text'
					placeholder='YY'
					onChange={e => setYear(e.target.value)}
				></StyledInput>
				<StyledLabel>CVC</StyledLabel>
				<StyledInput
					type='text'
					placeholder='e.g. 123'
					onChange={e => setCvc(e.target.value)}
				></StyledInput>
			</StyledForm>
		</>
	);
};

export default Form;
