$(document).ready(function(){

//         <Menu-click-Control>
$('#menu li a').click(function(e) {
	e.preventDefault();
	var link = $(this).prop('name');

	switch(link){
		case 'd5':
		console.log(projectX({date:5}).get());
		break;
		case 'd6':
		console.log(projectX({date:6}).get());
		break;
		case 'd7':
		console.log(projectX({date:7}).get());
		break;
	}
	console.log(link);
var tst = '';
tst = '<div><h1>Chocolat Acid</h1><div><ul class="alist">';
for(var i=1;i<100;i++){
tst+= '<li><p class="subtitle"><a href="#">'+i+'. Bonbon powder caramels oat cake tiramisu chupa chups lemon drops jujubes.</a></p> \
                        <p class="subline">Biscuit lemon drops pie topping. Chupa chups sweet roll jelly biscuit jelly beans cotton candy.</li>';
}
tst+= '</ul></div></div>';
	$('.content').html(tst);

});         
//         </Menu-click-Control>


console.log("CustomX is on and ready to party");

});



