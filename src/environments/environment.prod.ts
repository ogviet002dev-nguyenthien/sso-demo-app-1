export const environment = {
  production: true,
  apiUrl: 'https://sandbox-app1-be.sakuramobile.jp',

  sso_client_id: '33add8eps5jiu29cu764dae0bs', // App clientID of Demo App1
  sso_client_secret_pw: 'ei0iqbl1e2gqacs6ujhqh9s4u708uinfq2agphlp9mbtp5n016u', // Demo App1 clientSecret

  loginURL:
    'https://testing-login.auth.ap-northeast-1.amazoncognito.com/login?client_id=33add8eps5jiu29cu764dae0bs&response_type=code&scope=aws.cognito.signin.user.admin+openid+profile&redirect_uri=https%3A%2F%2Fsandbox-app1-fe.sakuramobile.jp%2Fdashboard',
  redirectURL: 'https://sandbox-app1-fe.sakuramobile.jp/dashboard',

  cognitoTokenURL:
    'https://testing-login.auth.ap-northeast-1.amazoncognito.com/oauth2/token',

  userInfoURL:
    'https://testing-login.auth.ap-northeast-1.amazoncognito.com/oauth2/userInfo',

  logout:
    'https://testing-login.auth.ap-northeast-1.amazoncognito.com/logout?' +
    'client_id=33add8eps5jiu29cu764dae0bs&' +
    'logout_uri=https://sandbox-app1-fe.sakuramobile.jp/home',
};
