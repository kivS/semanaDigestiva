$(document).ready(function(){

//         <Menu-click-Control>
$('#menu li a').click(function(e) {
	e.preventDefault();
	var link = $(this).prop('name');
	var pX = "";
	var cX = 0;
	switch(link){
		case 'd5':
		pX = projectX({date:5,areaC:8}).get();
		cX = projectX({date:5,areaC:8}).count();
		$('.content').html(getPageX(pX,cX,"SESSÃO PLENÁRIA - 5 de Junho"));

		pX = projectX({date:5,areaC:5}).get();
		cX = projectX({date:5,areaC:5}).count();
		$('.content').append(getPageX(pX,cX,"FÍGADO"));

		pX = projectX({date:5,areaC:3}).get();
		cX = projectX({date:5,areaC:3}).count();
		$('.content').append(getPageX(pX,cX,"DOENÇA INFLAMATÓRIA INTESTINAL"));

		pX = projectX({date:5,areaC:6}).get();
		cX = projectX({date:5,areaC:6}).count();
		$('.content').append(getPageX(pX,cX,"NSTANTÂNEOS/VÍDEOS"));

		pX = projectX({date:5,areaC:4}).get();
		cX = projectX({date:5,areaC:4}).count();
		$('.content').append(getPageX(pX,cX,"ENDOSCOPIA DIGESTIVA"));
		break;

		case 'd6':
		pX = projectX({date:6,areaC:3}).get();
		cX = projectX({date:6,areaC:3}).count();
		$('.content').html(getPageX(pX,cX,"DOENÇA INFLAMATÓRIA INTESTINAL - 6 de Junho"));

		pX = projectX({date:6,areaC:9}).get();
		cX = projectX({date:6,areaC:9}).count();
		$('.content').append(getPageX(pX,cX,"TUBO DIGESTIVO"));

		pX = projectX({date:6,areaC:1}).get();
		cX = projectX({date:6,areaC:1}).count();
		$('.content').append(getPageX(pX,cX,"CASOS CLÍNICOS INTERATIVOS"));

		pX = projectX({date:6,areaC:5}).get();
		cX = projectX({date:6,areaC:5}).count();
		$('.content').append(getPageX(pX,cX,"FÍGADO"));

		pX = projectX({date:6,areaC:7}).get();
		cX = projectX({date:6,areaC:7}).count();
		$('.content').append(getPageX(pX,cX,"PÂNCREAS E VIAS BILIARES"));

		pX = projectX({date:6,areaC:2}).get();
		cX = projectX({date:6,areaC:2}).count();
		$('.content').append(getPageX(pX,cX,"CIÊNCIA BÁSICA"));

		pX = projectX({date:6,areaC:4}).get();
		cX = projectX({date:6,areaC:4}).count();
		$('.content').append(getPageX(pX,cX,"ENDOSCOPIA DIGESTIVA"));
		break;

		case 'd7':
		pX = projectX({date:7,areaC:1}).get();
		cX = projectX({date:7,areaC:1}).count();
		$('.content').html(getPageX(pX,cX,"CASOS CLÍNICOS INTERATIVOS - 7 de Junho"));

		pX = projectX({date:7,areaC:9}).get();
		cX = projectX({date:7,areaC:9}).count();
		$('.content').append(getPageX(pX,cX,"TUBO DIGESTIVO"));

		pX = projectX({date:7,areaC:6}).get();
		cX = projectX({date:7,areaC:6}).count();
		$('.content').append(getPageX(pX,cX,"INSTANTÂNEOS/VÍDEOS"));
		break;

		case 'tema':
		pX = projectX({areaC:1}).get();
		cX = projectX({areaC:1}).count();
		$('.content').html(getPageX(pX,cX,"CASOS CLÍNICOS INTERATIVOS"));

		pX = projectX({areaC:2}).get();
		cX = projectX({areaC:2}).count();
		$('.content').append(getPageX(pX,cX,"CIÊNCIA BÁSICA"));

		pX = projectX({areaC:3}).get();
		cX = projectX({areaC:3}).count();
		$('.content').append(getPageX(pX,cX,"DOENÇA INFLAMATÓRIA INTESTINAL"));

		pX = projectX({areaC:4}).get();
		cX = projectX({areaC:4}).count();
		$('.content').append(getPageX(pX,cX,"ENDOSCOPIA DIGESTIVA"));

		pX = projectX({areaC:5}).get();
		cX = projectX({areaC:5}).count();
		$('.content').append(getPageX(pX,cX,"FÍGADO"));

		pX = projectX({areaC:6}).get();
		cX = projectX({areaC:6}).count();
		$('.content').append(getPageX(pX,cX,"INSTANTÂNEOS/VÍDEOS"));

		pX = projectX({areaC:7}).get();
		cX = projectX({areaC:7}).count();
		$('.content').append(getPageX(pX,cX,"PÂNCREAS E VIAS BILIARES"));

		pX = projectX({areaC:8}).get();
		cX = projectX({areaC:8}).count();
		$('.content').append(getPageX(pX,cX,"SESSÃO PLENÁRIA"));

		pX = projectX({areaC:9}).get();
		cX = projectX({areaC:9}).count();
		$('.content').append(getPageX(pX,cX,"TUBO DIGESTIVO"));
		break;
	}
	


});         
//         </Menu-click-Control>



});



