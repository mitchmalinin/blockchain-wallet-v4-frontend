import React from 'react'
import ReactTooltip from 'react-tooltip'

import styled from 'styled-components'

const Wrapper = styled.div`
  width: fit-content;
  display: inline-flex;
`

class TooltipHost extends React.PureComponent {
  componentDidMount () {
    window.tooltip = ReactTooltip.rebuild
    ReactTooltip.rebuild()
  }

  render () {
    const { tip, children, id } = this.props
    const dataTip = tip || []

    return (
      <Wrapper data-tip={dataTip} data-for={id} {...this.props}>
        {children}
      </Wrapper>
    )
  }
}

export default TooltipHost
