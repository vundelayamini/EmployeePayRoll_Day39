
<div id="formId"class="form-Content">
  <form  class="form" action="#"onreset="resetform()" on submit="save()">
      <div class="form-head">Employee Payroll  form</div>
      <div class="row content">
          <label class="label text" for="name">Name</label>
          <input class ="input" type="text" id="name" name="name"
           placeholder="your name.." required>
               <error-output class ="text -error" for="text"></error-output>
           </input>
      </div>

      </form>  
</div>



document.getElementById("submit").onclick = function() {
    let employee = new EmployeePayroll();
    employee.name = document.getElementById("name").value;
    employee.profilePic = document.querySelector('input[name = profile]:checked').value;
    employee.gender = document.querySelector('input[name = gender]:checked').value;
    employee.department = document.querySelector('input[name = department]:checked').value;
    employee.salary = document.getElementById("salary").value;
    employee.note = document.getElementById("notes").value;
    employee.startDate = new Date(parseInt(document.getElementById("year").value), parseInt(document.getElementById("month").value), parseInt(document.getElementById("day").value));
};