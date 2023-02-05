import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfiniteSquare from '../../components/InfiniteSquare/InfiniteSquare';
import { useRef, useState } from 'react';
import './ContactPage.scss';
import Form from '../../components/Form/Form';

const ContactPage = () => {
  const [copySuccess, setCopySuccess] = useState<string>('');
  const [emailSuccess, setEmailSuccess] = useState<boolean>(false);
  const emailRef = useRef<HTMLHeadingElement>(null);

  // Change Company placeholder to Email domain - make it dynamic

  const handleCopyToClipboard = async () => {
    const currentEmail = emailRef.current;
    if (currentEmail == null) return;
    try {
      await navigator.clipboard.writeText(currentEmail.innerText);
      setCopySuccess('Copied!');
    } catch {
      setCopySuccess('Failed to copy!');
    }
    setTimeout(() => {
      setCopySuccess('');
    }, 2000);
  };

  return (
    <div className="content-container">
      <div className="contact-title">
        <h2>Get in touch!</h2>
      </div>
      <div className="contact-content">
        <Form setEmailSuccess={setEmailSuccess} />
        <div className="contact-extra-info">
          {/* <p>Or you can send me an email to:</p>
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
          <InfiniteSquare />  */}
          <p>{emailSuccess && 'Email sent successfully, I will get to you shortly :)'}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
