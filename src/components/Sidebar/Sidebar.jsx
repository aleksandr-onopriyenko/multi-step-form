import PropTypes from 'prop-types'

import { SideBarWrapper } from './style'

export const Sidebar = ({ children, ...props }) => {
  return <SideBarWrapper {...props}>{children}</SideBarWrapper>
}

Sidebar.propTypes = {
  children: PropTypes.array,
}
