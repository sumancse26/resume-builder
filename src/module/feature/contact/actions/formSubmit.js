'use server';

export const submitForm = async (prevState, formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form submitted with data:', formData.get('name'), formData.get('email'), formData.get('message'));

    return 'Form submitted successfully!';
};
