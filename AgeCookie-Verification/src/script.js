function $(x) {
  return document.getElementById(x);
}

function setCookie(c_name, value, exdays) {
  var cookie = name + "=" + encodeURIComponent(value);
  document.cookie = cookie;
  var date = new Date();
  exdays.setDate(exdays.getDate() + exdays);
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  exdays = "expires=" + date.toUTCString();
  var dateTimeNow = date.getTime();
}

function getCookie(name) {
  var matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function checkCookie() {
  if (!!$.cookie("ageCookie")) {
    $("#ageCookie").show();
  } else {
    $("#ageCookie").hide();
  }
}

function overAge() {
  button.onclick.aceeptCookie = overAge;
  document.getElementById("Yes");
  $("#ageCookie").hide();
}

function underAge() {
  var url = "https://www.google.com/";
  window.location = url;
  window.location.replace(url);
}
