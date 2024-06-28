
import { Container, Section } from '../../styles/styles';
import { featuredData } from '../../data/data';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { defaultTheme } from '../../styles/themes/default';

const Featured = () => {
  return (
    <Section>
        <Container>
            <FeaturedContent className='grid'>
                {featuredData?.map((feature) => {
                    return(
                        <FeaturedCardWrapper key={feature.id} className='text-white'>
                            <img className='object-fit-cover fit-card-img' src={feature.imgSource}/>
                            <div className='fit-card-content w-full h-full'>
                                <p className='fit-text-top text-xxl font-semibold'>{feature.topText}</p>
                                <h3 className='fit-text-large font-bold'>{feature.largeText}</h3>
                                <p className='fit-text-bottom font-light text-xl italic uppercase'>{feature.bottomText}</p>
                                <Link to={feature.buttonLink} className='fit-link font-extrabold text-white text-3xl'>{feature.bottomText}</Link>
                            </div>
                        </FeaturedCardWrapper>
                    )
                })}
            </FeaturedContent>
        </Container>
    </Section>
  )
}

export default Featured;

const FeaturedContent = styled.div`
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
`;

const FeaturedCardWrapper = styled.div`
    height: 380px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.4);

    .fit-text-top{
        margin-top: 24px;
        color: ${defaultTheme.color_sea_green_v1};
    }

    .fit-text-large{
        font-size: 38px;
        line-height: 1.2;
    }

    .fit-text-bottom{
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .fit-card-content {
        padding: 60px 28px;
        position: absolute;
        top: 0;
        left: 0;
        max-width: 400px;
    }

    .fit-card-img{
        object-position: 10px 10px;
        scale: 2;
    }

    .fit-link{
        position: relative;
        &::after {
        position: absolute;
        content: "";
        left: 0;
        top: 100%;
        height: 1px;
        width: 100%;
        background-color: ${defaultTheme.color_white};
    }
    }
`;



