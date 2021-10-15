import github from '../../../images/github_icon.svg';
import tele from '../../../images/tele_icon.svg';
import fb from '../../../images/fb_icon.svg';
import youtube from '../../../images/youtube_icon.svg';
import lin from '../../../images/lin_icon.svg';
import twitter from '../../../images/twitter_icon.svg';
import { IconLink } from './style';

const IconsList = () => {
  return (
    <IconLink>
      <p className="title">Find us on</p>
      <div className="icons">
        <a href="https://github.com/defi-vn/" title="Github">
          <img src={github} alt="" />
        </a>
        <a href="https://t.me/DeFiForYou_English" title="Telegram">
          <img src={tele} alt="" />
        </a>
        <a href="https://www.facebook.com/DeFiForYouDFY" title="Facebook">
          <img src={fb} alt="" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCGaSCU17Zo_2CzJNaBeUHaA/featured"
          title="Youtube"
        >
          <img src={youtube} alt="" />
        </a>
        <a href="https://www.linkedin.com/company/defiforyou" title="Linkedin">
          <img src={lin} alt="" />
        </a>
        <a href="https://twitter.com/Defiforyou" title="Twitter">
          <img src={twitter} alt="" />
        </a>
      </div>
    </IconLink>
  );
};

export default IconsList;
