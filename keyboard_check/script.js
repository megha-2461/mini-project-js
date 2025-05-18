let insert=document.getElementById('insert')
window.addEventListener('keydown', (e)=>{
    insert.innerHTML=`<div class='insert'>    
    <table>
        <tr>
            <th>key</th>
            <th>keyCode</th>
            <th>Code</th>
        </tr>
         <tr>
            <td>${e.key===' ' ? 'space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
        </div>`
        ;

});