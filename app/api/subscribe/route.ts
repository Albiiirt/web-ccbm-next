import { NextRequest, NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  // Honeypot: camp ocult que un humà mai omple, els bots sovint sí.
  if (formData.get('website')) {
    return NextResponse.json({ success: true });
  }

  const email = String(formData.get('email') || '').trim();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ success: false, message: 'Adreça de correu no vàlida.' }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_SEGUIDORS_GROUP_ID;

  if (!apiKey || !groupId) {
    console.error('Falten MAILERLITE_API_KEY o MAILERLITE_SEGUIDORS_GROUP_ID');
    return NextResponse.json({ success: false, message: 'Error de configuració del servidor.' }, { status: 500 });
  }

  const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email,
      groups: [groupId],
      status: 'unconfirmed',
    }),
  });

  if (res.ok) {
    return NextResponse.json({ success: true });
  }

  const body = await res.json().catch(() => ({}));

  // Ja existia com a subscriptor: tractem-ho com un èxit, no cal confondre l'usuari.
  if (res.status === 422 && JSON.stringify(body).toLowerCase().includes('already')) {
    return NextResponse.json({ success: true });
  }

  console.error('MailerLite subscribe error', res.status, body);
  return NextResponse.json({ success: false, message: 'No s\'ha pogut completar la subscripció.' }, { status: 502 });
}
