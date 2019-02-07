import React from 'react';
import { oneOfType } from 'prop-types';
import { propTypes } from '../../util/types';

const UserDisplayName = props => {
  const { user, intl } = props;
  const hasAttributes = user && user.attributes;
  const userIsDeleted = hasAttributes && user.attributes.deleted;
  const userIsBanned = hasAttributes && user.attributes.banned;
  const userHasProfile = hasAttributes && user.attributes.profile;

  const deletedUserDisplayName = intl.formatMessage({
    id: 'UserDisplayName.deleted',
  });

  const bannedUserDisplayName = intl.formatMessage({
    id: 'UserDisplayName.banned',
  });

  return userIsDeleted ? (
    <span>{deletedUserDisplayName}</span>
  ) : userIsBanned ? (
    <span>{bannedUserDisplayName}</span>
  ) : userHasProfile ? (
    <span>{user.attributes.profile.displayName}</span>
  ) : (
    <span />
  );
};

UserDisplayName.defaultProps = { user: null };

UserDisplayName.propTypes = {
  user: oneOfType([propTypes.user, propTypes.currentUser]),
};

export default UserDisplayName;
