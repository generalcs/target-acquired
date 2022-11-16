const OK = 200;
const NOT_FOUND = 404;

function getUrlStatus(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send(null);
    return xmlHttp.status;
}

function getHash(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed,
      h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

function reactToAnswer(answer, prefix) {
    let hash = getHash(answer.toLowerCase());
    let url = (prefix + String(hash) + '.html');
    let status = getUrlStatus(url);

    if (status == OK) {
        window.location.href = url;
    } else if (status == NOT_FOUND) {
        document.getElementById('error').innerHTML = 'Incorrect code.';
    } else {
        document.getElementById('error').innerHTML ='Error: please try again';
    }
}

function checkAnswer(prefix) {
    let answer = document.getElementById('answer').value;
    reactToAnswer(answer, prefix);
}