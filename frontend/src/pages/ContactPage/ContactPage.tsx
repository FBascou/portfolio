import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import InfiniteSquare from '../../components/InfiniteSquare/InfiniteSquare'
import React, { useRef, useState } from 'react'
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
  const [copySuccess, setCopySuccess] = useState<string>('')
  const [emailSuccess, setEmailSuccess] = useState<boolean>(false)
  const emailRef = useRef<HTMLHeadingElement>(null)

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
    setEmailSuccess((prev) => !prev)
  }

  const handleClickClear = (): void => {
    setInputValue(initialInputValue)
    setEmailSuccess(false)
  }

  const handleCopyToClipboard = async () => {
    const currentEmail = emailRef.current
    if (currentEmail == null) return
    try {
      await navigator.clipboard.writeText(currentEmail.innerText)
      setCopySuccess('Copied!')
    } catch {
      setCopySuccess('Failed to copy!')
    }
    setTimeout(() => {
      setCopySuccess('')
    }, 2000)
  }

  return (
    <div className="contact-container">
      <div className="contact-title">
        <h2>Get in touch!</h2>
      </div>
      <div className="contact-content">
        <form
          className="contact-form-container"
          onSubmit={handleClickSubmit}
          onReset={handleClickClear}
        >
          <div className="form-group">
            <label htmlFor="name">
              <h3>Name</h3>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Felipe Bascou"
              minLength={2}
              maxLength={30}
              onChange={handleInputValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <h3>Email</h3>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="felipe.bascou@gmail.com"
              minLength={5}
              maxLength={50}
              onChange={handleInputValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">
              <h3>Company</h3>
            </label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="X Company"
              minLength={2}
              maxLength={20}
              onChange={handleInputValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              <h3>Message</h3>
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={3}
              required
              placeholder="Enter your message"
              minLength={5}
              maxLength={3000}
              onChange={handleInputValue}
            ></textarea>
          </div>
          <div className="form-btn-group">
            <button type="submit" className="button-primary">
              <p>Submit</p>
            </button>
            <button type="reset" className="button-reset">
              <p>Clear All</p>
            </button>
          </div>
        </form>
        <div className="contact-extra-info">
          <p>Or you can send me an email to:</p>
          <div className="contact-email-container">
            <h3 ref={emailRef}>felipe_bascou@hotmail.com</h3>
            <div className="contact-icon" onClick={handleCopyToClipboard}>
              <ContentCopyIcon
                className={`${copySuccess !== '' ? 'active' : null}`}
                fontSize="large"
              />
              <div className="contact-copy-tooltip">
                <p>{copySuccess}</p>
              </div>
            </div>
          </div>
          <InfiniteSquare />
          <p>{emailSuccess && 'Email sent successfully, I will get to you shortly :)'}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
