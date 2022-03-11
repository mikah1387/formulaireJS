let form =document.querySelector('#form')
let nom = document.querySelector('#nom')
let prenom = document.querySelector('#prenom')
let date = document.querySelector('#date')

let email = document.querySelector('#email')
let password = document.querySelector('#password')
let password2 = document.querySelector('#con-password')
// let formcontrol= document.querySelectorAll('.form-control')

form.addEventListener('submit',function(e){
     e.preventDefault()

     CheckInput()
 

})

function CheckInput(){
 let nomvalue = nom.value.trim();
 let prenomvalue = prenom.value.trim();
 const emailvalue= email.value.trim();
 const passwordvalue = password.value.trim();
 const password2value=password2.value.trim();
 const datevalue = date.value.trim()
 
  nomvalue =nomvalue.toString()
  prenomvalue =prenomvalue.toString()

 if (nomvalue ===''){

    setError(nom,'vous devez remplir le champ')
 }else  {

   setSuccess(nom)

 }
 //****prenom */
 if (prenomvalue ===''){

    setError(prenom,'vous devez remplir le champ')
 }else {

   setSuccess(prenom)

 }
 //****date */
 if (datevalue ===''){

    setError(date,'vous devez remplir le champ')
   
        
    
    
 }else  {


   checkDate(datevalue)

 }
 //****email */
 if (emailvalue ===''){

    setError(email,'vous devez remplir le champ')
   
    
 }else if (!isEmail(emailvalue)){
    setError(email,'vous devez remplir correctement')
    

    }else {
   setSuccess(email)
 }
 //***password */
 if (passwordvalue ===''){

    setError(password,'vous devez remplir le champ')
    
 }else {

   setSuccess(password)
 }
 //****password2 */
 if (password2value ===''){

    setError(password2,'vous devez remplir le champ')
    
 }else if (passwordvalue !==password2value){

    setError(password2,'mont de pass incorrect')

 }else{
   setSuccess(password2)

 }


}

function setError(input,message){

    const formcontrol = input.parentElement;  // recuperer le prarent 
    const small =formcontrol.querySelector('small')// ciblé le message
    small.innerText= message
    // formcontrol.className='form-control error';// ajouter la class error
    formcontrol.classList.remove('success')
    
    formcontrol.classList.add('error')
      
}


function setSuccess(input){
    const formcontrol = input.parentElement; 
    // formcontrol.className='form-control success';// ajouter la class error
    formcontrol.classList.remove('error')
    
    formcontrol.classList.add('success')
  
    
}

function isEmail(email){

    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

function checkDate(input){

let newDate = new Date()
let nowyear = newDate.getFullYear()
let nowmonth= newDate.getMonth()+1;
let nowday = newDate.getDate()

  let dateBird = input.split('-')
  let dateBirdYear = dateBird[0]
  let dateBirdMonth = dateBird[1]
  let dateBirdDay = dateBird[2]

  let difYear = nowyear-dateBirdYear
  let difMonth = nowmonth - dateBirdMonth
  let difDay = nowday-dateBirdDay
  
  if (difYear>18) {

   setSuccess(date)
   


  }else if( difYear == 18 && ((difMonth >0) || (difMonth==0 && difDay>=0)) ){

    setSuccess(date)

  }else{

    setError(date,`vous n'avez pas 18 ans`)
   
  }
    // // console.log(dateBirdYear)
    // console.log(difMonth)
    // // console.log(dateBirdMonth)
    // console.log(difDay)
    // // console.log(dateBirdDay)

}







