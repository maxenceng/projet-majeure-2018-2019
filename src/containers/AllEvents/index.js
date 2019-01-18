import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AllEventsComponent from '../../components/AllEvents';
import actions, { actionPropTypes } from '../../actions';

class AllEvents extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
      EVENT_DATE: PropTypes.string.isRequired,
      EVENT_DESC: PropTypes.string.isRequired,
      EVENT_NAME: PropTypes.string.isRequired,
      ID_EVENT: PropTypes.string.isRequired,
      ID_LOCATION: PropTypes.string.isRequired,
      LOC_DISCTRICT: PropTypes.string.isRequired,
      LOC_EVENT: PropTypes.string.isRequired,
      LOC_LATITUDE: PropTypes.string.isRequired,
      LOC_LONGITUDE: PropTypes.string.isRequired,
    })),
  };

  static defaultProps = {
    events: [],
  }

  componentWillMount = () => {
    const { actions: { getAllEventsAction } } = this.props;
    getAllEventsAction({
      date: null,
      location: 'London',
    });
  }

  render() {
    const { events } = this.props;
    return (
      <AllEventsComponent events={events} />
    );
  }
}

const mapStateToProps = ({ event: { data: { events } } }) => ({ events });

export default connect(mapStateToProps, actions)(AllEvents);
