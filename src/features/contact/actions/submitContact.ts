'use server'

export async function submitContactForm(formData: FormData) {
    // Simulate form processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Extract form data
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    // Here you would typically send an email or save to a database
    console.log('Form submission:', { name, email, message })

    return { success: true, message: 'Thank you for your message. We\'ll get back to you soon!' }
}

