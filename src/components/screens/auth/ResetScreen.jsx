
import styled from 'styled-components';
import { FormGridWrapper, FormTitle } from '../../../styles/formGrid';
import { Container } from '../../../styles/styles';
import { staticImages } from '../../../utils/myImageData';

const ResetScreen = () => {
  return (
    <ResetScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img src={staticImages.form_img3} alt="" className="image" />
            </div>

            <div className="form-grid-right">
              <FormTitle>
                <h3>Reset Your Password</h3>
                <p>Enter your email</p>
              </FormTitle>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </ResetScreenWrapper>
  )
}

export default ResetScreen;

const ResetScreenWrapper = styled.section`
    .form-grid-content{
      .form-grid-left{
        .image{
          width: 600px;
          margin-top: -250px;
        }
      }
    }
`;