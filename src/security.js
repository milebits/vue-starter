export default (router) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
      if (localStorage.getItem('api_key') == null) {
        next({
          name: 'login',
          params: { nextUrl: to.fullPath },
        });
      } else {
        let user = JSON.parse(localStorage.getItem('user'));
        if (to.matched.some(record => record.meta.is_admin)) {
          if (user.is_admin == true) {
            next();
          } else {
            next({ name: 'dashboard' });
          }
        } else {
          next();
        }
      }
    }
    else if (to.matched.some(record => record.meta.guestOnly)) {
      if (localStorage.getItem('api_key') == null) {
        next();
      } else {
        next({ name: 'dashboard' });
      }
    }
  });
  return router;
};