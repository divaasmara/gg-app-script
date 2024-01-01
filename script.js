function onFormSubmit(event) {

  record_array = []

  var form = FormApp.openById('1viGliU2SESb_Wtr5vzg6d-3_jqi84bwndoZmjYVzLgc'); // Form ID
  var formResponses = form.getResponses();
  var formCount = formResponses.length;

  var formResponse = formResponses[formCount - 1];
  var itemResponses = formResponse.getItemResponses();

  for (var j = 0; j < itemResponses.length; j++) {
  var itemResponse = itemResponses[j];
    var title = itemResponse.getItem().getTitle();
    var answer = itemResponse.getResponse();

    Logger.log(title);
    Logger.log(answer);

    record_array.push(answer);
  }
   
  AddRecord(record_array[0], record_array[1], record_array[2]);

}

function AddRecord(first_name, last_name, color) {
  var url = 'https://docs.google.com/spreadsheets/d/13o_eQZyLqhZXJWiiaVHsm_sTmuiGHUz7LvKMI9ZtJvk/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("Sheet1");
  dataSheet.appendRow([first_name, last_name, color, new Date()]);
}