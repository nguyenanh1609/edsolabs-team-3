import { AboutFooter } from './style';

const About = () => {
  return (
    <AboutFooter>
      <div className="about">
        <p className="about__title">About DeFi For You</p>
        <p className="about__content">
          <span className="about__name">DeFi For You </span>
          <span className="about__desc">
            is a trading style of Miles Mann Limited registered office at 5
            Southgate Street, Gloucester, Gloucestershire, GL1 1TG1 Licensed
            authorised and regulated by the Financial Conduct Authority to
            exercise lender's rights and duties under a regulated credit
            agreement (excluding high-cost short-term credit, bill of sale
            agreement, and home collected credit agreement), and has the right
            to exercise lender's rights and duties under a regulated credit
            agreement (excluding high-cost short-term credit, bill of sale
            agreement, and home collected credit agreement)
          </span>
        </p>
      </div>
    </AboutFooter>
  );
};

export default About;
