function segmentUsers() {

  var sheet = SpreadsheetApp
  .getActiveSpreadsheet()
  .getSheetByName("Form Responses 1");

  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {

    var frequency = data[i][1];

    if (frequency == "Daily" || frequency == "3–4 times per week") {
      sheet.getRange(i + 1, 13).setValue("Power User");
    }

    else if (frequency == "1–2 times per week") {
      sheet.getRange(i + 1, 13).setValue("Regular User");
    }

    else {
      sheet.getRange(i + 1, 13).setValue("Occasional User");
    }

  }

}
