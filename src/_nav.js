import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBuilding,
  cilSpeedometer,
  cilSwimming,
  cilUser
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: 'Condomínio'
  },
  {
    component: CNavItem,
    name: 'Condomínio',
    to: '/pages/condominium',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />
  },
  {
    component: CNavGroup,
    name: 'Prédio',
    to: '/base',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Bloco',
        to: '/base/accordion'
      },
      {
        component: CNavItem,
        name: 'Andar',
        to: '/base/accordion'
      },
      {
        component: CNavItem,
        name: 'Apartamento',
        to: '/base/accordion'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'Instalações',
    to: '/theme/colors',
    icon: <CIcon icon={cilSwimming} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Proprietários',
    to: '/theme/colors',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />
  }
]

export default _nav
