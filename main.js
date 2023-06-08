

     $('#Box2').hide()
     $('#Box3').hide()
     $('#Box4').hide()
     $('#Box5').hide()
     $('#Box6').hide()
     $('#Box7').hide()

       
       const btn = document.querySelector('#plus')
       const btn2= document.querySelector('#plus2')
       const btn3 = document.querySelector('#plus3')
       const btn4 = document.querySelector('#plus4')
       const btn5= document.querySelector('#plus5')
       const btn6= document.querySelector('#plus6')
     
       rotate = 45


        $(document).ready(
          function (){
                $("#plus").click(function(){
                        $('#Box2').slideToggle();
                        $('#Box3').slideUp();
                        $('#Box4').slideUp();
                        $('#Box5').slideUp();
                        $('#Box6').slideUp();
                        $('#Box5').slideUp();
                        $('#Box7').slideUp();
                       
                        
                })
          }
        )
        $(document).ready(
                function (){
                      $("#plus2").click(function(){
                              $('#Box3').slideToggle();
                              $('#Box2').slideUp();
                              $('#Box4').slideUp();
                              $('#Box5').slideUp();
                              $('#Box6').slideUp();
                              $('#Box7').slideUp();
              
                      })
                }
              )
              
        $(document).ready(
                function (){
                      $("#plus3").click(function(){
                              $('#Box4').slideToggle();
                              $('#Box3').slideUp();
                              $('#Box2').slideUp();
                              $('#Box5').slideUp();
                              $('#Box7').slideUp();
                              $('#Box6').slideUp();
                              
               
                      })
                }
              )
              
              
                
              $(document).ready(
                function (){
                      $("#plus4").click(function(){
                              $('#Box4').slideUp();
                              $('#Box3').slideUp();
                              $('#Box2').slideUp();
                              $('#Box7').slideUp();
                              $('#Box6').slideUp();
                              $('#Box5').slideToggle();
                              
              
                      })
                }
              )
              
                 
              $(document).ready(
                function (){
                      $("#plus5").click(function(){
                              $('#Box4').slideUp();
                              $('#Box3').slideUp();
                              $('#Box2').slideUp();
                              $('#Box5').slideUp();
                              $('#Box7').slideUp();
                              $('#Box6').slideToggle();
               
                      })
                }
              )
                 
              $(document).ready(
                function (){
                      $("#plus6").click(function(){
                              $('#Box4').slideUp();
                              $('#Box3').slideUp();
                              $('#Box2').slideUp();
                              $('#Box5').slideUp();
                              $('#Box6').slideUp();
                              $('#Box7').slideToggle();
                              
          
                      })
                }
              )
              


