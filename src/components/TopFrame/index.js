import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import './index.scss';
import LinkButton from '../LinkButton';
import SvgButton from '../SvgButton';
import Button from '../Button';
import AgendaImage from '../../assets/images/calendar-alt-regular.svg';
import MessageImage from '../../assets/images/envelope-regular.svg';
import ProfileImage from '../../assets/images/user-regular.svg';
import MapImage from '../../assets/images/map-solid.svg';

export default class TopFrame extends React.Component {
  static propTypes = {
    isConnected: PropTypes.bool,
    onClickDeco: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isConnected: false,
  }

  iconList = [
    {
      svg: MapImage,
      link: '/map',
    },
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
      link: '/profile',
    },
  ]

  render() {
    const { isConnected, onClickDeco } = this.props;
    return (
      <div className="TopFrame">
        <div className="left-side">
          <Link href="/">
            <button type="button" className="logo">
              WeMe
            </button>
          </Link>
          {isConnected && (
            <div className="event-button-wrapper">
              <Link href="/tout-evenements">
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
                <Button onClick={onClickDeco}>
                  Deconnexion
                </Button>
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
