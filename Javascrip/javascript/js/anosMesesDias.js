
var dias = parseInt(prompt('introduce tus dias de vide pofavor',0));
var ano=365;
var meseano=12;
var mes=30;

var anosvividos=dias/ano;
var anosvividosfijos=Math.floor(anosvividos);
var mesesvividos=anosvividos-anosvividosfijos;

mesesvividos=(mesesvividos*meseano);
var mesesvividosfijos=Math.floor(mesesvividos);
var dato=mesesvividosfijos*30;
var otrodato=mesesvividos;
var diasvividos=mesesvividos-mesesvividosfijos;

console.log("Los anos son : "+anosvividosfijos+"\n"+
"Los meses son : "+mesesvividosfijos+
"\n"+"Los dias vividos son : "+diasvividos*30+"\n "+mesesvividos);
console.log(dato+"\n"+otrodato);