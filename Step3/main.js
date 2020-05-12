$( document ).ready(function() {
    console.log( "ready!" );


    /* FUNCTION for AJAX 1 e 2 ==============================================*/
    function printChart(idCanvasSelector, chartType, lables, data){

      var ctx = idCanvasSelector;
      var myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: lables,
            datasets: [{
                label: 'Vendite',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }, // /data
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        } // /options
      }); // /myChart

    }// /printChart


    /* AJAX 1 ============================================== */
    function ajax1(){
      $.ajax({
          url: 'server.php/?',
          data:{
            'level': 'guest',
          },

          success: function(dataJasonfromServer){
            printChart($('#canvasLine'), 'line', moment.months(), dataJasonfromServer.data);
          }, // /success

          error: function(richiesta,stato,error){
            $('main .container').html('Spiacenti, si è verificato un errore!');
          }, // /error

        }); /* /ajax 1 ====*/
    }



    /* AJAX 2 ============================================== */
    function ajax2(){
      $.ajax({
        url: 'server.php/?',
        data:{
          'level': 'employee',
        },

          success: function(dataJasonfromServer){
            printChart($('#canvasPie'), 'pie', dataJasonfromServer.fatturato_by_agent.lables, dataJasonfromServer.fatturato_by_agent.data);
          }, // /success

          error: function(richiesta,stato,error){
            $('main .container').html('Spiacenti, si è verificato un errore!');
          }, // /error

        });  /* /ajax 2 ====*/
    }



    /* AJAX 3 ============================================== */
    function ajax3(){
      $.ajax({
        url: 'server.php/?',
        data:{
          'level': 'clevel',
        },

          success: function(dataJasonfromServer){

            var ctx = $('#canvasMultiLine');
            var myChart = new Chart(ctx, {
              type: 'line',
              data: {
                  labels: moment.months(),
                  datasets: [{
                    // team 1 ------------------------------------
                      label: dataJasonfromServer.team_efficiency.lables[0],
                      data: dataJasonfromServer.team_efficiency.data[0],
                      backgroundColor: ['rgba(255, 99, 132, 0.4)'],
                      borderColor: ['rgba(255, 99, 132, 1)'],
                      borderWidth: 1
                    },
                    {
                    // team 2 ------------------------------------
                      label: dataJasonfromServer.team_efficiency.lables[1],
                      data: dataJasonfromServer.team_efficiency.data[1],
                      backgroundColor: ['rgba(54, 162, 235, 0.4)'],
                      borderColor: ['rgba(54, 162, 235, 1)'],
                      borderWidth: 1
                    },
                    {
                    // team 3 ------------------------------------
                      label: dataJasonfromServer.team_efficiency.lables[2],
                      data: dataJasonfromServer.team_efficiency.data[2],
                      backgroundColor: ['rgba(255, 206, 86, 0.6)'],
                      borderColor: ['rgba(255, 206, 86, 1)'],
                      borderWidth: 1
                    }
                  ]
              }, // /data
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero: true
                          }
                      }]
                  }
              } // /options
            }); // /myChart

          }, // /success

          error: function(richiesta,stato,error){
            $('main .container').html('Spiacenti, si è verificato un errore!');
          }, // /error

        });  /* /ajax 3 ====*/
    }


    /* GET INPUT VAL AND DO SOMETHING ============*/
    $('.box button').click(
      function(){
        var inputVal = $('.inputLevel').val(); //get input va
        $('.inputLevel').val(''); //clear input

        if (inputVal === 'guest') {
          $('canvas').show();
          ajax1();
          $('#canvasPie').hide();
          $('#canvasMultiLine').hide();
        } else if (inputVal === 'employee') {
          $('canvas').show();
          ajax1();
          ajax2();
          $('#canvasMultiLine').toggle();
        }  else if (inputVal === 'clevel') {
          $('canvas').show();
          ajax1();
          ajax2();
          ajax3();
        }// fine ifelse

      } // fine function
    );// fine click

}); // doc ready
