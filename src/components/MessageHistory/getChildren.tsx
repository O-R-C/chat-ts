import Message from '../Message/Message'
import Response from '../Response/Response'
import Typing from '../Typing/Typing'
import MessageProps from '../../types/MessageProps'

export const getChildren = (list: MessageProps[]) => {
  return list.map((item) => {
    if (item.type === 'message') {
      return (
        <Message
          key={item.id}
          message={item}
        />
      )
    }
    if (item.type === 'response') {
      return (
        <Response
          key={item.id}
          message={item}
        />
      )
    }
    if (item.type === 'typing') {
      return (
        <Typing
          key={item.id}
          message={item}
        />
      )
    }
  })
}

export default getChildren
