
import { useActionState } from "react";
import { submitForm } from "./actions/formSubmit";
import { useFormStatus } from "react-dom";

const Contact = () => {
    const [message, formAction] = useActionState(submitForm, '');

    const Button = ({ ...arg }) => {
        const { pending } = useFormStatus();
        return (<button {...arg} disabled={pending}>
            {pending ? 'Submitting...' : 'Submit'}
        </button>);
    };

    return (
        <>
            <form action={formAction}>
                <h1>Contact Us</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <Button type="submit" />
            </form>

            <h5>Result : {message}</h5>
        </>
    );
};

export default Contact;