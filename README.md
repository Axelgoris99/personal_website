# Axel Goris: Personal website

I'm currently using the Astro Starter Kit as a template. Works great!

Unless I keep breaking things with Git...

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Pictures Size

Picture for work tab should have a 1.8 ratio (so 100px height for 180px width).

## Deploy Steps

1. Build the app
2. Use rsync to sync on the server.
   ```
   rsync -au -v --exclude='*.mp4' /home/user/Documents/Software/personal_website/dist/ root@ip:/home/portfolio/dist/
   ```
   Note that this is not the final destination.
   You can also sync directly to 
   ```
   rsync -au -v --exclude='*.mp4' /home/user/Documents/Software/personal_website/dist/ root@ip:/var/www/
   ```
3. On your server, copy paste from /home/portfolio/dist to the place where your caddy file config is looking.
4. That's probably in /var/www. Make sure to copy into /var/www and not into /var/www/dist. The index.js must be in /var/www at that level because that's where Caddy looks for an entry file.
5. All done.
