import { Container } from 'reactstrap';
import { CopyRightFooter } from './style';

const CopyRight = () => {
  return (
    <CopyRightFooter>
      <Container>
        <div className="copyright">
          <p>© 2021 DeFi For You. All rights reserved.</p>
          <p>
            <span className="right">Terms of Service</span> |{' '}
            <span className="left">Privacy Policy</span>
          </p>
        </div>
      </Container>
    </CopyRightFooter>
  );
};

export default CopyRight;
