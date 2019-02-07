import UserDisplayName from './UserDisplayName';
import { types as sdkTypes } from '../../util/sdkLoader';
import { fakeIntl } from '../../util/test-data';

const { UUID } = sdkTypes;

const bannedUser = {
  id: new UUID('banned-user'),
  type: 'user',
  attributes: {
    banned: true,
  },
};

const deletedUser = {
  id: new UUID('deleted-user'),
  type: 'user',
  attributes: {
    banned: false,
    deleted: true,
  },
};

const normalUser = {
  id: new UUID('normal-user'),
  type: 'user',
  attributes: {
    banned: false,
    profile: {
      displayName: 'Normal User',
      abbreviatedName: 'NU',
    },
  },
};

export const BannedUser = {
  component: UserDisplayName,
  props: {
    user: bannedUser,
    intl: fakeIntl,
  },
  group: 'users',
};

export const DeletedUser = {
  component: UserDisplayName,
  props: {
    user: deletedUser,
    intl: fakeIntl,
  },
  group: 'users',
};

export const NormalUser = {
  component: UserDisplayName,
  props: {
    user: normalUser,
    intl: fakeIntl,
  },
  group: 'users',
};
