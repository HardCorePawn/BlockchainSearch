
// Create a parent item and two children.
var parent = chrome.contextMenus.create({"title": "Search Block Explorer(s) for Trans: %s", contexts:["selection"]});
var blockchainTx = chrome.contextMenus.create(
  {"title": "blockchain.com", contexts:["selection"], "parentId": parent, "onclick": searchbinfo});
var blockcypherTx = chrome.contextMenus.create(
  {"title": "blockcypher", contexts:["selection"], "parentId": parent, "onclick": searchblockcypher});
var blockchairTx = chrome.contextMenus.create(
  {"title": "blockchair.com", contexts:["selection"], "parentId": parent, "onclick": searchblockchair});
var btcTx = chrome.contextMenus.create(
  {"title": "btc.com", contexts:["selection"], "parentId": parent, "onclick": searchbtc});
var allTx = chrome.contextMenus.create(
  {"title": "All", contexts:["selection"], "parentId": parent, "onclick": searchall});

var parentAddr = chrome.contextMenus.create({"title": "Search Block Explorer(s) for Addr: %s", contexts:["selection"]});
var blockchainAddr = chrome.contextMenus.create(
  {"title": "blockchain.com", contexts:["selection"], "parentId": parentAddr, "onclick": searchbinfoAddr});
var blockcypherAddr = chrome.contextMenus.create(
  {"title": "blockcypher", contexts:["selection"], "parentId": parentAddr, "onclick": searchblockcypherAddr});
var blockchairAddr = chrome.contextMenus.create(
  {"title": "blockchair.com", contexts:["selection"], "parentId": parentAddr, "onclick": searchblockchairAddr});
var btcAddr = chrome.contextMenus.create(
  {"title": "btc.com", contexts:["selection"], "parentId": parentAddr, "onclick": searchbtcAddr});
var allAddr = chrome.contextMenus.create(
  {"title": "All", contexts:["selection"], "parentId": parentAddr, "onclick": searchallAddr});
  
function searchbinfoAddr(info, tab)
{
 var searchstring = info.selectionText;
 var newIndex = tab.index + 1
 chrome.tabs.create({url: "https://blockchain.com/btc/address/" + searchstring, active: false, index: newIndex})
}

function searchblockcypherAddr(info, tab)
{
 var searchstring = info.selectionText;
 var newIndex = tab.index + 1
 chrome.tabs.create({url: "https://live.blockcypher.com/btc/address/" + searchstring, active: false, index: newIndex})
}

function searchblockchairAddr(info, tab)
{
 var searchstring = info.selectionText;
 var newIndex = tab.index + 1
 chrome.tabs.create({url: "https://www.blockchair.com/bitcoin/address/" + searchstring, active: false, index: newIndex})
}

function searchbtcAddr(info, tab)
{
 var searchstring = info.selectionText;
 var newIndex = tab.index + 1
 chrome.tabs.create({url: "https://btc.com/" + searchstring, active: false, index: newIndex})
}

function searchallAddr(info, tab)
{
 searchbinfoAddr(info, tab)
 searchblockcypherAddr(info, tab)
 searchblockchairAddr(info, tab)
 searchbtcAddr(info, tab)
}

function searchbinfo(info, tab)
{
 var searchstring = info.selectionText;
 var newIndex = tab.index + 1
 chrome.tabs.create({url: "https://blockchain.com/btc/tx/" + searchstring, active: false, index: newIndex})
}

function searchblockcypher(info, tab)
{
 var searchstring = info.selectionText;
 var newIndex = tab.index + 1
 chrome.tabs.create({url: "https://live.blockcypher.com/btc/tx/" + searchstring, active: false, index: newIndex})
}

function searchblockchair(info, tab)
{
 var searchstring = info.selectionText;
 var newIndex = tab.index + 1
 chrome.tabs.create({url: "https://www.blockchair.com/bitcoin/transaction/" + searchstring, active: false, index: newIndex})
}

function searchbtc(info, tab)
{
 var searchstring = info.selectionText;
 var newIndex = tab.index + 1
 chrome.tabs.create({url: "https://btc.com/" + searchstring, active: false, index: newIndex})
}

function searchall(info, tab)
{
 searchbinfo(info, tab)
 searchblockcypher(info, tab)
 searchblockchair(info, tab)
 searchbtc(info, tab)
}