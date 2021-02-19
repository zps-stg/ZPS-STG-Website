function multiplier(fullUFO, fullPower, color) {
    if (color == "red") {
		return fullPower ? 2 : 1;
	}

	if (fullUFO) {
		switch (color) {
            case "rainbow": return 4;
			case "blue": return 8;
			case "green": return 2;
		}
	} else {
		switch (color) {
			case "blue": return 6;
			case "rainbow": return 3;
			case "green": return 1;
		}
	}
}

function ufoValue() {
    var itemRequirement = [34, 36, 39, 42, 46, 51, 56], color, piv,
    point, power, stage, fullPower, items, fullUFO, mult, result;

    color = document.getElementById("color").value;
	piv = Number(document.getElementById("piv").value);
	point = Number(document.getElementById("point").value);
	power = Number(document.getElementById("power").value);
	stage = Number(document.getElementById("stage").value);
	fullPower = document.getElementById("full_power").checked;
	items = point + power;
	fullUFO = items >= itemRequirement[stage];
	mult = multiplier(fullUFO, fullPower, color);
	result = piv * mult;

	if (color == "red") {
		return result * items;
	} else if (color == "rainbow") {
		return result * power;
	} else {
		return result * point;
	}
}

function sep(number) {
    if (isNaN(number)) {
        return '-';
    }

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit").addEventListener("click", function () {
        var value = ufoValue(), message = "The score for this summon is " + sep(value) + " points.";

        if (value >= 1000000000 || !isFinite(value)) {
            message += " A summon of this value would crash the game!";
        }

        document.getElementById("result").innerHTML = message;
    });

    document.getElementById("form").addEventListener("keypress", function (key) {
        if (key.code == "Enter") {
            document.getElementById("submit").click();
        }
    });
}, false);
