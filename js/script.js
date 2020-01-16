function toogleRecipe() {
	const node = document.getElementById("event_action_recette");
	if (node.classList.contains("panel_active"))
		node.classList.remove("panel_active");
	else
		node.classList.add("panel_active");
}

function addRecipeHandler() {
	const button_recipe = document.getElementsByClassName("button__recette")[0];
	const button_submit = document.getElementsByClassName("button__jeparticipe")[0];
	const button_close = document.getElementsByClassName("button__close")[0];
	button_recipe.addEventListener("click", toogleRecipe);
	button_submit.addEventListener("click", toogleRecipe);
	button_close.addEventListener("click", toogleRecipe);
}

function toogleDonate() {
	const node = document.getElementById("donate_form");
	if (node.classList.contains("step_1")) {
		node.classList.remove("step_1");
		node.classList.add("step_2");
	}
	else if (node.classList.contains("step_2")) {
		node.classList.remove("step_2");
		node.classList.add("step_3");
	} else {
		node.classList.remove("step_3");
		node.classList.add("step_done");
	}
}

function addDonateHandler() {
	const step_one_buttons = document.getElementById("step1").getElementsByTagName("input");
	for (var i = 0; i < step_one_buttons.length; i++)
		step_one_buttons[i].addEventListener("click", toogleDonate);

	const step_two_buttons = document.getElementById("step2").getElementsByTagName("input");
	for (var i = 0; i < step_two_buttons.length; i++)
		step_two_buttons[i].addEventListener("click", toogleDonate);

	const step_three_buttons = document.getElementById("step3").getElementsByTagName("img");
	for (var i = 0; i < step_three_buttons.length; i++)
		step_three_buttons[i].addEventListener("click", toogleDonate);
}

function setup() {
	addRecipeHandler();
	addDonateHandler();
}

window.onload = () => {
	setup();
};
