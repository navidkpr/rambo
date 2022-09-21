export enum Action {
  GetSource = 'GetSource',
  Color = 'Color'
}

// export interface Message {
//   action: Action,
// }

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  alert('called listener')
  alert(msg.action)
  if (msg.action == Action.Color) {
    console.log("Receive color = " + msg.color);
    document.body.style.backgroundColor = msg.color;
    sendResponse("Change color to " + msg.color);
  } else if (msg.action == Action.GetSource) {
    alert(msg.source)
    var title = msg.innerText.pageSource.match(/<title[^>]*>([^<]+)<\/title>/)[1];
    alert(title)
    return msg.innerText
  }
  return 'None'
});
