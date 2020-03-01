
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
        var toppings = parseInt($("input[name='topping']:checked").val());
        var amount = parseInt($("#number").val());
        var price=[220, 550, 830,1050];
        var subtotals = ((price[size]) + crust + toppings)* amount;
        var deliveryCharges=100;
               if ( size!=''|| crust!=''){
          $("#subtotal").html("Your Pick: Type:" + type + " Size:" + getSize(size) + " Price: Kshs" + price[size] + " crust: Kshs" + crust + " Toppings: Kshs "+ toppings +" Total: Kshs " + subtotals);
          $(".deliver").show();
        } else if (size!='' || crust!='' || toppings!=''){
          $("#subtotal").html("Your Pick: Type:" + type + " Size:" + getSize(size) + " Price: Kshs" + price[size] + " crust: Kshs" + crust + " Toppings:" + toppings + " Total: Kshs " + subtotals);
          $(".deliver").show();
        }else{
          $("#subtotal").html("CONFIRM ATLEAST YOU HAVE SELECTED THE SIZE & CRUST!")
            
        }
        
      });
      $("#checkout").click(function(){
        alert("Thank you for shopping with us, pick up your order at any counter near you")
      })
      
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