
export function AuthService(Vendor, userResource, store) {
  const logger = Vendor.logger.get('AuthService');

  function login(user) {
    logger.debug('login, user: ', user);
    return userResource.login(user).then((token) => {
      store.set('jwt', token.id_token);
      return user;
    });
  }

  function logout() {
    store.remove('jwt');
  }

  let currentUser;
  function me() {
    logger.debug('me called.');
    if(currentUser) {
      logger.debug('currentUser returns from cache');
    } else {
      logger.debug('me returns from backend');
      currentUser = userResource.me();
    }
    return currentUser;
  }

  return {
    login,
    logout,
    me
  };
}
