/* global $, Stripe */
//Document ready.
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var SignupBtn = $('#form-signup-btn');
  
  //Set stripe public key.
  Stripe.SetPublishableKey( $('meta[name="stripe-key"]').attr('content'));
  
  //When user clicks form submit btn.
  SignupBtn.click(function(event){
    //Prevent default submission behavior.
    event.preventDefault();
    
  //Collect the credit card fields.
  var ccNum = $('#card_number').val(),
      cvcNum = $('#card_code').val(),
      expMonth = $('#card_month').val(),
      expYear = $('#card_year').val();
  
  //Send the card info to stripe.
  Stripe.createToken({
    number: ccNum,
    cvc: cvcNum,
    exp_month: expMonth,
    exp_year: expYear
  }, stripeResponseHandler);
  });
 
  

  //stripe will return a card token.
  //Inject card token as hidden field into forms.
  //Submit forms to our rails app.
});