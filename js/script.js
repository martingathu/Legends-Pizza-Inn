
 function getSize (size) {
     if (size === 0) {
         return "Pizza Pie"
    }else if (size === 1) {
         return "Regular"
     }else if (size === 2) {
         return "Medium"
     }else if (size === 3) {
      return "large"
    }
  };
  
 //place order function 
     $(document).ready(function () {
      $('#submit').click(function (event) {
        event.preventDefault()
        var type = $("#type").val();
        var size = parseInt($("input[name='size']:checked").val());
        var crust = parseInt($("input[name='crust']:checked").val());
        var amount = parseInt($("#number").val());
        var price=[220, 550, 830,1050];
        var sumToppings=0;
        $("input[name='topping']:checked").each(function(){
          sumToppings+=parseInt($(this).val());
        });
        var subtotals = ((price[size]) + crust + sumToppings)* amount;
        
            if (size=='undefined'|| (price[size])=="undefined" || crust=='NaN' || sumToppings=='' ||subtotals=="NaN"){         
              $("#subtotal").html("CONFIRM ATLEAST YOU HAVE SELECTED THE SIZE & CRUST!")
            }else{
          $("#subtotal").html("Your Pick: Type:" + type + " Size: " + getSize(size) + " Price: Kshs " + price[size] + " crust: Kshs " + crust + " Toppings: Kshs "+ sumToppings +" Total: Kshs " + subtotals);
          $(".deliver").show();
         
        } 
                
      });
      $("#checkout").click(function(){
        alert("Thank you for shopping with us, pick up your order at any counter near you")
        $("#summary").html("Your order summary is as follows: <br/> Type:" + type + "<br/>" + " Size: " + getSize(size) + "<br/>" + " Price: Kshs " + price[size] + "<br/>"+ " crust: Kshs " + crust + "<br/>"+ " Toppings: Kshs "+ sumToppings + "<br/>" +" Total: Kshs " + subtotals);
      })
      
      });


    //contacts user information validation
  $("#submit").click(function () {
      event.preventDefault()
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();

      if (name == '' || email == '' || message == '') {
        $("#post").html("Please fill all fields");
        $(".post").css('background-color', 'red')
      } else {
        $("#post").html(name + " we have received your message. Thank you for reaching out to us")
        $(".post").css('background-color', 'green')
        $("form")[0].reset();
      }
    });
    //show the delivery form
    $("#delivery").click(function(){
      $(".delivery").show()
    });
    //validate delivery form
    $("#confirm").click(function(){
      event.preventDefault()
      var town=["CBD","Community Area","Hurlingham","Muthaiga", "Ngaong Road","Pangani","South B","South C","Thika Road","WestLands"]
      var charges=[50, 100,100,150,100,50,100,100,100,50]
      var name = $("#name").val();
      var contact = $("#contact").val();
      var location = town[$("#location").val()];
      var hse = $("#hse").val();
      var delivery=charges[$("#location").val()];
      if (name == '' || contact == '' || location == ''|| hse== '' ){
        alert("Please fill all fields");        
      } else {
        alert('Hello ' +name + " we have received your order. And will be deliverd to "+hse+' Street, '+location + " in less than 30 Min. Delivery charges: Ksh "+delivery);
       }
    });