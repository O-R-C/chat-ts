import MessageProps from '../../types/MessageProps'

const Message = ({ message }: { message: MessageProps }) => {
  return (
    <li className='clearfix'>
      <div className='message-data align-right'>
        <span className='message-data-time'>{message.time}</span> &nbsp; &nbsp;
        <span className='message-data-name'>{message.from.name}</span>
        <i className='fa fa-circle me material-icons'>circle</i>
      </div>
      <div className='message other-message float-right'>{message.text}</div>
    </li>
  )
}

export default Message
