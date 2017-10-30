#pragma strict

var maxFallDistance = -10;
private var isRestarting = false;

var gameMaster : GameMaster;

function Update () {
	if (transform.position.y <= maxFallDistance)
	{
		if (GameMaster.isRestarting == false)
		{
			gameMaster.RestartLevel();
		}
	}
}