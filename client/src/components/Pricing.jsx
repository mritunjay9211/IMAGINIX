import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 
  padding: 30px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  background: ${({ theme }) => theme.background};
`;

const PageTitle = styled.h1`
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  font-size: 36px;
`;

const PageDescription = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  text-align: center;
  max-width: 700px;
  margin-bottom: 20px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const PricingCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  padding: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  ${props => props.popular && `
    border: 2px solid ${({ theme }) => theme.primary};
    transform: scale(1.05);
  `}
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 12px;
  right: -30px;
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 5px 30px;
  transform: rotate(45deg);
  font-size: 12px;
  font-weight: bold;
`;

const PlanTitle = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  margin-bottom: 10px;
  font-size: 24px;
`;

const PlanPrice = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin: 15px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Currency = styled.span`
  font-size: 20px;
  margin-top: 5px;
  margin-right: 2px;
`;

const Period = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-left: 5px;
  margin-top: 20px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  text-align: left;
  width: 100%;
`;

const Feature = styled.li`
  padding: 8px 0;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  font-size: 14px;
  
  &:before {
    content: "✓";
    color: ${({ theme }) => theme.primary};
    margin-right: 10px;
    font-weight: bold;
  }
`;

const PricingButton = styled.button`
  background: ${props => props.primary ? ({ theme }) => theme.primary : 'transparent'};
  color: ${props => props.primary ? 'white' : ({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 10px 30px;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    background: ${props => props.primary ? ({ theme }) => theme.primary_dark : ({ theme }) => theme.primary + '22'};
    transform: translateY(-2px);
  }
`;

const Pricing = () => {
  return (
    <Container>
      <PageTitle>Pricing Plans</PageTitle>
      <PageDescription>
        Choose the perfect plan for your needs. Unlock the full potential of IMAGINIX with our flexible pricing options.
      </PageDescription>
      
      <CardsContainer>
        {/* Basic Plan */}
        <PricingCard>
          <PlanTitle>Basic Plan</PlanTitle>
          <p>Perfect for beginners</p>
          <PlanPrice>
            <Currency>$</Currency>10<Period>/month</Period>
          </PlanPrice>
          
          <FeaturesList>
            <Feature>5 posts per day</Feature>
            <Feature>Basic templates</Feature>
            <Feature>Community support</Feature>
            <Feature>Mobile access</Feature>
          </FeaturesList>
          
          <PricingButton>Get Started</PricingButton>
        </PricingCard>
        
        {/* Pro Plan */}
        <PricingCard popular>
          <PopularBadge>POPULAR</PopularBadge>
          <PlanTitle>Pro Plan</PlanTitle>
          <p>For professionals and teams</p>
          <PlanPrice>
            <Currency>$</Currency>20<Period>/month</Period>
          </PlanPrice>
          
          <FeaturesList>
            <Feature>Unlimited posts</Feature>
            <Feature>Premium templates</Feature>
            <Feature>Priority support</Feature>
            <Feature>Mobile access</Feature>
            <Feature>Advanced analytics</Feature>
            <Feature>Collaboration tools</Feature>
          </FeaturesList>
          
          <PricingButton primary>Get Started</PricingButton>
        </PricingCard>
        
        {/* Enterprise Plan */}
        <PricingCard>
          <PlanTitle>Enterprise Plan</PlanTitle>
          <p>For large organizations</p>
          <PlanPrice>
            <Currency>$</Currency>49<Period>/month</Period>
          </PlanPrice>
          
          <FeaturesList>
            <Feature>Unlimited posts</Feature>
            <Feature>Custom templates</Feature>
            <Feature>24/7 dedicated support</Feature>
            <Feature>Mobile access</Feature>
            <Feature>Advanced analytics</Feature>
            <Feature>Team collaboration tools</Feature>
            <Feature>API access</Feature>
            <Feature>Custom integrations</Feature>
          </FeaturesList>
          
          <PricingButton>Contact Sales</PricingButton>
        </PricingCard>
      </CardsContainer>
    </Container>
  )
}

export default Pricing