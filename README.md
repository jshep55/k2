# K2 Golf Studio website

A static site (plain HTML/CSS with a little JavaScript) for K2 Golf Studio in La Mirada, CA. You don't need to build or install anything.

## Editing business info

**All business info lives in `js/site-config.js`.** That covers the phone number, email, hours, booking link, social links, Google reviews link and membership prices. Change it there once and every page updates.

Anything in `[BRACKETS]` is a placeholder. To find what's left, search the project for `[`.

| What | Where |
|---|---|
| Phone, email, hours, booking link, socials, membership prices | `js/site-config.js` |
| Page text, reviews, bio | each page's `.html` file |
| Colors and fonts | top of `css/styles.css` (`:root`) |
| Photos | put files in `images/`, then swap each `photo-ph` placeholder for an `<img>` (there's an example in the HTML comments) |

## SEO
- Each page has its own `<title>` and meta description.
- Local business schema (JSON-LD) is built from `site-config.js`. Once you fill in `siteUrl`, `email`, `hoursForGoogle` and the social links, they're added to the schema automatically.

## Hosting
- **Netlify:** drag the folder into Netlify (or connect this repo). Leave the build command blank and set the publish directory to `/`. The email signup form works through Netlify Forms automatically.
- **GitHub Pages:** go to Settings → Pages, then deploy from this branch at the root. Netlify Forms won't work on GitHub Pages, so point the signup form's `action` at Mailchimp or a similar service.
