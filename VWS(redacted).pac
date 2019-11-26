//______________________________________________________________
// Created By: SQUID MEN
//______________________________________________________________

function FindProxyForURL(url, host) {
    //______________________________________________________________
    //                       URL LIST ONE
    //______________________________________________________________
    var urlListOne = [];
    //______________________________________________________________
    //                    INSERT URLS INTO LIST    
    //______________________________________________________________
    urlListOne.push("ftp://insert.url.here");
    urlListOne.push("http://insert.url.here");
    urlListOne.push("https://insert.url.here");
    urlListOne.push("scp://insert.url.here");
    //______________________________________________________________
    //                      URL LIST TWO
    //______________________________________________________________
    var urlListTwo = [];
    //______________________________________________________________
    //                  INSERT URLS INTO LIST
    //______________________________________________________________
    urlListTwo.push("ftp://insert.url.here");
    urlListTwo.push("http://insert.url.here");
    urlListTwo.push("https://insert.url.here");
    urlListTwo.push("scp://insert.url.here");

    //______________________________________________________________
    // If the requested website is hosted within the internal network,
    // send direct.
    //______________________________________________________________
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.100.0", "255.255.0.0") ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
        return "DIRECT";
    //______________________________________________________________    
    // Determining if the REQUESTED url a user inputs matches an item
    // from 1st url list or the 2nd url list
    //______________________________________________________________
    for (var i = 0; i < urlListOne.length; i++) {
        for (var x = 0; x < urlListTwo.length; x++) {
            /*_______________________________________________________________________________________________________
                IN summary the first FOR loop references each item from from the first array.
                For each item in that first array the second FOR loop references the entire second array. 
                This compares whether the REQUESTED url is either in list one or list two and routes user accordingly
              _______________________________________________________________________________________________________*/
            if (shExpMatch(host, urlListOne[i]))
                return "192.168.100.1"; //IF the REQUESTED url is in list 1 then route to a gateway of your choice
            else if (shExpMatch(host, urlListTwo[x]))
                return "192.168.100.204"; //IF the REQUESTED url is in list 2 then route to a gateway of your choice
        }
        
    }
    return "DIRECT";//if all conditions arent met route the user to DIRECT, which is the default gateway (the internet)
}