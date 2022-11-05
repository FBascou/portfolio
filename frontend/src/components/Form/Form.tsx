import React, { useState } from 'react'
import './Form.scss'

interface FormInterface {
  setEmailSuccess: (param: any) => void
}

// setEmailSuccess should be on this component with success/error next to btn group

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

const Form = ({ setEmailSuccess }: FormInterface) => {
  const [inputValue, setInputValue] = useState(initialInputValue)

  const handleInputValue = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.currentTarget
    setInputValue((prev) => ({ ...prev, [name]: value }))
  }

  const handleClickSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    handleClickClear()
  }

  const handleClickClear = (): void => {
    setInputValue(initialInputValue)
    setEmailSuccess((prev: boolean) => !prev)
  }

  return (
    <form className="form-container" onSubmit={handleClickSubmit} onReset={handleClickClear}>
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
          rows={2}
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
  )
}

export default Form
