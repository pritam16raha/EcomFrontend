
import styled from 'styled-components';
import { Container } from '../../../styles/styles';
import { BaseLinkGreen } from '../../../styles/button';
import { staticImages } from '../../../utils/myImageData';

const NoScreenFoundScreen = () => {
  return (
    <NotFoundScreenWrapper className='section'>
        <Container>
            <div className="body-section">
                <div className="image-section">
                    <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt='' className='image'/>
                </div>

                <div className="text-section">
                    <p className="text-outer text-4xl font-semibold">
                        Oops! Page Not Found
                    </p>

                    <p className="text-middle">
                        The page you are looking for might have been removed or
                        temporarily unavailable.
                    </p>

                    <BaseLinkGreen to="/">Back to HomePage</BaseLinkGreen>
                </div>
            </div>
        </Container>
    </NotFoundScreenWrapper>
  )
}

export default NoScreenFoundScreen;

const NotFoundScreenWrapper = styled.section`
    margin: 50px;

    .body-section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .image-section{
        display: flex;
        align-items: center;
        justify-content: center;

        .image{
            object-fit: cover;
        }
    }

    .text-section{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .text-middle{
        align-items: center;
        color: #808080;
    }
`;