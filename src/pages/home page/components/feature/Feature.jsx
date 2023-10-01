import feature from "../../../../assets/images/Feature.png"
import {Container, FlexBox, StyledImage} from "../../../../App.Styled";
import {Typography} from "@mui/material";
import {Button} from "@mui/material";

function Feature() {
    return (
        <Container margin='52px'>
            <FlexBox justify="space-between" items="center" gap='150px'>
                <div>
                    <Typography fontSize='16px' fontWeight={600} >TRENDING</Typography>
                    <Typography fontSize='54px' fontWeight={500}>Caring about you and your body.</Typography>
                    <Typography fontSize='18px' color={'#3E3E59'} margin='16px 0'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </Typography>
                    <Button text='See Collection'  padding='10px 26px;' radius='39px'  />
                </div>
                    <StyledImage src={feature} alt='' width='570px' height='570px' />

            </FlexBox>
        </Container>
    );
}

export default Feature;