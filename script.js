    var txtUser = document.getElementById('txtUser');
    var txtPass = document.getElementById('txtPass');
    var btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
    

        if(txtUser.value === "" || txtPass.value === ""){
            alert('Preencha todos os campos');
        }
     

    });