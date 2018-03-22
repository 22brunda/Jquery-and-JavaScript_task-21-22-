$(document).ready(function(){

        $("#backpage").hide();
        $("#submit").click(function(){
          
          $("#frontpage").hide();
          $("#backpage").show();
        });

        $("#get").click(function(){
          $("#backpage").hide();
          $("#frontpage").show();
        });

        $("#submit").click(function () {

            var total=0;

            $(':checkbox:checked.demo').each(function () {
                debugger;
                total = total + parseInt(this.value);
                 
            });


       $("#demo").text(total);
        });

        $('#btn').click(function () { 
              $('input[type=checkbox]').click(); 
              this.checked = !this.checked;
            });

             $("#select").click(function () {
                $(".demo").each(function(){
        
                this.checked = true;

              });
            });

             $("#unselect").click(function () {
                $(".demo").each(function(){
              
                this.checked = false;
              });
            });


    });
