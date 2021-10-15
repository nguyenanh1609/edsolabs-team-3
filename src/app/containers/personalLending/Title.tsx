import { TitlePersonal } from './style';

const Title = () => {
  return (
    <TitlePersonal>
      <div className="label">
        <p className="label__title">Personal Lending</p>
        <a className="label__link-view" href="/">
          View all
        </a>
      </div>
    </TitlePersonal>
  );
};

export default Title;
