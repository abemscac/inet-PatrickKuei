import React, { MouseEventHandler, ReactElement, useState } from 'react'
import Dropdown from './Dropdown'

type Props = {
  className: String
  overlay: Array<any>
  // eslint-disable-next-line no-unused-vars
  renderDropdownToggle: (onClick: MouseEventHandler) => ReactElement
}

export default function DropdownContainer({
  className,
  overlay,
  renderDropdownToggle,
}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }
  const DropdownToggle = renderDropdownToggle(handleToggleDropdown)

  return (
    <Dropdown
      customClassName={className}
      overlay={overlay}
      DropdownToggle={DropdownToggle}
      isDropdownOpen={isDropdownOpen}
    />
  )
}