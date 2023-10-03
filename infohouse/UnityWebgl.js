var unityInstance = UnityLoader.instantiate('unityContainer', '/infohouse/Build/Build.json', {onProgress: UnityProgress});

$('#fullscreen_request').click(function() {
  unityInstance.SetFullscreen(1);
});
