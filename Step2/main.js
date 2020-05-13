$( document ).ready(function() {
    console.log( "ready!" );
    /* FUNCTION ==============================================*/

    // var idCanvasSelector = $('#canvasLine') / $('#canvasPie')
    // var chartType = 'line' / 'pie'
    // var lables = moment.months() / dataJasonfromServer.fatturato_by_agent.lables
    // var data = dataJasonfromServer.fatturato.data / dataJasonfromServer.fatturato_by_agent.data

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



    /* AJAX  ============================================== */
    $.ajax({
        url: 'server.php',

        success: function(dataJasonfromServer){
          printChart($('#canvasLine'), dataJasonfromServer.fatturato.type, moment.months(), dataJasonfromServer.fatturato.data);
          printChart($('#canvasPie'), dataJasonfromServer.fatturato_by_agent.type, dataJasonfromServer.fatturato_by_agent.lables, dataJasonfromServer.fatturato_by_agent.data);
        }, // /success

        error: function(richiesta,stato,error){
          $('main .container').html('Spiacenti, si è verificato un errore!');
        }, // /error

      }); // /ajax 1

}); // doc ready
