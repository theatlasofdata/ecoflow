<!-- python3 -m http.server, localhost: -->
<!DOCTYPE html>
<html lang="en">
  <meta charset="utf-8">
  <header><title>globe first try</title></header>
  <style>
    body{margin:0;}
    canvas{width:100%;height:100%}
  </style>
  <body>
    <!-- <script src="https://webglfundamentals.org/webgl/resources/webgl-utils.js"></script> -->
    <!-- <script src="http://api.geodab.eu/download/giapi/lib/min/giapi.min.js"></script> -->
    <!-- <script src="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"></script> -->
    <script src="https://threejs.org/build/three.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <div id="container"></div>
    <script type="text/javascript">
      
      <!-- <\!-- <\\!-- jQuery.crossOrigin=""; -\\-> -\-> -->
      <!-- <\!-- <\\!-- jQuery.getJSON("http://stats.oecd.org/sdmx-json/data/QNA/AUS+CAN.GDP+B1_GE.CUR+VOBARSA.Q/all?startTime=2010-M1&endTime=2017-M12",function(data){ -\\-> -\-> -->
      <!-- <\!-- jQuery.getJSON("http://stats.oecd.org/sdmx-json/data/QNA/AUS+CAN.GDP+B1_GE.CUR+VOBARSA.Q/all?startTime=2010-Q1&endTime=2017-Q1",function(data){ -\-> -->
      <!-- <\!-- <\\!-- jQuery.getJSON("http://stats.oecd.org/restsdmx/sdmx.ashx/GetData/QNA/AUS+CAN.GDP+B1_GE.CUR+VOBARSA.Q/all?startTime=2010-M1&endTime=2017-M12&format=compact_v2",function(data){ -\\-> -\-> -->
      <!-- <\!-- console.log(data); -\-> -->
      <!-- <\!-- console.log(data.getElementById('links')); -\-> -->
      <!-- <\!-- } -\-> -->
      <!-- <\!-- ); -\-> -->
      <!-- <\!-- jQuery.getJSON("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=climate&field=title&datatype=pdat&mindate=2010/01/01&maxdate=2017/01/01&ad=china&retmode=json",function(data){ -\-> -->
      <!-- jQuery.getJSON("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&term=climate&field=title&datatype=pdat&mindate=2010&maxdate=2017&retmode=json",function(data){ -->
      <!-- jQuery.each(data,function(index,value){ -->
      <!-- console.log(index); -->
      <!-- console.log(value); -->
      <!-- }) -->
      <!-- }); -->
      
      console.clear();
      
      <!-- graph of the pudmed -->
      var data_graph_pubmed;
      jQuery.getJSON("http://localhost:8000/climate/climate.json",function(data){console.log(data);data_graph_pubmed=data;});
      setTimeout(function(){},3000);
      console.log(data_graph_pubmed);

      <!-- var data_graph_pubmed={"links": [{"source": 0, "time": 2012, "value": 1, "target": 1}, {"source": 0, "time": 2015, "value": 3, "target": 1}, {"source": 0, "time": 2012, "value": 6, "target": 2}, {"source": 0, "time": 2015, "value": 27, "target": 2}, {"source": 0, "time": 2012, "value": 3, "target": 3}, {"source": 0, "time": 2015, "value": 7, "target": 3}, {"source": 0, "time": 2012, "value": 3, "target": 4}, {"source": 0, "time": 2015, "value": 10, "target": 4}, {"source": 0, "time": 2012, "value": 3, "target": 5}, {"source": 0, "time": 2015, "value": 8, "target": 5}, {"source": 0, "time": 2012, "value": 1, "target": 6}, {"source": 0, "time": 2015, "value": 3, "target": 6}, {"source": 0, "time": 2012, "value": 4, "target": 7}, {"source": 0, "time": 2015, "value": 6, "target": 7}, {"source": 0, "time": 2012, "value": 1, "target": 8}, {"source": 0, "time": 2015, "value": 3, "target": 8}, {"source": 0, "time": 2012, "value": 4, "target": 9}, {"source": 0, "time": 2015, "value": 19, "target": 9}, {"source": 0, "time": 2003, "value": 1, "target": 10}, {"source": 0, "time": 2006, "value": 2, "target": 10}, {"source": 0, "time": 2012, "value": 3, "target": 10}, {"source": 0, "time": 2015, "value": 14, "target": 10}, {"source": 0, "time": 2015, "value": 3, "target": 12}, {"source": 0, "time": 2012, "value": 1, "target": 13}, {"source": 0, "time": 2015, "value": 1, "target": 13}, {"source": 0, "time": 2012, "value": 2, "target": 15}, {"source": 0, "time": 2015, "value": 6, "target": 15}, {"source": 0, "time": 2012, "value": 4, "target": 16}, {"source": 0, "time": 2015, "value": 6, "target": 16}, {"source": 0, "time": 2012, "value": 2, "target": 18}, {"source": 0, "time": 2015, "value": 10, "target": 18}, {"source": 0, "time": 2012, "value": 1, "target": 19}, {"source": 0, "time": 2015, "value": 2, "target": 19}, {"source": 0, "time": 2012, "value": 5, "target": 20}, {"source": 0, "time": 2015, "value": 7, "target": 20}, {"source": 0, "time": 2012, "value": 8, "target": 21}, {"source": 0, "time": 2015, "value": 26, "target": 21}, {"source": 1, "time": 2012, "value": 3, "target": 2}, {"source": 1, "time": 2015, "value": 10, "target": 2}, {"source": 1, "time": 2012, "value": 3, "target": 3}, {"source": 1, "time": 2015, "value": 5, "target": 3}, {"source": 1, "time": 2012, "value": 3, "target": 4}, {"source": 1, "time": 2015, "value": 7, "target": 4}, {"source": 1, "time": 2012, "value": 1, "target": 5}, {"source": 1, "time": 2015, "value": 2, "target": 5}, {"source": 1, "time": 2015, "value": 1, "target": 6}, {"source": 1, "time": 2012, "value": 1, "target": 7}, {"source": 1, "time": 2015, "value": 3, "target": 7}, {"source": 1, "time": 2012, "value": 1, "target": 8}, {"source": 1, "time": 2015, "value": 1, "target": 8}, {"source": 1, "time": 2012, "value": 3, "target": 9}, {"source": 1, "time": 2015, "value": 8, "target": 9}, {"source": 1, "time": 2012, "value": 2, "target": 10}, {"source": 1, "time": 2015, "value": 6, "target": 10}, {"source": 1, "time": 2012, "value": 1, "target": 13}, {"source": 1, "time": 2015, "value": 1, "target": 13}, {"source": 1, "time": 2012, "value": 2, "target": 14}, {"source": 1, "time": 2015, "value": 2, "target": 14}, {"source": 1, "time": 2012, "value": 1, "target": 15}, {"source": 1, "time": 2015, "value": 2, "target": 15}, {"source": 1, "time": 2012, "value": 3, "target": 16}, {"source": 1, "time": 2015, "value": 3, "target": 16}, {"source": 1, "time": 2012, "value": 1, "target": 17}, {"source": 1, "time": 2015, "value": 4, "target": 17}, {"source": 1, "time": 2015, "value": 1, "target": 18}, {"source": 1, "time": 2012, "value": 4, "target": 20}, {"source": 1, "time": 2015, "value": 8, "target": 20}, {"source": 1, "time": 2012, "value": 6, "target": 21}, {"source": 1, "time": 2015, "value": 12, "target": 21}, {"source": 2, "time": 2012, "value": 6, "target": 3}, {"source": 2, "time": 2015, "value": 20, "target": 3}, {"source": 2, "time": 2012, "value": 12, "target": 4}, {"source": 2, "time": 2015, "value": 41, "target": 4}, {"source": 2, "time": 2012, "value": 34, "target": 5}, {"source": 2, "time": 2015, "value": 69, "target": 5}, {"source": 2, "time": 2012, "value": 1, "target": 6}, {"source": 2, "time": 2015, "value": 2, "target": 6}, {"source": 2, "time": 2009, "value": 1, "target": 7}, {"source": 2, "time": 2012, "value": 5, "target": 7}, {"source": 2, "time": 2015, "value": 15, "target": 7}, {"source": 2, "time": 2012, "value": 4, "target": 8}, {"source": 2, "time": 2015, "value": 6, "target": 8}, {"source": 2, "time": 2009, "value": 1, "target": 9}, {"source": 2, "time": 2012, "value": 15, "target": 9}, {"source": 2, "time": 2015, "value": 37, "target": 9}, {"source": 2, "time": 2012, "value": 19, "target": 10}, {"source": 2, "time": 2015, "value": 46, "target": 10}, {"source": 2, "time": 2012, "value": 5, "target": 12}, {"source": 2, "time": 2015, "value": 7, "target": 12}, {"source": 2, "time": 2012, "value": 2, "target": 13}, {"source": 2, "time": 2015, "value": 3, "target": 13}, {"source": 2, "time": 2012, "value": 3, "target": 14}, {"source": 2, "time": 2015, "value": 4, "target": 14}, {"source": 2, "time": 2012, "value": 8, "target": 15}, {"source": 2, "time": 2015, "value": 14, "target": 15}, {"source": 2, "time": 2012, "value": 13, "target": 16}, {"source": 2, "time": 2015, "value": 25, "target": 16}, {"source": 2, "time": 2012, "value": 4, "target": 17}, {"source": 2, "time": 2015, "value": 8, "target": 17}, {"source": 2, "time": 2012, "value": 9, "target": 18}, {"source": 2, "time": 2015, "value": 26, "target": 18}, {"source": 2, "time": 2015, "value": 2, "target": 19}, {"source": 2, "time": 2009, "value": 1, "target": 20}, {"source": 2, "time": 2012, "value": 16, "target": 20}, {"source": 2, "time": 2015, "value": 25, "target": 20}, {"source": 2, "time": 1997, "value": 1, "target": 21}, {"source": 2, "time": 2000, "value": 1, "target": 21}, {"source": 2, "time": 2009, "value": 2, "target": 21}, {"source": 2, "time": 2012, "value": 37, "target": 21}, {"source": 2, "time": 2015, "value": 102, "target": 21}, {"source": 3, "time": 1994, "value": 1, "target": 4}, {"source": 3, "time": 2012, "value": 4, "target": 4}, {"source": 3, "time": 2015, "value": 15, "target": 4}, {"source": 3, "time": 2012, "value": 5, "target": 5}, {"source": 3, "time": 2015, "value": 11, "target": 5}, {"source": 3, "time": 2012, "value": 4, "target": 6}, {"source": 3, "time": 2015, "value": 6, "target": 6}, {"source": 3, "time": 2012, "value": 4, "target": 7}, {"source": 3, "time": 2015, "value": 5, "target": 7}, {"source": 3, "time": 2012, "value": 1, "target": 8}, {"source": 3, "time": 2015, "value": 7, "target": 8}, {"source": 3, "time": 2012, "value": 8, "target": 9}, {"source": 3, "time": 2015, "value": 14, "target": 9}, {"source": 3, "time": 2012, "value": 9, "target": 10}, {"source": 3, "time": 2015, "value": 13, "target": 10}, {"source": 3, "time": 2012, "value": 3, "target": 12}, {"source": 3, "time": 2015, "value": 4, "target": 12}, {"source": 3, "time": 2012, "value": 1, "target": 14}, {"source": 3, "time": 2015, "value": 1, "target": 14}, {"source": 3, "time": 2012, "value": 6, "target": 15}, {"source": 3, "time": 2015, "value": 9, "target": 15}, {"source": 3, "time": 2012, "value": 6, "target": 16}, {"source": 3, "time": 2015, "value": 9, "target": 16}, {"source": 3, "time": 2012, "value": 2, "target": 17}, {"source": 3, "time": 2015, "value": 9, "target": 17}, {"source": 3, "time": 2012, "value": 1, "target": 18}, {"source": 3, "time": 2015, "value": 5, "target": 18}, {"source": 3, "time": 2012, "value": 1, "target": 19}, {"source": 3, "time": 2012, "value": 5, "target": 20}, {"source": 3, "time": 2015, "value": 12, "target": 20}, {"source": 3, "time": 1994, "value": 1, "target": 21}, {"source": 3, "time": 1997, "value": 1, "target": 21}, {"source": 3, "time": 2012, "value": 13, "target": 21}, {"source": 3, "time": 2015, "value": 36, "target": 21}, {"source": 4, "time": 2012, "value": 18, "target": 5}, {"source": 4, "time": 2015, "value": 40, "target": 5}, {"source": 4, "time": 2012, "value": 2, "target": 6}, {"source": 4, "time": 2015, "value": 4, "target": 6}, {"source": 4, "time": 2012, "value": 11, "target": 7}, {"source": 4, "time": 2015, "value": 12, "target": 7}, {"source": 4, "time": 2012, "value": 6, "target": 8}, {"source": 4, "time": 2015, "value": 13, "target": 8}, {"source": 4, "time": 2012, "value": 16, "target": 9}, {"source": 4, "time": 2015, "value": 34, "target": 9}, {"source": 4, "time": 2012, "value": 20, "target": 10}, {"source": 4, "time": 2015, "value": 45, "target": 10}, {"source": 4, "time": 2012, "value": 1, "target": 11}, {"source": 4, "time": 2012, "value": 1, "target": 12}, {"source": 4, "time": 2015, "value": 4, "target": 12}, {"source": 4, "time": 2012, "value": 1, "target": 13}, {"source": 4, "time": 2015, "value": 4, "target": 13}, {"source": 4, "time": 2012, "value": 4, "target": 14}, {"source": 4, "time": 2015, "value": 4, "target": 14}, {"source": 4, "time": 2012, "value": 8, "target": 15}, {"source": 4, "time": 2015, "value": 9, "target": 15}, {"source": 4, "time": 2012, "value": 4, "target": 16}, {"source": 4, "time": 2015, "value": 9, "target": 16}, {"source": 4, "time": 2012, "value": 5, "target": 17}, {"source": 4, "time": 2015, "value": 10, "target": 17}, {"source": 4, "time": 2012, "value": 5, "target": 18}, {"source": 4, "time": 2015, "value": 17, "target": 18}, {"source": 4, "time": 2012, "value": 4, "target": 19}, {"source": 4, "time": 2015, "value": 8, "target": 19}, {"source": 4, "time": 2009, "value": 1, "target": 20}, {"source": 4, "time": 2012, "value": 6, "target": 20}, {"source": 4, "time": 2015, "value": 18, "target": 20}, {"source": 4, "time": 1994, "value": 1, "target": 21}, {"source": 4, "time": 1997, "value": 2, "target": 21}, {"source": 4, "time": 2006, "value": 2, "target": 21}, {"source": 4, "time": 2009, "value": 3, "target": 21}, {"source": 4, "time": 2012, "value": 42, "target": 21}, {"source": 4, "time": 2015, "value": 109, "target": 21}, {"source": 5, "time": 2012, "value": 8, "target": 7}, {"source": 5, "time": 2015, "value": 17, "target": 7}, {"source": 5, "time": 2012, "value": 5, "target": 8}, {"source": 5, "time": 2015, "value": 14, "target": 8}, {"source": 5, "time": 2012, "value": 7, "target": 9}, {"source": 5, "time": 2015, "value": 29, "target": 9}, {"source": 5, "time": 2012, "value": 14, "target": 10}, {"source": 5, "time": 2015, "value": 42, "target": 10}, {"source": 5, "time": 2012, "value": 3, "target": 12}, {"source": 5, "time": 2015, "value": 5, "target": 12}, {"source": 5, "time": 2012, "value": 1, "target": 13}, {"source": 5, "time": 2015, "value": 4, "target": 13}, {"source": 5, "time": 2012, "value": 1, "target": 14}, {"source": 5, "time": 2015, "value": 2, "target": 14}, {"source": 5, "time": 2012, "value": 5, "target": 15}, {"source": 5, "time": 2015, "value": 10, "target": 15}, {"source": 5, "time": 2012, "value": 8, "target": 16}, {"source": 5, "time": 2015, "value": 22, "target": 16}, {"source": 5, "time": 2012, "value": 4, "target": 17}, {"source": 5, "time": 2015, "value": 5, "target": 17}, {"source": 5, "time": 2012, "value": 3, "target": 18}, {"source": 5, "time": 2015, "value": 13, "target": 18}, {"source": 5, "time": 2012, "value": 3, "target": 19}, {"source": 5, "time": 2015, "value": 8, "target": 19}, {"source": 5, "time": 2012, "value": 1, "target": 20}, {"source": 5, "time": 2015, "value": 15, "target": 20}, {"source": 5, "time": 2012, "value": 58, "target": 21}, {"source": 5, "time": 2015, "value": 156, "target": 21}, {"source": 6, "time": 2012, "value": 1, "target": 7}, {"source": 6, "time": 2015, "value": 2, "target": 7}, {"source": 6, "time": 2012, "value": 1, "target": 9}, {"source": 6, "time": 2015, "value": 3, "target": 9}, {"source": 6, "time": 2012, "value": 2, "target": 10}, {"source": 6, "time": 2015, "value": 8, "target": 10}, {"source": 6, "time": 2015, "value": 1, "target": 12}, {"source": 6, "time": 2012, "value": 1, "target": 15}, {"source": 6, "time": 2015, "value": 1, "target": 15}, {"source": 6, "time": 2012, "value": 1, "target": 17}, {"source": 6, "time": 2015, "value": 2, "target": 17}, {"source": 6, "time": 2012, "value": 1, "target": 18}, {"source": 6, "time": 2015, "value": 2, "target": 18}, {"source": 6, "time": 2012, "value": 1, "target": 20}, {"source": 6, "time": 2015, "value": 4, "target": 20}, {"source": 6, "time": 2012, "value": 3, "target": 21}, {"source": 6, "time": 2015, "value": 8, "target": 21}, {"source": 7, "time": 2012, "value": 8, "target": 8}, {"source": 7, "time": 2015, "value": 10, "target": 8}, {"source": 7, "time": 2009, "value": 1, "target": 9}, {"source": 7, "time": 2012, "value": 14, "target": 9}, {"source": 7, "time": 2015, "value": 25, "target": 9}, {"source": 7, "time": 2012, "value": 14, "target": 10}, {"source": 7, "time": 2015, "value": 29, "target": 10}, {"source": 7, "time": 2012, "value": 1, "target": 11}, {"source": 7, "time": 2015, "value": 3, "target": 11}, {"source": 7, "time": 2015, "value": 1, "target": 14}, {"source": 7, "time": 2012, "value": 8, "target": 15}, {"source": 7, "time": 2015, "value": 13, "target": 15}, {"source": 7, "time": 2012, "value": 2, "target": 16}, {"source": 7, "time": 2015, "value": 1, "target": 16}, {"source": 7, "time": 2015, "value": 2, "target": 17}, {"source": 7, "time": 2012, "value": 7, "target": 18}, {"source": 7, "time": 2015, "value": 17, "target": 18}, {"source": 7, "time": 2012, "value": 3, "target": 19}, {"source": 7, "time": 2015, "value": 2, "target": 19}, {"source": 7, "time": 2009, "value": 1, "target": 20}, {"source": 7, "time": 2012, "value": 12, "target": 20}, {"source": 7, "time": 2015, "value": 19, "target": 20}, {"source": 7, "time": 2012, "value": 17, "target": 21}, {"source": 7, "time": 2015, "value": 42, "target": 21}, {"source": 8, "time": 2012, "value": 7, "target": 9}, {"source": 8, "time": 2015, "value": 15, "target": 9}, {"source": 8, "time": 2012, "value": 8, "target": 10}, {"source": 8, "time": 2015, "value": 26, "target": 10}, {"source": 8, "time": 2012, "value": 1, "target": 12}, {"source": 8, "time": 2012, "value": 1, "target": 13}, {"source": 8, "time": 2015, "value": 2, "target": 13}, {"source": 8, "time": 2012, "value": 1, "target": 14}, {"source": 8, "time": 2015, "value": 1, "target": 14}, {"source": 8, "time": 2012, "value": 5, "target": 15}, {"source": 8, "time": 2015, "value": 16, "target": 15}, {"source": 8, "time": 2012, "value": 1, "target": 16}, {"source": 8, "time": 2015, "value": 4, "target": 16}, {"source": 8, "time": 2012, "value": 1, "target": 17}, {"source": 8, "time": 2015, "value": 3, "target": 17}, {"source": 8, "time": 2012, "value": 6, "target": 18}, {"source": 8, "time": 2015, "value": 17, "target": 18}, {"source": 8, "time": 2012, "value": 1, "target": 19}, {"source": 8, "time": 2015, "value": 6, "target": 19}, {"source": 8, "time": 2012, "value": 7, "target": 20}, {"source": 8, "time": 2015, "value": 13, "target": 20}, {"source": 8, "time": 2012, "value": 8, "target": 21}, {"source": 8, "time": 2015, "value": 18, "target": 21}, {"source": 9, "time": 1997, "value": 1, "target": 10}, {"source": 9, "time": 2012, "value": 22, "target": 10}, {"source": 9, "time": 2015, "value": 75, "target": 10}, {"source": 9, "time": 2015, "value": 1, "target": 11}, {"source": 9, "time": 2012, "value": 1, "target": 12}, {"source": 9, "time": 2015, "value": 2, "target": 12}, {"source": 9, "time": 2015, "value": 3, "target": 13}, {"source": 9, "time": 2012, "value": 1, "target": 14}, {"source": 9, "time": 2015, "value": 5, "target": 14}, {"source": 9, "time": 2012, "value": 19, "target": 15}, {"source": 9, "time": 2015, "value": 38, "target": 15}, {"source": 9, "time": 2012, "value": 5, "target": 16}, {"source": 9, "time": 2015, "value": 10, "target": 16}, {"source": 9, "time": 2012, "value": 3, "target": 17}, {"source": 9, "time": 2015, "value": 9, "target": 17}, {"source": 9, "time": 2012, "value": 13, "target": 18}, {"source": 9, "time": 2015, "value": 25, "target": 18}, {"source": 9, "time": 2015, "value": 4, "target": 19}, {"source": 9, "time": 2003, "value": 1, "target": 20}, {"source": 9, "time": 2009, "value": 2, "target": 20}, {"source": 9, "time": 2012, "value": 21, "target": 20}, {"source": 9, "time": 2015, "value": 46, "target": 20}, {"source": 9, "time": 2009, "value": 2, "target": 21}, {"source": 9, "time": 2012, "value": 29, "target": 21}, {"source": 9, "time": 2015, "value": 74, "target": 21}, {"source": 10, "time": 2015, "value": 1, "target": 11}, {"source": 10, "time": 2012, "value": 5, "target": 12}, {"source": 10, "time": 2015, "value": 7, "target": 12}, {"source": 10, "time": 2015, "value": 2, "target": 13}, {"source": 10, "time": 2012, "value": 2, "target": 14}, {"source": 10, "time": 2015, "value": 8, "target": 14}, {"source": 10, "time": 2012, "value": 22, "target": 15}, {"source": 10, "time": 2015, "value": 46, "target": 15}, {"source": 10, "time": 2009, "value": 1, "target": 16}, {"source": 10, "time": 2012, "value": 9, "target": 16}, {"source": 10, "time": 2015, "value": 17, "target": 16}, {"source": 10, "time": 2012, "value": 5, "target": 17}, {"source": 10, "time": 2015, "value": 16, "target": 17}, {"source": 10, "time": 2009, "value": 1, "target": 18}, {"source": 10, "time": 2012, "value": 18, "target": 18}, {"source": 10, "time": 2015, "value": 56, "target": 18}, {"source": 10, "time": 2012, "value": 5, "target": 19}, {"source": 10, "time": 2015, "value": 18, "target": 19}, {"source": 10, "time": 2012, "value": 20, "target": 20}, {"source": 10, "time": 2015, "value": 49, "target": 20}, {"source": 10, "time": 2012, "value": 32, "target": 21}, {"source": 10, "time": 2015, "value": 93, "target": 21}, {"source": 11, "time": 2015, "value": 1, "target": 15}, {"source": 11, "time": 2015, "value": 1, "target": 20}, {"source": 11, "time": 2012, "value": 1, "target": 21}, {"source": 11, "time": 2015, "value": 2, "target": 21}, {"source": 12, "time": 2015, "value": 1, "target": 13}, {"source": 12, "time": 2015, "value": 1, "target": 14}, {"source": 12, "time": 2012, "value": 3, "target": 15}, {"source": 12, "time": 2015, "value": 4, "target": 15}, {"source": 12, "time": 2012, "value": 4, "target": 16}, {"source": 12, "time": 2015, "value": 4, "target": 16}, {"source": 12, "time": 2012, "value": 1, "target": 17}, {"source": 12, "time": 2015, "value": 3, "target": 17}, {"source": 12, "time": 2012, "value": 2, "target": 18}, {"source": 12, "time": 2015, "value": 2, "target": 18}, {"source": 12, "time": 2015, "value": 1, "target": 19}, {"source": 12, "time": 2012, "value": 2, "target": 20}, {"source": 12, "time": 2015, "value": 3, "target": 20}, {"source": 12, "time": 1997, "value": 1, "target": 21}, {"source": 12, "time": 2012, "value": 5, "target": 21}, {"source": 12, "time": 2015, "value": 15, "target": 21}, {"source": 13, "time": 2012, "value": 1, "target": 14}, {"source": 13, "time": 2015, "value": 1, "target": 14}, {"source": 13, "time": 2015, "value": 3, "target": 15}, {"source": 13, "time": 2015, "value": 1, "target": 17}, {"source": 13, "time": 2015, "value": 1, "target": 19}, {"source": 13, "time": 2012, "value": 1, "target": 20}, {"source": 13, "time": 2015, "value": 2, "target": 20}, {"source": 13, "time": 2012, "value": 2, "target": 21}, {"source": 13, "time": 2015, "value": 4, "target": 21}, {"source": 14, "time": 2012, "value": 1, "target": 15}, {"source": 14, "time": 2015, "value": 3, "target": 15}, {"source": 14, "time": 2012, "value": 1, "target": 16}, {"source": 14, "time": 2015, "value": 1, "target": 16}, {"source": 14, "time": 2012, "value": 1, "target": 17}, {"source": 14, "time": 2015, "value": 1, "target": 17}, {"source": 14, "time": 2012, "value": 1, "target": 18}, {"source": 14, "time": 2015, "value": 3, "target": 18}, {"source": 14, "time": 2012, "value": 2, "target": 20}, {"source": 14, "time": 2015, "value": 3, "target": 20}, {"source": 14, "time": 2012, "value": 8, "target": 21}, {"source": 14, "time": 2015, "value": 10, "target": 21}, {"source": 14, "time": 2009, "value": 1, "target": 23}, {"source": 15, "time": 2012, "value": 3, "target": 16}, {"source": 15, "time": 2015, "value": 7, "target": 16}, {"source": 15, "time": 2009, "value": 1, "target": 17}, {"source": 15, "time": 2012, "value": 5, "target": 17}, {"source": 15, "time": 2015, "value": 4, "target": 17}, {"source": 15, "time": 2012, "value": 10, "target": 18}, {"source": 15, "time": 2015, "value": 23, "target": 18}, {"source": 15, "time": 2009, "value": 1, "target": 19}, {"source": 15, "time": 2012, "value": 3, "target": 19}, {"source": 15, "time": 2015, "value": 4, "target": 19}, {"source": 15, "time": 2012, "value": 12, "target": 20}, {"source": 15, "time": 2015, "value": 31, "target": 20}, {"source": 15, "time": 2009, "value": 1, "target": 21}, {"source": 15, "time": 2012, "value": 14, "target": 21}, {"source": 15, "time": 2015, "value": 28, "target": 21}, {"source": 16, "time": 2012, "value": 3, "target": 17}, {"source": 16, "time": 2015, "value": 4, "target": 17}, {"source": 16, "time": 2009, "value": 1, "target": 18}, {"source": 16, "time": 2012, "value": 3, "target": 18}, {"source": 16, "time": 2015, "value": 2, "target": 18}, {"source": 16, "time": 2012, "value": 1, "target": 19}, {"source": 16, "time": 2015, "value": 2, "target": 19}, {"source": 16, "time": 2012, "value": 4, "target": 20}, {"source": 16, "time": 2015, "value": 8, "target": 20}, {"source": 16, "time": 2012, "value": 12, "target": 21}, {"source": 16, "time": 2015, "value": 29, "target": 21}, {"source": 17, "time": 2015, "value": 3, "target": 18}, {"source": 17, "time": 2015, "value": 1, "target": 19}, {"source": 17, "time": 2012, "value": 4, "target": 20}, {"source": 17, "time": 2015, "value": 9, "target": 20}, {"source": 17, "time": 1997, "value": 1, "target": 21}, {"source": 17, "time": 2000, "value": 3, "target": 21}, {"source": 17, "time": 2003, "value": 1, "target": 21}, {"source": 17, "time": 2006, "value": 2, "target": 21}, {"source": 17, "time": 2009, "value": 6, "target": 21}, {"source": 17, "time": 2012, "value": 15, "target": 21}, {"source": 17, "time": 2015, "value": 31, "target": 21}, {"source": 18, "time": 2012, "value": 3, "target": 19}, {"source": 18, "time": 2015, "value": 5, "target": 19}, {"source": 18, "time": 2012, "value": 12, "target": 20}, {"source": 18, "time": 2015, "value": 21, "target": 20}, {"source": 18, "time": 2006, "value": 1, "target": 21}, {"source": 18, "time": 2009, "value": 1, "target": 21}, {"source": 18, "time": 2012, "value": 13, "target": 21}, {"source": 18, "time": 2015, "value": 41, "target": 21}, {"source": 19, "time": 2012, "value": 3, "target": 20}, {"source": 19, "time": 2015, "value": 5, "target": 20}, {"source": 19, "time": 1997, "value": 1, "target": 21}, {"source": 19, "time": 2000, "value": 1, "target": 21}, {"source": 19, "time": 2009, "value": 1, "target": 21}, {"source": 19, "time": 2012, "value": 5, "target": 21}, {"source": 19, "time": 2015, "value": 13, "target": 21}, {"source": 20, "time": 2012, "value": 23, "target": 21}, {"source": 20, "time": 2015, "value": 49, "target": 21}], "nodes": [{"group": 0, "id": "africa"}, {"group": 1, "id": "argentina"}, {"group": 2, "id": "australia"}, {"group": 3, "id": "brazil"}, {"group": 4, "id": "canada"}, {"group": 5, "id": "china"}, {"group": 6, "id": "colombia"}, {"group": 7, "id": "denmark"}, {"group": 8, "id": "finland"}, {"group": 9, "id": "france"}, {"group": 10, "id": "germany"}, {"group": 11, "id": "iceland"}, {"group": 12, "id": "india"}, {"group": 13, "id": "iran"}, {"group": 14, "id": "israel"}, {"group": 15, "id": "italy"}, {"group": 16, "id": "japan"}, {"group": 17, "id": "mexico"}, {"group": 18, "id": "netherlands"}, {"group": 19, "id": "russia"}, {"group": 20, "id": "spain"}, {"group": 21, "id": "usa"}, {"group": 22, "id": "facebook"}, {"group": 23, "id": "google"}]}; -->
      
      var Xcamera=0.0;
      var Ycamera=0.0;
      var Zcamera=1000.0;
      var Rcamera=Math.sqrt(Xcamera*Xcamera+Ycamera*Ycamera+Zcamera*Zcamera);
      
      <!-- make render -->
      var renderer=new THREE.WebGLRenderer({antialias:true});
      var container=document.getElementById('container');
      renderer.setSize(window.innerWidth,window.innerHeight);
      container.appendChild(renderer.domElement);
      
      <!-- make scene -->
      var scene=new THREE.Scene();
      scene.background=new THREE.Color(0x000000);
      
      <!-- make camera -->
      var camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,10000);
      camera.position.set(Xcamera,Ycamera,Zcamera);
      camera.lookAt(new THREE.Vector3(0,0,0));
      scene.add(camera);
      
      <!-- make light -->
      var light=new THREE.PointLight(0xffffff);
      light.position.set(camera.position);
      light.lookAt(new THREE.Vector3(0,0,0));
      scene.add(light);

      <!-- make globe -->
      const radius=200;
      const radius0=radius/40.0;
      const segments=100;
      const rings=100;
      const segments0=10;
      const rings0=10;
      const n_points=100;
      var globe=new THREE.Group();
      <!-- Loading the world map texture -->
      var loader=new THREE.TextureLoader();
      loader.crossOrigin="";
      loader.load("https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57735/land_ocean_ice_cloud_2048.jpg",
      <!-- loader.load("https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Simple_world_map.svg/2000px-Simple_world_map.svg.png", -->
      function(texture){
      var sphere=new THREE.SphereGeometry(radius,segments,rings);
      <!-- var material=new THREE.MeshBasicMaterial({map:texture,overdraw:0.5}); -->
      var material=new THREE.MeshBasicMaterial({map:texture,wireframe:false});
      var mesh=new THREE.Mesh(sphere,material);
      globe.add(mesh);
      },
      function(error){console.log(error)}
      );
      globe.position.set(0,0,0);

      <!-- initial time -->
      var pairwize=data_graph_pubmed['links'].length;
      var min_time=3000;
      for(var i=0;i<pairwize;i++) min_time=Math.min(min_time,data_graph_pubmed['links'][i]['time']);
      var time=min_time;
      console.log(min_time);
      
      <!-- making the countries (http://www.csgnetwork.com/llinfotable.html) SOUTH:- NORTH:+ and WEST:- EAST:+ -->
      var LL={"countries":
      [
      {"id":"africa","lat":-17.43,"lon":31.02},
      {"id":"argentina","lat":-36.3,"lon":-60.0},
      {"id":"australia","lat":-35.15,"lon":149.08},
      {"id":"brazil","lat":-15.47,"lon":-47.55},
      {"id":"canada","lat":45.27,"lon":-75.42},
      {"id":"chile","lat":33.24,"lon":-70.40},
      {"id":"china","lat":39.55,"lon":116.2},
      {"id":"colombia","lat":4.34,"lon":-74.0},
      {"id":"denmark","lat":55.41,"lon":12.34},
      {"id":"finland","lat":60.15,"lon":25.03},
      {"id":"france","lat":48.5,"lon":2.2},
      {"id":"germany","lat":52.3,"lon":13.25},
      {"id":"iceland","lat":64.1,"lon":-21.57},
      {"id":"india","lat":28.37,"lon":77.13},
      {"id":"iran","lat":35.44,"lon":51.3},
      {"id":"israel","lat":31.47,"lon":35.12},
      {"id":"italy","lat":41.54,"lon":12.29},
      {"id":"japan","lat":35.41,"lon":139.46},
      {"id":"mexico","lat":19.2,"lon":-99.1},
      {"id":"netherlands","lat":52.23,"lon":4.54},
      {"id":"russia","lat":55.45,"lon":37.35},
      {"id":"spain","lat":40.25,"lon":-3.45},
      {"id":"usa","lat":39.91,"lon":-77.02},
      {"id":"facebook","lat":37.27,"lon":-122.1},
      {"id":"google","lat":37.23,"lon":-122.02}
      ]
      };
      var n_countries=LL['countries'].length;
      for(var i=0;i<n_countries;i++){
		      var LATi=0.5*Math.PI-LL['countries'][i]['lat']*Math.PI/180.0;
		      var LONi=0.5*Math.PI+LL['countries'][i]['lon']*Math.PI/180.0;<!-- I do not understand the 0.5*Math.PI but at least it works -->
		      var rC=new THREE.Vector3(Math.sin(LATi)*Math.sin(LONi),Math.cos(LATi),Math.sin(LATi)*Math.cos(LONi)).multiplyScalar(radius);
		      if(data_graph_pubmed['nodes'][i]['id']=='facebook' || data_graph_pubmed['nodes'][i]['id']=='google') var country=new THREE.SphereGeometry(2.0,segments0,rings0);
		      else var country=new THREE.SphereGeometry(radius0,segments0,radius0);
		      if(data_graph_pubmed['nodes'][i]['id']=='facebook') var material_country=new THREE.MeshBasicMaterial({color:0x0000ff});
		      else{
		      if(data_graph_pubmed['nodes'][i]['id']=='google') var material_country=new THREE.MeshBasicMaterial({color:0x00ff00});
		      else var material_country=new THREE.MeshBasicMaterial({color:0xff0000});
		      }
		      var mesh_country=new THREE.Mesh(country,material_country);
		      mesh_country.position.set(rC.x,rC.y,rC.z);
		      globe.add(mesh_country);
		      }

	var vS,vT,cvS=new THREE.Vector3(),cvT=new THREE.Vector3(),geometry,material,min_weight=1000000,weighti=0.0,source=0,target=0;
	var paths=new THREE.CurvePath();
	console.log(n_countries);
	console.log(n_countries*(n_countries-1)/2);
	console.log(pairwize);
	for(var i=0;i<pairwize;i++) min_weight=Math.min(min_weight,data_graph_pubmed['links'][i]['value']);
	<!-- making the time text -->
	var loader=new THREE.FontLoader();
	var group_text=new THREE.Group();
	loader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",<!-- loader.load("https://threejs.org/examples/fonts/optimer_bold.typeface.json", -->
	function(font){
	var geometry=new THREE.TextGeometry((time.toString()).concat(" ",(time+3).toString()),{
	font:font,
	size:160,
	height:5,
	curveSegments:12,
	bevelEnabled:true,
	bevelThickness:10,
	bevelSize:8,
	bevelSegments:5
	});
	var mesh_text=new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({color:0xffffff}));
	mesh_text.position.set(-1000.0,500.0,0.0);
	group_text.add(mesh_text);
	},
	function(error){
	console.log(error);
	});
	scene.add(group_text);
	
	<!-- making the paths between countries -->
	var group_links=new THREE.Group();
	var j=0;
	for(var i=0;i<pairwize;i++){
			if(data_graph_pubmed['links'][i]['time']==time){
			<!-- Starting and target points -->
			source=data_graph_pubmed['links'][i]['source'];
			target=data_graph_pubmed['links'][i]['target'];
			var LATi=0.5*Math.PI-LL['countries'][source]['lat']*Math.PI/180.0;
			var LONi=0.5*Math.PI+LL['countries'][source]['lon']*Math.PI/180.0;
			var vS=new THREE.Vector3(Math.sin(LATi)*Math.sin(LONi),Math.cos(LATi),Math.sin(LATi)*Math.cos(LONi)).multiplyScalar(radius);
			var LATi=0.5*Math.PI-LL['countries'][target]['lat']*Math.PI/180.0;
			var LONi=0.5*Math.PI+LL['countries'][target]['lon']*Math.PI/180.0;
			var vT=new THREE.Vector3(Math.sin(LATi)*Math.sin(LONi),Math.cos(LATi),Math.sin(LATi)*Math.cos(LONi)).multiplyScalar(radius);
			<!-- weighti=Math.log(data_graph_pubmed['links'][i]['value'])/Math.log(10.0); -->
			<!-- weighti=0.5*data_graph_pubmed['links'][i]['value']; -->
			weighti=Math.log(data_graph_pubmed['links'][i]['value'])/Math.log(2.0)+0.5;
			<!-- mid-point -->
			cvS=new THREE.Vector3(vS.x+0.25*(vT.x-vS.x),vS.y+0.25*(vT.y-vS.y),vS.z+0.25*(vT.z-vS.z));
			cvS.normalize();
			cvS.multiplyScalar(radius*(1.0+weighti));
			cvT=new THREE.Vector3(vS.x+0.75*(vT.x-vS.x),vS.y+0.75*(vT.y-vS.y),vS.z+0.75*(vT.z-vS.z));
			cvT.normalize();
			cvT.multiplyScalar(radius*(1.0+weighti));
			<!-- Bezier curves -->
			paths.add(new THREE.CubicBezierCurve3(vS,cvS,cvT,vT));
      			geometry=new THREE.BufferGeometry().setFromPoints(paths.curves[j].getPoints(n_points));
			j=j+1;
			target=data_graph_pubmed['nodes'][data_graph_pubmed['links'][i]['target']]['id'];
			source=data_graph_pubmed['nodes'][data_graph_pubmed['links'][i]['source']]['id'];
      			if(target=='facebook' || source=='facebook') group_links.add(new THREE.Line(geometry,new THREE.LineBasicMaterial({color:0x0000ff})));
			else{
			if(target=='google' || source=='google') group_links.add(new THREE.Line(geometry,new THREE.LineBasicMaterial({color:0x00ff00})));
			else group_links.add(new THREE.Line(geometry,new THREE.LineBasicMaterial({color:0xff0000})));
			}
			}
      }
      var time0=j;

      <!-- making the moving points -->
      var spherei=new THREE.SphereGeometry(radius0,segments0,rings0);
      var materiali=new THREE.MeshBasicMaterial({color:0xff00ff});
      var group_mesh=new THREE.Group();
      for(var i=0;i<pairwize;i++) if(data_graph_pubmed['links'][i]['time']==time) group_mesh.add(new THREE.Mesh(spherei,materiali));
      globe.add(group_links);
      globe.add(group_mesh);
      scene.add(globe);

      var count=1,delta_count=1,pt=new THREE.Vector3(),group_length=0;
      
      function render(){
		      if(count==n_points) delta_count=-1;
		      if(count==0) delta_count=1;
		      var j=0;
		      for(var i=0;i<pairwize;i++){
		      if(data_graph_pubmed['links'][i]['time']==time){
		      if(j<group_mesh.children.length){
		      paths.curves[j].getPoint(count/n_points,pt);
		      group_mesh.children[j].position.set(pt.x,pt.y,pt.z);
		      }else{
		      paths.curves[j].getPoint(count/n_points,pt);
		      group_mesh.add(new THREE.Mesh(spherei,materiali));
		      group_mesh.children[j].position.set(pt.x,pt.y,pt.z);
		      }  
		      j=j+1;
		      }
		      }
		      group_length=group_mesh.children.length;
		      for(var i=(group_length-1);i>=j;i--){
		      scene.remove(group_mesh.children[i]);
		      group_mesh.remove(group_mesh.children[i]);
		      }
		      renderer.render(scene,camera);
		      count=count+delta_count;
      };
		      
      function update(){
      requestAnimationFrame(update);
      render();
      };
      update();
      
      const ZoomSensitivity=0.0001;
      
      <!-- Rotating mouse -->
      CumThetaX=0;
      CumThetaY=0;
      var PreviousMouseX=0.0;
      var PreviousMouseY=0.0;
      var DraggingMouse=false;
      function OnMouseDown(e){
      DraggingMouse=true;
      PreviousMouseX=e.clientX;
      PreviousMouseY=e.clientY;
      }
      function RotateOnMouseMove(e){
      if(DraggingMouse){
      thetaX=Math.sign(e.clientX-PreviousMouseX)*0.075;
      thetaY=Math.sign(e.clientY-PreviousMouseY)*0.075;
      CumThetaX+=thetaX;
      CumThetaY+=thetaY;
      globe.rotation.x+=thetaY;
      globe.rotation.y+=thetaX;
      PreviousMouseX=e.clientX;
      PreviousMouseY=e.clientY;
      }
      }
      
      <!-- changing time -->
      function MoveOnKeyboardKeys(e){
      switch(e.keyCode){
      case 37:
      time-=3;
      break;
      case 39:
      time+=3;
      break;
      case 65:
      time+=3;
      break;
      case 90:
      time-=3;
      break;
      }
      time=Math.min(2015,Math.max(min_time,time));
      scene.remove(group_text.children[0]);
      group_text.remove(group_text.children[0]);
      loader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",<!-- loader.load("https://threejs.org/examples/fonts/optimer_bold.typeface.json", -->
      function(font){
      var geometry=new THREE.TextGeometry((time.toString()).concat(" ",(time+3).toString()),{
      font:font,
      size:160,
      height:5,
      curveSegments:12,
      bevelEnabled:true,
      bevelThickness:10,
      bevelSize:8,
      bevelSegments:5
      });
      var mesh_text=new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({color:0xffffff}));
      mesh_text.position.set(-1000.0,500.0,0.0);
      group_text.add(mesh_text);
      },
      function(error){
      console.log(error);
      });
      var j=0;
      for(var i=0;i<pairwize;i++){
		      if(data_graph_pubmed['links'][i]['time']==time){
		      <!-- Starting and target points -->
		      source=data_graph_pubmed['links'][i]['source'];
		      target=data_graph_pubmed['links'][i]['target'];
		      var LATi=0.5*Math.PI-LL['countries'][source]['lat']*Math.PI/180.0;
		      var LONi=0.5*Math.PI+LL['countries'][source]['lon']*Math.PI/180.0;
		      var vS=new THREE.Vector3(Math.sin(LATi)*Math.sin(LONi),Math.cos(LATi),Math.sin(LATi)*Math.cos(LONi)).multiplyScalar(radius);
		      var LATi=0.5*Math.PI-LL['countries'][target]['lat']*Math.PI/180.0;
		      var LONi=0.5*Math.PI+LL['countries'][target]['lon']*Math.PI/180.0;
		      var vT=new THREE.Vector3(Math.sin(LATi)*Math.sin(LONi),Math.cos(LATi),Math.sin(LATi)*Math.cos(LONi)).multiplyScalar(radius);
		      <!-- weighti=Math.log(data_graph_pubmed['links'][i]['value'])/Math.log(10.0); -->
		      <!-- weighti=0.5*data_graph_pubmed['links'][i]['value']; -->
		      weighti=Math.log(data_graph_pubmed['links'][i]['value'])/Math.log(2.0)+0.5;
		      <!-- mid-point -->
		      cvS=new THREE.Vector3(vS.x+0.25*(vT.x-vS.x),vS.y+0.25*(vT.y-vS.y),vS.z+0.25*(vT.z-vS.z));
		      cvS.normalize();
		      cvS.multiplyScalar(radius*(1.0+weighti));
		      cvT=new THREE.Vector3(vS.x+0.75*(vT.x-vS.x),vS.y+0.75*(vT.y-vS.y),vS.z+0.75*(vT.z-vS.z));
		      cvT.normalize();
		      cvT.multiplyScalar(radius*(1.0+weighti));
		      <!-- Bezier curves -->
		      if(j<group_links.children.length){
			     paths.curves[j]=new THREE.CubicBezierCurve3(vS,cvS,cvT,vT);
      			     group_links.children[j].geometry=new THREE.BufferGeometry().setFromPoints(paths.curves[j].getPoints(n_points));
			     target=data_graph_pubmed['nodes'][data_graph_pubmed['links'][i]['target']]['id'];
			     source=data_graph_pubmed['nodes'][data_graph_pubmed['links'][i]['source']]['id'];
      			     if(target=='facebook' || source=='facebook') group_links.children[j].material=new THREE.LineBasicMaterial({color:0x0000ff});
			     else{
			     if(target=='google' || source=='google') group_links.children[j].material=new THREE.LineBasicMaterial({color:0x00ff00});
			     else group_links.children[j].material=new THREE.LineBasicMaterial({color:0xff0000});
			     }
		      }else{
			     if(j<paths.curves.length) paths.curves[j]=new THREE.CubicBezierCurve3(vS,cvS,cvT,vT);
			     else paths.add(new THREE.CubicBezierCurve3(vS,cvS,cvT,vT));
      			     geometry=new THREE.BufferGeometry().setFromPoints(paths.curves[j].getPoints(n_points));
			     target=data_graph_pubmed['nodes'][data_graph_pubmed['links'][i]['target']]['id'];
			     source=data_graph_pubmed['nodes'][data_graph_pubmed['links'][i]['source']]['id'];
      			     if(target=='facebook' || source=='facebook') group_links.add(new THREE.Line(geometry,new THREE.LineBasicMaterial({color:0x0000ff})));
			     else{
			     if(target=='google' || source=='google') group_links.add(new THREE.Line(geometry,new THREE.LineBasicMaterial({color:0x00ff00})));
			     else group_links.add(new THREE.Line(geometry,new THREE.LineBasicMaterial({color:0xff0000})));
		             }
		      }
		      j=j+1;
		      }
		      }
		      time1=j;
		      group_length=group_links.children.length;
		      for(var i=(group_length-1);i>=j;i--){
		      scene.remove(group_links.children[i]);
		      group_links.remove(group_links.children[i]);
		      }
                      time0=time1;
       console.log(e.keyCode);
       console.log(time);console.log(group_links.children.length);
       count=1;
       };

      <!-- Zooming mouse -->
      function ZoomOnMouseWheel(e){
      <!-- console.log(e.wheelDelta); -->
      <!-- camera.fov+=e.wheelDelta*ZoomSensitivity; -->
      <!-- camera.projectionMatrix=new THREE.Matrix4().makePerspective(camera.fov,window.innerWidth/window.innerHeight,camera.near,camera.far); -->
      camera.position.set(camera.position.x,camera.position.y,camera.position.z-Math.sign(camera.position.z)*e.wheelDelta);
      camera.lookAt(new THREE.Vector3(0,0,0));
      };

      document.addEventListener('mousemove',RotateOnMouseMove);
      document.addEventListener('mousedown',OnMouseDown);
      document.addEventListener('mouseup',function(e){DraggingMouse=false;});
      document.addEventListener('mousewheel',ZoomOnMouseWheel);
      document.addEventListener('keyup',MoveOnKeyboardKeys);
      <!-- document.addEventListener('keydown',MoveOnKeyboardKeys); -->

    </script>
  </body>
</html>
