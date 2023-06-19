const KEY = 'darkness';
function setCssVariable ( varName, varValue ) {
    document.documentElement.style.setProperty(`--${varName}`, varValue);
}
// setting dark mode first time
chrome.storage.sync.get([KEY], function(result) {
    setCssVariable(KEY, result[KEY] || '0.92')
});
// set new value on change -- triggerd from html
chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        if ( key === KEY ) {
            newValue && setCssVariable(KEY, newValue)
        }
    }
});