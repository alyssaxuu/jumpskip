$(document).ready(function(){
  var watching = false;
  chrome.storage.sync.get(null, function(result) {
      if (result.warning) {
        $("#warning-check input").attr("checked", true);
        $("#warning-options").addClass("show-options");
      }
      if (result.skip) {
        $("#skip-check input").attr("checked", true);
        $("#skip-options").addClass("show-options");
      }
      if (result.mute) {
        $("#mute input").attr("checked", true);
      }
      if (result.warningtime === 1) {
        $("#warning-dropdown").html('1 second <img src="assets/droparrow.svg">');
      } else {
        $("#warning-dropdown").html(result.warningtime+' seconds <img src="assets/droparrow.svg">');
      }
      if (result.skipbefore === 1) {
        $("#skip-start-dropdown").html('1 second <img src="assets/droparrow.svg">');
      } else {
        $("#skip-start-dropdown").html(result.skipbefore+' seconds <img src="assets/droparrow.svg">');
      }
      if (result.skipafter === 1) {
        $("#skip-end-dropdown").html('1 second <img src="assets/droparrow.svg">');
      } else {
        $("#skip-end-dropdown").html(result.skipafter+' seconds <img src="assets/droparrow.svg">');
      }
  });

  chrome.runtime.sendMessage({type: "is-watching"}, function(request){
    watching = request.watching;
    if (watching) {
      $("#watch").html("<img src='assets/pause.svg'>Pause movie");
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {type: "check-playing-status"}, function(response){
        if (!response.playing) {
          $("#watch").html("<img src='assets/watch.svg'>Resume movie");
        } else {
          $("#watch").html("<img src='assets/pause.svg'>Pause movie");
        }
      });
    });
  });

  function help(e) {
    e.preventDefault();
    e.stopPropagation();
    $("#help-popup").addClass("show-help");
  }

  function problem() {
    $("#problem-section").html('<label>What&#39s happening?</label><img id="close-problem" src="assets/close.svg"><p id="not-seeing">I&#39m not seeing any jumpscare alerts<img src="assets/arrow-right.svg"></p><hr id="divider-problem"><p id="wrong">Inaccurate or missing jumpscares<img src="assets/arrow-right.svg"></p>');
    $("#problem").addClass("problem-hide");
    $("#watch").addClass("full-width");
    $("#problem-section").removeClass("problem-off");
  }

  function closeProblem() {
    $("#problem").removeClass("problem-hide");
    $("#watch").removeClass("full-width");
    $("#problem-section").addClass("problem-off");
  }

  function wrongData() {
    $("#problem-section").html('<label>Inaccurate or missing jumpscares</label><img id="close-problem" src="assets/close.svg"><div class="problem-desc">Jumpscare data may not be accurate. You can contribute by searching for the movie on <a href="https://wheresthejump.com">wheresthejump.com</a> and updating any missing or inaccurate data.<br><br>If the data is correct on the website, but not in Jumpskip, feel free to reach out.</div><div id="contact-us">Contact us</div>');
  }

  function notSeeing() {
    $("#problem-section").html('<label>I&#39m not seeing any jumpscare alerts</label><img id="close-problem" src="assets/close.svg"><div class="problem-desc">You should have been prompted with a popup when starting the movie informing you about the number of jumpscares for the movie you&#39re watching. If you didn&#39t see it, it&#39s possible that there&#39s no data for the movie on <a href="https://wheresthejump.com">wheresthejump.com</a>.<br><br>If you did see it and no warnings are showing, please do reach out.</div><div id="contact-us">Contact us</div>');
  }

  function watchNetflix() {
    if (!watching) {
      chrome.tabs.create({url: "https://www.netflix.com"});
      return false;
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "toggle-play-pause"});
      });
    }
  }

  function contactUs() {
    chrome.tabs.create({url: "mailto:hi@alyssax.com?subject=Jumpskip%20issue"});
  }

  function wheresTheJump() {
    chrome.tabs.create({url: "https://wheresthejump.com"});
  }

  function alyssaX() {
    chrome.tabs.create({url: "https://twitter.com/alyssaxuu"});
  }

  function gitHub() {
    chrome.tabs.create({url: "https://github.com/alyssaxuu/jumpskip"});
  }

  function review() {
    chrome.tabs.create({url: "https://chrome.google.com/webstore/detail/jumpskip-skip-jumpscares/fbemiaecodgpghdfegmdcikjkobdghab?hl=en&authuser=0"});
  }

  function changeOption() {
    if ($(this).parent().attr("id") === "warning-check") {
      if ($(this).is(":checked")) {
        chrome.storage.sync.set({warning: true});
        $("#warning-options").addClass("show-options");
      } else {
        chrome.storage.sync.set({warning: false});
        $("#warning-options").removeClass("show-options");
      }
    } else if ($(this).parent().attr("id") === "skip-check") {
      if ($(this).is(":checked")) {
        chrome.storage.sync.set({skip: true});
        $("#skip-options").addClass("show-options");
      } else {
        chrome.storage.sync.set({skip: false});
        $("#skip-options").removeClass("show-options");
      }
    } else if ($(this).parent().attr("id") === "mute") {
      if ($(this).is(":checked")) {
        chrome.storage.sync.set({mute: true});
      } else {
        chrome.storage.sync.set({mute: false});
      }
    }
    chrome.runtime.sendMessage({type: "update-values"});
  }

  function toggleDropdown(e) {
    e.preventDefault();
    e.stopPropagation();
    if ($(this).attr("id") === "warning-dropdown") {
      $("#warning-options-list").toggleClass("dropdown-active");
    } else if ($(this).attr("id") === "skip-start-dropdown") {
      $("#skip-options-start").toggleClass("dropdown-active");
    } else if ($(this).attr("id") === "skip-end-dropdown") {
      $("#skip-options-end").toggleClass("dropdown-active");
    }
  }

  function setDropdownItem(e) {
    e.preventDefault();
    e.stopPropagation();
    if ($(this).parent().attr("id") === "warning-options-list") {
      $("#warning-dropdown").html($(this).html()+'<img src="assets/droparrow.svg">');
      chrome.storage.sync.set({warningtime: parseInt($(this).attr("data-value"))});
    } else if ($(this).parent().attr("id") === "skip-options-start") {
      $("#skip-start-dropdown").html($(this).html()+'<img src="assets/droparrow.svg">');
      chrome.storage.sync.set({skipbefore: parseInt($(this).attr("data-value"))});
    } else if ($(this).parent().attr("id") === "skip-options-end") {
      $("#skip-end-dropdown").html($(this).html()+'<img src="assets/droparrow.svg">');
      chrome.storage.sync.set({skipafter: parseInt($(this).attr("data-value"))});
    }
    $(".dropdown-active").removeClass("dropdown-active");
    chrome.runtime.sendMessage({type: "update-values"});
  }

  function globalHandler(e) {
    $(".dropdown-active").removeClass("dropdown-active");
    $(".show-help").removeClass("show-help")
  }

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "change-playing-status") {
      if (!request.playing) {
        $("#watch").html("<img src='assets/watch.svg'>Resume movie");
      } else {
        $("#watch").html("<img src='assets/pause.svg'>Pause movie");
      }
    }
  })

  // Events
  $(document).on("click", "#watch", watchNetflix);
  $(document).on("change", ".checkbox-container input", changeOption);
  $(document).on("click", ".dropdown", toggleDropdown);
  $(document).on("click", ".dropdown-item", setDropdownItem);
  $(document).on("click", "#problem", problem);
  $(document).on("click", "#close-problem", closeProblem);
  $(document).on("click", "#wrong", wrongData);
  $(document).on("click", "#not-seeing", notSeeing);
  $(document).on("click", "#contact-us", contactUs);
  $(document).on("click", ".problem-desc a", wheresTheJump);
  $(document).on("click", "#contribute", wheresTheJump);
  $(document).on("click", "#github", gitHub);
  $(document).on("click", "#review", review);
  $(document).on("click", "#footer span", alyssaX);
  $(document).on("click", "#help", help);
  $(document).on("click", globalHandler);
});
