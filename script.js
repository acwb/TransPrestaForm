///////////////////////////////////////////////////////////////
// Gestion des options supplémentaires (sélectionner/supprimer)

function selectOption(select) {

	var option = select.options[select.selectedIndex];
	var ul = select.parentNode.getElementsByTagName('ul')[0];
	     
	var li = document.createElement('li');
	var input = document.createElement('input');
	var text = document.createTextNode(option.firstChild.data);
	     
	input.type = 'hidden';
	input.name = 'options[]';
	input.value = option.value;

	li.appendChild(input);
	li.appendChild(text);
	li.setAttribute('onclick', 'this.parentNode.removeChild(this);');     
	    
	ul.appendChild(li);
}


///////////////////////////////////////////////////////////////
// INJECTION DU CONTENU VIA JS


	///////////////////////////////////////////////////////////////
	// header (titre, icone)
	$('<img src="logo.png"><h2>Chiffrage d\'une prestation de transport Routier</h2>').appendTo('header');


	///////////////////////////////////////////////////////////////
	// contenu du 1er formulaire (entrée des données)

	$('<label for="element_nature">Nature de l\'élément</label>').appendTo('#inputform');
	$('<input/>', {
		'type' : 'text',
		'id' : 'element_nature',
		'name' : 'element_nature',
		'placeholder' : 'Nature de l\'élément'
	}).appendTo('#inputform');


	$('<br/><label for="element_dimensions">Dimensions</label>').appendTo('#inputform');
	$('<input/>', {
		'type' : 'number',
		'class' : 'small_input',
		'id' : 'element_dimensions',
		'name' : 'element_dimensions',
		'placeholder' : 'Encombrement en m²'
	}).appendTo('#inputform');


	$('<label for="element_poids" class="fl_reset">Poids</label>').appendTo('#inputform');
	$('<input/>', {
		'type' : 'number',
		'class' : 'small_input',
		'id' : 'element_poids',
		'name' : 'element_poids',
		'placeholder' : 'Poids en kilogramme'
	}).appendTo('#inputform');


	$('<br/><label for="pcharge_adresse">Adresse de prise en charge</label>').appendTo('#inputform');
	$('<textarea/>', {
		'row' : '3',
		'id' : 'pcharge_adresse',
		'name' : 'pcharge_adresse'
	}).appendTo('#inputform');


	$('<br/><label for="pcharge_date">Date de mise à disposition</label>').appendTo('#inputform');
	$('<input/>', {
		'type' : 'date',
		'id' : 'pcharge_date',
		'name' : 'pcharge_date'
	}).appendTo('#inputform');


	$('<br/><label for="livraison_adresse">Adresse de livraison</label>').appendTo('#inputform');
	$('<textarea/>', {
		'row' : '3',
		'id' : 'livraison_adresse',
		'name' : 'livraison_adresse'
	}).appendTo('#inputform');


	$('<br/><label for="livraison_date">Date souhaitée de livraison</label>').appendTo('#inputform');
	$('<input/>', {
		'type' : 'date',
		'id' : 'livraison_date',
		'name' : 'livraison_date'
	}).appendTo('#inputform');


	// selecteur d'option (todo: tooltip injecté séparément dans le label)
	$('<br/><label for="options_sup" class="withicon">Options supplémentaires <a href="#" class="tooltip-right" data-tooltip="Bonjour je suis le petit tool-tip qui permet d\'afficher plus d\'infos sur chacune des options supplémentaires disponibles">&#128712;</a></label>').appendTo('#inputform');
	var opt_selector = $('<select/>', {
		'id' : 'selectlangue',
		'onchange' : 'selectOption(this);'
	}).appendTo('#inputform')

	$('<option/>', {
		'value' : 'SansOption3',
		'disabled' : 'disabled',
		'selected' : 'selected',
		'text' : '--- Sélectionner une option à ajouter ---'
	}).appendTo(opt_selector);

	$('<option/>', {
		'value' : 'Option1',
		'text' : 'Première option supplémentaire avec mini-description'
	}).appendTo(opt_selector);

	$('<option/>', {
		'value' : 'Option2',
		'text' : 'Deuxième option supplémentaire avec mini-description'
	}).appendTo(opt_selector);

	$('<option/>', {
		'value' : 'Option3',
		'text' : 'Troisième option supplémentaire avec mini-description'
	}).appendTo(opt_selector);


	// placeholder pour affichage des options sélectionnées
	$('<ul id="selected_options"></ul>').appendTo('#inputform');


	$('<br/><label for="comment">Commentaire</label>').appendTo('#inputform');
	$('<textarea/>', {
		'row' : '3',
		'id' : 'comment',
		'name' : 'comment'
	}).appendTo('#inputform');


	///////////////////////////////////////////////////////////////
	// contenu du 2nd formulaire (sortie des données)


	$('<legend>Devis (non contractuel)</legend>').appendTo('#outputform');


	$('<label for="catego_encomb">Catégorie d\'encombrement</label>').appendTo('#outputform_left');
	$('<input/>', {
		'type' : 'text',
		'disabled' : 'disabled',
		'class' : 'mini_input',
		'id' : 'catego_encomb',
		'name' : 'catego_encomb'
	}).appendTo('#outputform_left');


	$('<label for="distance">Distance</label>').appendTo('#outputform_left');
	$('<input/>', {
		'type' : 'text',
		'disabled' : 'disabled',
		'class' : 'mini_input',
		'id' : 'distance',
		'name' : 'distance'
	}).appendTo('#outputform_left');


	$('<label for="cout_options_out">Coût (hors options)</label>').appendTo('#outputform_left');
	$('<input/>', {
		'type' : 'text',
		'disabled' : 'disabled',
		'class' : 'mini_input',
		'id' : 'cout_options_out',
		'name' : 'cout_options_out'
	}).appendTo('#outputform_left');


	$('<label for="delai">Délai</label>').appendTo('#outputform_right');
	$('<input/>', {
		'type' : 'text',
		'disabled' : 'disabled',
		'class' : 'mini_input',
		'id' : 'delai',
		'name' : 'delai'
	}).appendTo('#outputform_right');


	$('<br/><label for="poids">Poids</label>').appendTo('#outputform_right');
	$('<input/>', {
		'type' : 'text',
		'disabled' : 'disabled',
		'class' : 'mini_input',
		'id' : 'poids',
		'name' : 'poids'
	}).appendTo('#outputform_right');


	$('<br/><label for="cout_options">Coût des options</label>').appendTo('#outputform_right');
	$('<input/>', {
		'type' : 'text',
		'disabled' : 'disabled',
		'class' : 'mini_input',
		'id' : 'cout_options',
		'name' : 'cout_options'
	}).appendTo('#outputform_right');

	
	$('<br/><label for="cout_total">TOTAL</label>').appendTo('#outputform_right');
	$('<input/>', {
		'type' : 'text',
		'disabled' : 'disabled',
		'class' : 'mini_input',
		'id' : 'cout_total',
		'name' : 'cout_total'
	}).appendTo('#outputform_right');


	////////////////////////////////////////////////////////////////////////
	// Boutons d'actions (save, print, reset, send)

	$('<a href="#" id="devis_save" class="buttons save fl_right">Enregistrer</a>').appendTo('#boutons_devis');
	$('<a href="#" id="devis_print" class="buttons print fl_right">Imprimer</a>').appendTo('#boutons_devis');
	$('<a href="#" class="buttons cancel" id="form_reset">Annuler</a>').appendTo('#boutons_form');
	$('<a href="#" class="buttons submit" id="form_submit">Valider</a>').appendTo('#boutons_form');


	////////////////////////////////////////////////////////////////////////
	// Tableau infos bas de page

	$('#titre_tab').text('Catégories de prise en charge');

	$('<tr><th>Distance</th><th>Encombrement</th><th>Délai</th><th>Poids</th></tr>').appendTo('#infos_table > thead');

	$('<tr><td>0 - 50 km</td><td><  1 m3</td><td>>=  1 semaine</td><td>0 - 50 kg</td></tr>').appendTo('#infos_table > tbody');
	$('<tr><td>50 - 250 km</td><td><  5 m3</td><td><=  1 semaine</td><td>50 - 500 kg</td></tr>').appendTo('#infos_table > tbody');
	$('<tr><td>250 - 1 000 km</td><td>>  5 m3</td><td><=  2 jours</td><td>500 - 2 000 kg</td></tr>').appendTo('#infos_table > tbody');
	$('<tr><td>> 1 000 km</td><td> </td><td> </td><td>< 2 000 kg</td></tr>').appendTo('#infos_table > tbody');



///////////////////////////////////////////////////////////////
// Validation du formulaire 

var form = document.getElementById("devis_form");
document.getElementById("form_submit").addEventListener("click", function () {
	event.preventDefault(); // à virer éventuellement
	console.log("Click sur le bouton Valider : submit du formulaire")
	form.submit();
});
document.getElementById("form_reset").addEventListener("click", function () {
	event.preventDefault(); // à virer éventuellement
	console.log("Click sur le bouton Annuler : reset du formulaire")
	form.reset();
});
