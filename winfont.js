var maxW = 600;
var letmax = 24;
var FtSz = maxW/letmax;
var str = "По мнению Макфола, небольшая доля ответственности лежит на Америке, но главными виновниками сложившейся ситуации являются Владимир Путин и авторитарный поворот России. Он прослеживает эволюцию хаоса, начиная от Горбачева и Ельцина до Путина, утверждая, что российско-американские отношения были бы сейчас гораздо лучше, если бы в стране существовала более демократическая политическая система.26.06.2018 The National Interest, США";
var arr = str.split(' ');
var arr2 = [];
var letstr = arr[0];

winfont.style.maxWidth = maxW+maxW/50+'px';

for (var i = 1; i < arr.length; i++) 
{
	if (letstr.length + arr[i].length > letmax) 
	{
		arr2.push(letstr);
		letstr = arr[i];
	}
	else letstr += ' ' + arr[i];
}
arr2.push(letstr);

for (var i = 0; i < arr2.length; i++)
{
	var div = document.createElement('div');
	div.innerHTML = arr2[i];
	div.classList = 'win';
	winfont.appendChild(div);
}

var divarr = document.getElementsByClassName('win');

for (var i = 0; i < divarr.length; i++) {
	Wrec(divarr[i],FtSz,200);
	console.log('-------');
}

function Wrec(el,FtSz,cf) 
{
	el.style.fontSize = Math.round(FtSz)+'px';
	var elW = el.clientWidth;
	console.log('FtSz: ',FtSz);
	console.log('elW: ',elW);
	cf = cf / 2;
	if ( cf < 0.1 ) return;
	else if ( elW < maxW ) FtSz = FtSz + cf;
	else FtSz = FtSz - cf;
	console.log('cf: ',cf);
	console.log('-----FtSz: ',FtSz,'------');
	Wrec( el, FtSz, cf );
}