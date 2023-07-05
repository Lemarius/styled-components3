import {
	StyledBackground,
	StyledCVC,
	StyledCard,
	StyledCircle,
	StyledCircleCont,
	StyledH1,
	StyledName,
	StyledTextCont
} from './styles';

const Background = ({ cardData }) => {
	const { name, cardNumber, month, year, cvc } = cardData;
	return (
		<>
			<StyledBackground>
				<StyledCard>
					<StyledCircleCont>
						<StyledCircle></StyledCircle>
						<StyledCircle></StyledCircle>
					</StyledCircleCont>
					<StyledH1>{cardNumber}</StyledH1>
					<StyledTextCont>
						<StyledName>{name}</StyledName>
						<StyledName>
							{month}/{year}
						</StyledName>
					</StyledTextCont>
				</StyledCard>
				<StyledCard>
					<StyledCVC>{cvc}</StyledCVC>
				</StyledCard>
			</StyledBackground>
		</>
	);
};

export default Background;
