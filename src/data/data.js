import def from '../assets/icons/leftpannel/def.svg'
import bag from '../assets/icons/leftpannel/bag.svg'
import folder from '../assets/icons/leftpannel/folder.svg'
import book from '../assets/icons/leftpannel/book.svg'

import mobile from '../assets/icons/leftpannel/mobile.svg'
import id from '../assets/icons/leftpannel/id.svg'
import corp from '../assets/icons/leftpannel/corp.svg'
import closebook from '../assets/icons/leftpannel/closebook.svg'
import chat from '../assets/icons/leftpannel/chat.svg'

export const Dashboards = {
  default: { inner: [], img: def },
  eCommerce: { inner: ['eCommerce1', 'eCommerce2', 'eCommerce3'], img: bag },
  Projects: { inner: ['Project1', 'Project2', 'Project3'], img: folder },
  'Online Courses': { inner: ['Online Cources1', 'Online Cources2', 'Online Cources3'], img: book },
}

export const Pages = {
  'User Profile': { inner: ['User Profile1', 'User Profile2', 'User Profile3'], img: mobile },
  Account: { inner: ['Account1', 'Account2', 'Account3'], img: id },
  Corporate: { inner: ['Corporate1', 'Corporate2', 'Corporate3'], img: corp },
  Blog: { inner: ['Blog1', 'Blog2', 'Blog3'], img: closebook },
  Social: { inner: ['Social1', 'Social2', 'Social3'], img: chat },
}
