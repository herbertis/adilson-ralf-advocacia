# Adilson Ralf Advocacia — Website

Projeto Next.js 15 premium para o escritório Adilson Ralf Advocacia.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**
- **Lucide React**

## Instalação e execução

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`

## Deploy na Vercel

```bash
npx vercel
```

## Estrutura do projeto

```
app/
  layout.tsx          — Root layout, fonts, metadata global
  page.tsx            — Home page
  areas-de-atuacao/   — Página de todas as áreas
  equipe/             — Página da equipe
  contato/            — Página de contato + formulário
  sitemap.ts          — Sitemap automático
  robots.ts           — Robots.txt automático
  globals.css         — Design system CSS

components/
  Navbar.tsx
  Hero.tsx
  StatsBar.tsx
  Services.tsx        — 5 áreas em cards (home)
  AreasList.tsx       — 10 áreas completas
  About.tsx
  Differentials.tsx
  Timeline.tsx
  Testimonials.tsx
  FAQ.tsx
  CTA.tsx
  Footer.tsx
  TeamList.tsx
  ContatoView.tsx
  AnimatedCounter.tsx
  SectionTitle.tsx
  StructuredData.tsx  — Schema.org LegalService

lib/
  data.ts             — Todos os textos e dados reais
  utils.ts            — cn() helper

tailwind.config.ts    — Design system (navy/gold)
```

## Personalização

### Conteúdo
Edite `lib/data.ts` para atualizar textos, equipe, áreas e estatísticas.

### Formulário de contato
O componente `ContatoView.tsx` tem o formulário pronto. Para integrar envio real,
conecte ao [Resend](https://resend.com) ou SendGrid em `app/api/contact/route.ts`.

Exemplo com Resend:
```ts
// app/api/contact/route.ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  await resend.emails.send({
    from: 'site@adilsonralfadvocacia.com.br',
    to: 'adilsonralf@adilsonralfadvocacia.com.br',
    subject: `Contato: ${body.subject}`,
    html: `<p>De: ${body.name} (${body.email})</p><p>${body.message}</p>`
  });
  return Response.json({ ok: true });
}
```

### Fotos da equipe
Substitua os placeholders em `TeamList.tsx` com `<Image>` do Next.js apontando
para as fotos em `public/team/`.

### Logo
Coloque o arquivo `logo.png` e `og-image.jpg` em `public/`.

## Informações do escritório

- **Endereço:** Rua Luiz Junqueira de Carvalho, 168 - Medicina, Pouso Alegre/MG
- **Telefone:** +55 (35) 3425-2020
- **E-mail:** adilsonralf@adilsonralfadvocacia.com.br
