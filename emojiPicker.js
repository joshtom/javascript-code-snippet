import { Picker } from 'emoji-mart'


  const [message, setMessage] = useState('')
  const [toggleEmoji, setToggleEmoji] = useState(false)


  const toggleEmojiContainer = () => {
    setToggleEmoji(!toggleEmoji)
  }



  const addEmojis = e => {
    let emoji = e.native
    setMessage(message + emoji)
  }

  const handleChange = e => {
    setMessage(e.target.value)
  }




 {toggleEmoji && (
        <Picker set="apple" style={{ width: '100%' }} theme="dark" onSelect={addEmojis} />
      )}



 <MessageInput>
        <form onSubmit={handleSubmit}>
          <MessageInputBox
            placeholder="Send message here"
            value={message}
            onChange={handleChange}
          />
          <MessageInputBoxIcon onClick={toggleEmojiContainer}>
            <img src={toggleEmoji ? close : smiley} />
          </MessageInputBoxIcon>
        </form>
      </MessageInput>