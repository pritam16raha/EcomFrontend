import styled from "styled-components";
import { HeaderMainWrapper, SiteBrandWrapper } from "../../styles/header";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/myImageData";
import { BaseLinkGreen, BaseLinkOutlineDark } from "../../styles/button";

const AuthHeader = () => {

  
  return (
    <HeaderMainWrapper>
      <Container>
        <div className="header-wrap">
          <SiteBrandWrapper to="/" className="inline-flex">
            <div className="brand-image-wrap">
              <img src={staticImages.logo} className="site-brand-img"/>
            </div>
            <span className="brand-name-pic">
              <img src={staticImages.logo2} />
            </span>
          </SiteBrandWrapper>
          <div className="flex item-center">
            <ButtonGroupWrapper>
              <BaseLinkGreen to="/signin">Log-In</BaseLinkGreen>
              <BaseLinkOutlineDark to="/signup">Sign Up</BaseLinkOutlineDark>
            </ButtonGroupWrapper>
          </div>
        </div>
      </Container>
    </HeaderMainWrapper>
  )
}

export default AuthHeader;

const ButtonGroupWrapper = styled.div`
    gap: 8px;
`;

