import { StyledForm, StyledInput, StyledLabel } from './styles';

const Form = ({ cardData, setCardData }) => {
	return (
		<>
			<StyledForm onSubmit={e => e.preventDefault()}>
				<StyledLabel>CARDHOLDER NAME</StyledLabel>
				<StyledInput
					type='text'
					id='name'
					placeholder='e.g. Jane Appleseed'
					onChange={e => setCardData({ ...cardData, name: e.target.value })}
				></StyledInput>
				<StyledLabel>CARD NUMBER</StyledLabel>
				<StyledInput
					type='text'
					id='number'
					placeholder='e.g. 1234 5678 9123 0000'
					onChange={e =>
						setCardData({ ...cardData, cardNumber: e.target.value })
					}
				></StyledInput>
				<StyledLabel>EXP. DATE (MM/YY)</StyledLabel>
				<StyledInput
					type='text'
					placeholder='MM'
					onChange={e => setCardData({ ...cardData, month: e.target.value })}
				></StyledInput>
				<StyledInput
					type='text'
					placeholder='YY'
					onChange={e => setCardData({ ...cardData, year: e.target.value })}
				></StyledInput>
				<StyledLabel>CVC</StyledLabel>
				<StyledInput
					type='text'
					placeholder='e.g. 123'
					onChange={e => setCardData({ ...cardData, cvc: e.target.value })}
				></StyledInput>
			</StyledForm>
		</>
	);
};

export default Form;
