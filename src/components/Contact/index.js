import { SectionWrapper, SectionTitle } from '../Section';
import { Form, FormInline, FormGroup } from './style';

export default function Contact() {
  return (
    <SectionWrapper>
      <SectionTitle>Contact</SectionTitle>

      <Form>
        <FormInline>
          <FormGroup>
            <label for="name">Name:</label>
            <input type="text" id="name" />
          </FormGroup>
          <FormGroup>
            <label for="email">Email:</label>
            <input type="mail" name="email" />
          </FormGroup>
        </FormInline>

        <label for="message">Message:</label>
        <textarea rows="7" id="message"></textarea>

        <button>Send</button>
      </Form>
    </SectionWrapper>
  );
}
