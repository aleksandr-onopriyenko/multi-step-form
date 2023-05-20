import PropTypes from 'prop-types'

import { SideBarWrapper } from './style'

export const Sidebar = ({ children, ...props }) => {
  return (
    <aside>
      <SideBarWrapper {...props}>{children}</SideBarWrapper>
    </aside>
  )
}

Sidebar.propTypes = {
  children: PropTypes.array,
}
