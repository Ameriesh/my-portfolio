import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialisation sécurisée pour le build
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

export async function POST(req: Request) {
  // 1. Vérification de l'initialisation
  if (!resend) {
    console.error("RESEND_API_KEY is missing in environment variables");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  try {
    // 2. Extraction des données
    const { name, email, message } = await req.json();

    // 3. Validation des champs
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    // 4. Envoi de l'email
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['amerieninmazou@gmail.com'], 
      subject: `🚀 Nouveau contact : ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #000; border-bottom: 2px solid #facc15; padding-bottom: 10px;">Nouveau message du Portfolio</h2>
          <p style="margin-top: 20px;"><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message :</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
          <p style="font-size: 12px; color: #999; margin-top: 30px;">Envoyé depuis ton site portfolio AmerieSh.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Erreur Resend:", error);
    return NextResponse.json({ error: "Échec de l'envoi de l'email." }, { status: 500 });
  }
}