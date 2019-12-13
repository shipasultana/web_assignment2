function fortune() {
	var textArray = ["Smiling is definitely one of the best beauty remedies. If you have a good sense of humor and a good approach to life, that's beautiful.","Always do your best. What you plant now, you will harvest later.","An investment in knowledge pays the best interest.","Research shows that there is only half as much variation in student achievement between schools as there is among classrooms in the same school","The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.","Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.","The best preparation for tomorrow is doing your best today.","Love yourself for who you are, and trust me, if you are happy from within, you are the most beautiful person, and your smile is your best asset.","The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.","Good, better, best. Never let it rest. 'Til your good is better and your better is best."]
	var num =Math.floor(Math.random() * 10);
	document.getElementById('fortune').innerHTML = textArray[num]
	
}
function tkConverter(){
document.converter.euro.value= document.converter.tk.value * 95
document.converter.dollar.value = document.converter.tk.value * 85
document.converter.pound.value = document.converter.tk.value * 100
document.converter.yen.value = document.converter.tk.value * 110
}

function quizQuestion() {
	
	var selectedOption1 = document.querySelector('input[name="1"]:checked').value;
	var selectedOption2 = document.querySelector('input[name="2"]:checked').value;
	var selectedOption3 = document.querySelector('input[name="3"]:checked').value;
	var selectedOption4 = document.querySelector('input[name="4"]:checked').value;
	
	
	var i = 0
	if (selectedOption1 == 'a') {
		i+=1;
		document.getElementById('ans1').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans1').innerHTML = "INCORRECT: the correct answer is A) Barry Bonds"
	}
	
	if (selectedOption2 == 'a') {
		i+=1;
		document.getElementById('ans2').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans2').innerHTML = "INCORRECT: the correct answer is A) Neil Armstrong"
	}
	
	if (selectedOption3 == 'b') {
		i+=1;
		document.getElementById('ans3').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans3').innerHTML = "INCORRECT: the correct answer is B) Dhaka"
	}
	
	if (selectedOption4 == 'b') {
		i+=1;
		document.getElementById('ans4').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans4').innerHTML = "INCORRECT: the correct answer is B) 1881"
	}
	
	