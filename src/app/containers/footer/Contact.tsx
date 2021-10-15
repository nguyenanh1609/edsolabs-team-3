import { Logo } from 'app/components/logo';
import { RiGlobalLine } from '@react-icons/all-files/ri/RiGlobalLine';
import { BiRightArrowAlt } from '@react-icons/all-files/bi/BiRightArrowAlt';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
import { ContactList } from './style';

const Contact = () => {
  return (
    <ContactList>
      <Logo />
      <div className="language">
        <p>
          <RiGlobalLine /> English (United States){' '}
          <BiRightArrowAlt className="right" />
        </p>
      </div>
      <div className="email email__ask">
        <a href="mailto:ask@defiforyou.uk" target="_blank" rel="noreferrer">
          <AiOutlineMail /> ask@defiforyou.uk
        </a>
      </div>
      <div className="email email__support">
        <a href="mailto:support@defiforyou.uk" target="_blank" rel="noreferrer">
          <AiOutlineMail /> support@defiforyou.uk
        </a>
      </div>
    </ContactList>
  );
};

export default Contact;
