import { SectionWrapper, SectionTitle } from '../Section';
import { Form, FormInline, FormGroup, Label, Button } from './style';

export default function Contact() {
  return (
    <SectionWrapper>
      <SectionTitle>Contact</SectionTitle>

      <Form>
        <FormInline>
          <FormGroup>
            <Label htmlFor="name" fontWeight="light">
              Name:
            </Label>
            <input type="text" id="name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email" fontWeight="light">
              Email:
            </Label>
            <input type="mail" name="email" />
          </FormGroup>
        </FormInline>

        <Label htmlFor="message" fontWeight="light">
          Message:
        </Label>
        <textarea rows="7" id="message"></textarea>

        <Button fontWeight="light">Send</Button>
      </Form>
    </SectionWrapper>
  );
}
