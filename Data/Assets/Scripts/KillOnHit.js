#pragma strict

var gameMaster : GameMaster;

function OnTriggerEnter (colInfo : Collider) {
	if (GameMaster.isRestarting == false) {
		if (colInfo.tag == "Player") {
			var destructible : Destructible = colInfo.GetComponent("Destructible") as Destructible;
			destructible.Destruct();
		}
		gameMaster.RestartLevel();
	}
}