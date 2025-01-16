import { type NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request | NextRequest) {
    try {
        interface ContactForm {
            name: string;
            email: string;
            message: string;
        }
        const { name, email, message }: ContactForm = await req.json() as ContactForm;
        if (!name || !email || !message) {
          return new Response("入力情報が足りません", { status: 400 });
        }
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: "yuri.kawase.0928@gmail.com",
          subject: `ポートフォリオお問い合わせ`,
          html: `
            <p><strong>名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            <p><strong>メッセージ:</strong> ${message}</p>
          `,
        });
        return new Response("メールが送信されました", { status: 200 });
      } catch (error) {
        console.error(error);
        return new Response("メール送信に失敗しました", { status: 500 });
      }
    }