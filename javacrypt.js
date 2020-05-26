function deviceinfo()
{
  var parts = navigator.userAgent.split(/\s*[;)(]\s*/);
  var dict = {
    "os_name": parts[1].split(" ")[0].toLowerCase(),
    "os_version": /[0-9]+/i.exec(parts[1])[0],
    "type": /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(parts[1])? "mobile" : "desktop",
    "app_version": /[0-9]+/i.exec(parts[0])[0]
  }
  return dict;
}