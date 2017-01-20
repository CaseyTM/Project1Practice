$(document).ready(()=>{
	var url = 'https://wordsapiv1.p.mashape.com/words/';
	var search_term = '?random=true';
	$.ajax({
		type: 'GET',
		url: `${url}${search_term}`,
		headers: {
			'X-Mashape-Key':'TuTThrOwOjmshZV0vl4iYgLfvfKtp1MUlFUjsnuMFHEOutvnZ2'
		}
	}).done((data)=>{
	
		// console.log(data.pronunciation.all);
		// console.log(data.results[0].definition);
		// console.log(data.syllables.list);
		console.log(data);
	})
});
