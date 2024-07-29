let count = 0;
let current = 0;
let selectedAppIcon = null;
let dragBox;
let apps = [];
let appId = 0;
let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

document.addEventListener('keydown', function(evt) {
  if (evt.key === 'enter' || evt.eventCode === 13 && selectedAppIcon != null) {
    console.log('enter is clicked');    
  } else {
    console.log('selectedAppIcon is empty');
  }
})

function getApps() {
  let dragBox = document.querySelectorAll('.ui-medium');
  dragBox.forEach(element => {
      dragElement(element);
  });

}

getApps();

function dragElement(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  element.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    element.style.position = "absolute";
    element.style.cursor = "move";

    current = parseInt(element.style.zIndex) || 0;
    element.style.zIndex = count;
    count++;

    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    element.style.cursor = "initial";
  }
}

function closeApp(app) {
  console.log("deleting app id: " + app.id);
  let selectedApp = document.getElementById(app.id);
  selectedApp.remove();
}

function appClicked(btn) {
  btn.style.background = "rgb(0, 0, 0, 0.1)";
  selectedAppIcon = btn;

  let otherApp = document.querySelectorAll('.app-icon');
  otherApp.forEach(appIco => {
    if (appIco != btn) {
      appIco.style.background = 'transparent';
    }
  });
}

function startBtnClicked(btn) {
  btn.style.background = "darkgray";

  setTimeout(() => {btn.style.background = "gray";}, 100);
}

function openApp(app) {
  let uiContainer = document.createElement('div');
  uiContainer.id = appId;
  uiContainer.className = 'ui-medium';
  uiContainer.style.left = (Math.floor(Math.random() * 50)) + "%";

  let appName = document.createElement('h3');
  appName.innerText = app.querySelector('h4').innerText;

  let topCtrl = document.createElement('div');
  topCtrl.className = 'top-controls';
  uiContainer.appendChild(topCtrl);
  
  let closeBttn = document.createElement('div');
  closeBttn.className = 'close-bttn';
  closeBttn.onclick = function() {closeApp(uiContainer);};
  topCtrl.appendChild(appName);
  topCtrl.appendChild(closeBttn);

  let content = document.createElement('p');
  content.innerText = lorem;
  uiContainer.appendChild(content);

  document.body.appendChild(uiContainer);
  getApps();
  appId++;
}

function contactApp() {
  let uiContainer = document.createElement('div');
  uiContainer.id = appId;
  uiContainer.className = 'ui-medium';
  uiContainer.style.left = (Math.floor(Math.random() * 50)) + "%";

  let appName = document.createElement('h3');
  appName.innerText = 'Contact';

  let topCtrl = document.createElement('div');
  topCtrl.className = 'top-controls';
  uiContainer.appendChild(topCtrl);
  
  let closeBttn = document.createElement('div');
  closeBttn.className = 'close-bttn';
  closeBttn.onclick = function() {closeApp(uiContainer);};

  // let closeBttn = document.createElement('img');
  // closeBttn.src = '../portfolio-images/close-icon.png'
  // closeBttn.onclick = function() {closeApp(uiContainer);};
  
  topCtrl.appendChild(appName);
  topCtrl.appendChild(closeBttn);

  let content = document.createElement('p');
  content.className = 'content';

  let contactIcon = document.createElement('img');
  contactIcon.src = '../portfolio-images/contact-icon.png';

  let desc = document.createElement('p');
  desc.innerText = "I don't really use social media, so this is the only way you can contact me";
  let gmailAcc = document.createElement('h4');
  gmailAcc.innerText = 'Gmail account: emailAddr234@.gmail.com';
  let githubAcc = document.createElement('a');
  githubAcc.innerText = 'Github account: ';
  githubAcc.href = 'https://github.com/tongaks';

  content.appendChild(contactIcon);
  content.appendChild(desc);
  content.appendChild(gmailAcc);
  content.appendChild(githubAcc);

  uiContainer.appendChild(content);
  document.body.appendChild(uiContainer);
  getApps();
  appId++;
}

function aboutMeApp() {
  let uiContainer = document.createElement('div');
  uiContainer.id = appId;
  uiContainer.className = 'ui-medium';
  uiContainer.style.left = (Math.floor(Math.random() * 50)) + "%";

  let appName = document.createElement('h3');
  appName.innerText = 'About me';

  let topCtrl = document.createElement('div');
  topCtrl.className = 'top-controls';
  uiContainer.appendChild(topCtrl);
  
  let closeBttn = document.createElement('div');
  closeBttn.className = 'close-bttn';
  closeBttn.onclick = function() {closeApp(uiContainer);};
  topCtrl.appendChild(appName);
  topCtrl.appendChild(closeBttn);

  let content = document.createElement('div');
  content.className = 'content';

  let profile = document.createElement('img');
  profile.src = '../portfolio-images/mae-transparent.png'

  let textContainer = document.createElement('div');
  textContainer.className = 'text-content';

  let imgsrc = document.createElement('h3');
  imgsrc.innerText = 'Mae from Night in the woods game';

  let intro = document.createElement('p');
  intro.innerText = 'Hi, my name is Band2 (bandito) and I like creating webpages but my real focus is in system programming and cybersecurity.';  

  content.appendChild(profile);
  content.appendChild(imgsrc);
  textContainer.appendChild(intro);
  content.appendChild(textContainer);

  uiContainer.appendChild(content);
  
  document.body.appendChild(uiContainer);
  getApps();
  appId++;
}