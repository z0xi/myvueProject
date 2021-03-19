const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  role: state => state.user.role,
  email: state => state.user.email,
  name: state => state.user.name,
  phone: state => state.user.phone
}
export default getters
