import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// On récupère la clé depuis les variables d'environnement
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Vérification de sécurité simple
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['amerieninmazou@gmail.com'], // Ton email perso
      subject: ` Nouveau contact : ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">Nouveau message du Portfolio</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur Resend:", error);
    return NextResponse.json({ error: "Échec de l'envoi de l'email." }, { status: 500 });
  }
}