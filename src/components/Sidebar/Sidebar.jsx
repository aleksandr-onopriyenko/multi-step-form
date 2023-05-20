import PropTypes from 'prop-types'

import { SideBarWrapper } from './style'

export const Sidebar = ({ children, ...props }) => {
  return (
    <SideBarWrapper {...props}>
      <aside>{children}</aside>
    </SideBarWrapper>
  )
}

Sidebar.propTypes = {
  children: PropTypes.array,
}
