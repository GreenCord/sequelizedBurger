$(document).ready(function(){
	console.log('Ready to burger!');

  var isCustomerMatch = false;
  var currentCustomerId;
  var currentCustomerName = 'Customer';

  $('.modal').modal();


	$(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  });

  $('#burgerSubmit').click(function(e){
  	e.preventDefault();

  	var order = {
  		burgerOrder: $('#burgerOrder').val().trim(),
      custId: $('#customerName').attr('data-id')
  	};

  	$.ajax('/order/new',{
  		type: 'POST',
  		data: order
  	}).then(
  		function(){
	  		console.log('Order placed!');
	  		location.reload();
  	});
  });

  $('#customerSubmit').click(function(e){
    e.preventDefault();

    var customer = {
      burgerCustomer: $('#burgerCustomer').val().trim()
    };

    $.ajax('/customers',{
      type: 'GET'
    }).then(function(data){
      isCustomerMatch = false;
      currentCustomerId = null;
      console.log(data);
      $(data).each(function(){
        console.log(this.name);
        if(this.name.toLowerCase() == customer.burgerCustomer.toLowerCase()) {
          console.log('MATCH FOUND!');
          isCustomerMatch = true;
          currentCustomerId = this.id;
          currentCustomerName = this.name;
        }
      }); //end each

      if (isCustomerMatch) {
        // update customer name on page, add customer data-id
        $('#customerName').text(currentCustomerName).attr('data-id',currentCustomerId);
      } else {
        $.ajax('/customers/new',{
          type: 'POST',
          data: {
            burgerCustomer: customer.burgerCustomer
          }
        }).then(function(data){
          console.log('Customer added:',data);
          $('#customerName').text(data.name).attr('data-id',data.id);
        });
      }
      $('#login').modal('close');
    });
  });

  $('.devour').click(function(e){
  	e.preventDefault();

  	var burgerid = $(this).data('id');
    var eaterid = $('#customerName').attr('data-id');

  	console.log('Customer #' + eaterid + ' is DEVOURING ORDER #' + burgerid);

  	$.ajax('/order/devour/' + burgerid + '/' + eaterid, {
  		type: 'PUT',
  		data: {id: burgerid}
  	}).then(
  		function(){
  			console.log('Devoured burger order #'+burgerid+'!');
  			location.reload();
  		}
  	);
  });

});