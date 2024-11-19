function getTitleLink() {
    const titleLink = document.createElement('a');
    titleLink.setAttribute('href', '/index.html');
    titleLink.setAttribute('class', 'nav__title');

    const titleT = document.createElement('h1');
    titleT.setAttribute('class', 'nav__title-text');
    titleT.appendChild(document.createTextNode('T'));

    const titleImg = document.createElement('img');
    titleImg.setAttribute('class', 'nav__title-image');
    titleImg.setAttribute('src', '/images/hard-target.png');

    const titleRest = document.createElement('h1');
    titleRest.setAttribute('class', 'nav__title-text');
    titleRest.appendChild(document.createTextNode('RGET ACQUIRED'));

    titleLink.appendChild(titleT);
    titleLink.appendChild(titleImg);
    titleLink.appendChild(titleRest);

    return titleLink;
}

function includeCommonHead() {
    const generalStyle = document.createElement('link');
    generalStyle.setAttribute('rel', 'stylesheet');
    generalStyle.setAttribute('href', '/styles/general.css');

    const fontGoogleApi = document.createElement('link');
    fontGoogleApi.setAttribute('rel', 'preconnect');
    fontGoogleApi.setAttribute('href', 'https://fonts.googleapis.com');

    const fontGoogleStatic = document.createElement('link');
    fontGoogleStatic.setAttribute('rel', 'preconnect');
    fontGoogleStatic.setAttribute('href', 'https://fonts.gstatic.com');

    const fontGoogle = document.createElement('link');
    fontGoogle.setAttribute('rel', 'stylesheet');
    fontGoogle.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Anonymous+Pro:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap');

    const favicon = document.createElement('link');
    favicon.setAttribute('rel', 'icon');
    favicon.setAttribute('type', 'image/x-icon');
    favicon.setAttribute('href', '/images/hard-target.png');

    const head = document.getElementsByTagName('head').item(0)
    head.appendChild(generalStyle);
    head.appendChild(fontGoogleApi);
    head.appendChild(fontGoogleStatic);
    head.appendChild(fontGoogle);
    head.appendChild(favicon);
}

function includeCommonNav() {
    const nav = document.createElement('nav');
    nav.appendChild(getTitleLink());

    const body = document.getElementsByTagName('body').item(0);
    body.prepend(nav);
}

function includeCommonFooter() {
    const footer = document.createElement('footer');
    
    const footerDetails = document.createElement('div');
    footerDetails.setAttribute('class', 'footer__details');

    const titleLink = getTitleLink();

    const footnotes = document.createElement('div');

    const icons8p = document.createElement('p');

    const icons8WebsiteLink = document.createElement('a');
    icons8WebsiteLink.setAttribute('href', 'https://icons8.com');
    icons8WebsiteLink.appendChild(document.createTextNode('Icons8'));

    icons8p.appendChild(document.createTextNode('Icons by '));
    icons8p.appendChild(icons8WebsiteLink);

    const copyright = document.createElement('p');
    copyright.appendChild(document.createTextNode('Copyright © 2022-2023 Samuel Do. All Rights Reserved.'));

    footnotes.append(icons8p);
    footnotes.append(copyright);

    footerDetails.append(titleLink);
    footerDetails.append(footnotes);

    const footerLinks = document.createElement('div');
    footerLinks.setAttribute('class', 'footer__links');

    const footerLinksSections = document.createElement('div');
    footerLinksSections.setAttribute('class', 'footer__links-sections');
    
    const rooms = document.createElement('div');
    rooms.setAttribute('class', 'footer__links-section');

    const roomsTitle = document.createElement('p');

    const roomsTitleBold = document.createElement('b');
    roomsTitleBold.appendChild(document.createTextNode('Rooms'));

    roomsTitle.appendChild(roomsTitleBold);

    const roomsBFA2023 = document.createElement('a');
    roomsBFA2023.setAttribute('href', '/rooms/BFA2023/start.html');
    roomsBFA2023.appendChild(document.createTextNode('Ran Ran from Durand'))

    const roomsBWI2022 = document.createElement('a');
    roomsBWI2022.setAttribute('href', '/rooms/BWI2022/start.html');
    roomsBWI2022.appendChild(document.createTextNode('Space Cows'));

    const roomsBFA2022 = document.createElement('a');
    roomsBFA2022.setAttribute('href', '/rooms/BFA2022/start.html');
    roomsBFA2022.appendChild(document.createTextNode('Bank Heist'));

    rooms.appendChild(roomsTitle);
    rooms.appendChild(roomsBFA2023)
    rooms.appendChild(roomsBWI2022);
    rooms.append(roomsBFA2022);

    footerLinksSections.appendChild(rooms);

    const footerContact = document.createElement('div');
    footerContact.setAttribute('class', 'footer__contact');

    const contactText = document.createElement('p');
    contactText.append(document.createTextNode('Get in touch or submit suggestions at '));

    const contactEmail = document.createElement('a');
    contactEmail.setAttribute('href', 'mailto:samdo@cs.stanford.edu');
    contactEmail.appendChild(document.createTextNode('samdo@cs.stanford.edu'));

    contactText.appendChild(contactEmail);

    footerContact.append(contactText);

    footerLinks.append(footerLinksSections);
    footerLinks.append(footerContact);

    footer.append(footerDetails);
    footer.append(footerLinks);

    const body = document.getElementsByTagName('body').item(0);
    body.appendChild(footer);
}