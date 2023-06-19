
// setting slider value frst time
chrome.storage.sync.get([KEY], function(result) {
    slider.value = result[KEY] || 0.92
});
function setKey (keyNama, keyVale) {
    chrome.storage.sync.set({ [keyNama]: keyVale }, function() {});
}
slider.onchange = function sliderHnadler (e) {
    setKey(KEY, e.target.value)
}
// change listener
chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        if ( key === KEY ) {
            newValue && (slider.value = newValue);
            newValue && setKey(KEY, newValue)
        }
    }
});