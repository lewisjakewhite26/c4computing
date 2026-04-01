(function () {
  var code = document.documentElement.getAttribute("data-oracle-code");
  var digits = document.getElementById("oracle-code-digits");
  if (code && digits) digits.textContent = code;

  var hint = document.getElementById("url-hint");
  var url = location.href.split("#")[0];
  if (hint) {
    hint.textContent =
      location.protocol === "file:"
        ? "Host these files on a website — then point each QR code at this page’s full web address."
        : url;
  }

  var mount = document.getElementById("oracle-qr");
  if (!mount || typeof QRCode === "undefined") {
    if (mount && !mount.querySelector("img"))
      mount.innerHTML =
        '<p style="font-size:13px;color:#3a4556">QR preview needs an internet connection for the script library, or open this page from the web (not file://).</p>';
    return;
  }

  mount.innerHTML = "";
  try {
    new QRCode(mount, {
      text: url,
      width: 200,
      height: 200,
      colorDark: "#1d1d1f",
      colorLight: "#ffffff",
    });
  } catch (e) {
    mount.textContent = "Could not draw the QR code.";
  }
})();
