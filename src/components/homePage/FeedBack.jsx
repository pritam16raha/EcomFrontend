import React from 'react'
import styled from 'styled-components';
import { Container, Section } from '../../styles/styles';
import Title from '../Common/Title';
import Slider from 'react-slick';
import CustomNextArrow from '../Common/CustomNextArrow';
import CustomPrevArrow from '../Common/CustomPrevArrow';
import { feedbackData } from '../../data/data';

const FeedBack = () => {
    const setting = {
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3
    }
  return (
        <Section>
            <Container>
                <Title titleText={"Feedback"}/>
                <Slider nextArrow={<CustomNextArrow />}
                        prevArrow={<CustomPrevArrow />}
                        {...setting}
                >
                    {feedbackData?.map((feedback) => {
                        return (
                            <FeedbackItemWrapper key={feedback.id}>
                                <div>
                                    <div>
                                        <div className='feedback-icon'>
                                            <img src={feedback.imgSource}/>
                                        </div>
                                        <div className='feedback-intro'>
                                            <p>{feedback.name}</p>
                                            <span>{feedback.designation}</span>
                                        </div>
                                    </div>
                                    <ul></ul>
                                </div>
                            </FeedbackItemWrapper>
                        )
                    })}
                </Slider>
            </Container>
        </Section>
  )
}

export default FeedBack;

const FeedbackItemWrapper = styled.div`
    
`;

