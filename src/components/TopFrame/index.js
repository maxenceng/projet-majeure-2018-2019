import React from 'react';
import Link from 'next/link';
import './index.scss';
import LinkButton from '../LinkButton';
import SvgButton from '../SvgButton';
import { isConnected } from '../../helpers/common';
import AgendaImage from '../../assets/images/calendar-alt-regular.svg';
import MessageImage from '../../assets/images/envelope-regular.svg';
import ProfileImage from '../../assets/images/user-regular.svg';

export default class TopFrame extends React.Component {
  iconList = [
    {
      svg: AgendaImage,
      link: '/agendaPage',
    },
    {
      svg: MessageImage,
      link: '/chat',
    },
    {
      svg: ProfileImage,
      link: '/profilePage',
    },
  ]

  render() {
    return (
      <div className="TopFrame">
        <div className="left-side">
          <Link href="/">
            <button type="button" className="logo">
              WeMe
            </button>
          </Link>
          {!isConnected && (
            <div className="event-button-wrapper">
              <Link href="/allEventPage">
                <button type="button" className="event-button">
                  Evenements
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="right-side">
          {isConnected ? (
            <React.Fragment>
              <div className="button-icons">
                {this.iconList.map(({ svg, link }) => (
                  <Link key={link} href={link}>
                    <SvgButton Svg={svg} />
                  </Link>
                ))}
              </div>
              <div className="deco-button">
                <LinkButton content="Deconnexion" route="/deconnexion" />
              </div>
            </React.Fragment>
          )
            : (
              <div className="connexion">
                <LinkButton content="Connexion" route="/connexion" />
                <LinkButton content="Inscription" route="/inscription" />
              </div>
            )}
        </div>
      </div>
    );
  }
}
