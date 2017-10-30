#pragma strict

var music : AudioSource;

function QuitGame () 
{
	Debug.Log ("Game is exiting...");
	Application.Quit ();
}

function StartGame (level : String) 
{
	DontDestroyOnLoad(music); 
	Application.LoadLevel (level);
}

public function SetGameVolume (vol : float)
{	
	DontDestroyOnLoad(music); 
	music.volume = vol;
}