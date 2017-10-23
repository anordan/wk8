//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

	/* function get author and year string */
	function getAuthorAndYearString (speechData) {
		return 'This speech was written by ' + speechesArray[speechData].author + ' in ' + speechesArray[speechData].year + '.' + '<br>';
	};
	
	/* display bce value, create a function */
	function displayBCEString (speechData) {
	if (speechesArray[speechData].yearIsBCE === true) {
		return 'This speech took place before the common era.<br>';
	}else{
		return 'This speech took place during the common era.<br>';
	}
};
	
	/* get oldest or youngest string function */
	function getOldestOrYoungestString(speechData) {
		var oldest = speechesArray[0].year,
			newest = speechesArray[0].year;
			
	for(var i = 0; i < speechesArray.length; i++){
		if (speechesArray[i].year < oldest){
			oldest = speechesArray[i].year;
		}
		if (speechesArray[i].year > newest){
			newest = speechesArray[i].year;
		}
	}
	if(speechesArray[speechData].year === oldest){
		return 'This is the oldest speech on the page.<br>';
	}
	if (speechesArray[speechData].year === newest){
		return 'This is the most recent speech on the page.<br>';
	}else{
		return 'This is neither the oldest and also not the most recent speech.<br>';
	}
};
	
	
	
document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});


/* use same approach for author and year to display resulting string */
document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(0);
	document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(0);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(0);
});
  
  
document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(1);
	document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(1);
 document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(1);
});
 
 
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(2);
	document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(2);
document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(2);
});

