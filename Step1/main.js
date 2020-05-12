$( document ).ready(function() {
    console.log( "ready!" );

    $.ajax({
        url: 'server.php',
        success: function(dataJasonfromServer){

          /* -- generate random lables -- */
          /*function generateRandomLables(data, arrayName){
            for (var i = 0; i < data.length; i++) {
              // Generate random names from chance library
              var randomLabel = chance.name({ nationality: 'it' });
              // push into array
              arrayName.push(randomLabel);
            }
          }
          // recall the function
          var labels =[];
          generateRandomLables(dataJasonfromServer, labels);*/

          /* generate month name [NOT NECESSARY]*/
          /*var labels = moment().month(i).format("MMMM");
          for (var i = 0; i < dataJasonfromServer.length; i++) {
            var month = moment().month(i).format("MMMM");
            labels.push(month);
          }*/
          var labels = moment.months();



          /* ---- chart js ---- */
          var ctx = $('#canvas');
          var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Vendite',
                    data: dataJasonfromServer,
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
          /* ---- / chart js ---- */

        }, // /success
        error: function(richiesta,stato,error){
          $('main .container').html('Spiacenti, si è verificato un errore!')
        }, // /error
      }); // /ajax







}); // doc ready
