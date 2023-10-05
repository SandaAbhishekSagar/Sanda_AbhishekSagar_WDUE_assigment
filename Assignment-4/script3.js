
function addDynamicCheckboxes() {
  const stateSelect = document.getElementById('state');
  const checkboxContainer = document.getElementById('checkboxContainer');

  // Clear existing checkboxes
  checkboxContainer.innerHTML = '';

  // Get the selected state value
  const selectedValue = stateSelect.value;

  if (selectedValue !== '1') { // '1' is the value of the "Select" option
    if(selectedValue==='MA'){
      const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.name = `MATemperature`;
          checkbox.id = `MATemperature`;
          const label = document.createElement('label');
          label.htmlFor = `MATemperature`;
          label.appendChild(document.createTextNode(`What do u like in MA*`));

          // Add checkbox and label to the container
          checkboxContainer.appendChild(checkbox);
          checkboxContainer.appendChild(label);
          checkboxContainer.appendChild(document.createElement('br'));

        const textField = document.createElement('input');
        textField.type = 'text';
        textField.name = `MAtext`;
        textField.id = `MAtext`;
        textField.placeholder = 'Enter text';
        textField.required = true; // Make it mandatory

        // Initially, hide the text field if the checkbox is not checked
        textField.style.display = 'none';

        // Add the text field to the container
        checkboxContainer.appendChild(textField);
        checkboxContainer.appendChild(document.createElement('br'));
        checkboxContainer.appendChild(document.createElement('br'));

        // Add an event listener to show/hide the text field when the checkbox is checked/unchecked
      //   checkbox.addEventListener('change', function () {
      //     if (checkbox.checked) {
      //         textField.style.display = 'block';
      //         document.getElementById('error_checkbox').style.display='none';
      //         isStateInValid=false;
      //     } else {
      //         textField.style.display = 'none';
      //         document.getElementById('error_checkbox').style.display='block';
      //         isStateInValid=true;
      //     }
      // });
    }
    if(selectedValue==='NJ'){
      const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.name = `NJTemperature`;
          checkbox.id = `NJTemperature`;
          const label = document.createElement('label');
          label.htmlFor = `NJTemperature`;
          label.appendChild(document.createTextNode(`What do u like in NJ*`));

          // Add checkbox and label to the container
          checkboxContainer.appendChild(checkbox);
          checkboxContainer.appendChild(label);
          checkboxContainer.appendChild(document.createElement('br'));
          checkboxContainer.appendChild(document.createElement('br'));
          const textField = document.createElement('input');
        textField.type = 'text';
        textField.name = `NJtext`;
        textField.id = `NJtext`;
        textField.placeholder = 'Enter text';
        textField.required = true; // Make it mandatory

        // Initially, hide the text field if the checkbox is not checked
        textField.style.display = 'none';

        // Add the text field to the container
        checkboxContainer.appendChild(textField);
        checkboxContainer.appendChild(document.createElement('br'));
        checkboxContainer.appendChild(document.createElement('br'));
        // Add an event listener to show/hide the text field when the checkbox is checked/unchecked
      //   checkbox.addEventListener('change', function () {
      //     if (checkbox.checked) {
      //         textField.style.display = 'block';
      //         document.getElementById('error_checkbox').style.display='none';
      //         isStateInValid=false;
      //     } else {
      //         textField.style.display = 'none';
      //         document.getElementById('error_checkbox').style.display='block';
      //         isStateInValid=true;
      //     }
      // });
    }
    if(selectedValue==='NY'){
      const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.name = `NYTemperature`;
          checkbox.id = `NYTemperature`;
          const label = document.createElement('label');
          label.htmlFor = `NYTemperature`;
          label.appendChild(document.createTextNode(`What do u like in NY*`));

          // Add checkbox and label to the container
          checkboxContainer.appendChild(checkbox);
          checkboxContainer.appendChild(label);
          checkboxContainer.appendChild(document.createElement('br'));
          const textField = document.createElement('input');
        textField.type = 'text';
        textField.name = `NYtext`;
        textField.id = `NYtext`;
        textField.placeholder = 'Enter text';
        textField.required = true; // Make it mandatory

        // Initially, hide the text field if the checkbox is not checked
        textField.style.display = 'none';

        // Add the text field to the container
        checkboxContainer.appendChild(textField);
        checkboxContainer.appendChild(document.createElement('br'));
        checkboxContainer.appendChild(document.createElement('br'));

        // Add an event listener to show/hide the text field when the checkbox is checked/unchecked
      //   checkbox.addEventListener('change', function () {
      //     if (checkbox.checked) {
      //         textField.style.display = 'block';
      //         document.getElementById('error_checkbox').style.display='none';
      //         isStateInValid=false;
      //     } else {
      //         textField.style.display = 'none';
      //         document.getElementById('error_checkbox').style.display='block';
      //         isStateInValid=true;
      //     }
      // });
        }
    if(selectedValue==='CA'){
      const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.name = `CATemperature`;
          checkbox.id = `CATemperature`;
          const label = document.createElement('label');
          label.htmlFor = `CATemperature`;
          label.appendChild(document.createTextNode(`What do u like in CA*`));

          // Add checkbox and label to the container
          checkboxContainer.appendChild(checkbox);
          checkboxContainer.appendChild(label);
          checkboxContainer.appendChild(document.createElement('br'));
          const textField = document.createElement('input');
        textField.type = 'text';
        textField.name = `CAtext`;
        textField.id = `CAtext`;
        textField.placeholder = 'Enter text';
        textField.required = true; // Make it mandatory

        // Initially, hide the text field if the checkbox is not checked
        textField.style.display = 'none';

        // Add the text field to the container
        checkboxContainer.appendChild(textField);
        checkboxContainer.appendChild(document.createElement('br'));
        checkboxContainer.appendChild(document.createElement('br'));
        // Add an event listener to show/hide the text field when the checkbox is checked/unchecked
      //   checkbox.addEventListener('change', function () {
      //     if (checkbox.checked) {
      //         textField.style.display = 'block';
      //         document.getElementById('error_checkbox').style.display='none';
      //         isStateInValid=false;
      //     } else {
      //         textField.style.display = 'none';
      //         document.getElementById('error_checkbox').style.display='block';
      //         isStateInValid=true;
      //     }
      // });
    }
    if(selectedValue==='FL'){
      const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.name = `FLTemperature`;
          checkbox.id = `FLTemperature`;
          const label = document.createElement('label');
          label.htmlFor = `FLTemperature`;
          label.appendChild(document.createTextNode(`What do u like in FL*`));

          // Add checkbox and label to the container
          checkboxContainer.appendChild(checkbox);
          checkboxContainer.appendChild(label);
          checkboxContainer.appendChild(document.createElement('br'));
          const textField = document.createElement('input');
        textField.type = 'text';
        textField.name = `FLtext`;
        textField.id = `FLtext`;
        textField.placeholder = 'Enter text';
        textField.required = true; // Make it mandatory

        // Initially, hide the text field if the checkbox is not checked
        textField.style.display = 'none';

        // Add the text field to the container
        checkboxContainer.appendChild(textField);
        checkboxContainer.appendChild(document.createElement('br'));
        checkboxContainer.appendChild(document.createElement('br'));

      //   checkbox.addEventListener('change', function () {
      //     if (checkbox.checked) {
      //         textField.style.display = 'block';
      //         if(document.getElementById('FLtext').value===null || document.getElementById('FLtext').value===""){
      //           document.getElementById('error_checktext').style.display='block';
      //           isStateInValid=true;
      //         }
      //         else{
      //           document.getElementById('error_checktext').style.display='none';
      //           document.getElementById('error_checkbox').style.display='none';
      //           isStateInValid=false;
      //         }
              
      //     } else {
      //         textField.style.display = 'none';
      //         document.getElementById('error_checkbox').style.display='block';
      //         isStateInValid=true;
      //     }
      // });
        // Add an event listener to show/hide the text field when the checkbox is checked/unchecke
    }
    
  }
}
window.onload = () => {
//     // Accessing form item by id
//     // const name = document.getElementById('name');
//Validation of the State checkbox and table to store values.
const form = document.forms.myForm;
const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regExEmail = /([\w\.]+)@northeastern.edu/;
    const regExPhone = /\d{3}-?\d{3}-\d{4}$/;
    const regExZipcode=/^\d{5}(-\d{4})?$/;
    // const regExAddress=/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;
    const submitButton = form.querySelector('input[type="submit"]');
    submitButton.disabled=true;

    let isFirstNameInValid=true; 
    let isLastNameInValid=true; isEmailInValid=true; isPhoneInValid=true; isZipcodeInValid=true; isAddressInValid=true; isCommentInValid=true; isTitleInValid=true; isHearInValid=true; isStateInValid=true; isCityInValid=true; isTempInValid=true;
    var radio=""; src="";
    // function validateNotEmpty(inputField, errorElement) {
    //   const value = inputField.value.trim();
    //   if (value === "") {
    //     showError(errorElement, "This field is required.");
    //     return false;
    //   }
    //   return true;
    // }
 function addRecord(event){
  event.preventDefault();
  var table = document.getElementById("myTable");
  var tbody = document.getElementsByTagName("tbody")[1];
  var trNode = document.createElement("tr");
  var tdTitle = document.createElement("td");
  displayRadioValue();
  tdTitle.innerHTML =radio;
  var tdFirstName = document.createElement("td");
  tdFirstName.innerHTML = document.getElementById('firstName').value;
  var tdLastName = document.createElement("td");
  tdLastName.innerHTML = document.getElementById('lastName').value;
  var tdEmail = document.createElement("td");
  tdEmail.innerHTML=document.getElementById('email').value;
  var tdphoneNumber = document.createElement("td");
  tdphoneNumber.innerHTML=document.getElementById('phoneNumber').value;
  var tdAddress1 = document.createElement("td");
  tdAddress1.innerHTML=document.getElementById('Address1').value;
  var tdAddress2 = document.createElement("td");
  tdAddress2.innerHTML=document.getElementById('Address2').value;
  var tdCity= document.createElement("td");
  tdCity.innerHTML=document.getElementById('city').value;
  var tdState1= document.createElement("td");
  tdState1.innerHTML=document.getElementById('state1').value;
  var tdState = document.createElement("td");
  var selectedstate=document.getElementById('state').value;
  tdState.innerHTML=selectedstate;
  var tdTemperature = document.createElement("td");
  if(selectedstate==='MA'){
  tdTemperature.innerHTML=document.getElementById("MAtext").value;
  }
  if(selectedstate==='NJ'){
    tdTemperature.innerHTML=document.getElementById("NJtext").value;
    }
  if(selectedstate==='NY'){
      tdTemperature.innerHTML=document.getElementById("NYtext").value;
      }
  if(selectedstate==='CA'){
      tdTemperature.innerHTML=document.getElementById("CAtext").value;
        }
  if(selectedstate==='FL'){
      tdTemperature.innerHTML=document.getElementById("FLtext").value;
          }
  var tdZipcode = document.createElement("td");
  tdZipcode.innerHTML=document.getElementById('zipcode').value;
  displaySourceValue();
  var tdHow = document.createElement("td");
  tdHow.innerHTML=src;
  var tdComment = document.createElement("td");
  tdComment.innerHTML=document.getElementById('comments').value;

  trNode.appendChild(tdTitle);
  trNode.appendChild(tdFirstName);
  trNode.appendChild(tdLastName);
  trNode.appendChild(tdEmail);
  trNode.appendChild(tdphoneNumber);
  trNode.appendChild(tdAddress1);
  trNode.appendChild(tdAddress2);
  trNode.appendChild(tdCity);
  trNode.appendChild(tdState1);
  trNode.appendChild(tdState);
  trNode.appendChild(tdTemperature);
  trNode.appendChild(tdZipcode);
  trNode.appendChild(tdHow);
  trNode.appendChild(tdComment);
  tbody.appendChild(trNode);
  alert("Record submitted successfully");
  document.getElementById('myForm').reset();
   submitButton.disabled=true;
 }

    function showError(errorElement, message) {
      errorElement.textContent = message;
      errorElement.style.display = "block";
    }
    
  function checkboxckeck(){
    var s= document.getElementById('state').value;
    var checkid=""; checktextid="";
      if(s==='MA'){
        checkid=document.getElementById('MATemperature');
        checktextid=document.getElementById('MAtext');
        if(checkid.checked){
          checktextid.style.display='block';
          if(checktextid.value===null||checktextid.value===""){
            document.getElementById('error_checktext').style.display='block';
            isTempInValid=true;
          }else{
            document.getElementById('error_checktext').style.display='none';
            document.getElementById('error_checkbox').style.display='none';
            isTempInValid=false;
          }
          
      } else {
          checktextid.style.display = 'none';
          document.getElementById('error_checkbox').style.display='block';
          isTempInValid=true;
      }
      }
      if(s==='NJ'){
        checkid=document.getElementById('NJTemperature');
        checktextid=document.getElementById('NJtext');
        if(checkid.checked){
          checktextid.style.display='block';
          if(checktextid.value===null||checktextid.value===""){
            document.getElementById('error_checktext').style.display='block';
            isTempInValid=true;
          }else{
            document.getElementById('error_checktext').style.display='none';
            document.getElementById('error_checkbox').style.display='none';
            isTempInValid=false;
          }
          
      } else {
          checktextid.style.display = 'none';
          document.getElementById('error_checkbox').style.display='block';
          isTempInValid=true;
      }
      }
      if(s==='NY'){
        checkid=document.getElementById('NYTemperature');
        checktextid=document.getElementById('NYtext');
        if(checkid.checked){
          checktextid.style.display='block';
          if(checktextid.value===null||checktextid.value===""){
            document.getElementById('error_checktext').style.display='block';
            isTempInValid=true;
          }else{
            document.getElementById('error_checktext').style.display='none';
            document.getElementById('error_checkbox').style.display='none';
            isTempInValid=false;
          }
          
      } else {
          checktextid.style.display = 'none';
          document.getElementById('error_checkbox').style.display='block';
          isTempInValid=true;
      }
      }
      if(s==='CA'){
        checkid=document.getElementById('CATemperature');
        checktextid=document.getElementById('CAtext');
        if(checkid.checked){
          checktextid.style.display='block';
          if(checktextid.value===null||checktextid.value===""){
            document.getElementById('error_checktext').style.display='block';
            isTempInValid=true;
          }else{
            document.getElementById('error_checktext').style.display='none';
            document.getElementById('error_checkbox').style.display='none';
            isTempInValid=false;
          }
          
      } else {
          checktextid.style.display = 'none';
          document.getElementById('error_checkbox').style.display='block';
          isTempInValid=true;
      }
      }
      if(s==='FL'){
        checkid=document.getElementById('FLTemperature');
        checktextid=document.getElementById('FLtext');
        if(checkid.checked){
          checktextid.style.display='block';
          if(checktextid.value===null||checktextid.value===""){
            document.getElementById('error_checktext').style.display='block';
            isTempInValid=true;
          }else{
            document.getElementById('error_checktext').style.display='none';
            document.getElementById('error_checkbox').style.display='none';
            isTempInValid=false;
          }
          
      } else {
          checktextid.style.display = 'none';
          document.getElementById('error_checkbox').style.display='block';
          isTempInValid=true;
      }
      }
  }
  
    // var radio= form.querySelector('input[type="radio"]:checked');
    function displayRadioValue() {
      var ele = document.getElementsByName('title');

      for (i = 0; i < ele.length; i++) {
          if (ele[i].checked)
              radio=ele[i].value;
      }
  }
  function displaySourceValue() {
    var el = document.getElementsByName('source');
    src="";
    for (i = 0; i < el.length; i++) {
        if (el[i].checked)
            src+=el[i].value + " ";
    }
}

    const validate = event => {

          // console.log('input');
          let {id, value, name} = event.target;
          if(name==="firstName"){
            if(!value.trim().toLowerCase().match(regExName) || value.trim().length<2){
              document.getElementById('error_firstName').style.display='block';
              isFirstNameInValid=true;
            }
            else{
              document.getElementById('error_firstName').style.display='none';
              isFirstNameInValid=false;
            }
          }
          if(name==="lastName"){
            if(!value.trim().toLowerCase().match(regExName)||value.trim().length<2){
              document.getElementById('error_lastName').style.display='block';
              isLastNameInValid=true;
            }
            else{
              document.getElementById('error_lastName').style.display='none';
              isLastNameInValid=false;
            }
          }
          if(name==="email"){
            if(!value.trim().toLowerCase().match(regExEmail)){
              document.getElementById('error_email').style.display='block';
              isEmailInValid=true;
            }
            else{
              document.getElementById('error_email').style.display='none';
              isEmailInValid=false;
            }
          }
          if(name==="phoneNumber"){
            if(!value.trim().toLowerCase().match(regExPhone)){
              document.getElementById('error_phoneNumber').style.display='block';
              isPhoneInValid=true;
            }
            else{
              document.getElementById('error_phoneNumber').style.display='none';
              isPhoneInValid=false;
            }
          }
          if(name==="Address1"){
            if(value===null || value===""){
              document.getElementById('error_address1').style.display='block';
              isAddressInValid=true;
            }
            else if(value.trim().length<5){
              document.getElementById('error_address13').style.display='block';
              isAddressInValid=true;
            }
            else if(value.trim().length>25){
              document.getElementById('error_address12').style.display='block';
              isAddressInValid=true;
            }
            else{
              document.getElementById('error_address1').style.display='none';
              document.getElementById('error_address12').style.display='none';
              document.getElementById('error_address13').style.display='none';
              isAddressInValid=false;
            }
          }
          if(name==="zipcode"){
            if(!value.trim().toLowerCase().match(regExZipcode)){
              document.getElementById('error_zipcode').style.display='block';
              isZipcodeInValid=true;
            }
            else{
              document.getElementById('error_zipcode').style.display='none';
              isZipcodeInValid=false;
            }
          }
          if(name==="text"){
            if(value===null || value===""){
              document.getElementById('error_text').style.display='block';
              isCommentInValid=true;
            }
            else{
              document.getElementById('error_text').style.display='none';
              isCommentInValid=false;
            }
          }
          if(name==="city"){
            if(value===null || value==="" || value.trim().length<2){
              document.getElementById('error_city').style.display='block';
              isCityInValid=true;
            }
            else{
              document.getElementById('error_city').style.display='none';
              isCityInValid=false;
            }
          }
          if(name==="state1"){
            if(value===null || value==="" || value.trim().length<2){
              document.getElementById('error_state1').style.display='block';
              isStateInValid=true;
            }
            else{
              document.getElementById('error_state1').style.display='none';
              isStateInValid=false;
            }
          }
          // if(name==="title"){
          displayRadioValue();
          if(radio===null||radio===""){
            document.getElementById('error_title').style.display='block';
            isTitleInValid=true;
          }
          else{
            document.getElementById('error_title').style.display='none';
            isTitleInValid=false;
          }
        // }
        
          if(name==="source"){
          displaySourceValue();
          if(src===null||src===""){
            document.getElementById('error_hear').style.display='block';
            isHearInValid=true;
          }
          else{
            document.getElementById('error_hear').style.display='none';
            isHearInValid=false;
          }
        }

          if(name==="state"){
          if(document.getElementById('state').value==='1'){
            document.getElementById('error_state').style.display='block';
              isTempInValid=true;
          }
          else{
            document.getElementById('error_state').style.display='none';
          }
        }
        checkboxckeck();
          if(!isFirstNameInValid&&!isLastNameInValid&&!isStateInValid&&!isEmailInValid&&!isPhoneInValid&&!isZipcodeInValid&&!isAddressInValid&&!isCommentInValid&&!isTitleInValid&&!isHearInValid&&!isTempInValid&&!isCityInValid){
              submitButton.disabled=false;
          }
          
        }
      document.myForm.addEventListener('input',validate);
      document.myForm.addEventListener('submit', addRecord);
      }