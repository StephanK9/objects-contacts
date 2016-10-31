function Contact(firstName, lastName, city, state, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.locationCity = city;
  this.locationState = state;
  this.phoneNumber = phoneNumber;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedLocationCity = $("input#city").val();
    var inputtedLocationState = $("input#state").val();
    var inputtedPhoneNumber = $("input#phone-number").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedLocationCity, inputtedLocationState, inputtedPhoneNumber);

    $("ul#results").append("<li><span class='output-text'>" + newContact.firstName + "</span></li>");

    $("li").last().click(function() {
      $("#initial-hidden").show();
      $("#initial-hidden h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".city").text(newContact.locationCity);
      $(".state").text(newContact.locationState);
      $(".phone-number").text(newContact.phoneNumber);

    });


  });
});
