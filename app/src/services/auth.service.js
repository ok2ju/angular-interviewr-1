
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
    if(!currentUser) {
      currentUser = new Promise((resolve, reject) => {
        userResource.me().then(resolve).catch(reject);
      });
    }
    return currentUser;
  }

  return {
    login,
    logout,
    me
  };
}
