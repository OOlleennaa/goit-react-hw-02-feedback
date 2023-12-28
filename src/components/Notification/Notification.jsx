import PropTypes from 'prop-types';

import { NotificationText } from './Notification.styled.js';

export const Notification = ({ message }) => (
  <NotificationText>{message}</NotificationText>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
