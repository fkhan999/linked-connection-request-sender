chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.create({url: 'https://www.linkedin.com/search/results/people/?keywords=ceo&origin=SWITCH_SEARCH_VERTICAL&sid=bj*'});
});