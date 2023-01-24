var expand = true;
var play = false;
var t,
	t2 = -1,
	dt,
	tstart,
	tpause,
	tend,
	timer,
	audio;
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var startbtn = document.getElementById("startbtn");
var stopbtn = document.getElementById("stopbtn");
var clearbtn = document.getElementById("clearbtn");
var count = document.getElementById("count");
var count2 = document.getElementById("count2");
var timebtn = document.getElementById("timebtn");
var rstbtn = document.getElementById("rstbtn");

window.onload = function () {
	min.onclick = function () {
		min.select();
	};
	sec.onclick = function () {
		sec.select();
	};
	min.onblur = function () {
		onminBlur();
	};
	sec.onblur = function () {
		onsecBlur();
	};
	//timebtn.onclick = function() { onExpand(); }
	startbtn.onclick = function () {
		onStart();
	};
	clearbtn.onclick = function () {
		onClear();
	};
	rstbtn.onclick = function () {
		onReset();
	};
	document.onkeypress = function (e) {
		if (e.code == "Space" || e.keyCode == 32) {
			e.preventDefault();
			if (expand == false) onAdd();
			else {
				if (document.activeElement === count) onAdd();
				if (document.activeElement === count2) onAdd2();
			}
		}
	};
	audio = new Audio("https://www.rapidtables.com/lib/audio/Notification.mp3");
};
function onminBlur() {
	if (min.value.length == 0) min.value = "00";
	if (min.value.length == 1) min.value = "0" + min.value;
}
function onsecBlur() {
	if (sec.value.length == 0) sec.value = "00";
	if (sec.value.length == 1) sec.value = "0" + sec.value;
}
function onStart() {
	t = Date.now();
	if (play == 0) {
		console.log("1");
		timer = setTimeout(function () {
			onTime();
		}, 1000);
		play = 1;
		tstart = t;
		startbtn.innerHTML =
			"<img src='https://www.rapidtables.com/lib/icons/material/svg/pause_white_24dp.svg' loading='lazy' width='24' height='24' alt=''>";
	} else if (play == 1) {
		console.log("2");
		clearTimeout(timer);
		play = 2;
		tpause = t;
		startbtn.innerHTML =
			"<img src='https://www.rapidtables.com/lib/icons/material/svg/play_arrow_white_24dp.svg' loading='lazy' width='24' height='24' alt=''>";
	} else {
		console.log("3");
		if (t2 == -1) dt = tpause - tstart;
		else dt = tpause - t2;
		timer = setTimeout(function () {
			onTime();
		}, 1000 - dt);
		play = 1;
		tstart += t - tpause;
		startbtn.innerHTML =
			"<img src='https://www.rapidtables.com/lib/icons/material/svg/pause_white_24dp.svg' loading='lazy' width='24' height='24' alt=''>";
	}
	min.disabled = true;
	sec.disabled = true;
}
function onTime() {
	t2 = Date.now();
	var m = parseInt(min.value);
	var s = parseInt(sec.value);
	if (s > 1 || m > 0) {
		dt = (t2 - tstart) % 1000;
		timer = setTimeout(function () {
			onTime();
		}, 1000 - dt);
	}
	var val = 60 * m + s;
	val--;
	var m1 = Math.floor(val / 60).toString();
	var s1 = (val % 60).toString();
	min.value = m1.length == 1 ? "0" + m1 : m1;
	sec.value = s1.length == 1 ? "0" + s1 : s1;
	if (val == 0) {
		min.disabled = false;
		sec.disabled = false;
		tend = t2;
		console.log(tend - tstart);
		setTimeout(function () {
			audio.play();
		}, 0);
	}
}
function onClear() {
	clearTimeout(timer);
	play = false;
	min.value = "10";
	sec.value = "00";
	min.disabled = false;
	sec.disabled = false;
	startbtn.innerHTML =
		"<img src='https://www.rapidtables.com/lib/icons/material/svg/play_arrow_white_24dp.svg' loading='lazy' width='24' height='24' alt=''>";
}
function onAdd() {
	var num = count.value;
	num++;
	count.value = num;
}
function onAdd2() {
	var num = count2.value;
	num++;
	count2.value = num;
}
function onRemove() {
	var num = count.value;
	num--;
	count.value = num;
}
function onRemove2() {
	var num = count2.value;
	num--;
	count2.value = num;
}
function onReset() {
	var res = confirm("Are you sure?");
	if (res) {
		count.value = 0;
		count2.value = 0;
	}
	audio.pause();
}
function onExpand() {
	timebtn.blur();
	if (expand == false) {
		expand = true;
		timebtn.innerHTML =
			"<img src='https://www.rapidtables.com/lib/icons/material/svg/expand_more_black_24dp.svg' loading='lazy' width='24' height='24' alt=''> TIME";
		timebtn.title = "Collapse";
	} else {
		expand = false;
		timebtn.innerHTML =
			"<img src='https://www.rapidtables.com/lib/icons/material/svg/expand_less_black_24dp.svg' loading='lazy' width='24' height='24' alt=''> TIME";
		timebtn.title = "Expand";
	}
}
