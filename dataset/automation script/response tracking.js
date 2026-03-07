function onFormSubmit(e) {

  var sheet = SpreadsheetApp
  .getActiveSpreadsheet()
  .getSheetByName("Form Responses 1");

  var totalResponses = sheet.getLastRow() - 1;

  Logger.log("Total Responses: " + totalResponses);

}
