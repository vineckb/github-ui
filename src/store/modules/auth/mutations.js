export function setUser(state, { name, login, avatar_url }) {
  state.user = {
    name,
    username: login,
    avatar: avatar_url
  }
}

export function setToken(state, token) {
  state.token = token;
}
