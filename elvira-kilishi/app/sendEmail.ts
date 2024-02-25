// sendEmail.ts
export async function sendEmail(data: any) {
  const response = await fetch('https://formspree.io/f/xyyrwlry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send email');
  }
}
