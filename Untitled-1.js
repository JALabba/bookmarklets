// autodelete likes on twitter
//open your twitter profile likes page and let it rip
javascript: (function deleteTwitterLikes() {
  const ejectTimeSeconds = 30;
  const clickDelaySeconds = 1;
  const interval = setInterval(() => {
    for (const d of document.querySelectorAll(`div[data-testid="unlike"]`)) {
      d.click();
    }
    window.scrollTo(0, document.body.scrollHeight);
  }, clickDelaySeconds * 1000);
  setTimeout(() => {
    clearInterval(interval);
  }, ejectTimeSeconds * 1000);
})();

//search highlighted text on wikipedia
javascript: (function wikiSearchText(document) {
  function se(d) {
    return d.selection ? d.selection.createRange(1).text : d.getSelection(1);
  }
  let d = se(document);
  for (i = 0; i < frames.length && (d == document || d == "document"); i++)
    d = se(frames[i].document);
  if (d == "document")
    d = prompt("Enter%20search%20terms%20for%20Wikipedia", "");
  open(
    "https://en.wikipedia.org" +
      (d
        ? "/w/index.php?title=Special:Search&search=" + encodeURIComponent(d)
        : "")
  ).focus();
})(document);
