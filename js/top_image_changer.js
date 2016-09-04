// JavaScript Document
$window.onload = function(){
var folderPath = "/arts/img/lost_property_series"
folderRef = new Folder (folderPath);	//select a folder to get file names
fileList = folderRef.getFiles();	//get the list of files
var filePath = [];
for (i=0; i<fileList.length; i++)	
{
filePath[i] = fileList[i].fullName;	
}
var rand = Math.floor( Math.random() * fileList.length ) ;
$('#top_image').attr('src', filePath[rand])
}
//$(window).load(){}
	