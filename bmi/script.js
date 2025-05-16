const form=document.querySelector('form')
//  const height= parseInt(document.querySelector('#height').value)
//    const weight= parseInt(document.querySelector('#weight').value)
//if we put this here it will store empty values in height and weight

form.addEventListener('submit', function(e){
    e.preventDefault()
   const height= parseInt(document.querySelector('#height').value)
   const weight= parseInt(document.querySelector('#weight').value)
   const results= document.querySelector('#results')

   if (height==='' || height<0 || isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`
   }
  else if (weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`
   }
   else{
    const bmi=(weight/ ((height*height)/10000)).toFixed(2)
        if (bmi<18.6){
    results.innerHTML=`<span>${bmi} The user is under weight</span>`
        }
        if (bmi>=18.6 && bmi<=24.9){
    results.innerHTML=`<span>${bmi} The user is normal weight</span>`
        }
        if (bmi>24.9){
    results.innerHTML=`<span>${bmi} The user is over weight</span>`
        }

   }

})