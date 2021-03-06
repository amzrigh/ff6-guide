var bosses = {
	"Air Force" : {
		"stats" : {
			"hp" : 8000,
			"mp" : 750,
			"atk" : 10,
			"def" : 150,
			"eva" : 0,
			"matk" : 12,
			"mdef" : 120,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning",
				"Water"
			],
			"vuln" : [],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Three parts: Air Force, Laser Gun, Missile Bay",
			"Killing Laser Gun spawns Bit, which uses Runic",
			"Summon Zoneseek for Shell, Kirin to counter Sap",
		],
		"wanted" : [
			"Zoneseek",
			"Kirin"
		]
	},
	"Ultima Bst" : {
		"stats" : {
			"hp" : 55000,
			"mp" : 19000,
			"atk" : 20,
			"def" : 75,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 70,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Blind",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Poison",
				"Wind",
				"Holy",
				"Earth",
				"Water"
			]
		},
		"notes" : [
			"To conserve resources, consider beginning fight reflected and letting him damage himself with spells; hasten this process with Debilitator",
			"Fight defensively, buff yourself up",
			"Below 32,640 HP, every 12 times he is damaged, will charge for two turns, then cast Ultima",
			"Runic negates Ultima",
			"Steal Crystal Orb, Drainer"
		],
		"wanted" : [
			"Celes",
			"Carbunkl"
		]
	},
	"Ultima Wpn" : {
		"stats" : {
			"hp" : 24000,
			"mp" : 5000,
			"atk" : 45,
			"def" : 142,
			"eva" : 20,
			"matk" : 5,
			"mdef" : 97,
			"meva" : 10,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Blind",
				"Slow"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Steal Ribbon",
			"Drain MP to hamstring him (slower/easier)",
			"Reflect to deal with Flare",
			"Zoneseek for Shell"
		],
		"wanted" : [
			"Locke",
			"Unicorn (deal with Mind Blast)",
			"Zoneseek"
		]
	},
	"BlueDragn" : {
		"stats" : {
			"hp" : 26900,
			"mp" : 3800,
			"atk" : 13,
			"def" : 110,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Water"
			]
		},
		"notes" : [
			"Wear anti-Water gear (Imp equipment, Thunder Shield, Minerva, Snow Muffler)",
			"Do not use Haste&mdash;will cast Rippler to steal from you",
			"Gau's Aspiran rage is very effective&mdash;absorbs water and deals lightning damage",
			"&#x215b; chance of Metamorph success"
		],
		"wanted" : [
			"Ragnarok maybe?"
		]
	},
	"Chadarnook (Goddess)" : {
		"stats" : {
			"hp" : 30000,
			"mp" : 7600,
			"atk" : 18,
			"def" : 135,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 130,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Holy"
			],
			"vuln" : [
				"Blind",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Lightning"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Chadarnook (Phantasm)" : {
		"stats" : {
			"hp" : 56000,
			"mp" : 6400,
			"atk" : 13,
			"def" : 140,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Holy"
			],
			"vuln" : [
				"Blind",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Lightning"
			]
		},
		"notes" : [
			"Ignore Goddess, fight Phantasm"
		],
		"wanted" : []
	},
	"Typhon" : {
		"stats" : {
			"hp" : 10000,
			"mp" : 40000,
			"atk" : 13,
			"def" : 100,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 55,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Blizrd",
				"Water"
			],
			"vuln" : [
				"Blind",
				"Mute",
				"Berserk",
				"Sleep",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Fire"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Crane (Left)" : {
		"stats" : {
			"hp" : 1800,
			"mp" : 447,
			"atk" : 14,
			"def" : 145,
			"eva" : 0,
			"matk" : 4,
			"mdef" : 120,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Water"
			],
			"vuln" : [
				"Mute",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Lightning"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Crane (Right)" : {
		"stats" : {
			"hp" : 2300,
			"mp" : 447,
			"atk" : 14,
			"def" : 125,
			"eva" : 0,
			"matk" : 4,
			"mdef" : 120,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning",
				"Water"
			],
			"vuln" : [
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Fire"
			]
		},
		"notes" : [
			"Steal Debilitator from Right",
			"Rage Anguiform"
		],
		"wanted" : [
			"Gau (Anguiform)"
		]
	},
	"Curley" : {
		"stats" : {
			"hp" : 15000,
			"mp" : 2000,
			"atk" : 1,
			"def" : 100,
			"eva" : 0,
			"matk" : 4,
			"mdef" : 110,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Blizrd",
				"Water"
			],
			"vuln" : [
				"Blind",
				"Sleep"
			],
			"resist" : [],
			"absorb" : [
				"Fire"
			]
		},
		"notes" : [
			"Mute Larry, Berserk Moe, kill Curley quickly"
		],
		"wanted" : []
	},
	"Dadaluma" : {
		"stats" : {
			"hp" : 3270,
			"mp" : 1005,
			"atk" : 12,
			"def" : 85,
			"eva" : 0,
			"matk" : 3,
			"mdef" : 143,
			"meva" : 10,
		},
		"affin" : {
			"weak" : [
				"Poison"
			],
			"vuln" : [
				"Blind",
				"Imp",
				"Stone",
				"Death",
				"Mute",
				"Sleep",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Steal Sneak Ring",
			"Rage Alacran/Acrophies for Stop",
			"Use Imp; Invis yourself"
		],
		"wanted" : [
			"Locke",
			"Gau (Alacran/Acrophies)",
			"Celes (Imp)"
		]
	},
	"EarthDragn" : {
		"stats" : {
			"hp" : 28500,
			"mp" : 16500,
			"atk" : 23,
			"def" : 110,
			"eva" : 0,
			"matk" : 12,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Wind",
				"Water"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Sleep",
				"Slow"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Will nullify Float status if non-permanent&mdash;equip Cherub Down",
			"Strong physical attacks",
			"&#x215b; chance of Metamorph success"
		],
		"wanted" : [
			"Ragnarok maybe?"
		]
	},
	"Fiend" : {
		"stats" : {
			"hp" : 63000,
			"mp" : 4800,
			"atk" : 60,
			"def" : 110,
			"eva" : 0,
			"matk" : 9,
			"mdef" : 160,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Holy"
			],
			"vuln" : [
				"Blind",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Blizrd",
				"Poison"
			]
		},
		"notes" : [
			"Gear against Ice",
			"Set Slow early",
			"Dispel after \"Fiend's aura is shaking!\"",
			"Use heavy non-elemental attacks",
			"Try to get gil ending in 1 so L? Holy will always Power"
		],
		"wanted" : [
			"Strago (learn ForceField)"
		]
	},
	"Death Gaze" : {
		"stats" : {
			"hp" : 55555,
			"mp" : 38000,
			"atk" : 35,
			"def" : 150,
			"eva" : 30,
			"matk" : 8,
			"mdef" : 170,
			"meva" : 30,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Holy"
			],
			"vuln" : [],
			"resist" : [],
			"absorb" : [
				"Blizrd",
				"Poison"
			]
		},
		"notes" : [
			"Vanish + nonstandard kills will reset fight (X-Zone, Atom/True Edge, Cleave, Snare)",
			"Protect against insta-death",
			"Try to avoid L5 Doom vulnerability",
			"Rage Io or Cld Wraith"
		],
		"wanted" : [
			"Gau (Io/Cld Wraith)"
		]
	},
	"Dullahan" : {
		"stats" : {
			"hp" : 32450,
			"mp" : 1721,
			"atk" : 55,
			"def" : 130,
			"eva" : 10,
			"matk" : 7,
			"mdef" : 160,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire"
			],
			"vuln" : [
				"Blind",
				"Mute",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Blizrd"
			]
		},
		"notes" : [
			"Rasp to death"
		],
		"wanted" : []
	},
	"Visage" : {
		"stats" : {
			"hp" : 30000,
			"mp" : 10000,
			"atk" : 63,
			"def" : 140,
			"eva" : 10,
			"matk" : 12,
			"mdef" : 140,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire"
			],
			"vuln" : [
				"Blind",
				"Death"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Long Arm > Visage > Short Arm"
		],
		"wanted" : []
	},
	"FlameEater" : {
		"stats" : {
			"hp" : 8400,
			"mp" : 480,
			"atk" : 13,
			"def" : 105,
			"eva" : 20,
			"matk" : 7,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Blizrd"
			],
			"vuln" : [
				"Slow"
			],
			"resist" : [
				"Lightning",
				"Poison",
				"Holy",
				"Earth"
			],
			"absorb" : [
				"Fire"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"PhntmTrain" : {
		"stats" : {
			"hp" : 1900,
			"mp" : 350,
			"atk" : 10,
			"def" : 30,
			"eva" : 0,
			"matk" : 5,
			"mdef" : 210,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Lightning",
				"Holy"
			],
			"vuln" : [
				"Undead"
			],
			"resist" : [],
			"absorb" : [
				"Poison"
			]
		},
		"notes" : [
			"Revivify/Phoenix Down"
		],
		"wanted" : []
	},
	"Gigantos" : {
		"stats" : {
			"hp" : 6000,
			"mp" : 1120,
			"atk" : 20,
			"def" : 1,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 1,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Poison"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Imp",
				"Stone",
				"Death",
				"Mute",
				"Berserk",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"100% physical attacks; make everybody invisible"
		],
		"wanted" : []
	},
	"Lady" : {
		"stats" : {
			"hp" : 9999,
			"mp" : 10000,
			"atk" : 73,
			"def" : 150,
			"eva" : 0,
			"matk" : 9,
			"mdef" : 155,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [],
			"resist" : [],
			"absorb" : [
				"Fire",
				"Blizrd",
				"Lightning",
				"Poison",
				"Wind",
				"Holy",
				"Earth",
				"Water"
			]
		},
		"notes" : [
			"Summon Golem or Fenrir at start of battle",
			"Will revive Rest",
			"Focus down with non-elemental attacks",
			"Steal Ragnarok"
		],
		"wanted" : []
	},
	"Goddess" : {
		"stats" : {
			"hp" : 44000,
			"mp" : 19000,
			"atk" : 13,
			"def" : 85,
			"eva" : 0,
			"matk" : 14,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Thunder Shields, Safety Bits",
			"Regular attacks &#x2153; countered with Love Token, which causes afflicted character to True Knight her",
			"Steal Minerva"
		],
		"wanted" : []
	},
	"GoldDragn" : {
		"stats" : {
			"hp" : 32400,
			"mp" : 4000,
			"atk" : 13,
			"def" : 110,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Water"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Berserk"
			],
			"resist" : [],
			"absorb" : [
				"Lightning"
			]
		},
		"notes" : [
			"Gear up anti-Lightning",
			"&#x215b; chance of Metamorph success"
		],
		"wanted" : []
	},
	"Guardian" : {
		"stats" : {
			"hp" : 60000,
			"mp" : 5200,
			"atk" : 13,
			"def" : 150,
			"eva" : 0,
			"matk" : 25,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning"
			],
			"vuln" : [
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Water"
			]
		},
		"notes" : [
			"Slow & Haste, beat him quickly",
			"Steal Ribbon, Force Armor"
		],
		"wanted" : []
	},
	"Hidon" : {
		"stats" : {
			"hp" : 25000,
			"mp" : 12500,
			"atk" : 13,
			"def" : 110,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 160,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Holy",
				"Earth"
			],
			"vuln" : [
				"Undead",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Poison"
			]
		},
		"notes" : [
			"Kill Erebuss first so Hidon will use GrandDelta",
			"Steal Thornlet"
		],
		"wanted" : [
			"Strago"
		]
	},
	"Erebus (1)" : {
		"stats" : {
			"hp" : 3500,
			"mp" : 1000,
			"atk" : 13,
			"def" : 85,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Earth"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Stone",
				"Death",
				"Mute",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Poison"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Erebus (2)" : {
		"stats" : {
			"hp" : 3500,
			"mp" : 1000,
			"atk" : 13,
			"def" : 115,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 120,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Blind",
				"Poison",
				"Stone",
				"Berserk"
			],
			"resist" : [],
			"absorb" : [
				"Fire",
				"Blizrd",
				"Lightning",
				"Poison",
				"Wind",
				"Holy",
				"Water"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Erebus (3)" : {
		"stats" : {
			"hp" : 3500,
			"mp" : 1000,
			"atk" : 13,
			"def" : 105,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 130,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Holy"
			],
			"vuln" : [
				"Undead",
				"Confuse",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Poison"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Erebus (4)" : {
		"stats" : {
			"hp" : 3500,
			"mp" : 100,
			"atk" : 13,
			"def" : 95,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 140,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Blizrd",
				"Lightning",
				"Poison",
				"Wind",
				"Holy",
				"Earth",
				"Water"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Death",
				"Mute",
				"Berserk",
				"Confuse",
				"Sleep",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [],
		"wanted" : []
	},
	"Power" : {
		"stats" : {
			"hp" : 28000,
			"mp" : 10000,
			"atk" : 6,
			"def" : 115,
			"eva" : 0,
			"matk" : 9,
			"mdef" : 153,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Poison"
			],
			"vuln" : [
				"Berserk",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Mute Magic",
			"Slow Power",
			"Machine (insta-kills) > Tiger > Magic > Power"
		],
		"wanted" : []
	},
	"Ice Dragon" : {
		"stats" : {
			"hp" : 24400,
			"mp" : 9000,
			"atk" : 13,
			"def" : 110,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Death",
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Berserk, Phantom, Love Sonata",
			"&#x215b; chance of Metamorph success"
		],
		"wanted" : [
			"Mog",
			"Phantom",
			"Ragnarok maybe?"
		]
	},
	"Ifrit" : {
		"stats" : {
			"hp" : 3300,
			"mp" : 600,
			"atk" : 25,
			"def" : 215,
			"eva" : 20,
			"matk" : 7,
			"mdef" : 115,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Blizrd"
			],
			"vuln" : [
				"Blind",
				"Slow"
			],
			"resist" : [
				"Lightning",
				"Poison",
				"Wind",
				"Holy",
				"Earth",
				"Water"
			],
			"absorb" : [
				"Fire"
			]
		},
		"notes" : [
			"Gau's Zaghrem Rage deals non-elemental magic damage"
		],
		"wanted" : []
	},
	"Inferno" : {
		"stats" : {
			"hp" : 30800,
			"mp" : 9700,
			"atk" : 13,
			"def" : 130,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 145,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning"
			],
			"vuln" : [
				"Blind",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Fire"
			]
		},
		"notes" : [
			"Slow body, Stop both blades"
		],
		"wanted" : []
	},
	"Ipooh" : {
		"stats" : {
			"hp" : 360,
			"mp" : 60,
			"atk" : 18,
			"def" : 105,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire"
			],
			"vuln" : [
				"Blind",
				"Imp",
				"Mute",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [],
		"wanted" : []
	},
	"KatanaSoul" : {
		"stats" : {
			"hp" : 37620,
			"mp" : 7400,
			"atk" : 25,
			"def" : 115,
			"eva" : 20,
			"matk" : 11,
			"mdef" : 175,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Poison"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Confuse"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Confuse, attack with magic",
			"Steal Strato, Murasame"
		],
		"wanted" : []
	},
	"Kefka" : {
		"stats" : {
			"hp" : 3000,
			"mp" : 3000,
			"atk" : 25,
			"def" : 55,
			"eva" : 30,
			"matk" : 9,
			"mdef" : 160,
			"meva" : 30,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Gau use Alacran/Acrophies, Celes use Runic"
		],
		"wanted" : [
			"Gau",
			"Celes"
		]
	},
	"Kefka (Final)" : {
		"stats" : {
			"hp" : 62000,
			"mp" : 38000,
			"atk" : 80,
			"def" : 117,
			"eva" : 45,
			"matk" : 8,
			"mdef" : 135,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [],
			"resist" : [
				"Poison"
			],
			"absorb" : []
		},
		"notes" : [
			"Below 30080 HP, will begin countering when not charging Goner. Counters can be negated by Runic."
		],
		"wanted" : []
	},
	"Larry" : {
		"stats" : {
			"hp" : 10000,
			"mp" : 2000,
			"atk" : 2,
			"def" : 90,
			"eva" : 0,
			"matk" : 5,
			"mdef" : 120,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire"
			],
			"vuln" : [
				"Blind",
				"Death",
				"Mute",
				"Confuse",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Blizrd",
				"Wind"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Laser Gun" : {
		"stats" : {
			"hp" : 3300,
			"mp" : 335,
			"atk" : 12,
			"def" : 130,
			"eva" : 0,
			"matk" : 9,
			"mdef" : 140,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning",
				"Water"
			],
			"vuln" : [
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [],
		"wanted" : []
	},
	"Left Blade" : {
		"stats" : {
			"hp" : 700,
			"mp" : 470,
			"atk" : 13,
			"def" : 120,
			"eva" : 0,
			"matk" : 5,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Stone",
				"Death",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Blizrd"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Long Arm" : {
		"stats" : {
			"hp" : 33000,
			"mp" : 10000,
			"atk" : 35,
			"def" : 110,
			"eva" : 5,
			"matk" : 30,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Wind"
			],
			"vuln" : [
				"Stone"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [],
		"wanted" : []
	},
	"M-TekArmor" : {
		"stats" : {
			"hp" : 210,
			"mp" : 250,
			"atk" : 18,
			"def" : 30,
			"eva" : 0,
			"matk" : 3,
			"mdef" : 130,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning"
			],
			"vuln" : [
				"Blind",
				"Mute",
				"Berserk",
				"Confuse",
				"Sleep",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [],
		"wanted" : []
	},
	"Magic" : {
		"stats" : {
			"hp" : 41000,
			"mp" : 10000,
			"atk" : 1,
			"def" : 145,
			"eva" : 0,
			"matk" : 8,
			"mdef" : 125,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Earth"
			],
			"vuln" : [
				"Mute"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [],
		"wanted" : []
	},
	"MagiMaster" : {
		"stats" : {
			"hp" : 50000,
			"mp" : 50000,
			"atk" : 1,
			"def" : 250,
			"eva" : 100,
			"matk" : 25,
			"mdef" : 100,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Berserk"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"RRaise everyone, then sit and wait",
			"Steal Crystal Orb"
		],
		"wanted" : []
	},
	"GuardLeadr" : {
		"stats" : {
			"hp" : 420,
			"mp" : 150,
			"atk" : 60,
			"def" : 110,
			"eva" : 0,
			"matk" : 9,
			"mdef" : 140,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Poison"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Imp",
				"Stone",
				"Death",
				"Mute",
				"Berserk",
				"Confuse",
				"Sleep",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Steal Mithril Knife"
		],
		"wanted" : []
	},
	"M.Tonberry" : {
		"stats" : {
			"hp" : 22000,
			"mp" : 1200,
			"atk" : 13,
			"def" : 100,
			"eva" : 0,
			"matk" : 9,
			"mdef" : 165,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Blind",
				"Poison",
				"Sleep",
				"Slow"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Rotates elemental weakness, casts spells indicating alignment",
			"Fire &#x21c6; Ice | Lightning &#x21c6; Wind | Poison &#x21c6; Holy | Water &#x21c6; Earth",
			"Sleep & Slow"
		],
		"wanted" : []
	},
	"Missile Bay" : {
		"stats" : {
			"hp" : 3000,
			"mp" : 7000,
			"atk" : 12,
			"def" : 135,
			"eva" : 0,
			"matk" : 8,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning",
				"Water"
			],
			"vuln" : [
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Steal Debilitator from Missile Bay"
		],
		"wanted" : []
	},
	"Moe" : {
		"stats" : {
			"hp" : 12500,
			"mp" : 2000,
			"atk" : 4,
			"def" : 80,
			"eva" : 0,
			"matk" : 6,
			"mdef" : 130,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Blind",
				"Berserk",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Lightning"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Nelapa" : {
		"stats" : {
			"hp" : 2800,
			"mp" : 280,
			"atk" : 11,
			"def" : 105,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Blizrd",
				"Lightning",
				"Holy"
			],
			"vuln" : [
				"Death",
				"Berserk",
				"Confuse",
				"Stop"
			],
			"resist" : [
				"Poison",
				"Wind",
				"Earth",
				"Water"
			],
			"absorb" : [
				"Fire"
			]
		},
		"notes" : [],
		"wanted" : [
			"Gau (Rhodox)?"
		]
	},
	"Number 024" : {
		"stats" : {
			"hp" : 4777,
			"mp" : 777,
			"atk" : 20,
			"def" : 170,
			"eva" : 0,
			"matk" : 3,
			"mdef" : 100,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Imp",
				"Sleep"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Changes elemental affinity; pay attention and enfeeble",
			"Steal Drainer, Rune Edge"
		],
		"wanted" : []
	},
	"Number 128" : {
		"stats" : {
			"hp" : 3276,
			"mp" : 810,
			"atk" : 13,
			"def" : 120,
			"eva" : 0,
			"matk" : 3,
			"mdef" : 125,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Blind",
				"Berserk",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Blizrd"
			]
		},
		"notes" : [
			"Keep Invisible up as long as you don't kill both blades",
			"Steal Tempest"
		],
		"wanted" : []
	},
	"Phunbaba" : {
		"stats" : {
			"hp" : 28000,
			"mp" : 10000,
			"atk" : 15,
			"def" : 100,
			"eva" : 0,
			"matk" : 6,
			"mdef" : 130,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Poison"
			],
			"vuln" : [
				"Blind",
				"Sleep"
			],
			"resist" : [],
			"absorb" : [
				"Lightning"
			]
		},
		"notes" : [
			"Poison Claws, Runic"
		],
		"wanted" : []
	},
	"Phunbaba (2)" : {
		"stats" : {
			"hp" : 60000,
			"mp" : 10000,
			"atk" : 53,
			"def" : 102,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 153,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Poison"
			],
			"vuln" : [
				"Blind",
				"Sleep"
			],
			"resist" : [],
			"absorb" : [
				"Lightning"
			]
		},
		"notes" : [
			"Scripted loss, but damage carries over"
		],
		"wanted" : []
	},
	"Demon" : {
		"stats" : {
			"hp" : 58000,
			"mp" : 18900,
			"atk" : 15,
			"def" : 180,
			"eva" : 0,
			"matk" : 13,
			"mdef" : 145,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Poison"
			],
			"vuln" : [
				"Blind",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Fire",
				"Wind"
			]
		},
		"notes" : [
			"Gear up against Fire",
			"Phase 1, will cast Stop to guarantee success of follow-up Buster; Dispel it quickly"
		],
		"wanted" : []
	},
	"AnglrWhelk" : {
		"stats" : {
			"hp" : 9845,
			"mp" : 1600,
			"atk" : 75,
			"def" : 80,
			"eva" : 0,
			"matk" : 7,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire"
			],
			"vuln" : [
				"Blind",
				"Stone",
				"Death",
				"Mute",
				"Sleep",
				"Slow",
				"Stop"
			],
			"resist" : [
				"Poison"
			],
			"absorb" : [
				"Blizrd",
				"Lightning",
				"Water"
			]
		},
		"notes" : [
			"Head and Shell must be killed simultaneously for full treasure; Vanish Shell, summon Shoat"
		],
		"wanted" : [
			"Shoat"
		]
	},
	"Tonberries" : {
		"stats" : {
			"hp" : 14001,
			"mp" : 11000,
			"atk" : 5,
			"def" : 100,
			"eva" : 150,
			"matk" : 1,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Imp",
				"Mute",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Water"
			]
		},
		"notes" : [
			"&#x215b; chance of Metamorph success",
			"Steal Minerva"
		],
		"wanted" : []
	},
	"Red Dragon" : {
		"stats" : {
			"hp" : 30000,
			"mp" : 1780,
			"atk" : 13,
			"def" : 110,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Blizrd",
				"Water"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Confuse",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Fire"
			]
		},
		"notes" : [
			"Gear up anti-fire, drain MP to prevent worst attacks",
			"&#x215b; chance of Metamorph success"
		],
		"wanted" : []
	},
	"Hell Rider" : {
		"stats" : {
			"hp" : 1300,
			"mp" : 170,
			"atk" : 48,
			"def" : 120,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Poison"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Stone",
				"Death",
				"Mute",
				"Berserk",
				"Sleep",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [],
		"wanted" : []
	},
	"RightBlade" : {
		"stats" : {
			"hp" : 400,
			"mp" : 150,
			"atk" : 20,
			"def" : 120,
			"eva" : 0,
			"matk" : 5,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Stone",
				"Death",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Blizrd"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Rhizopas" : {
		"stats" : {
			"hp" : 775,
			"mp" : 39,
			"atk" : 14,
			"def" : 110,
			"eva" : 0,
			"matk" : 3,
			"mdef" : 175,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning"
			],
			"vuln" : [
				"Blind",
				"Berserk",
				"Confuse",
				"Sleep",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Water"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Rough" : {
		"stats" : {
			"hp" : 8000,
			"mp" : 770,
			"atk" : 13,
			"def" : 80,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 190,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Blizrd"
			],
			"vuln" : [
				"Stone",
				"Death",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Lightning"
			]
		},
		"notes" : [
			"Steal Flame Shield"
		],
		"wanted" : []
	},
	"Shiva" : {
		"stats" : {
			"hp" : 3000,
			"mp" : 500,
			"atk" : 15,
			"def" : 200,
			"eva" : 20,
			"matk" : 7,
			"mdef" : 110,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire"
			],
			"vuln" : [
				"Blind",
				"Slow"
			],
			"resist" : [
				"Lightning",
				"Poison",
				"Wind",
				"Holy",
				"Earth",
				"Water"
			],
			"absorb" : [
				"Blizrd"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Short Arm" : {
		"stats" : {
			"hp" : 27000,
			"mp" : 10000,
			"atk" : 50,
			"def" : 115,
			"eva" : 10,
			"matk" : 10,
			"mdef" : 155,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Water"
			],
			"vuln" : [
				"Mute",
				"Berserk",
				"Slow"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [],
		"wanted" : []
	},
	"SkullDragon" : {
		"stats" : {
			"hp" : 32800,
			"mp" : 1999,
			"atk" : 15,
			"def" : 140,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 120,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Holy"
			],
			"vuln" : [],
			"resist" : [],
			"absorb" : [
				"Poison"
			]
		},
		"notes" : [
			"&#x215b; chance of Metamorph success"
		],
		"wanted" : []
	},
	"Rest" : {
		"stats" : {
			"hp" : 40000,
			"mp" : 10000,
			"atk" : 63,
			"def" : 140,
			"eva" : 0,
			"matk" : 6,
			"mdef" : 120,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Slow"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [],
		"wanted" : []
	},
	"SoulSaver" : {
		"stats" : {
			"hp" : 3066,
			"mp" : 566,
			"atk" : 50,
			"def" : 150,
			"eva" : 0,
			"matk" : 3,
			"mdef" : 175,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Blizrd"
			],
			"vuln" : [
				"Blind",
				"Stone",
				"Death",
				"Berserk",
				"Confuse",
				"Slow",
			],
			"resist" : [],
			"absorb" : [
				"Fire",
				"Holy"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Bit" : {
		"stats" : {
			"hp" : 420,
			"mp" : 285,
			"atk" : 12,
			"def" : 230,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 160,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning",
				"Water"
			],
			"vuln" : [
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Steal Amulet"
		],
		"wanted" : []
	},
	"SrBehemoth (1)" : {
		"stats" : {
			"hp" : 19000,
			"mp" : 1600,
			"atk" : 11,
			"def" : 120,
			"eva" : 0,
			"matk" : 9,
			"mdef" : 130,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Poison"
			],
			"vuln" : [
				"Blind",
				"Imp",
				"Death",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Blizrd"
			]
		},
		"notes" : [
			"Imp, Stop, Fenrir/Golem, Rage > Scrapper",
			"If none of the above, Runic"
		],
		"wanted" : []
	},
	"SrBehemoth (2)" : {
		"stats" : {
			"hp" : 19000,
			"mp" : 9999,
			"atk" : 27,
			"def" : 105,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Holy"
			],
			"vuln" : [
				"Undead",
				"Blind",
				"Death"
			],
			"resist" : [],
			"absorb" : [
				"Poison"
			]
		},
		"notes" : [
			"Non-Doom insta-kill"
		],
		"wanted" : []
	},
	"StormDragn" : {
		"stats" : {
			"hp" : 42000,
			"mp" : 1250,
			"atk" : 13,
			"def" : 110,
			"eva" : 0,
			"matk" : 9,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning"
			],
			"vuln" : [
				"Blind"
			],
			"resist" : [],
			"absorb" : [
				"Wind"
			]
		},
		"notes" : [
			"Gear up anti-Wind, anti-insta-death",
			"Golem/Fenrir, Zoneseek/Shell",
			"Drain MP to prevent strong attacks"
		],
		"wanted" : []
	},
	"Striker" : {
		"stats" : {
			"hp" : 11000,
			"mp" : 2600,
			"atk" : 13,
			"def" : 75,
			"eva" : 0,
			"matk" : 7,
			"mdef" : 185,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire"
			],
			"vuln" : [
				"Stone",
				"Death",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Blizrd"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Tentacle (2)" : {
		"stats" : {
			"hp" : 5000,
			"mp" : 600,
			"atk" : 13,
			"def" : 102,
			"eva" : 0,
			"matk" : 8,
			"mdef" : 153,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Blind",
				"Poison",
				"Stone",
				"Mute",
				"Sleep",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Lightning",
				"Water"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Tentacle (1)" : {
		"stats" : {
			"hp" : 7000,
			"mp" : 800,
			"atk" : 13,
			"def" : 102,
			"eva" : 0,
			"matk" : 8,
			"mdef" : 153,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Blizrd",
				"Water"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Stone",
				"Mute",
				"Sleep",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Fire"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Tentacle (4)" : {
		"stats" : {
			"hp" : 4000,
			"mp" : 500,
			"atk" : 13,
			"def" : 102,
			"eva" : 0,
			"matk" : 8,
			"mdef" : 153,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Stone",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Earth",
				"Water"
			]
		},
		"notes" : [
			"Running Shoes and Fenrir/Golem prevent Seize",
			"Siren/Mute #1 & 2, Doom #3, Stop #4",
		],
		"wanted" : []
	},
	"Tentacle (3)" : {
		"stats" : {
			"hp" : 6000,
			"mp" : 700,
			"atk" : 13,
			"def" : 102,
			"eva" : 0,
			"matk" : 8,
			"mdef" : 153,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Death",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Blizrd",
				"Water"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Tiger" : {
		"stats" : {
			"hp" : 30000,
			"mp" : 10000,
			"atk" : 13,
			"def" : 120,
			"eva" : 0,
			"matk" : 7,
			"mdef" : 153,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Blizrd"
			],
			"vuln" : [
				"Poison"
			],
			"resist" : [],
			"absorb" : [
				"Earth"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Machine" : {
		"stats" : {
			"hp" : 24000,
			"mp" : 10000,
			"atk" : 13,
			"def" : 105,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 153,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning"
			],
			"vuln" : [
				"Death",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [],
		"wanted" : []
	},
	"Valigrmanda" : {
		"stats" : {
			"hp" : 30000,
			"mp" : 50000,
			"atk" : 19,
			"def" : 254,
			"eva" : 0,
			"matk" : 4,
			"mdef" : 70,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire"
			],
			"vuln" : [
				"Blind"
			],
			"resist" : [
				"Lightning",
				"Poison",
				"Wind",
				"Holy",
				"Earth",
				"Water"
			],
			"absorb" : [
				"Blizrd"
			]
		},
		"notes" : [
			"Gear up anti-Ice"
		],
		"wanted" : []
	},
	"TunnelArmr" : {
		"stats" : {
			"hp" : 1300,
			"mp" : 900,
			"atk" : 10,
			"def" : 29,
			"eva" : 0,
			"matk" : 15,
			"mdef" : 145,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Lightning",
				"Water"
			],
			"vuln" : [],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Always Runic"
		],
		"wanted" : []
	},
	"Ultros (Lete)" : {
		"stats" : {
			"hp" : 3000,
			"mp" : 640,
			"atk" : 15,
			"def" : 40,
			"eva" : 0,
			"matk" : 3,
			"mdef" : 140,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Lightning"
			],
			"vuln" : [
				"Blind",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Water"
			]
		},
		"notes" : [],
		"wanted" : []
	},
	"Ultros (Opera)" : {
		"stats" : {
			"hp" : 2550,
			"mp" : 500,
			"atk" : 13,
			"def" : 105,
			"eva" : 0,
			"matk" : 4,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Lightning"
			],
			"vuln" : [
				"Blind",
				"Mute",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Water"
			]
		},
		"notes" : [
			"Equip Ramuh on someone other than Sabin, summon him first",
			"Don't use Blitz or SwdTech",
			"Rage Aspiran or Acrophies/Alacran"
		],
		"wanted" : []
	},
	"Ultros (Cave)" : {
		"stats" : {
			"hp" : 22000,
			"mp" : 750,
			"atk" : 22,
			"def" : 95,
			"eva" : 0,
			"matk" : 7,
			"mdef" : 155,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Lightning"
			],
			"vuln" : [
				"Blind",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Water"
			]
		},
		"notes" : [
			"Gaia Gear to resist Aquabreath and Magnitude8",
			"Phase 2 at 15360 HP&mdash;Haste, Safe, magic counter"
		],
		"wanted" : []
	},
	"Ultros (Sky)" : {
		"stats" : {
			"hp" : 17000,
			"mp" : 8000,
			"atk" : 10,
			"def" : 20,
			"eva" : 0,
			"matk" : 3,
			"mdef" : 10,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Poison"
			],
			"vuln" : [
				"Blind",
				"Mute",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Water"
			]
		},
		"notes" : [
			"Phantom to negate physical attacks, Mute Typhon"
		],
		"wanted" : []
	},
	"Yeti" : {
		"stats" : {
			"hp" : 17200,
			"mp" : 6990,
			"atk" : 25,
			"def" : 100,
			"eva" : 0,
			"matk" : 11,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Fire",
				"Poison"
			],
			"vuln" : [
				"Blind",
				"Poison",
				"Berserk",
				"Sleep",
				"Slow"
			],
			"resist" : [],
			"absorb" : [
				"Blizrd"
			]
		},
		"notes" : [
			"Berserk/Phantom or Sleep/Slow",
			"Dispel after Green Cherry"
		],
		"wanted" : [
			"Mog"
		]
	},
	"Vargas" : {
		"stats" : {
			"hp" : 11600,
			"mp" : 220,
			"atk" : 13,
			"def" : 85,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Poison"
			],
			"vuln" : [
				"Blind",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [
			"Steal Mithril Claw"
		],
		"wanted" : []
	},
	"Ymir" : {
		"stats" : {
			"hp" : 1600,
			"mp" : 1000,
			"atk" : 22,
			"def" : 100,
			"eva" : 0,
			"matk" : 10,
			"mdef" : 155,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : []
		},
		"notes" : [],
		"wanted" : []
	},
	"HolyDragon" : {
		"stats" : {
			"hp" : 18500,
			"mp" : 12000,
			"atk" : 13,
			"def" : 110,
			"eva" : 0,
			"matk" : 9,
			"mdef" : 150,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [],
			"vuln" : [
				"Blind",
				"Mute",
				"Slow",
				"Stop"
			],
			"resist" : [],
			"absorb" : [
				"Holy"
			]
		},
		"notes" : [
			"Uses only magic attacks; cast Mute",
			"Steal Holy Lance",
			"&#x215b; chance of Metamorph success"
		],
		"wanted" : []
	},
	"Wrexsoul" : {
		"stats" : {
			"hp" : 23066,
			"mp" : 5066,
			"atk" : 27,
			"def" : 70,
			"eva" : 0,
			"matk" : 5,
			"mdef" : 220,
			"meva" : 0,
		},
		"affin" : {
			"weak" : [
				"Blizrd"
			],
			"vuln" : [
				"Blind"
			],
			"resist" : [],
			"absorb" : [
				"Fire",
				"Holy"
			]
		},
		"notes" : [
			"Equip Minerva, Thunder Shields",
			"If Strago gets possessed, use SelfDstrct; anybody else, use Break",
			"Use Ice or barrier-piercing attacks",
			"Steal Memento Ring"
		],
		"wanted" : [
			"Strago (SelfDstrct)"
		]
	}
};
