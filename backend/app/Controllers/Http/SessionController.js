'use strict';
const User = use('App/Models/User');

class SessionController {
  async store({ request, auth }) {
    const { email, password } = request.only(['email', 'password']);
    const { token } = await auth.attempt(email, password);
    const user = await User.findByOrFail('email', email);

    return { token, user };
  }
}

module.exports = SessionController;
