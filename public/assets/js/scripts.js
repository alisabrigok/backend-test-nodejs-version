// clearing up insignificant trailing zeros if there are any.
$("tbody tr").each(function() {
  // Within tr we find the last td child element and get content
  var value = $(this)
    .find("td:last-child")
    .html();
  // convert the string to number, then back to string in order to remove zeros
  var numberVal = parseFloat(value);
  var stringVal = numberVal.toString();
  // finally add TL symbol as well.
  $(this)
    .find("td:last-child")
    .html("&#8378;" + stringVal);
});
