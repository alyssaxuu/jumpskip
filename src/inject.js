$(document).ready(function(){
  var jumpscares = [];
  var jumpscaretime = 0;
  var warning = true;
  var skip = false;
  var skipbefore = 0;
  var skipafter = 0;
  var mute = false;
  var warningtime = 5;
  var delay = 5;
  var dismiss = false;
  var muted = false;
  var playing = false;
  var file = "";

  function showJumpscareOverview() {
    const injectedCode = `var videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
    var player = videoPlayer.getVideoPlayerBySessionId(videoPlayer.getAllPlayerSessionIds()[0]);
    player.pause();`;
    var script = document.createElement("script");
    script.textContent = injectedCode;
    (document.head).appendChild(script);
    if (jumpscares.length == 1) {
      $("#jumpscare-overview h3").html("This movie contains "+jumpscares.length+" jumpscare");
    } else {
        $("#jumpscare-overview h3").html("This movie contains "+jumpscares.length+" jumpscares");
    }
    $("#jumpscare-overview p").html("");
    jumpscares.forEach(function(jumpscare){
      if (jumpscare.type == "minor") {
        $("#jumpscare-overview p").append(new Date(jumpscare.time*1000).toISOString().slice(11,19)+" - "+jumpscare.type.charAt(0).toUpperCase()+jumpscare.type.slice(1)+" jumpscare<br>");
      } else {
        $("#jumpscare-overview p").append("<b>"+new Date(jumpscare.time*1000).toISOString().slice(11,19)+" - "+jumpscare.type.charAt(0).toUpperCase()+jumpscare.type.slice(1)+" jumpscare</b><br>");
      }
    });
    var movietitle = file.replace(".srt.txt", "");
    movietitle = movietitle.replace(".srt", "");
    $("#jumpscare-details").attr("href", "https://wheresthejump.com/jump-scares-in-"+movietitle);
    $("#jumpscare-overview").addClass("jumpscare-ahead");
  }

  function playMovie() {
    $("#jumpscare-overview").removeClass("jumpscare-ahead");
    chrome.runtime.sendMessage({type: "get-jumpscares", title:$("input[name=movie-name]").val()});
    const injectedCode = `var videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
    var player = videoPlayer.getVideoPlayerBySessionId(videoPlayer.getAllPlayerSessionIds()[0]);
    player.play();`;
    var script = document.createElement("script");
    script.textContent = injectedCode;
    (document.head).appendChild(script);
  }

  function updateMovie() {
    $("#movie-select-popup").removeClass("jumpscare-ahead");
    chrome.runtime.sendMessage({type: "get-jumpscares", title:$("input[name=movie-name]").val()});
    const injectedCode = `var videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
    var player = videoPlayer.getVideoPlayerBySessionId(videoPlayer.getAllPlayerSessionIds()[0]);
    player.play();`;
    var script = document.createElement("script");
    script.textContent = injectedCode;
    (document.head).appendChild(script);
  }

  function togglePlayPause() {
    chrome.runtime.sendMessage({type: "get-jumpscares", title:$("input[name=movie-name]").val()});
    const injectedCode = `var videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
    var player = videoPlayer.getVideoPlayerBySessionId(videoPlayer.getAllPlayerSessionIds()[0]);
    if (player.isPlaying()){
      player.pause();
    } else {
      player.play();
    }`;
    var script = document.createElement("script");
    script.textContent = injectedCode;
    (document.head).appendChild(script);
    window.setTimeout(function(){
      if ($(".PlayerControls--control-element").hasClass("button-nfplayerPlay")) {
        playing = false;
        chrome.runtime.sendMessage({type: "change-playing-status", playing:playing});
      } else {
        playing = true;
        chrome.runtime.sendMessage({type: "change-playing-status", playing:playing});
      }
    }, 500)
  }

  function movieSelect(movies) {
    movies.forEach(function(movie, index){
      var movietitle = movie.replace(".srt.txt", "");
      movietitle = movietitle.replace(".srt", "");
      movietitle = movietitle.replace(/-/g, " ");
      if (index == 0) {
        $("#radio-section").append('<label class="container">'+movietitle+'<input type="radio" name="movie-name" value="'+movie+'" checked="checked"><span class="checkmark"></span></label>')
      } else {
        $("#radio-section").append('<label class="container">'+movietitle+'<input type="radio" name="movie-name" value="'+movie+'"><span class="checkmark"></span></label>')
      }
    });
    $("#movie-select-popup").addClass("jumpscare-ahead");
    const injectedCode = `var videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
    var player = videoPlayer.getVideoPlayerBySessionId(videoPlayer.getAllPlayerSessionIds()[0]);
    player.pause();`;
    var script = document.createElement("script");
    script.textContent = injectedCode;
    (document.head).appendChild(script);
  }

  function updateValues() {
    chrome.storage.sync.get(null, function(result) {
      warning = result.warning;
      skip = result.skip;
      warningtime = parseInt(result.warningtime);
      skipbefore = result.skipbefore;
      skipafter = result.skipafter;
      mute = result.mute;
    });
  }

  function overrideFullscreen(e) {
    e.preventDefault();
    e.stopPropagation();
    document.documentElement.requestFullscreen();
  }

  function muteJumpscare() {
    const injectedCode = `var videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
    var player = videoPlayer.getVideoPlayerBySessionId(videoPlayer.getAllPlayerSessionIds()[0]);
    player.setMuted(true);`;
    var script = document.createElement("script");
    script.textContent = injectedCode;
    (document.head).appendChild(script);
    window.setTimeout(function(){
      const injectedCode = `var videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
      var player = videoPlayer.getVideoPlayerBySessionId(videoPlayer.getAllPlayerSessionIds()[0]);
      player.setMuted(false);`;
      var script = document.createElement("script");
      script.textContent = injectedCode;
      (document.head).appendChild(script);
    }, 3000);
  }

  function muteVideo() {
    if (muted) {
      const injectedCode = `var videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
      var player = videoPlayer.getVideoPlayerBySessionId(videoPlayer.getAllPlayerSessionIds()[0]);
      player.setMuted(false);`;
      var script = document.createElement("script");
      script.textContent = injectedCode;
      (document.head).appendChild(script);
      $("#jumpscare-mute img").attr("src", chrome.runtime.getURL('/assets/mute.svg'));
      $("#jumpscare-mute").removeClass("jumpscare-muted");
      $("#jumpscare-tooltip").html("Mute jumpscare");
      muted = false;
    } else {
      const injectedCode = `var videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
      var player = videoPlayer.getVideoPlayerBySessionId(videoPlayer.getAllPlayerSessionIds()[0]);
      player.setMuted(true);`;
      var script = document.createElement("script");
      script.textContent = injectedCode;
      (document.head).appendChild(script);
      $("#jumpscare-mute img").attr("src", chrome.runtime.getURL('/assets/muted.svg'));
      $("#jumpscare-mute").addClass("jumpscare-muted");
      $("#jumpscare-tooltip").html("Unmute jumpscare");
      muted = true;
    }
  }

  function dismissJumpscare() {
    dismiss = true;
    $("#jumpscare-popup").removeClass("jumpscare-ahead");
  }

  function skipJumpscare() {
    if (skip) {
      delay = skipafter;
    }
    const injectedCode = `var videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
    var player = videoPlayer.getVideoPlayerBySessionId(videoPlayer.getAllPlayerSessionIds()[0]);
    player.seek(`+(jumpscaretime+delay)*1000+`);
    player.play()`;
    var script = document.createElement("script");
    script.textContent = injectedCode;
    (document.head).appendChild(script);
    $("#jumpscare-popup").removeClass("jumpscare-ahead");
  }

  function checkJumpscares(time) {
    var flag = false;
    jumpscares.forEach(function(jumpscare){
      // Automatically skip forward
      if (skip) {
        if (time > jumpscare.time-skipbefore && time < jumpscare.time) {
          jumpscaretime = jumpscare.time;
          skipJumpscare();
        }
      }
      // Automatically mute jumpscare
      if (mute) {
        if (time > jumpscare.time-2 && time < jumpscare.time) {
          jumpscaretime = jumpscare.time;
          muteJumpscare();
        }
      }
      // Show warning
      if (time > jumpscare.time-warningtime && time < jumpscare.time && warning) {
        jumpscaretime = jumpscare.time;
        if (!dismiss) {
          $("#jumpscare-popup").addClass("jumpscare-ahead");
          $("#jumpscare-popup h5").html((Math.floor(jumpscare.time - time))+" seconds");
        }
        flag = true;
      }
    });
    if (!flag) {
      if (muted) {
        muteVideo();
      }
      $("#jumpscare-popup").removeClass("jumpscare-ahead");
      dismiss = false;
      muted = false;
    }
  }

  function checkCurrentTime(){
    window.setTimeout(function(){
      const time = $("video")[0].currentTime;
      checkJumpscares(time);
      checkCurrentTime();
    },100)
  }

  function checkMovie() {
    window.setTimeout(function(){
      var title = $(".video-title h4").html();
      if (title === undefined || typeof title === 'undefined') {
        title = $(".PlayView-info").html();
      }
      checkCurrentTime();
      chrome.runtime.sendMessage({type: "find-jumpscares", title:title});
      $.get(chrome.runtime.getURL('/content.html'), function(data) {
        $(data).appendTo('body');
        $("#jumpscare-mute img").attr("src", chrome.runtime.getURL('/assets/mute.svg'))
      });
    }, 5000);
  }

  function removeInjected() {
    $("#movie-select-popup").remove();
    $("#jumpscare-popup").remove();
    $("#jumpscare-overview").remove();
  }

  function globalHandler() {
    window.setTimeout(function(){
      if ($(".PlayerControls--control-element").hasClass("button-nfplayerPlay")) {
        playing = false;
      } else {
        playing = true;
      }
    }, 500)
  }

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.type == "jumpscare-list") {
        jumpscares = request.jumpscares;
        file = request.file;
        showJumpscareOverview();
      } else if (request.type == "update-values") {
        updateValues();
      } else if (request.type == "multiple-movies") {
        movieSelect(request.movies);
      } else if (request.type == "watching-now") {
        if (!$("#movie-select-popup").length) {
          checkMovie();
        }
        if ($(".PlayerControls--control-element").hasClass("button-nfplayerPlay")) {
          playing = false;
        } else {
          playing = true;
        }
      } else if (request.type == "watching-stop") {
        removeInjected();
      } else if (request.type == "toggle-play-pause") {
        togglePlayPause();
      } else if (request.type == "check-playing-status") {
        sendResponse({playing:playing});
      }
  });

  // Unbind fullscreen button
  $(".button-nfplayerFullscreen").off("click");
  $(".svg-icon-nfplayerFullscreen").off("click");
  $(".button-nfplayerFullscreen").off("mousedown");
  $(".svg-icon-nfplayerFullscreen").off("mousedown");

  // Events
  $(document).on("click", "#jumpscare-skip", skipJumpscare);
  $(document).on("click", "#jumpscare-dismiss", dismissJumpscare);
  $(document).on("click", "#jumpscare-close", dismissJumpscare);
  $(document).on("click", "#jumpscare-mute", muteVideo);
  $(document).on("mousedown", ".button-nfplayerFullscreen", overrideFullscreen);
  $(document).on("focus", updateValues);
  $(document).on("click", "#movie-select", updateMovie);
  $(document).on("click", "#play-movie", playMovie);
  $(document).on("click", globalHandler);
  $(document).on("keydown", globalHandler);
  updateValues();
});
