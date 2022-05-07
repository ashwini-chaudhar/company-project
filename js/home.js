function mySubmit() {
  var name = document.getElementById('name').value;
  var mobileno = document.getElementById('mobileno').value;
  var email = document.getElementById('email').value;
  var dateofbirth = document.getElementById('dob').value;
  var address = document.getElementById('address1').value;
  var addaddress = document.getElementById('address2').value;
  var city = document.getElementById('city').value;
  var country = document.getElementById('country').value;
  var table = document.getElementById('myTable');

  var newRow = table.insertRow(table.rows.length);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);

  var customerid = Math.floor((Math.random() * 1000) + 1);
  const data = { "name": name, "email": email, "customerid": customerid, "mobileno": mobileno, "dateofbirth": dateofbirth, "address": address, "addaddress": addaddress, "country": country, "city": city }; //
  cell1.innerHTML = parseInt(localStorage.getItem("userId")) + 1;
  localStorage.setItem("userId", parseInt(localStorage.getItem("userId")) + 1);
  cell2.innerHTML = customerid;
  cell3.innerHTML = name;
  cell4.innerHTML = mobileno;
  cell5.innerHTML = email;
  cell6.innerHTML = ' <i class="fas fa-pen-square" data-bs-toggle="modal" onclick="editRow(this)" data-bs-target="#edit"></i> <i class="far fa-times-circle" onclick="deleteRow(this)"></i> ';

  const json = JSON.parse(localStorage.getItem("customer"));
  json.push(data);
  localStorage.setItem("customer", JSON.stringify(json));

}

var tempeditcustomerrow = 0;

function editRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  const json = JSON.parse(localStorage.getItem("customer"));
  let s = json[i - 2];
  document.getElementById('editcustomername').value = s.name;
  document.getElementById('editmobileno').value = s.mobileno;
  document.getElementById('emailid').value = s.email;
  document.getElementById('dateofbirth').value = s.dateofbirth;
  document.getElementById('editaddress1').value = s.address;
  document.getElementById('editaddress2').value = s.addaddress;
  document.getElementById('city').value = s.city;
  document.getElementById('country').value = s.country;
  tempeditcustomerrow = i - 2;



  // console.log(s);
}

function updateCustomer() {
  //to do edit particular cell

  const json = JSON.parse(localStorage.getItem("customer"));
  json[tempeditcustomerrow].name = document.getElementById('editcustomername').value;
  json[tempeditcustomerrow].mobileno = document.getElementById('editmobileno').value;
  json[tempeditcustomerrow].email = document.getElementById('emailid').value;
  json[tempeditcustomerrow].dateofbirth = document.getElementById('dateofbirth').value;
  json[tempeditcustomerrow].address = document.getElementById('editaddress1').value;
  json[tempeditcustomerrow].addaddress = document.getElementById('editaddress2').value;
  json[tempeditcustomerrow].city = document.getElementById('city').value;
  json[tempeditcustomerrow].country = document.getElementById('country').value;
  localStorage.setItem("customer", JSON.stringify(json));
}

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  const json = JSON.parse(localStorage.getItem("customer"));
  let s = json[i - 2].customerid;

  const temp = [];
  json.forEach(element => {
    if (s != element.customerid) {//subscription

      temp.push(element)
    }
  });
  localStorage.setItem("customer", JSON.stringify(temp));
}

function init() {
  localStorage.clear();
  localStorage.setItem("userId", 0);
  const data = [];
  localStorage.setItem("customer", JSON.stringify(data));
  //  localStorage.setItem("package", JSON.stringify(data));
  //  localStorage.setItem("subscription", JSON.stringify(data));
} 
   
  //  Add Subscription

function addSubscription() {
  var customer = document.getElementById('customername').value;
  var package = document.getElementById('addpackage').value;
  var startdate = document.getElementById('addstart').value;
  var enddate = document.getElementById('addend').value;
  var table = document.getElementById('myTable1');

  var newRow = table.insertRow(table.rows.length);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var customerid = Math.floor((Math.random() * 1000) + 1);
  const addsubscription = { "customer": customer, "customerid": customerid, "package": package, "startdate": startdate, "enddate": enddate };


  cell1.innerHTML = parseInt(localStorage.getItem("userId")) + 1;
  localStorage.setItem("userId", parseInt(localStorage.getItem("userId")) + 1);

  cell2.innerHTML = customer;
  cell3.innerHTML = package;
  cell4.innerHTML = startdate;
  cell5.innerHTML = enddate;
  cell6.innerHTML = ' <i class="fas fa-pen-square" data-bs-toggle="modal" onclick="editRow(this)" data-bs-target="#editsubscription"></i> <i class="far fa-times-circle" onclick="deleteRow(this)"></i> ';
  // localStorage.setItem(date, json);
  const json1 = JSON.parse(localStorage.getItem("subscription"));
  json1.push(addsubscription);
  localStorage.setItem("subscription", JSON.stringify(json1));

}

var tempeditcustomerrow = 0;

function editRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  const json1 = JSON.parse(localStorage.getItem("subscription"));
  let s = json1[i - 2];
  document.getElementById('editcustomer').value = s.customer;
  document.getElementById('editpackage').value = s.package;
  document.getElementById('editstartdate').value = s.startdate;
  document.getElementById('editenddate').value = s.enddate;

  tempeditcustomerrow = i - 2;

  // console.log(s);
}

function updateCustomer() {
  //to do edit particular cell

  const json1 = JSON.parse(localStorage.getItem("subscription"));
  json[tempeditcustomerrow].customer = document.getElementById('editcustomer').value;
  json[tempeditcustomerrow].package = document.getElementById('editpackage').value;
  json[tempeditcustomerrow].startdate = document.getElementById('editstartdate').value;
  json[tempeditcustomerrow].enddate = document.getElementById('editenddate').value;
  localStorage.setItem("package", JSON.stringify(json1));
}

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable1").deleteRow(i);
  const json1 = JSON.parse(localStorage.getItem("addsubscription"));
  let s = json1[i - 2].subscription;

  const temp = [];
  json.forEach(element => {
    if (s != element.subscription) {//subscription

      temp.push(element)
    }
  });
  localStorage.setItem("subscription", JSON.stringify(temp));
}

function init() {
  localStorage.clear();
  localStorage.setItem("userId", 0);
  const addsubscription = [];
  localStorage.setItem("subscription", JSON.stringify(addsubscription));

}



function addPackage() {
  var packagename = document.getElementById('addpackagename').value;
  var channellist = document.getElementById('addchannellist').value;
  var packageprice = document.getElementById('addpackageprice').value;
  var packagevalidity = document.getElementById('addpackagevalidity').value;
  var table = document.getElementById('myTable2');

  var newRow = table.insertRow(table.rows.length);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);

  var customerid = Math.floor((Math.random() * 1000) + 1);
  const addpackage = { "packagename": packagename, "customerid": customerid, "channellist": channellist, "packageprice": packageprice, "packagevalidity": packagevalidity };
  cell1.innerHTML = parseInt(localStorage.getItem("userId")) + 1;
  localStorage.setItem("userId", parseInt(localStorage.getItem("userId")) + 1);

  cell2.innerHTML = 'dd-mm-yyyy';
  cell3.innerHTML = packagename;
  cell4.innerHTML = channellist;
  cell5.innerHTML = ' <i class="fas fa-pen-square" data-bs-toggle="modal" onclick="editRow(this)" data-bs-target="#editpackagemodal"></i> <i class="far fa-times-circle" onclick="deleteRow(this)"></i> ';

  const json2 = JSON.parse(localStorage.getItem("package"));
  json2.push(addpackage);
  localStorage.setItem("package", JSON.stringify(json2));
}
var tempeditcustomerrow = 0;

function editRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  const json2 = JSON.parse(localStorage.getItem("package"));
  let s = json2[i - 2];
  document.getElementById('editpackagename').value = s.packagename;
  document.getElementById('editchannellist').value = s.channellist;
  document.getElementById('editpackageprice').value = s.packageprice;
  document.getElementById('editpackagevalidity').value = s.packagevalidity;

  tempeditcustomerrow = i - 2;

  // console.log(s);
}

function updateCustomer() {

  const json1 = JSON.parse(localStorage.getItem("package"));
  json[tempeditcustomerrow].packagename = document.getElementById('editpackagename').value;
  json[tempeditcustomerrow].channellist = document.getElementById('editchannellist').value;
  json[tempeditcustomerrow].packageprice = document.getElementById('editpackageprice').value;
  json[tempeditcustomerrow].packagevalidity = document.getElementById('editpackagevalidity').value;
  localStorage.setItem("package", JSON.stringify(json2));
}

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable1").deleteRow(i);
  const json2 = JSON.parse(localStorage.getItem("addpackage"));
  let s = json2[i - 2].package;

  const temp = [];
  json.forEach(element => {
    if (s != element.package) {

      temp.push(element)
    }
  });
  localStorage.setItem("package", JSON.stringify(temp));
}

function init() {
  localStorage.clear();
  localStorage.setItem("userId", 0);
  const addpackage = [];
  localStorage.setItem("package", JSON.stringify(addpackage));

}

(function () {
  'use strict'

  // Get the forms we want to add validation styles to
  // var forms = document.querySelectorAll('.needs-validation')
  var forms = document.getElementsByClassName('needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)

    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          mySubmit();
        } else {
          form.classList.add('was-validated')
        }

      }, false)
    })
})();



