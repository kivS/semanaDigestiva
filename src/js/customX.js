$(document).ready(function(){

//         <Menu-click-Control>
$('#menu li a').click(function(e) {
	e.preventDefault();
	var link = $(this).prop('name');
	var pX = "";
	var cX = 0;
	switch(link){

		case 'home':
		pX = multiline(function(){/*!
			<div>
					<h1 class="hideMe">Chocolat Acid</h1>
                <div>
                	<img src="src/img/home.jpg" width="811" height="307" alt="comunicacoes" title="comunicacoes">
                    <p class="legend">Consulta de todas as comunicações orais e posters apresentados na Semana Digestiva 2014.</p>
                	
			  </div></div> 
		*/});
		$('.content').html(pX);
		break;
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

		case 'p1':
		 pX = multiline(function() {/*!
		  <div>
					<h1>Posters – Casos Clínicos </h1>
                <div>
                	<ul class="alist">
                        <li><p class="subtitle"><a target="_blank" href="src/docs/516.pdf">CC1. SÍNDROME DE RAMSAY-HUNT EM DOENTE COM DOENÇA DE CROHN SOB ADALIMUMAB.</a></p>
                        <p class="subline">Santos-Antunes J., CR Nunes A., Macedo G.</li>
                        
                        <li><p class="subtitle"><a target="_blank" href="src/docs/933.pdf">CC2. LINFOMA DE HOGKIN EM HOMEM COM DOENÇA DE CROHN SOB INFLIXIMAB E TRATAMENTO PRÉVIO COM AZATIOPRINA.</a></p>
                        <p class="subline">Carvalho D., Russo P., Bernardes C., Saiote J., Ramos G., Borges N., Ribeiro P., Ramos J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/518.pdf">CCC3. FEBRE ESCARONODULAR EM DOENTE COM DOENÇA DE CROHN SOB ADALIMUMAB.</a></p>
                        <p class="subline">Santos-Antunes J., CR Nunes A., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/682.pdf">CC4. O IMPACTO DA INFECÇÃO POR CMV NA DOENÇA DE CROHN.</a></p>
                        <p class="subline">Santos-Antunes J., Magro F., Macedo G.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/677.pdf">CC5. LESÕES CUTÂNEAS NA DOENÇA INFLAMATÓRIA INTESTINAL: A PROPÓSITO DE UM CASO CLÍNICO.</a></p>
                        <p class="subline">Sousa, P., Santos, P.M., Cravo, M., Tavares, L., Velosa, J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/901.pdf">CC6. LIDANDO COM AS COMPLICAÇÕES DO INTESTINO CURTO NA DOENÇA DE CROHN.</a></p>
                        <p class="subline">Meireles L., Fernandes S., Sousa P., Moura M., Correia L., Santos P., Vieira C., Fatela N., Antunes T., Cortez Pinto H., Serejo F., Velosa J.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/907.pdf">CC7. UM DESAFIO CLÍNICO E TERAPÊUTICO.</a></p>
                        <p class="subline">Túlio, M., Chapim I., Moneti V., Nascimento C., Bana T., Chagas C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/882.pdf">CC8. ANEMIA FERROPÉNICA: COMPLICAÇÃO RARA DO DIVERTÍCULO DE MECKEL.</a></p>
                        <p class="subline">Campos S., Giestas S., Cardoso R., Martins R., Freire P., Almeida N., Figueiredo P., Portela F., Leite J., Sofia C.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/975.pdf">CC9. PORTADORA SINTOMÁTICO DE DOENÇA GRANULOMATOSA CRÓNICA OU TUBERCULOSE INTESTINAL?</a></p>
                        <p class="subline">Coelho R., Sarmento A., Magro F., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/799.pdf">CC10. ENTERITE EOSINOFÍLICA - UMA CAUSA INVULGAR DE DOR ABDOMINAL.</a></p>
                        <p class="subline">Leitão C., Santos A., Pinto J., Ribeiro H., Pereira B., Caldeira A., Pereira E., Tristan J., Sousa R., Banhudo A.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/860.pdf">CC11. ATINGIMENTO INTESTINAL DA PÚRPURA HENOCH-SCHÖNLEIN NUM ADULTO.</a></p>
                        <p class="subline">Campos S., Gouveia M., Gregório C., Gomes D., Sofia C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/766.pdf">CC12. INVAGINAÇÃO INTESTINAL - UMA MANIFESTAÇÃO DA DOENÇA CELÍACA?</a></p>
                        <p class="subline">Gouveia C., Castro L., Gomes F.P., Borges M.J., Gonçalves R.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/873.pdf">CC13. SÍNDROME DE HEYDE: ENTIDADE FREQUENTEMENTE ESQUECIDA NA HEMORRAGIA GASTROINTESTINAL.</a></p>
                        <p class="subline">Campos S., Gouveia M., Gregório C., Gomes D., Sofia C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/892.pdf">CC14. ILEÍTE TERMINAL NÃO É SINÓNIMO DE DOENÇA DE CROHN.</a></p>
                        <p class="subline">Campos S., Oliveira A., Lérias C., Pina Cabral JE., Sofia C.</li> 

                        <li><p class="subtitle"><a>CC15. RETIRADO A PEDIDO DO AUTOR.</a></p>
                        </li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/963.pdf"> CC16. DESCONEXÃO NEURO-INTESTINAL: PROCESSO IMUNOMEDIADO?</a></p>
                        <p class="subline">Silva Fernandes J., Ramos R. , Fernandes D., Duarte P. , Vicente C., Gomes M. , Casteleiro Alves C. , Cruto C</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/795.pdf">CC17. TRATAMENTO COM SIROLIMUS DE UM DOENTE COM SÍNDROME DE BEAN.</a></p>
                        <p class="subline">Cardoso H., Amil J., Silva M., Vilas Boas F., Trindade E., Tavares M., Macedo G.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/565.pdf">CC18. DÉFICE CONGÉNITO DE SACARASE-ISOMALTASE: RELATO DE UM CASO.</a></p>
                        <p class="subline">Rita Santos Silva, Marta Tavares, Eunice Trindade, Jorge Amil Dias</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/528.pdf">CC19. LESÃO SUBEPITELIAL DUODENAL EM DOENTE JOVEM: UM RESULTADO INESPERADO!</a></p>
                        <p class="subline">Marques S., Carmo J., Bispo M., Pinto-Marques P., Serra D.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/803.pdf">CC20. SÍNDROME DE KLIPPEL-TRENAUNAY-WEBER: UMA CAUSA RARA DE HEMATOQUÉZIAS.</a></p>
                        <p class="subline">Rodrigues J., Chapim I., Túlio M., Barreiro P., Chagas C.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/918.pdf">CC21. SCHWANNOMA CÓLICO – A PROPÓSITO DE UM CASO.</a></p>
                        <p class="subline">Marques S., Carmo J., Bispo M., Pinto-Marques P., Serra D.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/490.pdf">CC22. HEMATOMA ESPONTÂNEO DO ÂNGULO ESPLÉNICO – UMA CAUSA INVULGAR DE HEMORRAGIA DIGESTIVA.</a></p>
                        <p class="subline">Fernandes S, Gonçalves A., Correia L., Carrilho Ribeiro L., Velosa J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/759.pdf">CC23. O DIAGNÓSTICO SEGUNDO CÁPSULA ENDOSCÓPICA.</a></p>
                        <p class="subline">Capela T, Silva MJ, Costa M, Carvalho D, Russo P, Saiote J, Bentes T.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/730.pdf">CC24. UM CASO DE DOR ABDOMINAL.</a></p>
                        <p class="subline">Costa S., Soares J.B., Gonçalves B., Fernandes D., Peixoto P., Gonçalves R.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/1002.pdf">CC25. UMA CAUSA INESPERADA DE HEMORRAGIA DIGESTIVA BAIXA</a></p>
                        <p class="subline">Lourenço L.C., Oliveira A.M., Cardoso F.S., Branco J., Horta D., Reis J., Deus J.R.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/788.pdf">CC26. DOR ABDOMINAL RECORRENTE EM DOENTE JOVEM – UM RARO CASO DE ENDOMETRIOSE INTESTINAL ISOLADA.</a></p>
                        <p class="subline">Rodrigues J., Carvalho L. , Santos S., Barreiro P., Pinto Marques P., Chagas C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/631.pdf">CC27. UMA CAUSA POUCO FREQUENTE DE HEMORRAGIA DIGESTIVA OBSCURA NUM ADULTO JOVEM COM MÚLTIPLAS PATOLOGIAS GASTROINTESTINAIS.</a></p>
                        <p class="subline">Ribeiro I., Pinho R., Rodrigues A., Pinto Pais T., Silva J., Ponte A., Alberto L., LeiteS., Carvalho J.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/733.pdf">CC28. UM CASO DE DISFAGIA E IMPACTAÇÃO ALIMENTAR RECORRENTE.</a></p>
                        <p class="subline">Costa S., Peixoto P., Gonçalves B., Fernandes D., Gonçalves R.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/762.pdf">CC29. DISFAGIA POR CÁUSTICO- PARA LÁ DA PERSISTÊNCIA DA TÉCNICA.</a></p>
                        <p class="subline">Capela T, Russo P, Carvalho D, Costa M, Silva MJ, Bettencourt MJ, Seves I, Canena J.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/504.pdf">CC30. ESOFAGITE IATROGÉNICA DO TIPO REACÇÃO DE CORPO ESTRANHO.</a></p>
                        <p class="subline">Peixoto, A., Andrade A.P., Silva M., Ramalho R., Macedo G. </li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/720.pdf">CC31. SÍNDROME DE BOUVERET - RESOLUÇÃO ENDOSCÓPICA.</a></p>
                        <p class="subline">Costa S., Costa Dias V., Gonçalves B., Fernandes D., Machado A., Peixoto P., Gonçalves R.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/900.pdf">CC32. PNEUMATOSE CÓLICA - A PROPÓSITO DE UM CASO.</a></p>
                        <p class="subline">Peixoto, A., Andrade A.P., Silva M., Ramalho R., Macedo G. </li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/720.pdf">CC31. SÍNDROME DE BOUVERET - RESOLUÇÃO ENDOSCÓPICA.</a></p>
                        <p class="subline">Costa S., Costa Dias V., Gonçalves B., Fernandes D., Machado A., Peixoto P., Gonçalves R.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/900.pdf">CC32. PNEUMATOSE CÓLICA - A PROPÓSITO DE UM CASO.</a></p>
                        <p class="subline">Costa M., Silva M.J., Capela T., Russo P., Carvalho D., Morgado C., Andrade D., Coimbra J.</li>                           
                           
                        <li><p class="subtitle"><a target="_blank" href="src/docs/482.pdf">CC33. LESÕES FOCAIS HEPÁTICAS – DIAGNÓSTICO INESPERADO.</a></p>
                        <p class="subline">Vilas-Boas F., Cardoso H., Cristino H., Lopes J., Carneiro F., Macedo G.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/756.pdf">CC34. HEPATOPATIA GLICOGÉNICA: UM DIAGNÓSTICO DIFERENCIAL DE HEPATITE AGUDA NA DIABETES MELLITUS.</a></p>
                        <p class="subline">Silva M., Cardoso H., Rodrigues S., Lopes J., Oliveira J., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/758.pdf">CC35. ASCITE EM DOENTE VHC POSITIVO. UM DIAGNÓSTICO RARO.</a></p>
                        <p class="subline">Freitas, C, Sousa Andrade, C, Costa Neves, M, Fernandes, J, Capelinha, AF, Teixeira, R.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/582.pdf">CC36. AMINOTRANSFERASES PERSISTENTEMENTE ELEVADAS – PENSAR PARA ALÉM DO FIGADO.</a></p>
                        <p class="subline">Rodrigues-Pinto E., Pereira P., Macedo G.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/936.pdf">CC37. OSTEOARTROPATIA HIPERTRÓFICA EM GÉMEOS COM COLESTASE INTRAHEPÁTICA FAMILIAR DO TIPO 1.</a></p>
                        <p class="subline">Gonçalves C., Ferreira S., Ferreira S., Estanqueiro P., Lopes AI., Gonçalves I.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/879.pdf">CC38. DOENÇA DE WILSON EM CRIANÇA COM EPILEPSIA: QUE TERAPÊUTICA?</a></p>
                        <p class="subline">Oliveira G., Robalo C., Pereira C., Garcia P., Nobre S., Ferreira S., Gonçalves I., Diogo L.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/646.pdf">CC39. COLANGIOCARCINOMA SARCOMATÓIDE INTRAHEPÁTICO.</a></p>
                        <p class="subline">Sintra SN, Abrantes C, Costa R, Correia L, Saraiva N, Filipe C, Simão A, Carvalho A, Silva MR, Cipriano MA</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/769.pdf">CC40. MASSA HEPÁTICA DE CARACTERÍSTICAS ATÍPICAS – UM DESAFIO DIAGNÓSTICO.</a></p>
                        <p class="subline">Queirós P., Eliseu L., Brito J., Mega R., Ribeiro V., Lázaro A., Figueiredo A., Eusébio M., Antunes A.G., Vaz A.M., Contente L., Guerreiro H.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/475.pdf">CC41. ICTERÍCIA.</a></p>
                        <p class="subline">Meireles L., Sousa P., Vitor S., Santos P., Serejo F., Velosa J.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/763.pdf">CC42. VARIZES ECTÓPICAS EM DOENTE CRÍTICO- A FUSÃO DA CIÊNCIA COM A ARTE.</a></p>
                        <p class="subline">Capela T, Costa M, Silva MJ, Carvalho D, Russo P, Barbosa J, David Marques, A.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/836.pdf">CC43. DOR ABDOMINAL NO DOENTE COM CIRROSE HEPÁTICA: UM DESAFIO DIAGNÓSTICO.</a></p>
                        <p class="subline">Ferreira AO, Nunes J, Sousa M, Duarte S.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/655.pdf">CC44. UMA CAUSA IMPROVÁVEL DE ASCITE: QUANDO A LAPAROSCOPIA É O ÚNICO CAMINHO.</a></p>
                        <p class="subline">Alves A.R., Cardoso R., Giestas S., Agostinho C., Souto P., Camacho E., Caetano Oliveira R., Cipriano M.A., Campos J.C., Sofia C.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/668.pdf">CC45. ASCITE EM DOENTES NÃO CIRRÓTICOS: ATENÇÃO À GRANDE IMITADORA.</a></p>
                        <p class="subline">Rodrigues R.V., Faias S., Ramalho M., Videira Z., Dias Pereira A.</li> 
  
                        <li><p class="subtitle"><a target="_blank" href="src/docs/542.pdf">CC46. DOENÇA DE WEIL, UM CASO CLÍNICO.</a></p>
                        <p class="subline">Carvalho J.R., Patita M., Canhoto M., Silva F., Barbeiro S., Atalaia C., Vasconcelos H.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/808.pdf">CC47. HIPERTENSÃO PORTAL ASSOCIADA A DOENÇA MIELOPROLIFERATIVA.</a></p>
                        <p class="subline">Ribeiro S., Freire R., Mangualde J., Cardoso C., Alves A.L., Cremers I., Oliveira A.P.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/553.pdf">CC48. DOR TORÁCICA INESPECÍFICA – IMPACTO DO ATRASO NO DIAGNÓSTICO.</a></p>
                        <p class="subline">Barbeiro S., Martins C., Canhoto M., Gonçalves C., Cotrim I., Arroja B., Silva F. e Vasconcelos H.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/683.pdf">CC49. DISFAGIA COM INICIO EM IDADE PEDIÁTRICA: UM MANEJO DESAFIANTE.</a></p>
                        <p class="subline">Sousa, P., Moura, C.M., Santos, P.M., Lopes, J., Palma, R., Serejo, F., Velosa, J.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/652.pdf">CC50. ESOFAGITE EOSINOFÍLICA E DOENÇA CELÍACA: A PROPÓSITO DE UM CASO CLÍNICO.</a></p>
                        <p class="subline">Vaz A.M., Eusébio M., Antunes A., Queirós P., Sousa A.L. , Sousa D., Ornelas R., Guerreiro H.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/666.pdf">CC51. OBSTIPAÇÃO INTRATÁVEL: RELATO DE UM CASO.</a></p>
                        <p class="subline">Sousa P., Ministro P., Portela F., Araújo R., Cancela E., Castanheira A., Silva A.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/865.pdf">CC52. UM DIAGNÓSTICO RARO DE MASSA ABDOMINAL.</a></p>
                        <p class="subline">Martins C., Ribeiro S., Teixeira C., Trabulo D., Cardoso C., Freire R., Gamito E., Oliveira A.P.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/1003.pdf">CC53. TUBERCULOSE PERITONEAL EM DOENTE HIV.</a></p>
                        <p class="subline">Chapim I., Manuel G., Tavares V., Freitas A., Andrade N., Abreu A., Neto M., Barata F.</li>

                        <li><p class="subtitle"><a >CC54. RETIRADO A PEDIDO DO AUTOR.</a></p>
                        </li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/765.pdf">CC55. CARCINOMA GÁSTRICO TIPO HEPATÓIDE - UM CASO MUITO RARO E DESAFIANTE.</a></p>
                        <p class="subline">Martins D., Pinho J., Sousa P., Araújo R., Cancela E., Castanheira A., Ministro P., Silva A.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/814.pdf">CC56. ISQUEMIA GÁSTRICA – A PONTA DO ICEBERG TROMBÓTICO EM DOENTE COM NEOPLASIA DO RETO SOB QUIMIOTERAPIA.</a></p>
                        <p class="subline">Martins D., Pinho J., Sousa P., Araújo R., Cancela E., Castanheira A., Ministro P., Silva A.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/835.pdf">CC57. DIAGNÓSTICO INCIDENTAL DE LINFOMA DO MANTO NA RETOSSIGMOIDOSCOPIA.</a></p>
                        <p class="subline">Lage J., Pimentel-Nunes P., Menezes D., Luís A., Brandão C., Moreira-Dias L.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/779.pdf">CC58. LINFOMA PRIMÁRIO DO RECTO - UM CASO CLÍNICO.</a></p>
                        <p class="subline">Antunes A.G., Eusébio M., Vaz A.M., Queirós P., Cadillá J., Peixe B., Guerreiro H.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/941.pdf">CC59. APRESENTAÇÃO ATÍPICA DE CARCINOMA PAVIMENTOCELULAR DO CANAL ANAL.</a></p>
                        <p class="subline">Martins C., Ribeiro S., Teixeira C., Mangualde J., Gamito E., Oliveira A.P.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/988.pdf">CC60. TUMOR GIGANTE.</a></p>
                        <p class="subline">Silva Fernandes J., Ramos R., Fernandes D., Duarte P. , Vicente C. , Silveira A., Casteleiro Alves C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/919.pdf">CC61. LESÃO SUBEPITELIAL DO CANAL ANAL – A PROPÓSITO DE UM CASO.</a></p>
                        <p class="subline">Eusébio, M., Antunes, A.G., Vaz, A.M., Queirós P., Caldeira P., Peixe B., Vieira A., Guerreiro H.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/449.pdf">CC62. GROOVE PANCREATITIS.</a></p>
                        <p class="subline">Meireles L., Freire S., Barreira J., Coutinho A., Velhinho E., Neves B.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/657.pdf">CC63. PANCREATITE AGUDA RECORRENTE EM MULHER JOVEM.</a></p>
                        <p class="subline">Moleiro J, Faias S, Piteira Barros F, Dias Pereira A.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/885.pdf">CC64. PANCREATITE AGUDA POR DUAS ETIOLOGIAS RARAS: HIPERCALCÉMIA E REATIVAÇÃO DE CITOMEGALOVÍRUS EM DOENTE SOB IMUNOSSUPRESSÃO.</a></p>
                        <p class="subline">Gravito-Soares M., Gravito-Soares E., Aragão A., Porto J., Santos F., Serviço de Gastrenterologia, Centro Hospitalar e Universitário de Coimbra, E.P.E., Serviço de Medicina Interna, Centro Hospitalar e Universitário de Coimbra, E.P.E.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/688.pdf">CC65. PANCREATITE AGUDA ALITÍASICA: UM MANEJO INFREQUENTE.</a></p>
                        <p class="subline">Sousa,P., Vieira, C.L., Nunes,J., Serejo,F., Velosa, J.</li>

					</ul>
			  </div></div>
		*/});
	$('.content').html(pX);
		break;

		case 'p2':
		pX = multiline(function(){/*!
			 <div>
                    <h1>Posters – Ciência Básica</h1>
                <div>
                    <ul class="alist">
                        <li><p class="subtitle"><a target="_blank" href="src/docs/674.pdf">P128. RADIOTERAPIA METABÓLICA NO COLANGIOCARCINOMA: SERÁ ESTA UMA ALTERNATIVA VÁLIDA?</a></p>
                        <p class="subline">Fernandes A., Brito A.F., Ribeiro A.C., Abrantes A.M., Laranjo M., Santos K., Gonçalves A.C., Sarmento-Ribeiro A.B., Tralhão J.G., Castro-Sousa F., Sofia C., Botelho M.F.</li>
                        
                        <li><p class="subtitle"><a target="_blank" href="src/docs/938.pdf">P129.ALTERAÇÕES NOS GENES MMR, MGMT E APC SUGEREM ENVOLVIMENTO DE ERROS POR STRESS OXIDATIVO NA SUSCEPTIBILIDADE PARA A POLIPOSE SERREADA.</a></p>
                        <p class="subline">Silva P., Albuquerque C., Lage P., Fonseca R., Rodrigues P., Ferreira S., Claro I., Chaves P., Dias Pereira A.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/643.pdf">P130. INIBIÇÃO DO GLUT-1: UMA OPÇÃO TERAPÊUTICA EM CARCINOMA HEPATOCELULAR?</a></p>
                        <p class="subline">Brito A.F., Abrantes A.M., Laranjo M., Gonçalves A.C., Sarmento-Ribeiro A.B., Castro-Sousa F., Tralhão J.G., Botelho M.F.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/647.pdf">P131. ESTRATÉGIAS ANTI-BCL-2 NO COMBATE AO COLANGIOCARCINOMA: SERÁ O GOSSIPOL UMA OPÇÃO?</a></p>
                        <p class="subline">Brito A.F., Abrantes A.M., Gonçalves A.C., Sarmento-Ribeiro A.B., Tralhão, Botelho M.F.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/547.pdf">P132. DOCETAXEL & ADENOCARCINOMA DO PÂNCREAS: MONOTERAPIA E TERAPIA COMBINADA COM 177LU-DOTA-TATE.</a></p>
                        <p class="subline">Gradiz R, Mamede AC, Abrantes AM, Brito AF, Guerra, Gonçalves AC , Sarmento-Ribeiro AB, Botelho MF, Mota-Pinto A (1,2)</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/972.pdf">P133. INFLUÊNCIA DA LOCALIZAÇÃO TUMORAL NO PERFIL METABÓLICO DO CANCRO DO CÓLON – ESTUDO IN VITRO.</a></p>
                        <p class="subline">Abrantes A.M., Pires A.S., Tavares L., Mendes C., Grazina M., Albuquerque de Carvalho R., Botelho M.F.</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/615.pdf">P134. EFEITO SINÉRGICO ENTRE O ÁCIDO ASCÓRBICO E A QUIMIOTERAPIA CONVENCIONAL NO TRATAMENTO DO CANCRO DO CÓLON.</a></p>
                        <p class="subline">Pires A.S., Marques C.R., Encarnação J.C., Gonçalves T.J., Casalta-Lopes J.E., Gonçalves A.C. Abrantes A.M., Sarmento-Ribeiro A.B., Botelho M.F.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/679.pdf">P135. PROTEÍNAS DA MEMBRANA AMNIÓTICA COM EFEITO ANTI-CANCERÍGENO: A SÍNTESE PROTEICA E O ADN COMO ALVO NO CARCINOMA HEPATOCELULAR.</a></p>
                        <p class="subline">Guerra S, Mamede AC, K Santos, Brito AF, Laranjo M, Carvalho MJ, Pires AS, Moura P, Abrantes AM, Maia CJ , Botelho MF</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/969.pdf">P136. ALTERAÇÕES INDUZIDAS PELA HIPÓXIA NO METABOLISMO DE TRÊS LINHAS DE CÉLULAS DE CANCRO DO CÓLON.</a></p>
                        <p class="subline">Abrantes A.M., Pires A.S., Laranjo M., Mamede A.C., Brito A.F., Casalta-Lopes J.E., Gonçalves A.C., Sarmento-Ribeiro A.B., Botelho M.F.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/678.pdf">P137. PROTEÍNAS DA MEMBRANA AMNIÓTICA COM EFEITO ANTI-CANCERÍGENO: IDENTIFICAÇÃO E TERAPIA COMBINADA NO CARCINOMA HEPATOCELULAR.</a></p>
                        <p class="subline">Mamede AC, Guerra S, Brito AF, Laranjo M, Carvalho MJ, Pires AS, Moura P, Abrantes AM, Maia CJ, Botelho MF</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/614.pdf">P138. SERÁ QUE O BUTIRATO DE SÓDIO AFETA A CAPTAÇÃO DE 18F-FDG POR LINHAS CELULARES DE CANCRO DO CÓLON?</a></p>
                        <p class="subline">Gonçalves T.J., Pires A.S., Encarnação J.C., Teixo R., Brito A.F., Abrantes A.M., Botelho M.F.</li>     
  

                    </ul>
              </div></div>
		*/});
		$('.content').html(pX);
		break;

		case 'p3':
		pX = multiline(function(){/*!
			 <div>
                    <h1>Posters – Doença Inflamatória Intestinal</h1>
                <div>
                    <ul class="alist">
                        <li><p class="subtitle"><a target="_blank" href="src/docs/825.pdf">P139. PREVALÊNCIA DE DISLIPIDEMIA NA DOENÇA INFLAMATÓRIA INTESTINAL.</a></p>
                        <p class="subline">Fernandes S., Sousa P., Moura M., Correia L., Moura Santos P., Valente A., Rita Gonçalves A., Baldaia C., Velosa J.</li>
                        
                        <li><p class="subtitle"><a target="_blank" href="src/docs/538.pdf">P140. NÍVEIS SÉRICOS E ANTICORPOS ANTI-INFLIXIMAB: APLICAÇÃO NA PRÁTICA CLÍNICA.</a></p>
                        <p class="subline">Moleiro J, Fidalgo C, Rosa I, Pereira da Silva J, Dias Pereira A</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/686.pdf">P141. FENÓTIPO E NECESSIDADE DE TERAPÊUTICA ANTI-TNF COMO DETERMINANTES DE RISCO DE EXPOSIÇÃO À RADIAÇÃO NA DOENÇA DE CROHN.</a></p>
                        <p class="subline">Coelho R., Guimarães L., Lopes S., Magro F., Macedo G.</li>
                       
                        <li><p class="subtitle"><a target="_blank" href="src/docs/778.pdf">P142. CARACTERÍSTICAS CLÍNICAS E FENÓTIPO DA DOENÇA DE CROHN NOS IDOSOS: EXISTIRÃO DIFERENÇAS RELATIVAMENTE AOS ADULTOS JOVENS?</a></p>
                        <p class="subline">Ribeiro I., Carvalho J., Amaral I., Rodrigues A., Alberto L., Silva J., Pais T., Fernandes C., Ponte A., Proença L., Pinho R., Fernandes S., Freitas T., Silva AP., Leite S.</li>      
                        
                        <li><p class="subtitle"><a target="_blank" href="src/docs/999.pdf">P143. TERAPÊUTICA BIOLÓGICA NA DOENÇA INFLAMATÓRIA INTESTINAL: 11 ANOS DE EXPERIÊNCIA.</a></p>
                        <p class="subline">Rodrigues A, Lago P, Caetano C, Salgado M, Pedroto I</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/749.pdf">P144. CURVA DE APRENDIZAGEM DA CROMOENDOSCOPIA NO RASTREIO DA COLITE ULCEROSA.</a></p>
                        <p class="subline">Freire P., Figueiredo P., Cardoso R., Donato M.M., Ferreira M., Mendes S., Cipriano M.A., Silva M.R., Ferreira A.M., Vasconcelos H., Portela F., Sofia C.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/632.pdf">P145. PRÁTICAS DE VIGILÂNCIA DA PELE EM DOENTES COM DOENÇA INFLAMATÓRIA DO INTESTINO (DII) EM PORTUGAL: RESULTADOS DE UM INQUÉRITO NACIONAL.</a></p>
                        <p class="subline">Torres J, Rosa I., Ferreira A, Cravo M, Cotter J, Matos L., Magro F., SPG e GEDII</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/524.pdf">P146. FACTORES PREDITIVOS DE INCAPACIDADE NA DOENÇA DE CROHN.</a></p>
                        <p class="subline">Magalhães J., Dias de Castro F., Boal Carvalho P., Leite S., Moreira MJ., Cotter J.</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/859.pdf">P147. SATISFAÇÃO E CONSIDERAÇÕES SOBRE A TERAPÊUTICA ANTI-TNF ALFA NA DOENÇA DE CROHN: A PERSPETIVA DO DOENTE.</a></p>
                        <p class="subline">Fernandes C., Pais T., Ribeiro I., Silva J., Ponte A., Pinho R., Silva AP., Rodrigues A., Proença L., Alberto L., Carvalho J.</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/931.pdf">P148. DILATAÇÃO ENDOSCÓPICA POR BALÃO NA DOENÇA DE CROHN: O IMPACTO REAL NA EVOLUÇÃO CLÍNICA DA DOENÇA.</a></p>
                        <p class="subline">Lopes S., Andrade P., Rodrigues-Pinto E., Vilas-Boas F., Magro F., Macedo G.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/747.pdf">P149. NÍVEIS SÉRICOS E ANTICORPOS ANTI-INFLIXIMAB: SERÃO ÚTEIS NA PRÁTICA CLÍNICA?</a></p>
                        <p class="subline">Patrícia Sousa,P., Fernandes,S., Moura,C.M., Baldaia,C., Gonçalves,A.R., Valente,A., Santos,P.M., Correia,L., Serejo, F., Velosa, J.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/526.pdf">P150. RESULTADOS A LONGO PRAZO DA AZATIOPRINA NA DOENÇA DE CROHN: EXPERIÊNCIA DE UM CENTRO TERCIÁRIO.</a></p>
                        <p class="subline">Santos-Antunes J., Magro F., Rodrigues-Pinto E., Vilas-Boas F., Coelho R., Ribeiro OS., Lopes S., Macedo G</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/639.pdf">P151. COLITE ULCEROSA: IMPACTO DA IDADE NA HISTÓRIA NATURAL DA DOENÇA.</a></p>
                        <p class="subline">Cúrdia Gonçalves T., Dias de Castro F., Firmino Machado J., Moreira M.J., Rosa B., Cotter J.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/723.pdf">P152. INFEÇÃO POR CLOSTRIDIUM DIFFICILE EM DOENTES INTERNADOS POR COLITE ULCEROSA AGUDIZADA: INCIDÊNCIA, FATORES DE RISCO E PROGNÓSTICO.</a></p>
                        <p class="subline">Alves A.R., Cardoso R., Elvas L., Freire P., Mendes S., Ferreira M., Portela F., Sofia C.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/929.pdf">P153. RECORRÊNCIA ENDOSCÓPICA APÓS ILEOCOLECTOMIA NA DOENÇA DE CROHN.</a></p>
                        <p class="subline">Lopes S., Andrade P., Rodrigues-Pinto E., Vilas-Boas F., Magro F., Macedo G.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/935.pdf">P154. ADALIMUMAB NO TRATAMENTO DA DOENÇA DE CROHN ABDOMINAL: EFICÁCIA NA PRÁTICA CLÍNICA.</a></p>
                        <p class="subline">Carvalho D., Bernardes C., Russo P., Saiote J., Ramos J.</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/875.pdf">P155. ENTERO-TC: UMA FERRAMENTA ÚTIL NA AVALIAÇÃO DA ATIVIDADE INFLAMATÓRIA DA DOENÇA CROHN.</a></p>
                        <p class="subline">Campos S., Oliveira A., Figueiredo P., Portela F., Sofia C.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/950.pdf">P156. MONITORIZAÇÃO DE SINAIS VITAIS DURANTE A ADMINISTRAÇÃO DE INFLIXIMAB – QUAL A SUA UTILIDADE?</a></p>
                        <p class="subline">Branquinho D., Freire P., Mendes S., Ferreira A.M., Ferreira M., Portela F., Sofia C.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/959.pdf">P157. ABCESSOS INTRA-ABDOMINAIS NA DOENÇA DE CROHN: UMA ANÁLISE RETROSPETIVA.</a></p>
                        <p class="subline">Araújo T., Lago P., Rocha A., Salgado M., Caetano C., Pedroto I.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/697.pdf">P158. FÍSTULAS ENTERO-VESICAIS NOS DOENTES COM DOENÇA DE CROHN: O SUCESSO DA ABORDAGEM CIRÚRGICA.</a></p>
                        <p class="subline">Coelho R., Gonçalves A., Lopes S., Magro F. Macedo G.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/939.pdf">P159. TERAPÊUTICA ANTI-TNFALFA NA DOENÇA INTESTINAL INFLAMATÓRIA – PERFIL DE SEGURANÇA EM INDIVÍDUOS COM MAIS DE 60 ANOS.</a></p>
                        <p class="subline">Bernardes C., Carvalho D., Russo P., Saiote J., Ramos J.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/946.pdf">P160. VARIAÇÃO DO IMC NOS DOENTES TRATADOS COM INFLIXIMAB.</a></p>
                        <p class="subline">Branquinho D., Freire P., Mendes S., Ferreira A.M., Ferreira M., Portela F., Sofia C.</li>       
                    </ul>
              </div></div>
		*/});
		$('.content').html(pX);
		break;

		case 'p4':
		pX = multiline(function(){/*!
			 <div>
          <h1>Posters – Figado </h1>
                <div>
                  <ul class="alist">
                        <li><p class="subtitle"><a target="_blank" href="src/docs/844.pdf">P91. PEARL-III: 12 WEEKS OF ABT-450/R/267+ABT-333 ACHIEVED SVR IN >99% OF 419 NAÏVE HCV GENOTYPE 1B-INFECTED ADULTS WITH OR WITHOUT RIBAVIRIN.</a></p>
                        <p class="subline">Ferenci P, Nyberg A, Enayati P, Bernstein D, Baruch Y, Caruntu FA, Chulanov V, Janczewska E, Younes Z, Marinho R, Rizzardini G, Gervain J, Planas R, Moreno C, Xie W, Collins C,  Cohen D, King M, Podsadecki T, Reddy KR</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/830.pdf">P92. SAPHIRE II: PHASE 3 PLACEBO-CONTROLLED STUDY OF INTERFERON-FREE, 12-WEEK OF ABT-450/R/ABT-267, ABT-333, AND RIBAVIRIN IN 394 TREATMENT-EXPERIENCED ADULTS WITH HEPATITIS C GENOTYPE 1 S.</a></p>
                        <p class="subline">Zeuzem, I Jacobson, T Baykal, RT Marinho, F Poordad, M Bourliere, M Sulkowski, H Wedemeyer, E Tam, P Desmond, D Jensen, AM Di Bisceglie, P Varunok, T Hassanein, J Xiong, B DaSilva-Tillmann, L Larsen, T Podsadecki</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/584.pdf">P93. EFECTIVIDADE DO TRATAMENTO COM SOFOSBUVIR NA HEPATITE C CRÓNICA EM PORTUGAL: TRADUÇÃO ECONÓMICA.</a></p>
                        <p class="subline">Félix J., Silva M.J., Ferreira D., Vandewalle B., Aldir I., Carvalho A., Macedo G., Marinho R., Pedroto I., Ramalho F.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/552.pdf">P94. A NECROPTOSE CONTRIBUI PARA A PATOGÉNESE DA DOENÇA HEPÁTICA CRÓNICA.</a></p>
                        <p class="subline">Afonso M.B., Rodrigues P.M., Caridade M. , Cortez-Pinto H., Castro R.E., Rodrigues C.M.P.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/585.pdf">P95. A VIA DAS PENTOSES DE FOSFATO NA DISFUNÇÃO HEPÁTICA: SERÃO OS POLIÓIS BIOMARCADORES DE PROGRESSÃO E/OU SEVERIDADE NA DOENÇA HEPÁTICA?</a></p>
                        <p class="subline">R. Ramos, I. Tavares de Almeida, H. Cortez-Pinto</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/732.pdf">P96. PREVALÊNCIA DA DIABETES MELLITUS TIPO 2 EM DOENTES COM CIRROSE COMPENSADA.</a></p>
                        <p class="subline">Giestas S., Campos S., Alves A.R., Oliveira A., Agostinho C., Sofia C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/737.pdf">P97. CARACTERIZAÇÃO DE DOENTES COM CIRROSE E DIABETES MELLITUS TIPO 2.</a></p>
                        <p class="subline">Giestas S., Campos S., Alves A.R., Oliveira A., Agostinho C., Sofia C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/804.pdf">P98. AVALIAÇÃO DA DEFICIÊNCIA DE VITAMINA D NA DOENÇA HEPÁTICA.</a></p>
                        <p class="subline">Silva M., Cardoso H., Vilas Boas F., Albuquerque A., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/745.pdf">P99. DIABETES MELLITUS TIPO 2 EM DOENTES COM CIRROSE: PREDICTIVO DE PIOR PROGNÓSTICO?</a></p>
                        <p class="subline">Giestas S., Oliveira A., Alves A.R., Campos S., Agostinho C., Sofia C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/608.pdf">P100. TRATAMENTO DE HEPATITE B CRÓNICA COM TENOFOVIR E ENTECAVIR NA PRÁTICA CLÍNICA.</a></p>
                        <p class="subline">Cardoso H., Vilas-Boas F., Coelho R., Rodrigues S., Horta Vale A., Araújo F., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/554.pdf">P101. TENOFOVIR NO TRATAMENTO DA HEPATITE B CRÓNICA: EXPERIÊNCIA DE VIDA REAL.</a></p>
                        <p class="subline">Vilas-Boas F., Cardoso H., Coelho R., Rodrigues S., Horta-Vale A., Lopes S., Sarmento J.A., Gonçalves R., Marques M., Pereira P., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/617.pdf">P102. HEPATITE B CRÓNICA EM PORTUGAL: CARACTERIZAÇÃO E EVOLUÇÃO DE UMA COORTE DE 493 DOENTES.</a></p>
                        <p class="subline">Maia L. , Ribeiro A., Ferreira J.M., Moreira T., Pedroto I.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/466.pdf">P103. REACTIVAÇÃO DE HEPATITE B EM DOENTE COM SOROLOGIA DE CURA (ANTI-HBC+/ANTI-HBS+) SOB TRATAMENTO ANTI-TNFALFA PARA DOENÇA DE CROHN.</a></p>
                        <p class="subline">Sofia Vitor, Paula Moura dos Santos, Rui Tato Marinho, Beatriz Rodrigues, José Velosa</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/994.pdf">P104. SEGURANÇA E EFICÁCIA DO TENOFOVIR NO TRATAMENTO DA HEPATITE B NA PRÁTICA CLÍNICA.</a></p>
                        <p class="subline">Rodrigues A, Moreira T, Ferreira JM, Pedroto I.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/1001.pdf">P105. RAZÕES PARA A REDUZIDA TAXA DE TRATAMENTO DA HEPATITE C: BARREIRAS ULTRAPASSÁVEIS COM AS NOVAS TERAPÊUTICAS?</a></p>
                        <p class="subline">Russo P., Silva M.J., Costa M.N., Mendes M., Duarte P., Esteves J., Calinas F.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/978.pdf">P106. TERAPÊUTICA DA HEPATITE C COM INIBIDORES DA PROTEASE DE PRIMEIRA GERAÇÃO – AVALIAÇÃO DO PERFIL DE SEGURANÇA.</a></p>
                        <p class="subline">T. Moreira, T. Araújo, J. Mendez, A. Paula Tavares, J. Manuel Ferreira, R. Sarmento e Castro, I. Pedroto</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/576.pdf">P107. O APRI É UMA FERRAMENTA ÚTIL NO ESTADIAMENTO E PREVISÃO DAS COMPLICAÇÕES ASSOCIADAS À DOENÇA HEPÁTICA CRÓNICA PELA HEPATITE C GENÓTIPO 1.</a></p>
                        <p class="subline">Rodrigues-Pinto E., Cardoso H., Coelho R., Andrade P., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/575.pdf">P108. FACTORES PREDITIVOS DE RESPOSTA SUSTENTADA AO PEGINTERFERÃO ALFA E RIBAVIRINA NA HEPATITE C GENÓTIPO 1.</a></p>
                        <p class="subline">Rodrigues-Pinto E., Cardoso H., Coelho R., Andrade P., Horta e Vale A.M., Araújo F., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/474.pdf">P109. PAPEL DA RIFAXIMINA NO INCREMENTO DAS CONTAGENS CELULARES NA CIRROSE HEPÁTICA.</a></p>
                        <p class="subline">Vilas-Boas F., Cardoso H., Albuquerque A., Santos-Antunes J., Rodrigues-Pinto E., Coelho R., Andrade P.,  Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/477.pdf">P110. MORTALIDADE, MORTE PREMATURA E CUSTOS DA DOENÇA HEPÁTICA EM PORTUGAL.</a></p>
                        <p class="subline">Sofia Vitor, Rui Tato Marinho, José Giria, José Velosa</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/1006.pdf">P111. FALÊNCIA HEPÁTICA CRÓNICA AGUDIZADA E MORTALIDADE ASSOCIADA – EXPERIÊNCIA DE UM CENTRO DE REFERÊNCIA.</a></p>
                        <p class="subline">Carvalho L., Carmo J., Rodrigues R., Loureiro R., Bernardes C., Perdigoto R., Barroso E., Marcelino P.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/889.pdf">P112. O MODELO DE RISCO 22/11, EM DOENTES COM CIRROSE E PERITONITE BACTERIANA ESPONTÂNEA, NÃO PERMITIU ESTRATIFICAR A MORTALIDADE AOS 30 DIAS, NUMA REALIDADE HOSPITALAR NACIONAL</a></p>
                        <p class="subline">Oliveira A.M., Branco J., Lourenço L.C., Sousa Cardoso F. , Alberto S.F., Martins A., Ramos Deus J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/951.pdf">P113. ALTERAÇÃO DOS AGENTES ETIOLÓGICOS DA PERITONITE BACTERIANA ESPONTÂNEA: IMPORTÂNCIA DOS GRAM POSITIVOS.</a></p>
                        <p class="subline">Teixeira C., Martins C., Ribeiro S., Trabulo D., Freire R., Mangualde J., Cardoso C., Gamito E., Alves A.L., Oliveira A.P., Cremers I.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/924.pdf">P114. CIRROSE BILIAR PRIMÁRIA NA PRESENÇA DE OUTRAS DOENÇAS AUTO-IMUNES: UMA REALIDADE DIFERENTE?</a></p>
                        <p class="subline">Coelho R., Peixoto A., Silva M., Rodrigues-Pinto E., Horta e Vale A., Cardoso H., Lopes S., Gonçalves, R., Pedro P., Sarmento A., Lopes J., Carneiro F., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/951.pdf">P113. ALTERAÇÃO DOS AGENTES ETIOLÓGICOS DA PERITONITE BACTERIANA ESPONTÂNEA: IMPORTÂNCIA DOS GRAM POSITIVOS.</a></p>
                        <p class="subline">Teixeira C., Martins C., Ribeiro S., Trabulo D., Freire R., Mangualde J., Cardoso C., Gamito E., Alves A.L., Oliveira A.P., Cremers I.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/924.pdf">P114. CIRROSE BILIAR PRIMÁRIA NA PRESENÇA DE OUTRAS DOENÇAS AUTO-IMUNES: UMA REALIDADE DIFERENTE?</a></p>
                        <p class="subline">Coelho R., Peixoto A., Silva M., Rodrigues-Pinto E., Horta e Vale A., Cardoso H., Lopes S., Gonçalves, R., Pedro P., Sarmento A., Lopes J., Carneiro F., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/966.pdf">P115. NÍVEIS DE PROTEÍNA C REATIVA SÉRICA NA INFEÇÃO DO LÍQUIDO ASCÍTICO EM DOENTES CIRRÓTICOS – QUAL O SIGNIFICADO CLÍNICO?</a></p>
                        <p class="subline">Oliveira A.M., Branco J., Lourenço L.C., Alberto S.F., Martins A., Ramos Deus J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/917.pdf">P116. ART SCORE E FATORES DE PROGNÓSTICO EM DOENTES COM CARCINOMA HEPATOCELULAR TRATADOS POR QUIMIOEMBOLIZAÇÃO ARTERIAL.</a></p>
                        <p class="subline">Cardoso H., Vilas-Boas F., Marques M., Soares C., Melo R.B., Pereira P., Horta Vale A., Andrade P., Silva M., Maia C., Madureira M., Morgado P., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/539.pdf">P117. CARCINOMA HEPATOCELULAR INFILTRATIVO EM FÍGADO NÃO CIRRÓTICO.</a></p>
                        <p class="subline">Mocanu I., Pires S., Gonçalves L., Godinho R., Medeiros I.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/497.pdf">P118. SIGNIFICADO CLÍNICO DA DETECÇÃO DE AUTOANTICORPOS ASSOCIADOS À CIRROSE BILIAR PRIMÁRIA EM INDIVÍDUOS NORMAIS.</a></p>
                        <p class="subline">Magalhães-Costa P., Carvalho L., Fernandes B. I., Chagas C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/971.pdf">P119. NÓDULOS HEPÁTICOS: ESTUDO COMPARATIVO ENTRE O DIAGNÓSTICO PATOLÓGICO E RADIOLÓGICO.</a></p>
                        <p class="subline">Meira T., Nunes A., Palas J., Ramalho M., Camacho R.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/911.pdf">P120. PUNÇÕES GUIADAS POR ECOGRAFIA NUM SERVIÇO DE GASTRENTEROLOGIA – EFICÁCIA E SEGURANÇA.</a></p>
                        <p class="subline">Sousa P., Portela F., Ministro P., Silva A.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/525.pdf">P121. ESTUDO PROSPETIVO DA ACUIDADE E VARIABILIDADE INTEROBSERVADOR DA ELASTOGRAFIA EM TEMPO REAL NO ESTADIAMENTO DA DOENÇA HEPÁTICA CRÓNICA.</a></p>
                        <p class="subline">Marques S., Túlio M. A., Carmo J., Chapim I., Carvalho L., Rodrigues J., Herculano R., Bispo M., Matos L., Chagas C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/537.pdf">P122. RASTREIO POPULACIONAL DE DOENÇA HEPÁTICA POR ELASTOGRAFIA HEPÁTICA TRANSITÓRIA.</a></p>
                        <p class="subline">Gonçalves BM, Malheiro L, Fernandes D, Costa S, Soares JB, Rolanda C, Bastos P, Gonçalves R.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/692.pdf">P123. DETERMINANTES PROGNÓSTICAS NO DOENTE INTERNADO COM SÍNDROME HEPATO-RENAL TIPO 1.</a></p>
                        <p class="subline">Santos-Antunes J, , Peixoto A, , Silva M, , Cardoso H, , Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/990.pdf">P124. PERITONITE BACTERIANA ESPONTÂNEA: PERFIL MICROBIOLÓGICO E MORTALIDADE INTRA-HOSPITALAR.</a></p>
                        <p class="subline">Rodrigues A, Libânio D, Maia L, Moreira T, Ferreira JM, Salgado M, Pedroto I.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/874.pdf">P125. ESTARÁ O PERFIL DE MICROORGANISMOS ISOLADOS NO LÍQUIDO ASCÍTICO DE DOENTES CIRRÓTICOS RELACIONADO COM O PROGNÓSTICO?</a></p>
                        <p class="subline">Oliveira A.M., Branco J., Lourenço L., Alberto S.F., Sancho L., Martins A., Ramos Deus J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/594.pdf">P126. PREDITORES NÃO-INVASIVOS DE VARIZES ESOFÁGICAS.</a></p>
                        <p class="subline">Dias de Castro F., Magalhães J., Boal Carvalho P., Rosa B., Leite S., Marinho C., Cotter J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/996.pdf">P127. ABCESSO PIOGÉNICO DO FÍGADO: UMA PATOLOGIA POUCO FREQUENTE NA ENFERMARIA DE GASTRENTEROLOGIA.</a></p>
                        <p class="subline">Casela A, Gomes D, Perdigoto D, Fernandes A, Alves R, Sofia C.</li>
                 </ul>
        </div></div>

		*/});
		$('.content').html(pX);
		break;

		case 'p5':
		pX = multiline(function(){/*!
			  <div>
            <h1>Posters – Pâncreas e Vias Biliares </h1>
                <div>
                  <ul class="alist">
                        <li><p class="subtitle"><a target="_blank" href="src/docs/491.pdf">P161. DOR ABDOMINAL E HEMATOQUÉZIAS – UMA APRESENTAÇÃO INCOMUM DE ILEUS BILIAR.</a></p>
                        <p class="subline">Fernandes S., Noronha Ferreira C., Malaquias J., Ramires A., Matos H., Cabral Braga T., Pereira e Silva R., Carrilho Ribeiro L., Velosa J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/712.pdf">P162  PANCREATITE AGUDA GRAVE POR HIPERTRIGLICERIDÉMIA: PREVALÊNCIA E CARACTERÍSTICAS DE UMA ETIOLOGIA RARA.</a></p>
                        <p class="subline">Trabulo D., Carvalhana S., Gonçalves A., Valente A., Palma R., Alexandrino, P., Velosa J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/824.pdf">P163. LESÕES PANCREÁTICAS: O PAPEL DA PUNÇÃO GUIADA POR ECOENDOSCOPIA.</a></p>
                        <p class="subline">Leitão C., Santos A., Pinto J., Ribeiro H., Caldeira A., Pereira E., Pereira B., Tristan J., Sousa R., Banhudo A.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/852.pdf">P164. PAPEL DA COLANGIOGRAFIA PERCUTÂNEA TRANSHEPÁTICA NA ICTERÍCIA OBSTRUTIVA.</a></p>
                        <p class="subline">Giestas S., Oliveira A., Alves A.R., Campos S., Agostinho C., Donato A., Agostinho A.G., Carvalheiro V., Sofia C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/884.pdf">P165. O PAPEL DA CPT NA DRENAGEM BILIO-DIGESTIVA NA ESTENOSE BILIAR MALIGNA – AVALIAÇÃO DOS RESULTADOS DE UM SERVIÇO DE GASTRENTEROLOGIA.</a></p>
                        <p class="subline">Costa M., Silva M.J., Capela T., Russo P., Carvalho D., Ramos G., Mateus Dias A., Coimbra J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/700.pdf">P166. CARACTERIZAÇÃO DOS COLANGIOCARCINOMAS NUM CENTRO DE REFERÊNCIA: HAVERÁ UMA INCIDÊNCIA CRESCENTE?</a></p>
                        <p class="subline">Coelho R., Silva M., Rodrigues-Pinto E., Lopes S., Pereira P., Cardoso H., Vilas-Boas F., Santos-Antunes J., Lopes J., Carneiro F., Morgado P., Maia C., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/479.pdf">P167. RENTABILIDADE DIAGNÓSTICA DA CITOLOGIA COM ESCOVA DURANTE A CPRE NO ESTUDO DE ESTENOSES DA VIA BILIAR E DUCTO PANCREÁTICO.</a></p>
                        <p class="subline">Vilas-Boas F., Pereira P., Ribeiro A., Sarmento J.A., Silva M., Peixoto A., Lopes S., Lopes J., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/638.pdf">P168. TUMORES NEUROENDÓCRINOS DO PÂNCREAS – EXPERIÊNCIA ECOENDOSCÓPICA DE UM CENTRO TERCIÁRIO.</a></p>
                        <p class="subline">Roque Ramos L., Barosa, R., Figueiredo P., Meira T., Loureiro R., Pinto Marques P.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/890.pdf">P169. CARACTERIZAÇÃO DE LESÕES PANCREÁTICAS CÍSTICAS AVALIADAS POR ECOENDOSCOPIA – A EXPERIÊNCIA DE UM CENTRO.</a></p>
                        <p class="subline">Rodrigues-Pinto E., Lopes S., Santos-Antunes J., Vilas-Boas F., Lopes J., Baldaque-Silva F., Peixoto A., Silva M., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/895.pdf">P170. CARACTERIZAÇÃO DE LESÕES PANCREÁTICAS SÓLIDAS AVALIADAS POR ECOENDOSCOPIA – A EXPERIÊNCIA DE UM CENTRO.</a></p>
                        <p class="subline">Rodrigues-Pinto E., Lopes S., Santos-Antunes J., Vilas-Boas F., Lopes J., Baldaque-Silva F., Peixoto A., Silva M., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/492.pdf">P171. COLANGIOCARCINOMA DE CÉLULAS CLARAS.</a></p>
                        <p class="subline">Fernandes S., Baldaia C., Fatela N., Marinho R., Pinto Marques H., Ramalho F., Velosa J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/708.pdf">P172. FACTORES PREDITIVOS DE SOBREVIDA NO COLANGIOCARCINOMA: EXPERIÊNCIA DE 5 ANOS.</a></p>
                        <p class="subline">Coelho R., Silva M., Santos-Antunes J., Rodrigues-Pinto E., Lopes S., Pereira P., Cardoso H., Vilas-Boas F., Lopes J., Carneiro F., Morgado P., Maia C., Macedo G.1</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/998.pdf">P173. TERAPÊUTICA ENDOSCÓPICA NA FISTULA BILIAR PÓS COLECISTECTOMIA LAPAROSCÓPICA.</a></p>
                        <p class="subline">Silva I., Tulio M., Marques S., Carvalho L., Rodrigues J., Carmo J., Barreiro P., Bana e Costa T., Chagas C.</li>

                 </ul>
        </div></div>

		*/});
		$('.content').html(pX);
		break;

		case 'p6':
		pX = multiline(function(){/*!
			 <div>
                    <h1>Posters – Tubo Digestivo</h1>
                <div>
                    <ul class="alist">
                        <li><p class="subtitle"><a target="_blank" href="src/docs/463.pdf">P1. CONTROLO DO REFLUXO ÁCIDO NO ESÓFAGO DE BARRETT EM FUNÇÃO DA MODALIDADE DE TRATAMENTO.</a></p>
                        <p class="subline">João Matias, D., Fernández Fernández, N., Aparicio Cabezudo, M., Rodríguez Martin, L., Vivas Alegre, S., Linares Torres, P.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/949.pdf">P2. ESÓFAGO DE BARRETT: RETRATO CLÍNICO ATUAL.</a></p>
                        <p class="subline">Campos S., Giestas S., Oliveira A., Cipriano MA., Souto P., Amaro P., Gregório C., Pina Cabral JE., Sofia C.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/841.pdf">P3. EOSINOFILIA ESOFÁGICA EM DOENTES COM DISFAGIA OU IMPACTO ALIMENTAR: ESTUDO RETROSPECTIVO MULTICÊNTRICO DOS DADOS CLÍNICOS, ENDOSCÓPICOS E HISTOLÓGICOS DE 31 DOENTES.</a></p>
                        <p class="subline">Carmo J., Marques S., Carvalho L.,Túlio M. M., Rodrigues J., Bispo M., Oliveira P., Catarino A., Monteiro L., Serra D., Chagas C.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/773.pdf">P4. LESÕES CÁUSTICAS ESÓFAGO-GÁSTRICAS GRAVES: COMPLICAÇÕES E ABORDAGEM.</a></p>
                        <p class="subline">Carvalhana S., Trabulo D., Gonçalves A., Valente A., Palma R., Alexandrino P., Velosa J.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/843.pdf">P5. CARCINOMA DO ESÓFAGO: AVALIAÇÃO DE UMA SÉRIE DE 448 DOENTES.</a></p>
                        <p class="subline">Moleiro J, Trabulo D, Cardoso C, Pimenta A, Loureiro A, Mão de Ferro S, Serrano M, Ferreira S, Freire J, Luís A, Bettencourt A, Casaca R, Pereira P, Mirones L, Fernandez G, Dias Pereira A</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/886.pdf">P6. A OUTRA FACE DO DABIGATRANO.</a></p>
                        <p class="subline">Campos S., Perdigoto D., Oliveira A., Gomes D., Sofia C.</li>           
                        
                        <li><p class="subtitle"><a target="_blank" href="src/docs/880.pdf">P7. E QUANDO A EDA TERAPÊUTICA NÃO É SUFICIENTE? EMBOLIZAÇÃO ARTERIAL COMO ALTERNATIVA NA HEMORRAGIA DIGESTIVA ALTA AGUDA NÃO-VARICOSA.</a></p>
                        <p class="subline">Gravito-Soares E., Gravito-Soares M., Lérias C., Donato P., Agostinho A., Carvalheiro V., Sofia C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/663.pdf">P8. HEMORRAGIA DIGESTIVA ALTA NÃO VARICOSA: COMO PREVER A PRESENÇA DE LESÕES COM  INDICAÇÃO PARA HEMOSTASE ENDOSCÓPICA?</a></p>
                        <p class="subline">Boal Carvalho P, Magalhães J, Dias de Castro F, Rosa B, Cotter J</li>        
                        
                        <li><p class="subtitle"><a target="_blank" href="src/docs/831.pdf">P9. SÍNDROME CORONÁRIO AGUDO NA HEMORRAGIA DIGESTIVA GRAVE.</a></p>
                        <p class="subline">Sousa, P., Ferreira, C.N., Serejo, F., Cortez-Pinto, H., Ribeiro, L.C. , Ramalho, F. , Alexandrino, P. , Velosa, J.</li>        
                        
                        <li><p class="subtitle"><a target="_blank" href="src/docs/979.pdf">P10. NOVOS DESAFIOS NA “VELHA” HEMORRAGIA DIGESTIVA.</a></p>
                        <p class="subline">Silva Fernandes J , Ramos R , Duarte P , Vicente C , Martinez J , Casteleiro Alves C.</li>   
                        
                        <li><p class="subtitle"><a target="_blank" href="src/docs/596.pdf">P11. ESTRATÉGIAS DE TRANSFUSÃO EM HEMORRAGIA DIGESTIVA AGUDA POR ÚLCERA PÉPTICA SANGRANTE (UPS) – RESTRITIVOS OU LIBERAIS?</a></p>
                        <p class="subline">Ferreira AO, Moleiro J, Torres J, Barjas E, Cravo M</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/821.pdf">P12. ÚLCERA PÉPTICA SANGRANTE E ERRADICAÇÃO DO HELICOBACTER PYLORI – ESTAREMOS A ADOTAR A ESTRATÉGIA MAIS ADEQUADA?</a></p>
                        <p class="subline">Casela A., Almeida N., Alves R., Elvas L., Fernandes A., Donato M.M., Romãozinho J.M., Sofia C.</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/464.pdf">P17. LESÃO DE DIEULAFOY: ANÁLISE CLÍNICO-EPIDEMIOLÓGICA DE UMA CAUSA INFREQUENTE DE HEMORRAGIA DIGESTIVA.</a></p>
                        <p class="subline">João Matias, D., Fernández Fernández, N., Monteserin Ron, L., Rodríguez Martín, L., Aparicio Cabezudo, M., Jiménez Palacios, M., Linares Torres, P., Vivas Alegre, S.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/627.pdf">P22. PREVALÊNCIA E CARACTERIZAÇÃO DE LESÕES POLIPOIDES GÁSTRICAS: PERSPETIVA DE UM HOSPITAL CENTRAL.</a></p>
                        <p class="subline">Loureiro R., Capela T., Carvalho D., Bernardes C., Russo P., Costa M., Silva M., Duarte P.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/837.pdf">P23. SERÁ A QUIMIOTERAPIA PERIOPERATÓRIA O TRATAMENTO ADEQUADO PARA TODOS OS DOENTES COM CANCRO DO ESTÔMAGO LOCALMENTE AVANÇADO?</a></p>
                        <p class="subline">Moleiro J, Callé C, Mão de Ferro S, Trabulo D, Ferreira A, Dionísio R, Pimenta A, Cardoso C, Loureiro A, Serrano M, Ferreira S, Fonseca R, Chaves P, Luís A, Freire J, Dias Pereira A</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/625.pdf">P24. FATORES ANATOMO-CLÍNICOS E MOLECULARES PREDITIVOS DA RESPOSTA À QUIMIOTERAPIA NEOADJUVANTE NO ADENOCARCINOMA GÁSTRICO.</a></p>
                        <p class="subline">Palmela C., Ferreira A. O., Branco F., Santos M., Casa-Nova M., Oliveira H., Garrido R., Jacinto A., Seruca R., Cravo M.</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/839.pdf">P25. QUIMIOTERAPIA PERIOPERATÓRIA EM DOENTES COM CARCINOMA GÁSTRICO COM MAIS DE 70 ANOS: SIM OU NÃO?</a></p>
                        <p class="subline">Moleiro J, Trabulo D, Ferreira A, Dionísio R, Cardoso C, Pimenta A, Loureiro A, Mão de Ferro S, Serrano M, Ferreira S, Freire J, Luís A, Bettencourt A, Casaca R, Dias Pereira A</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/833.pdf">P26. LINFOMA GÁSTRICO MALT: ANÁLISE DE UMA SÉRIE CONSECUTIVA DE DOENTES DURANTE 20 ANOS.</a></p>
                        <p class="subline">Moleiro J*, Ferreira S, Lage P, Dias Pereira A</li>  

                        <li><p class="subtitle"><a target="_blank" href="src/docs/925.pdf">P28. DISTRIBUIÇÃO ANATÓMICA E GRAU DE PROLIFERAÇÃO DOS TUMORES NEUROENDÓCRINOS DIGESTIVOS.</a></p>
                        <p class="subline">Costa M., Silva M.J., Capela T., Esteves J., Carvalho A., Oliveira M., David Marques A., Barroso E.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/493.pdf">P29. ANÁLISE CLÍNICO-EPIDEMIOLÓGICA DOS TUMORES NEUROENDOCRINOS GASTROINTESTINAIS.</a></p>
                        <p class="subline">João Matias, D., Vaquero Ayala, L., Álvarez Cuenllas, B., Fernández Fernández, N., Vivas Alegre, S.</li>  

                        <li><p class="subtitle"><a target="_blank" href="src/docs/767.pdf">P31. TUMORES NEUROENDOCRINOS DA AMPOLA DE VATER. UMA SÉRIE DE CASOS RAROS.</a></p>
                        <p class="subline">Capela T, Costa M, Silva MJ, Vigia E, Esteves J, David Marques A, Paulino J, Barroso E</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/877.pdf">P32. SIMPLIFICANDO O SIGNIFICADO DO ESPESSAMENTO DO INTESTINO DELGADO.</a></p>
                        <p class="subline">Campos S., Branquinho D., Oliveira A., Figueiredo P., Sofia C.</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/942.pdf">P33. CONCORDÂNCIA ENTRE ENTEROSCOPIA, CÁPSULA ENDOSCÓPICA E MÉTODOS DE IMAGEM SECCIONAL NO DIAGNÓSTICO DE PATOLOGIA DO INTESTINO DELGADO.</a></p>
                        <p class="subline">Marques M, , Santos-Antunes J, , Cardoso H, , Vilas-Boas F, , Ribeiro A, , Velosa M, , Albuquerque A, , Rodrigues S, , Macedo G.</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/728.pdf">P34. ENTEROSCOPIA POR CÁPSULA NA HEMORRAGIA DIGESTIVA OBSCURA MANIFESTA – A EXPERIÊNCIA DE UM CENTRO.</a></p>
                        <p class="subline">Andrade P., Marques M., Cardoso H., Silva M., Ribeiro A., Macedo G.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/695.pdf">P35. A UTILIDADE DA ENTEROSCOPIA POR CÁPSULA NA DETECÇÃO E ORIENTAÇÃO DE LESÕES POLIPÓIDES DO INTESTINO DELGADO.</a></p>
                        <p class="subline">Santos-Antunes J, , Cardoso H, , Marques M, , Macedo G</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/713.pdf">P47. CORRELAÇÃO ENTRE A LOCALIZAÇÃO INICIAL E DE RECORRÊNCIA DOS PÓLIPOS DO CÓLON E RETO.</a></p>
                        <p class="subline">Oliveira A., , Freire P., Campos S., Giestas S., Mendes S., Amaro P. Souto P., Portela F., Sofia C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/806.pdf">P48. RASTREIO DO CANCRO COLORRECTAL DE BASE POPULACIONAL REGIONAL.</a></p>
                        <p class="subline">Elvas L., Carvalho R., Areia M., Alves S., Brito D., Saraiva S., Cadime A.T.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/853.pdf">P49. PÓLIPO MALIGNO E RISCO DE OUTCOME ONCOLÓGICO ADVERSO.</a></p>
                        <p class="subline">Lage J., Brandão C., Menezes D., Cunha A., Dinis-Ribeiro M., Moreira-Dias L.</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/734.pdf">P50. ADESÃO À COLONOSCOPIA E OS SEUS FATORES ASSOCIADOS EM DOENTES COM SÍNDROMA DE LYNCH SEGUIDOS NA CONSULTA DE RISCO ONCOLÓGICO – ESTUDO PILOTO.</a></p>
                        <p class="subline">Sousa R., Souto D., Ramos L., Meira T., Nicola PJ., Freitas J.</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/622.pdf">P51. VALOR DOS CRITÉRIOS DE BETHESDA PARA IDENTIFICAR NEOPLASIAS COLO-RETAIS DA VIA MUTADORA: ENTIDADE CLINICO-PATOLÓGICA DIFERENTE?</a></p>
                        <p class="subline">Palmela C., Ferreira A. O., Cunha A., Oliveira H., Fonseca I., Cravo M.</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/851.pdf">P54. IMPLICAÇÃO DO STREPTOCOCCUS BOVIS NA CARCINOGÉNESE COLORETAL.</a></p>
                        <p class="subline">Gravito-Soares M., Gravito-Soares E., Lopes S., Silva N., Ribeiro G., Sofia C.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/849.pdf">P55. BACTERIÉMIA A STREPTOCOCCUS BOVIS E PATOLOGIA GASTROINTESTINAL: MUITO ALÉM DA NEOPLASIA COLORETAL.</a></p>
                        <p class="subline">Gravito-Soares M., Gravito-Soares E., Lopes S., Silva N., Ribeiro G., Sofia C.</li>        

                        <li><p class="subtitle"><a target="_blank" href="src/docs/815.pdf">P56. ESTADIAMENTO MAIS PRECOCE DO CANCRO COLORRECTAL – EVOLUÇÃO 2009-2013.</a></p>
                        <p class="subline">Ribeiro S., Martins C., Teixeira C., Trabulo D., Alves A.L., Gamito E., Freire R., Mangualde J., Cardoso C., Oliveira A.P., Cremers I.</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/858.pdf">P57. DOENÇA DIVERTICULAR DO CÓLON PERFURADA: FATORES PRÉ-OPERATÓRIOS DE PROGNÓSTICO.</a></p>
                        <p class="subline">Gravito-Soares M., Gravito-Soares E., Lopes S., Silva N., Ribeiro G., Sofia C.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/819.pdf">P58. CIRURGIA DO CANCRO COLORRECTAL – EVOLUÇÃO 2009-2013 NUM HOSPITAL DISTRITAL.</a></p>
                        <p class="subline">Ribeiro S., Martins C., Teixeira C., Trabulo D., Alves A.L., Gamito E., Freire R., Mangualde J., Cardoso C., Oliveira A.P., Cremers I.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/883.pdf">P59. PERFURAÇÃO NA DOENÇA DIVERTICULAR DO CÓLON: PREDIÇÃO DO RISCO DE UMA COMPLICAÇÃO POTENCIALMENTE FATAL.</a></p>
                        <p class="subline">Gravito-Soares M., Gravito-Soares E., Lopes S., Silva N., Ribeiro G., Sofia C.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/891.pdf">P61. PAPEL DO OXIGÉNIO HIPERBÁRICO NA PNEUMATOSE CÓLICA- UMA SERIE DE 3 CASOS.</a></p>
                        <p class="subline">Meira T., Amaro C., Anão A., Guerreiro P.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/956.pdf">P62. EFICÁCIA A LONGO PRAZO DA TOXINA BOTULÍNICA NO TRATAMENTO DA FISSURA ANAL CRÓNICA – 5 ANOS DE FOLLOW-UP.</a></p>
                        <p class="subline">Barbeiro S., Martins C., Canhoto M., Gonçalves C., Cotrim I., Arroja B., Silva F. e Vasconcelos H.</li>  

                        <li><p class="subtitle"><a target="_blank" href="src/docs/470.pdf">P63. LONGEVIDADE E SEGURANÇA AOS 4 ANOS DAS PEG-J PARA INFUSÃO CONTÍNUA DE GEL INTESTINAL DE LEVODOPA/CARBIDOPA.</a></p>
                        <p class="subline">CR Nunes A, Santos-Antunes J, Vilas Boas F, Rosas MJ, Macedo G</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/764.pdf">P64. GASTROSTOMIA ENDOSCÓPICA PERCUTÂNEA (PEG)- O PROCEDIMENTO, AS COMPLICAÇÕES E A NUTRIÇÃO.</a></p>
                        <p class="subline">Capela T, Carvalho D, Alves N, Leitão L, Costa A, Saiote J, Mendes M</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/846.pdf">P74. ENDOPRÓTESES NO TRATAMENTO DA OBSTRUÇÃO MALIGNA COLO-RECTAL: AVALIAÇÃO DOS RESULTADOS NUM ÚNICO CENTRO HOSPITALAR.</a></p>
                        <p class="subline">Carvalho D., Russo P., Capela T., Silva M.J., Costa M., Ramos G., Seves I., Mateus Dias A., Canena J., Coimbra J.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/619.pdf">P13. ENDOSCOPIA URGENTE NA HEMORRAGIA DIGESTIVA ALTA NÃO HIPERTENSIVA: QUAL O IMPACTO DO PERÍODO CIRCADIANO DE APRESENTAÇÃO E DO TEMPO DE ESPERA ATÉ À SUA REALIZAÇÃO?</a></p>
                        <p class="subline">Maia L., Sampaio E., Salgueiro P., Küttner-Magalhães R., Marcos-Pinto R., Dinis-Ribeiro M., Pedroto I.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/916.pdf">P14. HEMORRAGIA DIGESTIVA ALTA: COMO PREVER A NECESSIDADE DE TERAPÊUTICA ENDOSCÓPICA?</a></p>
                        <p class="subline">Branquinho D., Cardoso R., Gregório C., Sofia C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/659.pdf">P15. AVALIAÇÃO DO VALOR PREDITIVO DE RECIDIVA HEMORRÁGICA DA CLASSIFICAÇÃO DE FORREST SIMPLIFICADA.</a></p>
                        <p class="subline">Moleiro J*, Ferreira AO, Torres J, Barjas E, Cravo M</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/881.pdf">P16. TIMING ENDOSCÓPICO NA HEMORRAGIA DIGESTIVA ALTA AGUDA NÃO-VARICOSA: IMPLICAÇÕES PROGNÓSTICAS?</a></p>
                        <p class="subline">Gravito-Soares E., Gravito-Soares M., Lérias C., Sofia C., Serviço de Gastrenterologia, Centro Hospitalar e Universitário de Coimbra, E.P.E.,</li> 

                        <li><p class="subtitle"><a target="_blank" href="src/docs/761.pdf">P18. LESÃO DE DIEULAFOY - O DESAFIO DIAGNÓSTICO E TERAPÊUTICO.</a></p>
                        <p class="subline">Capela T, Bernardes C, Loureiro R, Carvalho D, Duarte P</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/940.pdf">P19. EFICÁCIA DA TERAPÊUTICA ENDOSCÓPICA NA HEMORRAGIA DIGESTIVA POR LESÕES DE DIEULAFOY.</a></p>
                        <p class="subline">Lourenço L.C., Oliveira A.M., Cardoso F. S., Branco J., Santos L., Alberto S., Horta D., Martins A., Reis J., Deus J.R</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/571.pdf">P20. BLOQUEADOR BETA E ERRADICAÇÃO DE VARIZES ESOFÁGICAS MELHORAM O PROGNÓSTICO NA PROFILAXIA SECUNDÁRIA COM LAQUEAÇÃO ELÁSTICA.</a></p>
                        <p class="subline">Rodrigues-Pinto E., Cardoso H., Morais R., Santos-Antunes J., Albuquerque A., Vilas-Boas F., Rodrigues S., Velosa M., Ribeiro A., Marques M., Gonçalves R., Macedo G.</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/681.pdf">P21. EFICÁCIA DA LAQUEAÇÃO ELÁSTICA COMO PROFILAXIA PRIMÁRIA DE HEMORRAGIA POR VARIZES ESOFÁGICAS.</a></p>
                        <p class="subline">Santos-Antunes J., Cardoso H., Rodrigues-Pinto E., Morais R., Albuquerque A., Vilas-Boas F., Rodrigues R., Velosa M., Ribeiro A., Marques M., Gonçalves R., Macedo G</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/667.pdf">P27. “MALT OU NÃO MALT, EIS A QUESTÃO” – PAPEL DA ENDOSCOPIA DIGESTIVA ALTA NO DIAGNÓSTICO E FOLLOW-UP DO LINFOMA MALT GÁSTRICO.</a></p>
                        <p class="subline">Alves A.R., Giestas S., Casela A., Perdigoto D., Romão Z., Gomes D., Gregório C., Caetano Oliveira R., Cipriano M.A., Gomes M., Ribeiro L., Sofia C.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/807.pdf">P30. EXPERIÊNCIA NA RESSECÇÃO ENDOSCÓPICA DE LESÕES ADENOMATOSAS DUODENAIS, ESPORÁDICAS, NÃO AMPULARES, MAIORES QUE 10 MM.</a></p>
                        <p class="subline">Rodrigues J., Barreiro P., Marques S., Carmo J., Chagas C.</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/634.pdf">P36. QUE SEGURANÇA A LONGO PRAZO NOS OFERECE UMA ENTEROSCOPIA POR CÁPSULA NEGATIVA, EM DOENTES COM HEMORRAGIA DIGESTIVA OBSCURA?</a></p>
                        <p class="subline">Ribeiro I., Pinho R., Rodrigues A., Pinto Pais T., Fernandes C., Silva J., Ponte A., Leite S., Carvalho J.</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/523.pdf">P37. PROBABILIDADE DE RE-SANGRAMENTO APÓS ESTUDO NEGATIVO EM ENTEROSCOPIA POR CÁPSULA.</a></p>
                        <p class="subline">Magalhães-Costa P., Herculano R., Bispo M., Santos S., Couto G., Barreiro P., Matos L., Chagas C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/664.pdf">P38. SUSPECTED BLOOD INDICATOR NA ENTEROSCOPIA POR CÁPSULA: UMA FERRAMENTA ÚTIL NO DIAGNÓSTICO DE HEMORRAGIA GASTROINTESTINAL.</a></p>
                        <p class="subline">Boal Carvalho P, Magalhães J, Dias de Castro F, Monteiro S, Rosa B, Moreira MJ, Cotter J</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/636.pdf">P39. ESTUDO COMPARATIVO DO TEMPO DE TRÂNSITO DE INTESTINO DELGADO ENTRE AS VIDEOCÁPSULAS MIROCAM E GIVEN.</a></p>
                        <p class="subline">Ribeiro I., Pinho R., Rodrigues A., Pinto Pais T., Fernandes C., Silva J., Ponte A., Leite S., Carvalho J.</li>        

                        <li><p class="subtitle"><a target="_blank" href="src/docs/731.pdf">P40. ENTEROSCOPIA POR CÁPSULA: A EXPERIÊNCIA DOS ÚLTIMOS 5 ANOS DE UM SERVIÇO DE GASTRENTEROLOGIA.</a></p>
                        <p class="subline">Vaz A.M., Eusébio M., Antunes A., Queirós P., Velasco F., Ornelas R., Guerreiro H.</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/541.pdf">P41. TERAPÊUTICA FOTODINÂMICA EM CÁPSULAS ENDOSCÓPICAS.</a></p>
                        <p class="subline">J. A. Rodrigues, M. J. Oliveira, A. R. Fernandes, M. F. Silva, L. M. Goncalves, B. Rosa, J. Cotter e J. H. Correia</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/658.pdf">P42. HEMORRAGIA DIGESTIVA BAIXA NO SERVIÇO DE URGÊNCIA - HÁ LUGAR PARA A COLONOSCOPIA SEM PREPARAÇÃO EM DOENTES IDOSOS?</a></p>
                        <p class="subline">Alves A.R., Giestas S., Cardoso R., Lopes S., Figueiredo P., Portela F., Sofia C.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/640.pdf">P43. FATORES DE RISCO PARA HEMORRAGIA PÓS-POLIPECTOMIA TARDIA ? UM ESTUDO CASO-CONTROLO.</a></p>
                        <p class="subline">Cúrdia Gonçalves T., Magalhães J., Boal Carvalho P., Rosa B., Cotter J.</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/842.pdf">P44. É REALMENTE ÚTIL A COLONOSCOPIA URGENTE NA HEMORRAGIA PÓS-POLIPECTOMIA?</a></p>
                        <p class="subline">Fernandes C., Pinho R., Leite S., Rodrigues A., Proença L., Alberto L., Freitas T., Silva AP., Fernandes S., Pais T., Ribeiro R., Silva J., Ponte A., Carvalho J.</li>  

                        <li><p class="subtitle"><a target="_blank" href="src/docs/495.pdf">P45. PROJETO PILOTO DE SEDAÇÃO COM ADMINISTRAÇÃO DE PROPOFOL POR NÃO ANESTESISTA EM COLONOSCOPIA – AVALIAÇÃO DE SEGURANÇA NA FASE DE TREINO.</a></p>
                        <p class="subline">Ferreira AO, Torres J, Pinto R, Schuler V, Castanheira C, Neves M, Santos AA, Silva F, Cravo M</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/834.pdf">P46. FACTORES PREDITIVOS DE MÁ PREPARAÇÃO INTESTINAL - ESTUDO PROSPECTIVO.</a></p>
                        <p class="subline">Leitão C., Santos A., Ribeiro H., Pinto J., Pereira B., Caldeira A., Tristan J., Sousa R., Pereira E., Banhudo A.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/910.pdf">P52. COLONOSCOPIA INCOMPLETA E COLONOGRAFIA - ACHADOS CONCORDANTES?</a></p>
                        <p class="subline">Eusébio, M., Antunes, A.G., Vaz, A.M., Queirós P., Caldeira P., Inácio, C., Afonso, G., Guerreiro H.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/719.pdf">P53. COLONOSCOPIA VIRTUAL COM POLIPECTOMIA - PROTOCOLO DIAGNÓSTICO-TERAPÊUTICO.</a></p>
                        <p class="subline">Salazar M., Nogueira A.</li>     

                        <li><p class="subtitle"><a target="_blank" href="src/docs/816.pdf">P60. IMPORTÂNCIA DA COLONOSCOPIA APÓS UM EPISÓDIO DE DIVERTICULITE AGUDA.</a></p>
                        <p class="subline">Fernandes S., Meireles L., Correia L., Carrilho Ribeiro L., Velosa J.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/660.pdf">P65. SENSIBILIZAÇÃO TORNA PEG MAIS ACESSÍVEL E SEGURA.</a></p>
                        <p class="subline">Salazar M., Cansado P., Tubal V., Costa P.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/450.pdf">P66. MUCOSECTOMIA COM DISPOSITIVO DE LAQUEAÇÃO ELÁSTICA EM LESÕES DO ESÔFAGO, ESTÔMAGO E CÓLON : REVISÃO DE 21 PROCEDIMENTOS.</a></p>
                        <p class="subline">Meireles L., Vitor S., Lopes J., Carrilho Ribeiro L., Velosa J.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/970.pdf">P67. MUCOSECTOMIAS DO CÓLON – CARACTERIZAÇÃO DAS LESÕES E AVALIAÇÃO DA EFICÁCIA DA TÉCNICA.</a></p>
                        <p class="subline">Sofia Vitor, Patricia Santos, Carlos Noronha Ferreira, João Lopes, Luís Carrilho Ribeiro, José Velosa</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/794.pdf">P68. DISSECÇÃO ENDOSCÓPICA DA SUBMUCOSA NO TRATAMENTO DE LESÕES RETAIS COM ATINGIMENTO DA LINHA PECTÍNEA.</a></p>
                        <p class="subline">Rodrigues J., Barreiro P., Costa P., Chagas C.</li>   

                        <li><p class="subtitle"><a target="_blank" href="src/docs/742.pdf">P69. OBSTRUÇÃO MALIGNA DO TRATO DE SAÍDA GASTRODUODENAL – EXPERIÊNCIA COM PRÓTESES METÁLICAS AUTOEXPANSÍVEIS NUM CENTRO DE REFERÊNCIA.</a></p>
                        <p class="subline">Freitas C, Meireles L, Sousa P, Lopes J, Noronha Ferreira C, Palma R, Maldonado R, Carrilho Ribeiro L, Velosa J.</li>  

                        <li><p class="subtitle"><a target="_blank" href="src/docs/701.pdf">P70. TRATAMENTO DE FÍSTULAS PÓS-CIRÚRGICAS DO TRATO DIGESTIVO SUPERIOR COM PRÓTESES METÁLICAS AUTO-EXPANSÍVEIS DO CÓLON: EXPERIÊNCIA DE UM CENTRO.</a></p>
                        <p class="subline">Sousa P., Castanheira A., Ministro P., Araújo R., Cancela E., Pinheiro L. F., Simão R., Castro J., Silva A.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/741.pdf">P71. ENDOPRÓTESES ESOFÁGICAS COMO TERAPÊUTICA ENDOSCÓPICA DE FÍSTULAS:  ESTUDO RETROSPECTIVO NUM CENTRO TERCIÁRIO.</a></p>
                        <p class="subline">Sousa,P., Meireles, L., Freitas, L.C., Lopes, J., Ferreira, C.N., Palma,R., Ribeiro, L.C., Velosa, J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/894.pdf">P72 .TRATAMENTO ENDOSCÓPICO DA OBSTRUÇÃO GÁSTRICA PRECOCE ASSOCIADA A SLEEVE.</a></p>
                        <p class="subline">Costa M., Capela T., Silva M. J., Seves I., Canena J., Rio-Tinto R.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/641.pdf">P73. COLOCAÇÃO DE PRÓTESES ESOFÁGICAS EM DOENTES COM DISFAGIA - EXPERIÊNCIA DE UM CENTRO.</a></p>
                        <p class="subline">Meireles L, Sousa P, Freitas L, Lopes J, Ferreira C, Maldonado R , Ribeiro L, Velosa J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/573.pdf">P75. PRÓTESES ENDOSCÓPICAS METÁLICAS AUTO-EXPANSÍVEIS NA SUBOCLUSÃO CÓLICA MALIGNA AGUDA – A EXPERIÊNCIA DE UM CENTRO.</a></p>
                        <p class="subline">Rodrigues-Pinto E., Pereira P., Peixoto A., Lopes S., Ribeiro A., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/505.pdf">P76. OCLUSÃO INTESTINAL - TRATAMENTO ENCOSCÓPICO COM COLOCAÇÃO DE  PROTESES METÁLICAS AUTO-EXPANSÍVEIS.</a></p>
                        <p class="subline">Meireles L., Sousa P., Freitas L., Lopes J. , Ferreira C., Palma R., Maldonado R., Luis Carrilho Ribeiro, José Velosa</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/487.pdf">P77. ENDOSCOPIA PRÉ-OPERATÓRIA EM DOENTES BARIÁTRICOS ASSINTOMÁTICOS – JUSTIFICARÃO OS RESULTADOS A SUA REALIZAÇÃO POR ROTINA ?</a></p>
                        <p class="subline">Fernandes S., Meireles L., Correia L., Carrilho Ribeiro L., Velosa J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/624.pdf">P78. ESTUDO COMPARATIVO ENTRE MÚLTIPLAS PRÓTESES DE PLÁSTICO E PRÓTESES METÁLICAS TOTALMENTE COBERTAS NO TRATAMENTO DE FUGAS BILIARES REFRACTÁRIAS AO TRATAMENTO ENDOSCÓPICO.</a></p>
                        <p class="subline">Meireles L. 1, Canena J., Liberato M., Marques I., Coutinho A., Romão C., Neves B.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/642.pdf">P79. CPRE URGENTE – AVALIAÇÃO DE IMPACTO.</a></p>
                        <p class="subline">Ávila F., Santos V.C., Massinha P., Rego A.C., Nunes N., Pereira J.R., Paz N., Duarte M.A.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/864.pdf">P80. CPRE EM DOENTES COM BILLROTH II – REVISÃO DE 15 EXAMES.</a></p>
                        <p class="subline">Costa Santos V., Ávila F., Massinha P., Nunes N., Rego A.C., Pereira J.R., Paz N., Duarte M.A.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/506.pdf">P81. ECOENDOSCOPIA COM PUNÇÃO ASPIRATIVA NA ABORDAGEM DE MASSAS PANCREÁTICAS – EXPERIÊNCIA DE UM CENTRO TERCIÁRIO.</a></p>
                        <p class="subline">Figueiredo P., Meira T., Ramos L., Barosa R., Pinto-Marques P., Brito M.J., Freitas J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/845.pdf">P82. ECOENDOSCOPIA E ENDOMETRIOSE PÉLVICA.</a></p>
                        <p class="subline">Magalhaes MJ, Castro-Poças F, Araújo T, Ferreira D, Lago P, Moreira T, Pedroto I</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/847.pdf">P83. ECOENDOSCOPIA E CISTOS DE DUPLICAÇÃO.</a></p>
                        <p class="subline">Magalhaes MJ, Castro-Poças F, Araújo T, Lago P, Moreira T, Pedroto I.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/885.pdf">P84. PUNÇÃO ASPIRATIVA POR AGULHA FINA DE LESÕES PANCREÁTICAS GUIADA POR ECOENDOSCOPIA – FACTORES PREDITIVOS DE SUCESSO DIAGNÓSTICO.</a></p>
                        <p class="subline">Rodrigues-Pinto E., Lopes S., Santos-Antunes J., Vilas-Boas F., Lopes J., Baldaque-Silva F., Peixoto A., Silva M., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/934.pdf">P85. SEGURANÇA EM ECOENDOSCOPIA: EXPERIÊNCIA DE QUASE UMA DÉCADA.</a></p>
                        <p class="subline">Sousa P., Ministro P., Portela F., Silva A.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/753.pdf">P86. ACUIDADE DIAGNÓSTICA DA PUNÇÃO GUIADA POR ECOENDOSCOPIA DE ADENOPATIAS: EXPERIÊNCIA DE UM CENTRO.</a></p>
                        <p class="subline">Elvas L., Brito D., Carvalho R., Areia M., Alves S., Saraiva S., Pontes J.M., Cadime A.T.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/802.pdf">P87. ACUIDADE DIAGNÓSTICA DA PUNÇÃO GUIADA POR ECOENDOSCOPIA EM LESÕES SUBEPITELIAIS DO TUBO DIGESTIVO: EXPERIÊNCIA DE UM CENTRO.</a></p>
                        <p class="subline">Elvas L., Brito D., Carvalho R., Areia M., Alves S., Saraiva S., Pontes J.M., Cadime A.T.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/507.pdf">P88. ECOENDOSCOPIA NO ESTADIAMENTO DE ADENOCARCINOMA DO PÂNCREAS RESSECÁVEL.</a></p>
                        <p class="subline">Figueiredo P., Meira T., Ramos L., Barosa R., Pinto-Marques P., Brito M.J., Freitas J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/691.pdf">P89 APLICAÇÃO DA ULTRASSONOGRAFIA TRANSENDOSCÓPICA NA AVALIAÇÃO DE LESÕES SUBEPITELIAIS.</a></p>
                        <p class="subline">Santos-Antunes J., Lopes S., Baldaque-Silva F., Macedo G.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/513.pdf">P90 VALORES DE CA 19-9 MAIS ELEVADOS ASSOCIAM-SE A USE-PAAF DIAGNÓSTICA DE ADENOCARCINOMA DO PÂNCREAS.</a></p>
                        <p class="subline">Barosa R, Roque Ramos L, Figueiredo P, Meira T, Pinto Marques P, Freitas J.</li>

                    </ul>
              </div></div>
		*/});
		$('.content').html(pX);
		break;

			case 'rgp1':
		pX = multiline(function(){/*!
			<div>
                    <h1>COMUNICAÇÕES ORAIS I</h1>
                <div>
                    <ul class="alist">
                        <li><p class="subtitle"><a target="_blank" href="src/docs/673.pdf">1. DOENÇA INFLAMATÓRIA INTESTINAL DE INÍCIO MUITO PRECOCE E DÉFICE DE IL-10.</a></p>
                        <p class="subline">Pinho L., Silva G., Lima R., Marques L., Mansilha H., Ruemmele F., Pereira F.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/592.pdf">2. TROMBOCITOPENIA IMUNE E COLITE ULCEROSA EM IDADE PEDIÁTRICA: CONTRIBUIÇÃO A TERAPÊUTICA BIOLÓGICA?</a></p>
                        <p class="subline">Sara Azevedo, Helena Loreto, Ana Isabel Lopes.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/613.pdf">3. EXPRESSÃO CLÍNICA E ALERGOLÓGICA DA ESOFAGITE EOSINOFÍLICA EM IDADE PEDIÁTRICA - EXPERIÊNCIA DE UM CENTRO TERCIÁRIO.</a></p>
                        <p class="subline">Gomes C., Alegria S., Loreto H., Palha A., Mourato P., Azevedo S., Lopes A.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/569.pdf">4. DETERMINANTES GENÉTICOS DE GASTRITE AUTOIMUNE NA CRIANÇA.</a></p>
                        <p class="subline">Lima R., Oliveira J., Amaral B., Costa E., Miguel N., Costa F., Vizcaína J. R., Barbot J., Santos R.,  Pereira F.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/736.pdf">5. PAPEL DOS ANTICORPOS IGA ANTI-ENDOMÍSIO NO DIAGNÓSTICO DE DOENÇA CELÍACA NUMA AMOSTRA PEDIÁTRICA – NOVO MÉTODO DE QUANTIFICAÇÃO DE RESULTADOS</a></p>
                        <p class="subline">Guedes, P., Corujeira, S., Tavares, M., Trindade, E., Carneiro, F., Jorge Amil</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/520.pdf">6. DOENÇA INFLAMATÓRIA INTESTINAL PEDIÁTRICA NO MINHO.</a></p>
                        <p class="subline">Machado C.A., Martinho I., Laranjeira C., Figueiredo M., Carvalho C., Reis A., Pereira F., Trindade E., Antunes H.</li>           
                        
                        <li><p class="subtitle"><a target="_blank" href="src/docs/715.pdf">7. CONTRIBUIÇÃO DA IMAGIOLOGIA PARA A CARACTERIZAÇÃO DA DOENÇA DE CROHN EM IDADE PEDIÁTRICA</a></p>
                        <p class="subline">Póvoas M, Brito S, Loreto H, Azevedo S, Mourato P, Lobo L, Lopes AI.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/612.pdf">8. ESOFAGITE EOSINOFÍLICA.</a></p>
                        <p class="subline">Amaral B, Lavrador V., Lima R., Silva E., Rocha H., Pereira F.</li>        
                        
                    </ul>
              </div></div>
		*/});
		$('.content').html(pX);
		break;

		case 'rgp2':
		pX = multiline(function(){/*!
			 <div>
                    <h1>CASOS ENDOSCÓPICOS</h1>
                <div>
                    <ul class="alist">
                        <li><p class="subtitle"><a target="_blank" href="src/docs/1007.pdf">1. À PROCURA DO PTLD.</a></p>
                        <p class="subline">Almeida S., Maia C., Gonçalves I., Prado e Castro L. ,Ferreira R.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/471.pdf">2. COLITE ISQUÉMICA PÓS-TRAUMÁTICA EM SÍNDROME DO CINTO DE SEGURANÇA</a></p>
                        <p class="subline">Lopes MF, Coutinho S, Coelho P, Maia C, Amaral J, Pina R, Almeida S.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/981.pdf">3. ESTENOSE ESOFÁGICA CONGÉNITA.</a></p>
                        <p class="subline">Castro L., Freitas F., Pilar C., Alves F., Afonso I., Gonçalves R.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/590.pdf">4. CORPOS ESTRANHOS INTRA-GÁSTRICOS: UMA HISTÓRIA PICANTE E RECIDIVANTE.</a></p>
                        <p class="subline">Ana Isabel Lopes, Sara Azevedo,Lucília Freitas, Ima Figueiredo, João Lopes.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/928.pdf">5.PILHAS ALCALINAS NO ESÓFAGO EM IDADE PEDIÁTRICA – NECESSIDADE DE ABORDAGEM URGENTE.</a></p>
                        <p class="subline">Coimbra D , Coutinho S , Conceição V , Piedade C , Ferreira R , Lopes MF.</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/503.pdf">6. ÚLCERA SOLITÁRIA DO RECTO.</a></p>
                        <p class="subline">Machado C.A., Martinho I., Laranjeira C., Figueiredo M., Carvalho C., Reis A., Pereira F., Trindade E., Antunes H.</li>           
                        
                        <li><p class="subtitle"><a target="_blank" href="src/docs/588.pdf">7. LESÃO ESOFÁGICA AGUDA EM DOIS IRMÃOS: UM CULPADO IMPROVÁVEL</a></p>
                        <p class="subline">Póvoas M, Brito S, Loreto H, Azevedo S, Mourato P, Lobo L, Lopes AI.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/987.pdf">8. IATROGENIC PER-POLYP HEMATOMA MIMICKING ARTERIOVENOUS MALFORMATION.</a></p>
                        <p class="subline">Moreira Silva H, Varma S, Stephenne X, Sokal E.</li>        
                        
                    </ul>
              </div></div>
		*/});
		$('.content').html(pX);
		break;

		case 'rgp3':
		pX = multiline(function(){/*!
			<div>
                    <h1>COMUNICAÇÕES ORAIS II</h1>
                <div>
                    <ul class="alist">
                        <li><p class="subtitle"><a target="_blank" href="src/docs/801.pdf">1. ELASTOGRAFIA HEPÁTICA EM IDADE PEDIÁTRICA - EXPERIÊNCIA PRELIMINAR  DE UM CENTRO TERCIÁRIO.</a></p>
                        <p class="subline">Gonçalves C, Serejo F, Lopes AI, Machado MC, Velosa J.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/783.pdf">2. LAQUEAÇÃO ELÁSTICA PROFILÁTICA DE VARIZES ESOFÁGICAS EM PEDIATRIA - EXPERIÊNCIA DE UM CENTRO TERCIÁRIO</a></p>
                        <p class="subline">Lopes, AI, Gonçalves C, Figueiredo I, Lopes J.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/591.pdf">3.OBSTIPAÇÃO FUNCIONAL EM IDADE PEDIÁTRICA - EXPERIÊNCIA DE UMA CONSULTA INTEGRADA DE UM CENTRO TERCIÁRIO.</a></p>
                        <p class="subline">Sara Azevedo, Cátia Pereira, Inês Asseiceira, Catarina Maltez,  Ana Isabel Lopes.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/958.pdf">4. HEPATOMEGALIA E HIPERCOLESTEROLEMIA – EXPRESSÃO DE UMA PATOLOGIA METABÓLICA RARA OU SUBDIAGNOSTICADA.</a></p>
                        <p class="subline">Moreira Silva H, Labandeiro L, Ramon Vizcaíno J, Santos Silva E.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/562.pdf">5.AVALIAÇÃO DA INGESTÃO ALIMENTAR EM CRIANÇAS E JOVENS HOSPITALIZADOS.</a></p>
                        <p class="subline">Silva F., Asseiceira I., Mexia S., Patrício Z., Nunes P.A., Lopes A.I.</li>       

                        <li><p class="subtitle"><a target="_blank" href="src/docs/530.pdf">6. PROTEÍNA C-REATIVA ULTRASSENSÍVEL E OBESIDADE: CARACTERIZAÇÃO EM IDADE PEDIÁTRICA.</a></p>
                        <p class="subline">Sandra Silva, Henedina Antunes.</li>           
                        
                        <li><p class="subtitle"><a target="_blank" href="src/docs/703.pdf">7.ALERGIA ÀS PROTEÍNAS DO LEITE DE VACA – PROVA DE PROVOCAÇÃO ORAL ANTES DOS 12 MESES DE IDADE?</a></p>
                        <p class="subline">Patraquim, C., Neiva, F., Antunes, H.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/964.pdf">8. GASTROSTOMIA ENDOSCÓPICA PERCUTÂNEA: QUAL A INFLUÊNCIA NA QUALIDADE  DE VIDA DE DOENTES E CUIDADORES.</a></p>
                        <p class="subline">Margarida F. Pimentel, Henedina Antunes, Conceição Antunes.</li>        
                        
                    </ul>
              </div></div>
		*/});
		$('.content').html(pX);
		break;

		case 'rgp4':
		pX = multiline(function(){/*!
			<div>
                    <h1>POSTERS</h1>
                <div>
                    <ul class="alist">
                        <li><p class="subtitle"><a target="_blank" href="src/docs/801.pdf">1. INFLIXIMAB, ADENOFLEIMÃO ABDOMINAL, MICROABCESSOS ESPLÉNICOS E…SURPRESA!</a></p>
                        <p class="subline">Cancelinha, C., Maia, C., Almeida, S., Ferreira, R.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/783.pdf">2. SÍNDROME DE CAROLI - UMA CAUSA RARA DE HEPATOMEGALIA.</a></p>
                        <p class="subline">Rangel MA, Santos H, Almeida T, Pinto Pais I, Costa C.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/591.pdf">3.SÍNDROME ENTEROCOLITE INDUZIDA POR PROTEÍNAS ALIMENTARES, A PROPÓSITO DE UM CASO CLÍNICO.</a></p>
                        <p class="subline">Ribeiro A., Moreira D., Pinto Pais I. , Costa C.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/958.pdf">4. FACTORES PREDITIVOS DE MORBILIDADE NA APENDICECTOMIA.</a></p>
                        <p class="subline">Ruben Lamas-Pinheiro, Rita Ferreira, Catarina Longras, Cláudia Melo, Tiago Henriques-Coelho, José Estevão-Costa.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/562.pdf">5.COLITE ULCEROSA NA ADOLESCÊNCIA.</a></p>
                        <p class="subline">Manuel Ferreira-Magalhães, Eunice Trindade, Marta Tavares, Joane Lopes, Fátima Carneiro, Jorge Amil Dias.</li>            
                    </ul>
              </div></div>
		*/});
		$('.content').html(pX);
		break;

		case 'ea1':
		pX = multiline(function(){/*!
		 <div>
                    <h1>COMUNICAÇÕES LIVRES</h1>
                <div>
                    <ul class="alist">
                        <li><p class="subtitle"><a target="_blank" href="src/docs/856.pdf">1. ESTUDO RETROSPECTIVO DAS COMPLICAÇÕES ASSOCIADAS À COLOCAÇÃO DE PEG</a></p>
                        <p class="subline">Pires, F., Rocha, M., Delsaut, M., Martins, N.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/558.pdf">2. ABORDAGEM AO UTENTE COM PAPILOMA VÍRUS HUMANO- CONSULTA DE ENFERMAGEM NA PROTOLOGIA.</a></p>
                        <p class="subline">Freire, A;, Rodrigues, E;, Gonçalves,N;, Mena,C;, Cunha,I;, Lima, J;, Silva, B;, Rodrigues,M;, Ferreira, S;, Carvalho,A;, Pedregal,S;, Serrano,A;, Barros, S.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/597.pdf">3. INSUFLAÇÃO COM DIÓXIDO DE CARBONO: LUXO OU NECESSIDADE NA ENDOSCOPIA DIGESTIVA?</a></p>
                        <p class="subline">Sousa C., Bré R., Teixeira V.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/568.pdf">4. EMERGÊNCIA DO CUIDAR NA RUPTURA DE VARIZES COM RECURSO A PRÓTESE METÁLICA.</a></p>
                        <p class="subline">Cunha,I;, Lima,J;, Carvalho, A;, Pedregal,S;, Gonçalves,N;, Mena,C;, Freire,A;, Silva,B;, Rodrigues,E;, Ferreira,S;, Rodrigues,M;, Serrano,A;, Barros,S.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/716.pdf">5. SEDAÇÃO EM COLONOSCOPIA POR NÃO ANESTESISTAS.</a></p>
                        <p class="subline">Ana Sofia Dias, Sónia Pereira.</li>    
                        <li><p class="subtitle"><a target="_blank" href="src/docs/968.pdf">6. CONSULTA DE ENFERMAGEM A UTENTES COM PEG: ESTUDO RETROSPECTIVO SOBRE PREVENÇÃO E GESTÃO DE COMPLICAÇÕES A CURTO-MÉDIO PRAZO</a></p>
                        <p class="subline">Femenia M., Machado V., Severiano S., Sousa L.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/553.pdf">7. INTERVENÇÃO DA ENFERMAGEM ATRAVÉS DE UMA CONSULTA NA MELHORIA DOS  INDICADORES DE QUALIDADE NA COLONOSCOPIA.</a></p>
                        <p class="subline">Santos, I., Almeida, A., Martins, M., Santos, S., Teixeira, C., Nunes, P.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/515.pdf">8. HIGIENIZAÇÃO DE UMA UNIDADE DE ENDOSCOPIA DIGESTIVA - COMO MONITORIZAR</a></p>
                        <p class="subline">Bré R.,Sousa C.,Teixeira V.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/563.pdf">9. O PAPEL DOS ENFERMEIROS NOS ENSAIOS CLÍNICOS: A NOSSA REALIDADE!</a></p>
                        <p class="subline">Marlene Andrade, Rui Carneiro, Paula Lago, Marta Salgado</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/572.pdf">10. NÃO CONFORMIDADES NA COMUNICAÇÃO – SINAIS DE ALERTA</a></p>
                        <p class="subline">Silva B, Serrano A, Mesquita S, Nunes T, GonçalvesN, Cunha I, Lima J, Carvalho A, Pedregal, S, Mena C, Freire A, Rodrigues E, Ferreira S, Rodrigues, M, Barros,S.</li>   
                        <li><p class="subtitle"><a target="_blank" href="src/docs/560.pdf">11. ABORDAGEM ENDOSCÓPICA TRANSMURAL NA NECROSECTOMIA PANCREÁTICA –  DA EVIDÊNCIA Á EXCELÊNCIA</a></p>
                        <p class="subline">Mena C, Freire A, Gonçalves N, Cunha I, Lima J, Silva B, Rodrigues E, Ferreira S, Rodrigues M, Carvalho A, Pedregal S, Serrano A, Barros S.</li>           
                    </ul>
              </div></div>
		*/});
		$('.content').html(pX);
		break;

		case 'ea2':
		pX = multiline(function(){/*!
		 <div>
                    <h1>POSTERS APEGAST</h1>
                <div>
                    <ul class="alist">
                        <li><p class="subtitle"><a target="_blank" href="src/docs/519.pdf">1. PROGRAMA DE VIGILÂNCIA APÓS TRATAMENTO DO CANCRO DO CÓLON E RETO</a></p>
                        <p class="subline">Pampulha M., Pereira N., Soares C.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/952.pdf">2. UTILIZAÇÃO DE CLOROHEXIDINA NA DESINFECÇÃO DE ESTOMAS DE PEG COM EXSUDADO: INDICADORES DE RESULTADO DO ANO 2013.</a></p>
                        <p class="subline">Femenia M., Machado V., Severiano S., Sousa L.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/559.pdf">3. CONSULTA DE ENFERMAGEM EM PROTOLOGIA – UM FUTURO</a></p>
                        <p class="subline">Freire,A, Rodrigues,E., Gonçalves,N., Mena,C., Lima,J., Cunha,I., Silva,B., Ferreira,S., Rodrigues,M., Carvalho, A;, Pedregal,S;, Serrano,A;, Barros,S.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/549.pdf">4. IMPORTÂNCIA DO \”REAL-TIME\” E DA RE-COLOCAÇÃO ENDOSCÓPICA DA CÁPSULA EM  DOENTES COM ANTECEDENTES CIRÚRGICOS</a></p>
                        <p class="subline">Almeida A., Martins M., Santos I., Santos S., Teixeira C. , Pinho R.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/551.pdf">5. REPROCESSAMENTO EM ENDOSCOPIA DIGESTIVA - ELABORAÇÃO DE MANUAL.</a></p>
                        <p class="subline">Teixeira C., Comenda E., Costa L., Fernandes F.</li>    
                        <li><p class="subtitle"><a target="_blank" href="src/docs/570.pdf">6. INTERVENÇÃO NO UTENTE COM HEPATITE C EM REGIME DE RECLUSÃO- DESAFIOS</a></p>
                        <p class="subline">Gonçalves N, Fidalgo I, Cunha I, Lima J, Carvalho A, Pedregal S, Mena C, Freire, A, Silva B, Rodrigues E, Ferreira S, Rodrigues M, Serrano A, Barros S.</li>

                        <li><p class="subtitle"><a target="_blank" href="src/docs/602.pdf">7. ENDOSCOPIA DIGESTIVA NO TRATAMENTO DE FÍSTULAS PÓS CIRURGIA BARIÁTRICA.</a></p>
                        <p class="subline">Teixeira V., Sousa C., Bré R.</li>    

                        <li><p class="subtitle"><a target="_blank" href="src/docs/555.pdf">8. ECOENDOSCOPIA COM PUNÇÃO - PAPEL DO ENFERMEIRO</a></p>
                        <p class="subline">Esteves S, Caldas P, Moreira H.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/564.pdf">9. LÂMINA 24.</a></p>
                        <p class="subline">Carvalho A, Pedregal S, Gonçalves N, Mena C, Freire A, Cunha I, Lima J, Silva B, Rodrigues E, Ferreira S, Rodrigues M, Serrano A, Barros S.</li>      

                        <li><p class="subtitle"><a target="_blank" href="src/docs/561.pdf">10. TECNOLOGIA EDUCACIONAL EM CONTEXTO DE FORMAÇÃO EM SERVIÇO – DA OBSERVAÇÃO À INTERVENÇÃO.</a></p>
                        <p class="subline">Rodrigues M, Ferreira S, Regufe V, Serrano A, Mena C, Freire A, Gonçalves N, Cunha I, Lima J, Silva B, Rodrigues E, Carvalho A, Pedregal S, Barros S.</li>   
                             
                    </ul>
              </div></div>
		*/});
		$('.content').html(pX);
		break;

	}
});         
//         </Menu-click-Control>

// 		<Search Form>
		$('#searchF').submit(function(e) {
			e.preventDefault();
			var sVal = ($('input.bah').val());
			var sResult1,sResult2,cR1,cR2;
			sResult1 = projectX({title:{likenocase:sVal}});
			cR1 = sResult1.count();
			sResult1 = sResult1.get();
			sResult2 = projectX({authors:{likenocase:sVal}});
			cR2 = sResult2.count();
			sResult2 = sResult2.get();
			var searchX = ($.extend(true,sResult1,sResult2));

			$('.content').html(getSearchX(searchX,cR1+cR2));
			$('input.bah').val('');
		});
   
// 		</Search Form>


});//End of document ready



