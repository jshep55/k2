# K2 Golf Studio website

A static site (plain HTML/CSS with a little JavaScript) for K2 Golf Studio in La Mirada, CA. You don't need to build or install anything.

## Editing business info

**All business info lives in `js/site-config.js`.** That covers the phone number, email, hours, social links, Google reviews link and all prices. Change it there once and every page updates.

Anything in `[BRACKETS]` is a placeholder. To find what's left, search the project for `[`.

| What | Where |
|---|---|
| Phone, email, hours, socials, all prices (lessons, putting, fitting, memberships) | `js/site-config.js` |
| Page text, reviews, bio | each page's `.html` file |
| Colors and fonts | top of `css/styles.css` (`:root`) |
| Newsletter signups (Google Form → Sheet) | `newsletterFormUrl` and `newsletterFormField` in `js/site-config.js` (see Newsletter below) |
| Photos | put files in `images/`, then swap each `photo-ph` placeholder for an `<img>` (there's an example in the HTML comments) |

## Pages
`index.html` (Home), `about.html`, `lessons.html`, `putting.html` (TourPutt + Pattern Test), `fitting.html`, `memberships.html` (two plans + comparison table), `contact.html`, and `thanks.html` (where visitors land after sending a form).

## Newsletter
The footer signup box on every page sends each email to the **K2 Newsletter** Google Form. The form saves responses into its linked Google Sheet (open the form, then **Responses → View in Sheets**). To download the list for a newsletter tool, use **File → Download → CSV** or **Microsoft Excel** in that sheet.

To connect a different Google Form:
1. Give the form one **Short answer** question for the email, and click **Publish**.
2. Click **⋮ → Get pre-filled link**, type any email, then click **Get link** and copy it.
3. In `js/site-config.js`, set `newsletterFormUrl` to the link's address with `viewform` changed to `formResponse` and everything from `?` removed. Set `newsletterFormField` to the `entry.123456` part.

## SEO
- Each page has its own `<title>` and meta description.
- Local business schema (JSON-LD) is built from `site-config.js`. Once you fill in `siteUrl`, `email`, `hoursForGoogle` and the social links, they're added to the schema automatically.

## Hosting
- **Netlify:** drag the folder into Netlify (or connect this repo). Leave the build command blank and set the publish directory to `/`. The newsletter signup form in the footer sends emails to a Google Form (see Newsletter below), so it works on any host.
- **GitHub Pages:** go to Settings → Pages, then deploy from this branch at the root. Netlify Forms won't work on GitHub Pages. The newsletter form still works through the Google Form, but the contact form needs a service like Formspree.
