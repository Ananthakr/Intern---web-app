window.onload =function(){
    google.charts.load('current',{packages:["corechart"]});
    google.charts.setOnLoadCallback(fillsalesTable);
    // fillsalesTable();
}
function fillsalesTable(){
    var dataarray=[];
    var temparray =['Brand','Sales'];
    dataarray.push(temparray);
    salesdata ='{"SalesList":[' +
        '{"Brand" : "BMW" ,"Sales":"22.5"}' +
        '{"Brand" : "Mercedez" ,"Sales":"50"}' +
        '{"Brand" : "Audi" ,"Sales":"32.5"}' +
        '{"Brand" : "Ford" ,"Sales":"18"}' +
        '{"Brand" : "Toyota" ,"Sales":"20"}' +
        '{"Brand" : "Chevi" ,"Sales":"10"}' +
        '{"Brand" : "Jaguar" ,"Sales":"15"}' +
        '{"Brand" : "Ferrari" ,"Sales":"12"}' +
        '{"Brand" : "RR" ,"Sales":"5"}]}';
var obj = JSON.parse(salesdata);
var table = document.getElementById("salestable");
var tableRef = table.getElementsByTagName('tbody')[0];

$(obj.SalesList).each(function(index,value){
    var row = tableRef.insertRow(tableRef.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = value.Brand;
    cell2.innerHTML = value.Sales;

    dataarray.push([value.Brand,parseInt(value.Sales)]);

});
drawchart(dataarray);

}
function drawchart(dataarray){
    var data = google.visualization.arrayToDataTable(dataarray);
    var options ={
        title: 'Sales Analysis',
        is3D : true,
        backgroundColor : '#CCCCFF',
        fontSize: 10,
        chartArea : {left:10,top:40,width:'100%',heigth:'100%'}
    };
        var chart= new google.visualization.PieChart(document.getElementById('piechartarea'));
        chart.draw(data,option);
}

