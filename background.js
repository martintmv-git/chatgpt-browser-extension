"use strict";

chrome.runtime.onInstalled.addListener( (details) => {
if (details.reason === "install") {
chrome.tabs.create({ url: "https://chat.openai.com/auth/login" });
}
});