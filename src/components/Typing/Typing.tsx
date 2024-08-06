import MessageProps from '../../types/MessageProps'

const Typing = ({ message }: { message: MessageProps }) => {
  return (
    <li>
      <div className='message-data align-left'>
        <span className='message-data-name'>
          <i className='fa fa-circle online'></i>
          {message.from.name}
        </span>
        <span className='message-data-time'>{message.time}</span>
      </div>
      <div className='typing align-left material-icons'>
        <span className='first'>circle</span>
        <span className='second'>circle</span>
        <span className='third'>circle</span>
      </div>
    </li>
  )
}

export default Typing
