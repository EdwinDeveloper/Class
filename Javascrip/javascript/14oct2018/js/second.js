var usuarios=[];
var pri= document.getElementsByClassName('principal')[0];
fetch('https://reqres.in/api/users')
.then(data => data.json())
.then(users => {
    usuarios=users.data;
    // for(var i in data){
    //     console.log(i);
    // }
    for(var i in usuarios){
        console.log(usuarios[i].first_name+";"+usuarios[i].last_name);
        var node= document.createTextNode(usuarios[i].first_name);
        pri.appendChild(node);
    }
    console.log(usuarios);
});