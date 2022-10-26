import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Box from '../../components/Box/Box'
import { useState } from 'react'
import './ContactPage.scss'

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

  // Dark Mode // Light Mode
  // normal color: white / black shadow
  // focus color: purple / purple shadow
  // correct color: green / green shadow
  // incorrect color: red / red shadow
  // submit color: blue? white? white fill? blue fill?
  // clear color: yellow/orange?

  const handleInputValue = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.currentTarget
    setInputValue((prev) => ({ ...prev, [name]: value }))
  }

  const handleClickSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    console.log(inputValue)
    handleClickClear()
  }

  const handleClickClear = (): void => {
    setInputValue(initialInputValue)
  }

  return (
    <div className="contact-container">
      <div className="contact-title">
        <h2>Get in touch!</h2>
      </div>
      <form className="contact-content" onSubmit={handleClickSubmit} onReset={handleClickClear}>
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
            rows={5}
            required
            onChange={handleInputValue}
          ></textarea>
        </div>
        <div className="form-btn-group">
          <button type="submit">
            <Box item={'Submit'} color={'purple'} />
          </button>
          <button type="reset">
            <Box item={'Clear'} color={'blue'} />
          </button>
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
