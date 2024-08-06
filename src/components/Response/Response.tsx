import MessageProps from '../../types/MessageProps'

const Response = ({ message }: { message: MessageProps }) => {
  return (
    <li>
      <div className='message-data align-left'>
        <span className='message-data-name'>
          <i className='fa fa-circle online material-icons'>circle</i>
          {message.from.name}
        </span>
        <span className='message-data-time'>{message.time}</span>
      </div>
      <div className='message my-message'>{message.text}</div>
    </li>
  )
}

export default Response
