# resume-generator

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). You can view a live demo of it [here](https://alecia-resume.vercel.app)!

This app also uses:

- [React-pdf](https://react-pdf.org/) to build the PDF
- [tailwindCSS](https://tailwindcss.com) for styling
- [shadcn-ui](https://ui.shadcn.com/docs) for base components (which will later be used in the form I'm building for PDF personalization and analytics)

## Getting Started

Copy `.env.dist` to a new file called `.env.local` and fill in your FontAwesome license key. If you don't have one, no worries! Just remove `"@fortawesome/pro-regular-svg-icons"` and `"@fortawesome/pro-solid-svg-icons"` from the `package,json` and delete references to them (replacing affected icons used in the PDF as necessary).

Next, run the development server:

```bash
npm install && npm run dev
# or
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
