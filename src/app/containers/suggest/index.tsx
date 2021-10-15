import * as React from 'react';
import { UISuggest } from './style';

export interface ISuggest {
  src: string;
  title: string;
  desc: string;
}
export function Suggest(props: ISuggest) {
  return (
    <UISuggest>
      <div className="suggest">
        <div className="suggest__img">
          <img src={props.src} alt="" />
        </div>
        <div className="suggest__content">
          <p className="suggest__title">{props.title}</p>
          <div className="suggest__desc">{props.desc}</div>
        </div>
      </div>
    </UISuggest>
  );
}
