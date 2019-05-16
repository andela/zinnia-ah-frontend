import { socialAuth } from '../../../store/modules/auth';
import store from '../../../store/store';

const SocialAuth = props => {
  store.dispatch(socialAuth(props.history, location));
  return null;
};

export default SocialAuth;
