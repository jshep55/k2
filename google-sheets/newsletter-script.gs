/**
 * K2 Golf Studio: newsletter signups -> Google Sheet
 *
 * Paste this whole file into Extensions > Apps Script in your signup sheet,
 * then deploy it as a Web app. Full steps: google-sheets/README.md
 */

var SHEET_NAME = "Signups";

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var p = (e && e.parameter) || {};
    var email = String(p.email || "").trim().toLowerCase().slice(0, 254);
    var page = String(p.page || "").slice(0, 100);

    // Ignore anything that isn't a real-looking email address
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return ContentService.createTextOutput("invalid");
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
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
          return ContentService.createTextOutput("ok");
        }
      }
    }

    // A leading ' stops the sheet from treating text as a formula
    sheet.appendRow([new Date(), "'" + email, "'" + page]);
    return ContentService.createTextOutput("ok");
  } finally {
    lock.releaseLock();
  }
}
