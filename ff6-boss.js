var symbols = {
	"Fire"			: "&#x1f525;",
	"Blizrd"		: "&#x2744;",
	"Lightning"	: "&#x1f5f2;",
	"Earth"			: "&#x23da;",
	"Wind"			: "&#x1f300;",
	"Water"			: "&#x1f30a;",
	"Holy"			: "&#x274d;",
	"Blind"			: "&#x1f576;",
	"Death"			: "&#x26fc;",
	"Stone"			: "<span>&#x1f5ff;</span>",
	"Imp"				: "&#x1f422;",
	"Poison"		: "&#x1f571;",
	"Sleep"			: "&#x1f4a4;",
	"Confuse"		: "&#x1f4ab;",
	"Berserk"		: "&#x1f479;",
	"Mute"			: "<span>&#x1f4ac;</span>",
	"Stop"			: "<div>&#xE283;</div>",
	"Slow"			: "&#x1f557;",
	"Undead"		: "&#x1f480;",
};

function renderTable(monster) {
	var boss = bosses[monster]
	var bossTable = "<table class=\"boss\">" +
			"<tr><td class=\"colname\">" +
				"<table>" +
					"<tr><th>" + monster + "</th></tr>" +
					"<tr><td>" + drawImage(monster) + "</td></tr>" +
				"</table>" +
			"<td class=\"colstats\">" + writeAllStats(boss.stats) + "</td>" +
			"<td class=\"colaffin\">" + writeAffinity(boss.affin) + "</td></tr>";
	if(boss.notes.length > 0) {
		bossTable += "<tr><th class=\"notes\" colspan=\"3\">Notes</th></tr>" +
			"<tr><td colspan=\"3\">" + writeNotes(boss.notes) + "</td></tr>";
	}
//	if(boss.wanted.length > 0) {
//		bossTable += "<tr><th class=\"notes\" colspan=\"3\">Wanted</th></tr>" +
//			"<tr><td colspan=\"3\">" + writeNotes(boss.wanted) + "</td></tr>";
//	}
	bossTable += "</table>";
	document.write(bossTable);
}

function drawImage(name) {
	if(name.startsWith("Ultros") && name != "Ultros (Lete)") {
		name = "Ultros";
	} else if(name.startsWith("Erebus")) {
		name = "Erebus";
	} else if(name.startsWith("Phunbaba")) {
		name = "Phunbaba";
	}
	return `<img src=\"images/${name}.png\" />`;
}

function writeAllStats(stats) {
	return "<table>" +
			`<tr>${writeStat(stats, "HP")} ${writeStat(stats, "MP")}</tr>` +
			`<tr>${writeStat(stats, "Atk")} ${writeStat(stats, "MAtk")}</tr>` +
			`<tr>${writeStat(stats, "Def")} ${writeStat(stats, "MDef")}</tr>` +
			`<tr>${writeStat(stats, "Eva")} ${writeStat(stats, "MEva")}</tr>` +
		"</table>";
}

function writeStat(stats, stat) {
	return `<th>${stat}</th>` +
		`<td>${stats[stat.toLowerCase()]}</td>`;
}

function writeAffinity(affin) {
	return "<table>" +
			"<tr><td>" +
				"<table class=\"affin-grp\">" +
					"<tr><th>Vuln</th></tr>" +
					`<tr><td>${writeAffinityGroup(affin.vuln)}</td></tr>` +
				"</table>" +
			"</td><td>" +
				"<table class=\"affin-grp\">" +
					"<tr><th>Weak</th></tr>" +
					`<tr><td>${writeAffinityGroup(affin.weak)}</td></tr>` +
				"</table>" +
			"</td></tr>" +
			"<tr><td>" +
				"<table class=\"affin-grp\">" +
					"<tr><th>Null</th></tr>" +
					`<tr><td>${writeAffinityGroup(affin.resist)}</td></tr>` +
				"</table>" +
			"</td><td>" +
				"<table class=\"affin-grp\">" +
					"<tr><th>Absorb</th></tr>" +
					`<tr><td>${writeAffinityGroup(affin.absorb)}</td></tr>` +
				"</table>" +
			"</td></tr>" +
		"</table>";
}

function writeAffinityGroup(ag) {
	var tableContent = "";
	if(ag.length > 0) {
		tableContent = "<table class=\"symbols\">";
		for(var i = 0; i < ag.length; i++) {
			if(i % 6 == 0) {
				if(i > 0) {
					tableContent += "</tr>";
				}
				tableContent += "<tr>";
			}
			tableContent += `<td>${symbols[ag[i]]}</td>`;
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
			notesContent += `<li>${notes[i]}</li>`;
		}
		notesContent += "</ul>";
	}
	return notesContent;
}

function partyGroup(grp, party) {
	span = `<span class=\"${grp}\">`;
	for(i = 0; i < party.length; i++) {
		span += drawChar(party[i]);
	}
	span += "</span>";
	document.write(span);
}

function drawChar(name) {
	var charimg = "";
	if(name == "space") {
		charimg = "<span class=\"party-spacer\"></span>";
	} else {
		charimg = "<img src=\"images/char/" + name + ".png\" />";
	}
	return charimg;
}













