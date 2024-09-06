# College project - Building & Deploying a website using Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

My first Next.js project. We built a mock website for a PaaS/IaaS company and in the process got to know the basic (and some advanced) features of Next.js.
The website was later deployed on Vercel, which proved to be a valuable lesson in writting cleaner and more robust code, ready for deployment.

The project also thought us about collaborative work, as me and my colleage worked on the project in parallel. It was a great way of refreshing and expanding our knowledge of git.

While the actual design of the website wasn't the focal point of the project, good UI/UX was. The website doesn't contain flashy, modern designs, but we hope to have created a
website that's very easy to navigate and use.

## Running the project

After pulling the repo, the development server can be started using:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Making changes

A big part of our goal was making the code modular and easily updatable. Most of the content found on the page can be found and edited in the "components" folder.
The components are also divided into subfolders (e.g. "components/landing") to further simplifiy navigation. While there's definite room for improvement (some redundant code
is still left over, some functionalities can be written cleaner, etc.), we hope this allows us to update and improve our code much easier in the future.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
