import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useState } from 'react'
import { preview } from 'vite'

interface InputValueInterface {
  name: string
  email: string
  company: string
  message: string
}

const initialInputValue: InputValueInterface = {
  name: '',
  email: '',
  company: '',
  message: '',
}

const ContactPage = () => {
  const [inputValue, setInputValue] = useState(initialInputValue)

  // focus color: purple
  // correct color: green
  // incorrect color: red

  const handleInputValue = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.currentTarget
    setInputValue((prev) => ({ ...prev, [name]: value }))
    console.log(inputValue)
  }

  return (
    <div className="contact-container">
      <div className="contact-title">
        <h2>Get in touch!</h2>
      </div>
      <form className="contact-content">
        <div className="form-group">
          <label htmlFor="name">
            <p>Name</p>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Felipe Bascou"
            onChange={handleInputValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <p>Email</p>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="felipe.bascou@gmail.com"
            onChange={handleInputValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">
            <p>Company</p>
          </label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="X Company"
            onChange={handleInputValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <p>Message</p>
          </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            required
            onChange={handleInputValue}
          ></textarea>
        </div>
        <div className="btn-group">
          <button type="submit">Send</button>
          <button type="reset">Clear</button>
        </div>
      </form>
      <div className="contact-extra-info">
        <p>You can also email me directly at:</p>
        <h3>felipe_bascou@hotmail.com</h3>
        <div className="contact-icon">
          <ContentCopyIcon />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
