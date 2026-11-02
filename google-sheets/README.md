# Newsletter signups → Google Sheet

The newsletter form in the site footer can save each signup as a new row in a Google Sheet. It takes about 5 minutes to set up, and you only do it once.

## 1. Make the sheet
1. Go to [sheets.new](https://sheets.new) (signed in to the Google account you want to own the list).
2. Name it something like **K2 Newsletter Signups**.

## 2. Add the script
1. In the sheet, click **Extensions → Apps Script**.
2. Delete everything in the code box, then paste in the whole of `newsletter-script.gs` from this folder.
3. Click the **Save** icon.

## 3. Publish it as a web app
1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set **Execute as:** *Me*, and **Who has access:** *Anyone*.
4. Click **Deploy**. Google will ask you to authorize it: choose your account, then **Advanced → Go to (project name) → Allow**. (Google shows this warning for every personal script; it's your own code.)
5. Copy the **Web app URL**. It ends in `/exec`.

## 4. Connect the website
Open `js/site-config.js` and paste the URL in place of the placeholder:

```js
newsletterSheetUrl: "https://script.google.com/macros/s/XXXX/exec",
```

That's it. New signups show up on the **Signups** tab with the date, email and the page they signed up from. Duplicate emails are skipped.

## Good to know
- "Who has access: Anyone" only lets people *add* a signup. Nobody can see or read your sheet.
- If you ever edit the script, use **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy** so the same URL keeps working.
- To send a newsletter, export the sheet (**File → Download → CSV**) and import it into Mailchimp, MailerLite, Gmail, etc.
