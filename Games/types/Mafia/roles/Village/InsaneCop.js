const Role = require("../../Role");

module.exports = class InsaneCop extends Role {

	constructor(player, data) {
		super("Insane Cop", player, data);

		this.alignment = "Village";
		this.cards = ["VillageCore", "WinWithVillage", "AlignmentLearnerReversed", "AppearAsCop"];
		this.meetingMods = {
			"Learn Alignment": {
				flags: ["voting", "group"],
				targets: { include: ["alive"], exclude: ["members"] },
			}
		};
	}

}