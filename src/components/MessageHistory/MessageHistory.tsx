import getChildren from './getChildren'
import MessageProps from '../../types/MessageProps'

const MessageHistory = ({ list = [] }: { list: MessageProps[] }) => {
  return <ul className='MessageHistory chat-data'>{getChildren(list)}</ul>
}

export default MessageHistory
