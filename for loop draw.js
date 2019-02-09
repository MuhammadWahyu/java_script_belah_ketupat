function piramid() {
var n = 5    
for(var i=0; i < n; i++){
    var str = '';
     for(var j=1; j < n-i ; j++){
        str = str + ' ';
    }
    for(var k=1; k<=(2*i+1); k++){
        str = str + '*'
    }
console.log(str);    
}
var y = n - 1
var z = '';
for(var i = 1 ; i <= y; i++){
    for(var j = 1 ; j <= i ; j++){
        z += ' ';
    }
    for(var k = i ; k <= y ; k++ ){
        z += '*';
    }
    for(var l = i+1 ; l<= y ; l++){
        z += '*'
    }
    z+='\n'
}
console.log(z)
}
piramid();