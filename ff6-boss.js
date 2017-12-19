var symbols = {
	"Fire" : "&#x1f525;",
	"Ice" : "&#x2744;",
	"Lightning" : "&#x1f5f2;",
	"Earth" : "&#x23da;",
	"Wind" : "&#x1f300;",
	"Water" : "&#x1f30a;",
	"Pearl" : "&#x274d;",
	"Blind" : "&#x1f576;",
	"Death" : "&#x1c6a;",
	"Stone" : "<span>&#x1f5ff;</span>",
	"Imp" : "&#x1f422;",
	"Poison" : "&#x1f571;",
	"Sleep" : "&#x1f4a4;",
	"Muddle" : "&#x1f4ab;",
	"Berserk" : "&#x1f479;",
	"Mute" : "<span>&#x1f4ac;</span>",
	"Stop" : "&#xE283;",
	"Slow" : "&#x1f557;",
	"Undead" : "&#x1f480;",
};

function renderTable(monster) {
	var boss = bosses[monster]
	var bossTable = "<table class=\"boss\">" +
			"<tr><td>" +
				"<table class=\"colname\">" +
					"<tr><th>" + monster + "</th></tr>" +
					"<tr><td>" + drawImage(monster) + "</td></tr>" +
				"</table>" +
			"<td>" + writeAllStats(boss.stats) + "</td>" +
			"<td>" + writeAffinity(boss.affin) + "</td></tr>";
	if(boss.notes.length > 0) {
		bossTable += "<tr><th class=\"notes\" colspan=\"3\">Notes</th></tr>" +
			"<tr><td colspan=\"3\">" + writeNotes(boss.notes) + "</td></tr>";
	}
	if(boss.wanted.length > 0) {
		bossTable += "<tr><th class=\"notes\" colspan=\"3\">Wanted</th></tr>" +
			"<tr><td colspan=\"3\">" + writeNotes(boss.wanted) + "</td></tr>";
	}
	bossTable += "</table>";
	document.write(bossTable);
}

function drawImage(name) {
	var imgTag = "";
	if(name.indexOf("Ultros") != -1 && name != "Ultros (Lete)") {
		imgTag = "<img src=\"images/Ultros.png\" />";
	} else if(name.indexOf("Hidonite") != -1) {
		imgTag = "<img src=\"images/Hidonite.png\" />";
	} else if(name.indexOf("Phunbaba") != -1) {
		imgTag = "<img src=\"images/Phunbaba.png\" />";
	} else {
		imgTag = "<img src=\"images/" + name + ".png\" />";
	}
	
	return imgTag;
}

function writeAllStats(stats) {
	return "<table class=\"colstats\">" +
			"<tr>" + writeStat(stats, "HP") + writeStat(stats, "MP") + "</tr>" +
			"<tr>" + writeStat(stats, "Atk") + writeStat(stats, "Def") + writeStat(stats, "Eva") + "</tr>" +
			"<tr>" + writeStat(stats, "MAtk") + writeStat(stats, "MDef") + writeStat(stats, "MEva") + "</tr>" +
		"</table>";
}

function writeStat(stats, stat) {
	return "<th>" + stat + "</th>" +
		"<td>" + stats[stat.toLowerCase()] + "</td>";
}

function writeAffinity(affin) {
	return "<table class=\"colaffin\">" +
			"<tr><td>" +
				"<table class=\"affin-grp\">" +
					"<tr><th>Vuln</th></tr>" +
					"<tr><td>" + writeAffinityGroup(affin.vuln) + "</td></tr>" +
				"</table>" +
			"</td><td>" +
				"<table class=\"affin-grp\">" +
					"<tr><th>Weak</th></tr>" +
					"<tr><td>" + writeAffinityGroup(affin.weak) + "</td></tr>" +
				"</table>" +
			"</td></tr>" +
			"<tr><td>" +
				"<table class=\"affin-grp\">" +
					"<tr><th>Null</th></tr>" +
					"<tr><td>" + writeAffinityGroup(affin.resist) + "</td></tr>" +
				"</table>" +
			"</td><td>" +
				"<table class=\"affin-grp\">" +
					"<tr><th>Absorb</th></tr>" +
					"<tr><td>" + writeAffinityGroup(affin.absorb) + "</td></tr>" +
				"</table>" +
			"</td></tr>" +
		"</table>";
}

function writeAffinityGroup(ag) {
	var tableContent = "";
	if(ag.length > 0) {
		tableContent = "<table class=\"symbols\">";
		for (var i = 0; i < ag.length; i++) {
			if(i % 4 == 0) {
				if(i > 0) {
					tableContent += "</tr>";
				}
				tableContent += "<tr>";
			}
			tableContent += "<td>" + symbols[ag[i]] + "</td>";
		}
		tableContent += "</tr></table>";
	}
	return tableContent;
}


function writeNotes(notes) {
	var notesContent = "";
	if(notes.length > 0) {
		notesContent += "<ul>";
		for(var i = 0; i < notes.length; i++) {
			notesContent += "<li>" + notes[i] + "</li>";
		}
		notesContent += "</ul>";
	}
	return notesContent;
}















