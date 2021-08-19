$(document).ready(function(){
  var files = "Sunshine-2007.srt.txt,Halloween-2007.srt.txt,The-Exorcism-of-Emily-Rose-2005.srt.txt,Extraterrestrial-2014.srt.txt,The-Messengers-2007.srt.txt,P2-2007.srt.txt,Pet-2016.srt.txt,Wildling-2018.srt.txt,Tucker-and-Dale-vs-Evil-2010.srt,Deep-Red-1975.srt.txt,The-Haunting-1963.srt.txt,Insidious-Chapter-2-2013.srt.txt,Truth-or-Dare-2018.srt.txt,The-Abyss-1989.srt.txt,Nerve-2016.srt.txt,Blade-1998.srt.txt,Knock-Knock-2015.srt.txt,Let-Us-Prey-2014.srt.txt,The-Howling-1981.srt.txt,Creep-2014.srt.txt,The-Last-House-on-the-Left-2009.srt.txt,Pride-and-Prejudice-and-Zombies-2016.srt.txt,Lights-Out-2016.srt.txt,Poltergeist-1982.srt.txt,The-Woman-in-Black-2012.srt.txt,The-Crucifixion-2017.srt.txt,Black-Christmas-1974.srt.txt,Ghostland-2018.srt.txt,When-a-Stranger-Calls-1979.srt.txt,Rings-2017.srt.txt,Amityville-The-Awakening-2017.srt.txt,Cloverfield-2008.srt.txt,The-Human-Centipede-8211-First-Sequence-2009.srt,Ouija-Origin-of-Evil-2016.srt.txt,The-Predator-2018.srt.txt,Uzumaki-2000.srt.txt,Goodnight-Mommy-2014.srt.txt,Stephanie-2017.srt.txt,10-Cloverfield-Lane-2016.srt.txt,Child's-Play-2019.srt,The-Pact-2012.srt.txt,The-Girl-with-All-the-Gifts-2016.srt,Arrival-2016.srt.txt,Maggie-2015.srt.txt,It-Comes-at-Night-2017.srt.txt,Would-You-Rather-2012.srt.txt,Zombieland-2009.srt.txt,A-Nightmare-on-Elm-Street-2010.srt.txt,The-Shining-1980.srt.txt,The-Neighbor-2016.srt.txt,House-on-Haunted-Hill-1999.srt.txt,The-Burning-1981.srt.txt,Mama-2013.srt.txt,The-Innocents-1961.srt.txt,The-Ritual-2017.srt.txt,Planet-Terror-2007.srt.txt,Carrie-1976.srt.txt,Silent-Hill-2006.srt.txt,The-Curse-of-La-Llorona-2019.srt.txt,Alien-3-1992.srt.txt,Ravenous-1999.srt.txt,Saw-VI-2009.srt,The-Transfiguration-2016.srt.txt,The-Neon-Demon-2016.srt.txt,Bride-of-Chucky-1998.srt.txt,Insidious-2010.srt.txt,Lake-Mungo-2008.srt.txt,The-Purge-2013.srt.txt,Cargo-2017.srt,A-Nightmare-on-Elm-Street-3-Dream-Warriors-1987.srt.txt,A-Nightmare-on-Elm-Street-1984.srt.txt,Evil-Dead-2013.srt.txt,Starry-Eyes-2014.srt.txt,Paranormal-Activity-3-2011.srt.txt,Demonic-2015.srt.txt,Event-Horizon-1997.srt.txt,The-Texas-Chainsaw-Massacre-2003.srt.txt,Species-1995.srt.txt,Anaconda-1997.srt.txt,The-Skeleton-Key-2005.srt.txt,The-9th-Life-of-Louis-Drax-2016.srt.txt,Absentia-2011.srt.txt,Berlin-Syndrome-2017.srt.txt,The-Shallows-2016.srt.txt,Restoration-2016.srt.txt,Let-The-Right-One-In-2008.srt.txt,.DS_Store,The-Strangers-Prey-at-Night-2018.srt.txt,Sinister-2-2015.srt.txt,The-Disappointments-Room-2016.srt.txt,Wes-Craven's-New-Nightmare-1994.srt,The-Thing-2011.srt.txt,The-Strangers-2008.srt.txt,The-Babysitter-2017.srt.txt,My-Bloody-Valentine-1981.srt.txt,Malevolent-2018.srt.txt,Evil-Dead-II-1987.srt,Regression-2015.srt.txt,As-Above-So-Below-2014.srt.txt,Trick-'r-Treat-2007.srt,The-Sixth-Sense-1999.srt.txt,One-Missed-Call-2008.srt.txt,The-Shape-of-Water-2017.srt.txt,The-Hills-Have-Eyes-2006.srt.txt,The-Mist-2007.srt.txt,Incarnate-2016.srt.txt,Wish-Upon-2017.srt.txt,What-Lies-Beneath-2000.srt.txt,The-Haunting-in-Connecticut-2-Ghosts-of-Georgia-2013.srt,The-Boy-2015.srt.txt,Goosebumps-2015.srt.txt,The-People-Under-the-Stairs-1991.srt.txt,The-Forgotten-2004.srt.txt,Ghost-Stories-2017.srt.txt,World-War-Z-2013.srt.txt,Secret-Window-2004.srt.txt,Hereditary-2018.srt.txt,Disturbia-2007.srt.txt,Texas-Chainsaw-3D-2013.srt,High-Tension-2003.srt.txt,The-Endless-2017.srt.txt,The-Wolfman-2010.srt.txt,Jurassic-World-2015.srt.txt,The-Amityville-Horror-2005.srt.txt,The-Woman-in-Black-2-Angel-of-Death-2014.srt.txt,Leatherface-2017.srt.txt,Quarantine-2008.srt.txt,The-Quiet-Ones-2014.srt.txt,Paranormal-Activity-2-2010.srt.txt,Final-Destination-5-2011.srt.txt,The-Mothman-Prophecies-2002.srt.txt,Viral-2016.srt.txt,Happy-Death-Day-2U-2019.srt,Prince-of-Darkness-1987.srt.txt,Backtrack-2015.srt.txt,Scary-Stories-to-Tell-in-the-Dark-2019.srt.txt,Green-Room-2015.srt.txt,House-1986.srt.txt,Wrong-Turn-2003.srt.txt,The-Abandoned-2015.srt.txt,Megan-Is-Missing-2011.srt.txt,The-Den-2013.srt.txt,Banshee-Chapter-2013.srt.txt,Wind-Chill-2007.srt,Sinister-2012.srt.txt,The-Texas-Chain-Saw-Massacre-1974.srt.txt,The-Killing-of-a-Sacred-Deer-2017.srt.txt,I-Am-the-Pretty-Thing-That-Lives-in-the-House-2016.srt,Grave-Encounters-2011.srt.txt,The-Mummy-2017.srt.txt,The-Town-That-Dreaded-Sundown-2014.srt.txt,The-Monster-2016.srt.txt,The-Eye-2002.srt.txt,Inland-Empire-2006.srt.txt,The-Witch-2015.srt.txt,The-Grudge-2004.srt.txt,Dark-Water-2005.srt.txt,Sphere-1998.srt.txt,The-Good-Neighbor-2016.srt.txt,30-Days-of-Night-2007.srt.txt,The-Wicker-Man-1973.srt.txt,Horns-2013.srt.txt,Jeepers-Creepers-2001.srt.txt,Hannibal-2001.srt.txt,The-Sacrament-2013.srt.txt,Victor-Frankenstein-2015.srt.txt,1408-2007.srt.txt,Doom-2005.srt.txt,Gerald8217s-Game-2017.srt.txt,The-First-Purge-2018.srt.txt,Splinter-2008.srt.txt,The-Babadook-2014.srt.txt,Jaws-1975.srt.txt,The-Village-2004.srt.txt,Case-39-2009.srt.txt,The-Void-2016.srt.txt,Repulsion-1965.srt.txt,Psycho-1960.srt.txt,Don't-Knock-Twice-2016.srt,The-New-Daughter-2009.srt.txt,It-Follows-2014.srt.txt,The-Fog-1980.srt.txt,Martyrs-2008.srt.txt,Nocturnal-Animals-2016.srt.txt,Cell-2016.srt.txt,Children-of-the-Corn-1984.srt,Pandorum-2009.srt.txt,Cam-2018.srt.txt,Devil's-Due-2014.srt,The-Possession-2012.srt.txt,Slender-Man-2018.srt.txt,Final-Destination-2-2003.srt.txt,Patient-Zero-2018.srt.txt,Europa-Report-2013.srt.txt,Mirrors-2008.srt.txt,The-Ring-Two-2005.srt.txt,Let-Me-In-2010.srt.txt,Audition-1999.srt.txt,The-Craft-1996.srt.txt,Silent-Hill-Revelation-2012.srt.txt,Timecrimes-2007.srt.txt,The-Boy-2016.srt.txt,Pet-Sematary-1989.srt.txt,Exorcist-The-Beginning-2004.srt.txt,Inside-2007.srt.txt,Interview-With-the-Vampire-1994.srt,House-of-Wax-2005.srt.txt,The-Return-of-the-Living-Dead-1985.srt.txt,A-Tale-of-Two-Sisters-2003.srt.txt,47-Meters-Down-2017.srt.txt,Insidious-The-Last-Key-2018.srt.txt,Annabelle-2014.srt.txt,Ring-1998.srt.txt,The-Voices-2014.srt.txt,Fear-Clinic-2014.srt.txt,The-Hallow-2015.srt.txt,Personal-Shopper-2016.srt.txt,The-Snowman-2017.srt.txt,Resolution-2012.srt.txt,It-2017.srt.txt,Tragedy-Girls-2017.srt.txt,Ready-or-Not-2019.srt.txt,Hellboy-2004.srt.txt,I-Am-Legend-2007.srt.txt,Scream-1996.srt.txt,Krampus-2015.srt.txt,Poltergeist-2015.srt.txt,Hour-of-the-Wolf-1968.srt.txt,Under-the-Shadow-2016.srt.txt,Scary-Movie-2000.srt.txt,The-Other-Side-of-the-Door-2016.srt.txt,The-Others-2001.srt.txt,The-Happening-2008.srt.txt,The-Descent-2005.srt.txt,The-Possession-of-Michael-King-2014.srt.txt,The-Omen-1976.srt.txt,28-Weeks-Later-2007.srt.txt,Midsommar-2019.srt.txt,The-Final-Girls-2015.srt.txt,Dead-Alive-1992.srt.txt,The-Conversation-1974.srt.txt,Triangle-2009.srt.txt,Deliver-Us-From-Evil-2014.srt.txt,Don't-Be-Afraid-of-the-Dark-2010.srt,The-Unborn-2009.srt.txt,Ghost-Ship-2002.srt.txt,Paranormal-Activity-4-2012.srt.txt,The-Purge-Election-Year-2016.srt.txt,Black-Swan-2010.srt.txt,Don't-Breathe-2016.srt,Resident-Evil-The-Final-Chapter-2016.srt.txt,Mother-2017.srt.txt,Altered-States-1980.srt.txt,Deathgasm-2015.srt.txt,House-of-1000-Corpses-2003.srt.txt,Halloween-H20-20-Years-Later-1998.srt.txt,Aliens-1986.srt.txt,Devil-2010.srt.txt,Suspiria-2018.srt.txt,Thirteen-Ghosts-2001.srt.txt,Better-Watch-Out-2016.srt.txt,Misery-1990.srt.txt,Funny-Games-2007.srt.txt,Orphan-2009.srt.txt,Shutter-2004.srt.txt,Sleepaway-Camp-1983.srt.txt,Elle-2016.srt.txt,The-Blackcoat's-Daughter-2015.srt,Scary-Movie-2-2001.srt.txt,The-Hole-2001.srt.txt,Insidious-Chapter-3-2015.srt.txt,Flatliners-2017.srt.txt,Here-Alone-2016.srt.txt,Ma-2019.srt.txt,Invasion-of-the-Body-Snatchers-1978.srt.txt,Gothika-2003.srt.txt,Jurassic-World-Fallen-Kingdom-2018.srt.txt,The-Butterfly-Effect-2004.srt.txt,The-Exorcist-1973.srt.txt,The-Open-House-2018.srt.txt,Paranormal-Activity-2007.srt.txt,Intruders-2015.srt.txt,Halloween-1978.srt.txt,Funny-Games-1997.srt.txt,A-Nightmare-on-Elm-Street-2-Freddy8217s-Revenge-1985.srt,The-Exorcist-III-1990.srt,Unfriended-2014.srt.txt,Velvet-Buzzsaw-2019.srt.txt,The-Thing-1982.srt.txt,The-Devil's-Candy-2015.srt,In-The-Mouth-Of-Madness-1994.srt.txt,An-American-Werewolf-in-Paris-1997.srt.txt,Friday-the-13th-2009.srt,The-Green-Inferno-2013.srt.txt,Hide-and-Seek-2005.srt,Attack-the-Block-2011.srt,Dead-End-2003.srt.txt,Last-Shift-2014.srt.txt,Summer-of-84-2018.srt,Final-Destination-3-2006.srt.txt,A-Cure-for-Wellness-2016.srt,31-2016.srt.txt,Holidays-2016.srt.txt,Anna-2013.srt.txt,Dog-Soldiers-2002.srt.txt,Red-Dragon-2002.srt.txt,Deep-Blue-Sea-1999.srt.txt,The-Orphanage-2007.srt.txt,Malice-1993.srt.txt,Dracula-Untold-2014.srt.txt,Child's-Play-1988.srt,Pan's-Labyrinth-2006.srt,The-Conspiracy-2012.srt.txt,Tremors-1990.srt.txt,The-Uninvited-2009.srt.txt,The-Jacket-2005.srt.txt,Annabelle-Creation-2017.srt.txt,The-Lazarus-Effect-2015.srt.txt,Them-2006.srt.txt,Day-of-the-Dead-1985.srt,The-Atticus-Institute-2015.srt.txt,Apollo-18-2011.srt.txt,Julia's-Eyes-2010.srt,Saw-II-2005.srt,Scream-3-2000.srt.txt,Saw-V-2008.srt.txt,The-Canal-2014.srt.txt,Creep-2-2017.srt.txt,Pet-Sematary-2019.srt.txt,The-Borderlands-Final-Prayer-2013.srt,Alien-1979.srt.txt,Cyberbully-2015.srt.txt,1922-2017.srt.txt,Dreamcatcher-2003.srt.txt,Mulholland-Drive-2001.srt.txt,Honeymoon-2014.srt.txt,One-Hour-Photo-2002.srt.txt,Donnie-Darko-2001.srt.txt,The-Gift-2015.srt.txt,Jennifer's-Body-2009.srt,The-Devil-Inside-2012.srt.txt,Halloween-II-2009.srt,Shutter-Island-2010.srt.txt,Jacob's-Ladder-1990.srt,Cat-People-1942.srt.txt,Blair-Witch-2016.srt.txt,Terrifier-2017.srt.txt,Alien-Covenant-2017.srt.txt,Mom-and-Dad-2017.srt.txt,Ouija-2014.srt.txt,Paranormal-Activity-The-Ghost-Dimension-2015.srt.txt,Resident-Evil-2002.srt.txt,Scream-4-2011.srt.txt,Dark-Shadows-2012.srt.txt,Pay-The-Ghost-2015.srt.txt,Vacancy-2007.srt.txt,The-Changeling-1980.srt.txt,Spring-2014.srt.txt,Joy-Ride-2001.srt.txt,Sleepy-Hollow-1999.srt.txt,The-House-on-Pine-Street-2015.srt.txt,The-Veil-2016.srt.txt,The-Visit-2015.srt.txt,The-Purge-Anarchy-2014.srt.txt,Emelie-2015.srt.txt,The-Meg-2018.srt.txt,Jessabelle-2014.srt.txt,Hollow-Man-2000.srt.txt,The-Devil's-Backbone-2001.srt,Raw-2016.srt.txt,Cult-of-Chucky-2017.srt.txt,An-American-Werewolf-in-London-1981.srt.txt,The-Bye-Bye-Man-2017.srt.txt,The-Nun-2018.srt.txt,Us-2019.srt.txt,Final-Destination-2000.srt.txt,The-Invitation-2015.srt.txt,Urban-Legend-1998.srt.txt,Halloween-2018.srt.txt,Super-8-2011.srt.txt,The-Gallows-2015.srt.txt,I-Am-Not-a-Serial-Killer-2016.srt,The-Guest-2014.srt.txt,Dawn-of-the-Dead-2004.srt,Lake-Placid-1999.srt.txt,Silver-Bullet-1985.srt.txt,Saw-IV-2007.srt,In-the-Tall-Grass-2019.srt,Eden-Lake-2008.srt.txt,The-Innkeepers-2011.srt.txt,Gremlins-1984.srt.txt,The-Cloverfield-Paradox-2018.srt.txt,The-Autopsy-of-Jane-Doe-2016.srt.txt,Apostle-2018.srt.txt,The-Final-Destination-2009.srt.txt,Cooties-2014.srt.txt,1917-2019.srt.txt,Before-I-Wake-2016.srt.txt,Jurassic-Park-1993.srt.txt,Alone-2007.srt.txt,Fright-Night-2011.srt.txt,Bird-Box-2018.srt.txt,Annabelle-Comes-Home-2019.srt.txt,Signs-2002.srt.txt,The-Collector-2009.srt.txt,Winchester-2018.srt.txt,Rec-2007.srt.txt,Escape-Room-2019.srt.txt,Mandy-2018.srt.txt,Brightburn-2019.srt.txt,Tales-of-Halloween-2015.srt.txt,The-Texas-Chainsaw-Massacre-The-Beginning-2006.srt.txt,Eli-2019.srt.txt,The-Conjuring-2-2016.srt.txt,Split-2016.srt.txt,We-Are-Still-Here-2015.srt.txt,The-Conjuring-2013.srt.txt,The-Cured-2017.srt.txt,Alien-Resurrection-1997.srt.txt,Dead-Silence-2007.srt.txt,The-Ward-2010.srt.txt,The-Ring-2002.srt.txt,Get-Out-2017.srt.txt,Hush-2016.srt.txt,The-Forest-2016.srt.txt,Scream-2-1997.srt.txt,A-Quiet-Place-2018.srt.txt,Wait-Until-Dark-1967.srt.txt,Identity-2003.srt.txt,Cabin-Fever-2002.srt.txt,The-Bay-2012.srt.txt,The-Evil-Dead-1981.srt.txt,Hidden-2015.srt.txt,Slumber-2017.srt.txt,Cape-Fear-1991.srt.txt,Dark-Skies-2013.srt.txt,Death-Note-2017.srt.txt,Dead-Calm-1989.srt.txt,Jigsaw-2017.srt.txt,Morgan-2016.srt.txt,Extinction-2015.srt.txt,Mayhem-2017.srt.txt,Stake-Land-2010.srt.txt,Carrie-2013.srt.txt,Idle-Hands-1999.srt.txt,Freddy-vs-Jason-2003.srt,Halloween-II-1981.srt,The-Number-23-2007.srt.txt,The-Wailing-2016.srt.txt,Candyman-1992.srt.txt,Army-of-Darkness-8211-Director-Cut-1992.srt,Dark-Was-The-Night-2014.srt.txt,The-Faculty-1998.srt.txt,Oculus-2013.srt.txt,The-Perfection-2019.srt.txt,Prometheus-2012.srt.txt,Stir-of-Echoes-1999.srt.txt,You're-Next-2011.srt,Saw-III-2006.srt,Seven-1995.srt.txt,The-Midnight-Meat-Train-2008.srt.txt,Veronica-2017.srt.txt,Shaun-of-the-Dead-2004.srt.txt,28-Days-Later-2002.srt.txt,Flatliners-1990.srt.txt,The-Rite-2011.srt.txt,Unsane-2018.srt.txt,Crimson-Peak-2015.srt.txt,VHS2-2013.srt,Train-to-Busan-2016.srt.txt,Saw-2004.srt.txt,I-Know-What-You-Did-Last-Summer-1997.srt.txt,The-House-with-a-Clock-in-Its-Walls-2018.srt,Devil's-Pass-2013.srt,Noroi-The-Curse-2005.srt.txt,The-Amityville-Horror-1979.srt.txt,Clown-2014.srt.txt,The-House-of-the-Devil-2009.srt.txt,Zodiac-2007.srt.txt,Slither-2006.srt.txt,Life-2017.srt.txt,Cujo-1983.srt.txt,Happy-Death-Day-2017.srt.txt,Annihilation-2018.srt.txt,Backcountry-2014.srt.txt,Kill-List-2011.srt.txt,Hostel-2005.srt.txt,Odd-Thomas-2013.srt.txt,Thesis-1996.srt.txt,VHS-2012.srt,The-Tunnel-2011.srt.txt,Bram-Stoker8217s-Dracula-1992.srt,Little-Evil-2017.srt.txt,Marrowbone-2017.srt.txt,Drag-Me-To-Hell-2009.srt.txt,Chernobyl-Diaries-2012.srt.txt,The-Fly-1986.srt.txt,Re-Animator-1985.srt.txt,The-Last-Exorcism-2010.srt.txt,Friday-the-13th-1980.srt,They-Look-Like-People-2015.srt.txt,Predator-1987.srt.txt,A-Ghost-Story-2017.srt.txt,Cube-1997.srt.txt,Amnesiac-2015.srt.txt,The-Belko-Experiment-2016.srt.txt,Suspiria-1977.srt.txt,The-Call-2013.srt.txt,The-Cabin-In-The-Woods-2012.srt.txt,Pontypool-2008.srt.txt,Fear-Street-Part-1-1994-2021.srt.txt,Fear-Street-Part-2-1994-2021.srt.txt,Fear-Street-Part-3-1666-2021.srt.txt,Sputnik-2020.srt.txt,Van-Helsing-2004.srt,Run-2020.srt.txt,Ghost-Lab-2021.srt,The-Suicide-Squad-2021.srt,The-Legend-of-Hell-House-1973.srt,Saw-3D-2010.srt,Spiral-From-the-Book-of-Saw-2021.srt,Housebound-2014.srt,Cry-Wolf-2005.srt,Jaws-The-Revenge-1987.srt,Jaws-3-D-1983.srt,Jaws-2-1978.srt,The-Happiness-of-the-Katakuris-2001.srt,Livid-2011.srt,The-Perfume-of-the-Lady-in-Black-1974.srt,Censor-2021.srt,Gantz-Perfect-Answer-2011.srt,Gantz-2010.srt,The-Mummy-1999.srt,Paperhouse-1988.srt,Caveat-2021.srt,Willys-Wonderland-2021.srt,Escape-from-Tomorrow-2013.srt,Murder-Death-Koreatown-2020.srt,The-Lost-Boys-The-Tribe-2008.srt,Lost-Boys-The-Thirst-2010.srt";
  var movielist = files.split(",");
  var jumpscares = [];
  var watching = false;

  if (window.matchMedia('(prefers-color-scheme: dark)')) {
    chrome.browserAction.setIcon({
        path: 'assets/logo-dark.png'
    });
  } else {
    chrome.browserAction.setIcon({
        path: 'assets/logo-light.png'
    });
  }

  chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({warning: true, skip:false, mute:false, warningtime:5, skipbefore:5, skipafter:5});
  });

  function checkWatching(tabid) {
    var flag = false;
    chrome.windows.getAll({populate:true},function(windows){
      windows.forEach(function(window){
        window.tabs.forEach(function(tab){
          if (tab.url.includes("netflix.com/watch")) {
            flag = true;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {type: "watching-now"});
            });
            watching = true;
          }
        });
      });
    });
    if (!flag) {
      watching = false;
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "watching-stop"});
      });
    }
  }

  chrome.tabs.onRemoved.addListener(function(tabid, removed) {
    checkWatching(tabid);
  });

  chrome.tabs.onUpdated.addListener(function(tabid, changeInfo){
    if (changeInfo.status && changeInfo.status == "complete") {
      checkWatching(tabid);
    }
  })

  chrome.tabs.onCreated.addListener(function(tabid){
    checkWatching(tabid);
  });

  function findMatch(title){
    var matches = [];
    movielist.forEach(function(movie, index){
      var movietitle = movie.replace(".srt.txt", "");
      movietitle = movietitle.replace(".srt", "");
      movietitle = movietitle.replace(/-/g, " ");
      title = title.replace(/:/g, "");
      title = title.replace(/\./g, "");
      if (movietitle.toLowerCase() == title.toLowerCase()) {
        matches.push(movie);
      } else if (movietitle.toLowerCase().slice(0, -5) == title.toLowerCase()) {
        matches.push(movie)
      }
    });
    return matches;
  }

  function getFile(file) {
    $.ajax({
      url: "movies/"+file,
      async: false
    }).done(function(data){
      data.split("\n").forEach(function(line){
        if (line.includes("-->")) {
          var time = line.split("-->")[1];
          time = time.split(",")[0];
          time = time.replace(" ", "");
          time = time.split(":");
          time = (+parseFloat(time[0])) * 60 * 60 + (+parseFloat(time[1])) * 60 + (+parseFloat(time[2]));
          jumpscares.push({time:time, type:"major"});
        } else if (line.includes("Major")) {
          jumpscares[jumpscares.length-1].type = "major"
        } else if (line.includes("Minor")) {
          jumpscares[jumpscares.length-1].type = "minor"
        }
      });
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "jumpscare-list", file:file, jumpscares:jumpscares});
      });
    })
  }

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "find-jumpscares") {
      watching = true;
      const moviematch = findMatch(request.title);
      if (moviematch.length > 1) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {type: "multiple-movies", movies:moviematch});
        });
      } else {
        getFile(moviematch[0])
      }
    } else if (request.type == "update-values") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "update-values"});
      });
    } else if (request.type == "get-jumpscares") {
      getFile(request.title);
    } else if (request.type == "is-watching") {
      sendResponse({watching:watching});
    }
  });
});
