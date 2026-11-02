/**
 * K2 Golf Studio: newsletter signups -> Google Sheet
 *
 * Paste this whole file into Extensions > Apps Script in your signup sheet,
 * then deploy it as a Web app. Full steps: google-sheets/README.md
 *
 * Test it any time by opening your Web app URL in a browser with
 * ?email=test@example.com on the end. The page tells you what happened.
 */

var SHEET_NAME = "Signups";

// Only needed if you created this script from script.google.com instead of
// from inside the sheet (Extensions > Apps Script). Paste the long ID from the
// sheet's address: docs.google.com/spreadsheets/d/THIS_PART/edit
var SPREADSHEET_ID = "";

function doPost(e) {
  return ContentService.createTextOutput(saveSignup_((e && e.parameter) || {}));
}

// Opening the URL in a browser runs a test signup, so you can check the setup.
function doGet(e) {
  var p = (e && e.parameter) || {};
  if (!p.email) {
    return ContentService.createTextOutput(
      "The K2 signup script is running. To test it, add ?email=test@example.com to the end of this address."
    );
  }
  return ContentService.createTextOutput(saveSignup_(p));
}

function saveSignup_(p) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var email = String(p.email || "").trim().toLowerCase().slice(0, 254);
    var page = String(p.page || "browser test").slice(0, 100);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Not saved: \"" + email + "\" doesn't look like an email address.";
    }

    var ss = SPREADSHEET_ID
      ? SpreadsheetApp.openById(SPREADSHEET_ID)
      : SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      return "Not saved: this script isn't attached to a sheet. Either create it from the sheet " +
        "(Extensions > Apps Script), or paste the sheet's ID into SPREADSHEET_ID at the top of the script.";
    }

    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Signed up", "Email", "Page"]);
      sheet.setFrozenRows(1);
    }

    // Skip people who are already on the list
    var last = sheet.getLastRow();
    if (last > 1) {
      var existing = sheet.getRange(2, 2, last - 1, 1).getValues();
      for (var i = 0; i < existing.length; i++) {
        if (String(existing[i][0]).toLowerCase() === email) {
          return "Already on the list: " + email + " (in the \"" + SHEET_NAME + "\" tab of " + ss.getName() + ")";
        }
      }
    }

    // A leading ' stops the sheet from treating text as a formula
    sheet.appendRow([new Date(), "'" + email, "'" + page]);
    return "Saved " + email + " to the \"" + SHEET_NAME + "\" tab of " + ss.getName();
  } catch (err) {
    return "Not saved. Google error: " + err;
  } finally {
    lock.releaseLock();
  }
}
