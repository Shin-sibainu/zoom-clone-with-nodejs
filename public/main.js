const cameraCheckbox = document.getElementById("camera");
const microphoneCheckbox = document.getElementById("microphone");
const video = document.getElementById("video");

function onclickCheckbox_CameraMicrophone() {
  //これまでの状態
  let trackCamera_old = null;
  let trackMicrophone_old = null;
  let stream = video.srcObject;
  console.log(video.srcObject);
  console.log(stream.getVideoTracks());
  if (stream) {
    trackCamera_old = stream.getVideoTracks();
  }
}
