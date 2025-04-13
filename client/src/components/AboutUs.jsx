import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 
  padding: 40px 30px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.background};
`;

const Content = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const SectionTitle = styled.h1`
  color: ${({ theme }) => theme.text_primary};
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.primary};
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 20px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: ${({ theme }) => theme.primary};
  }
`;

const ProcessTimeline = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.primary}44;
  }
`;

const TimelineStep = styled.div`
  display: flex;
  margin-bottom: 30px;
  position: relative;
`;

const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 20px;
  z-index: 1;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h4`
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  margin-bottom: 5px;
`;



const AboutUs = () => {
  return (
    <Container>
      <Content>
        <SectionTitle>About IMAGINIX</SectionTitle>
        
        <Paragraph>
          Welcome to IMAGINIX, a cutting-edge AI-powered image generation platform designed to transform your creative ideas into stunning visual content. Our mission is to democratize digital art creation by making advanced image generation technology accessible to everyone, from professional designers to casual creators.
        </Paragraph>
        
        <SubTitle>Our Technology</SubTitle>
        <Paragraph>
          IMAGINIX leverages state-of-the-art diffusion models combined with proprietary enhancement algorithms to generate high-quality, unique images from text descriptions. Our technology understands context, style preferences, and artistic nuances to create images that truly capture your vision.
        </Paragraph>
        
        <FeatureGrid>
          <FeatureCard>
            <FeatureTitle>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Text-to-Image Synthesis
            </FeatureTitle>
            <Paragraph>
              Transform your text descriptions into high-resolution images with remarkable accuracy and creative interpretation.
            </Paragraph>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureTitle>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Style Customization
            </FeatureTitle>
            <Paragraph>
              Choose from a wide range of artistic styles or define your own to create images that match your aesthetic preferences.
            </Paragraph>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureTitle>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Global Accessibility
            </FeatureTitle>
            <Paragraph>
              Our platform is optimized for users worldwide, with multi-language support and regionally optimized processing servers.
            </Paragraph>
          </FeatureCard>
        </FeatureGrid>
        
        <SubTitle>How It Works</SubTitle>
        
        <ProcessTimeline>
          <TimelineStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <StepTitle>Describe Your Vision</StepTitle>
              <Paragraph>
                Start by describing what you want to create. The more detailed your description, the better our AI can understand your vision. Include style preferences, colors, subjects, and any specific elements you want to see.
              </Paragraph>
            </StepContent>
          </TimelineStep>
          
          <TimelineStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <StepTitle>AI Processing</StepTitle>
              <Paragraph>
                Our advanced diffusion models analyze your description, breaking it down into conceptual components that are then transformed into visual elements. The system considers composition, lighting, perspective, and style to create a cohesive image.
              </Paragraph>
            </StepContent>
          </TimelineStep>
          
          <TimelineStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <StepTitle>Generation & Refinement</StepTitle>
              <Paragraph>
                The AI generates multiple drafts and refines them through iterative enhancement algorithms. This process ensures the final image is not only accurate to your description but also aesthetically pleasing.
              </Paragraph>
            </StepContent>
          </TimelineStep>
          
          <TimelineStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <StepTitle>Review & Download</StepTitle>
              <Paragraph>
                View your generated images, make any adjustments if needed, and download your favorites in various formats and resolutions. You can also share them directly to social media or save them to your IMAGINIX library.
              </Paragraph>
            </StepContent>
          </TimelineStep>
        </ProcessTimeline>
        
        <SubTitle>Site Structure</SubTitle>
        <Paragraph>
          IMAGINIX is designed with user experience at its core. Our platform features:
        </Paragraph>
        
        <FeatureGrid>
          <FeatureCard>
            <FeatureTitle>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Home Dashboard
            </FeatureTitle>
            <Paragraph>
              Your personal hub showing recent creations, trending prompts, and quick access to all creation tools.
            </Paragraph>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureTitle>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                <line x1="8" y1="2" x2="8" y2="18"></line>
                <line x1="16" y1="6" x2="16" y2="22"></line>
              </svg>
              Creation Studio
            </FeatureTitle>
            <Paragraph>
              Where the magic happens. Input your descriptions, adjust parameters, and watch as your ideas come to life.
            </Paragraph>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureTitle>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              Gallery
            </FeatureTitle>
            <Paragraph>
              Browse your personal collection or explore community creations for inspiration.
            </Paragraph>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureTitle>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
              Community Hub
            </FeatureTitle>
            <Paragraph>
              Connect with other creators, share tips, and collaborate on projects.
            </Paragraph>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureTitle>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              Settings & Account
            </FeatureTitle>
            <Paragraph>
              Manage your subscription, customize preferences, and access usage analytics.
            </Paragraph>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureTitle>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Learning Resources
            </FeatureTitle>
            <Paragraph>
              Tutorials, guides, and tips to help you get the most out of IMAGINIX's capabilities.
            </Paragraph>
          </FeatureCard>
        </FeatureGrid>
        
        <SubTitle>Our Commitment</SubTitle>
        <Paragraph>
          At IMAGINIX, we're committed to fostering creativity while maintaining ethical standards in AI development. We implement content filters to prevent misuse of our technology and continuously work to reduce biases in our image generation algorithms.
        </Paragraph>
        
        <Paragraph>
          We believe in transparency and user empowerment. That's why we provide detailed information about how our technology works and give users control over their data and creations.
        </Paragraph>
        
        <SubTitle>Join Our Creative Community</SubTitle>
        <Paragraph>
          Whether you're a professional artist, a marketing specialist, a game developer, or simply someone who enjoys creating, IMAGINIX offers the tools you need to bring your ideas to life. Join thousands of creators worldwide who are already using IMAGINIX to expand their creative horizons.
        </Paragraph>
        
        <Paragraph>
          Ready to transform your ideas into stunning visuals? Sign up today and start creating!
        </Paragraph>
      </Content>
    </Container>
  )
}

export default AboutUs
