const isValidEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //eslint-disable-line

const validateEmails =  (emails) => {
    //trim takes care of extra space around email addresses.
    const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => !isValidEmail.test(email) && email !== '');

    if(invalidEmails.length) {
        return `Invalid emails: ${invalidEmails}`;
    }

    return;
};

export default validateEmails;