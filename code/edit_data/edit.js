function handleFileSelect(evt) {

  console.log(evt);
  var file = evt.target.files[0];
  var reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = (function(e) {
    console.log(Encoding.detect(e.target.result));
    var n = CSV.parse(Encoding.convert(e.target.result, 'UNICODE', 'AUTO'));
    console.log(n);
    var csv = fillCsv(n);
    SaveToFile('product.csv', csv);
  });

  reader.readAsBinaryString(file);
}

function fillCsv(_csv) {

  var csv = _csv;

  for (var i = 0; i < csv.length; i++) {
    csv[i][1] = 1;
    csv[i][8] = 0;
    var n = '';
    csv[i][3] = csv[i][3] + ',' + csv[i][23];
    csv[i][3] = csv[i][3] + ',' + csv[i][24];
    csv[i][3] = csv[i][3] + ',' + csv[i][25];
    csv[i].splice(23, 8);
  }

  var csvFile = csvSimple.toCSV(csv);

  return csvFile;

}

function SaveToFile(FileName, Stream) {

  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(new Blob([Stream], {
      type: "text/csv"
    }), FileName);
  } else {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([Stream], {
      type: "text/csv"
    }));
    //a.target   = '_blank';
    a.download = FileName;
    documen
    t.body.appendChild(a); //  FireFox specification
    a.click();
    document.body.removeChild(a); //  FireFox specification
  }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
