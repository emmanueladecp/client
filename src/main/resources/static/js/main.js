/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.

(function(){
    console.log("Hello World!");
})();
*/

$(".readonlyfield").on('keydown paste', function(e){
        e.preventDefault();
});

$(".readonlyfield").keydown(function(e){
        e.preventDefault();
});

$(".readonlyfield").click(function(e){
        e.preventDefault();
});


var options = {
    
	url: function(phrase) {
		return "http://localhost:8080/api/v1/customers";
	},
        listLocation: "content",
        getValue: "name",
        
        list: {

		onSelectItemEvent: function() {
			var value = $("#custid").getSelectedItemData().phone;
                        var value2 = $("#custid").getSelectedItemData().email;
                        var value3 = $("#custid").getSelectedItemData().id;
                        var value4 = $("#custid").getSelectedItemData().name;

			$("#custphone").val(value).trigger("change");
                        $("#custemail").val(value2).trigger("change");
                        $("#custidhidden").val(value3).trigger("change");
                        $("#custname").val(value4).trigger("change");

		}
	} 
};

$("#custid").easyAutocomplete(options);


var options2 = {
    
	url: function(phrase) {
		return "http://localhost:8080/api/v1/movies";
	},
        listLocation: "content",
        
        getValue: function(element) {
                const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                var parts =element.date.split('-');
                var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
                
                var formatted_date = mydate.getDate() + "-" + months[mydate.getMonth()] + "-" + mydate.getFullYear();
                
		return element.name + " " + formatted_date + " " + element.starttime;
	},
        
        list: {

		onSelectItemEvent: function() {
			var value = $("#movieid").getSelectedItemData().name;
                        var value2 = $("#movieid").getSelectedItemData().starttime;
                        var value3 = $("#movieid").getSelectedItemData().id;
                        var value4 = $("#movieid").getSelectedItemData().stock;

			$("#moviename").val(value).trigger("change");
                        $("#movietime").val(value2).trigger("change");
                        $("#movieidhidden").val(value3).trigger("change");
                        $("#moviestockhidden").val(value4).trigger("change");

		}
	}
};

$("#movieid").easyAutocomplete(options2);


/* 
$(function() 
    {
            $("#movieid").autocomplete({
                    source : function(request, response) {
                            $.ajax({
                                    url : "http://localhost:8080/api/v1/movieSearch",
                                    dataType : "json",
                                    data : {
                                            q : request.term
                                    },
                                    success : function(data) {
                                              var transformed = $.map(data, function (el) {
                                                return {
                                                    label: el.name,
                                                    value: el.name,
                                                    id: el.id,
                                                    starttime: el.starttime,
                                                    stock:el.stock
                                                };
                                            });
                                            response(transformed);
                                    }
                            });
                    },
                          
                    minLength : 2,
                    
                    select: function( event, ui ) {
                        $( "#moviename" ).val( ui.item.label );
                        $( "#movietime" ).val( ui.item.starttime );
                        $( "#movieidhidden" ).val( ui.item.id );
                        $( "#moviestockhidden" ).val( ui.item.stock );
                        
                        return false;
                    }
                    
            });
    });
 * 
 */