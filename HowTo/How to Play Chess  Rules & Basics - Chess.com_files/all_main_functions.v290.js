var BODY_EL = document.getElementsByTagName('body')[0];
function addToOnLoad (fn) {
  var prevonload = window.onload;
  if (typeof prevonload != 'function') {
    window.onload = fn;
  } else {
    window.onload = function() {
      if (prevonload) {
        prevonload.call(window, []);
      }
      fn.call(window, []);
    }
  }
};
var domReady = {
  queue : [],
  fired : false,

  add : function (fn) {
    if (domReady.fired) fn.call(window, []);
    else domReady.queue.push(fn);
  },

  exec : function () {
    var fn = null;
    while (fn = domReady.queue.shift()) {
      fn.call(window, []);
    }
    domReady.fired = true;
  },

  check : function () {
    if (domReady.fired) return;

    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", domReady.exec, false);
    }

    var ua = navigator.userAgent.toLowerCase();
    if (/webkit/.test(ua)) {
      if (document.readyState == "loaded" || document.readyState == "complete") {
        if (domReady.numStyles === undefined) {
          domReady.numStyles = 0;
          var links = document.getElementsByTagName("link");
          for (var i=0; i < links.length; i++) {
            if(links[i].getAttribute('rel') == 'stylesheet') {
              domReady.numStyles++;
            }
          }
          var styles = document.getElementsByTagName("style");
          domReady.numStyles += styles.length;
        }
        if (document.styleSheets.length == domReady.numStyles) {
          domReady.exec();
          return;
        }
      }
    } else if (/msie/.test(ua) && window == top) {
      (function () {
        if (domReady.fired) return;
        try {
          document.documentElement.doScroll("left");
        } catch(error) {
          setTimeout(arguments.callee, 0);
          return;
        }
        domReady.exec();
      })();
    }
  }
}
setTimeout(domReady.check, 10);
addToOnLoad(domReady.exec);

// test the onload vs domReady timing
// var start = (new Date()).getTime();
// addToOnLoad(function () { log.push(((new Date()).getTime() - start) +' addToOnLoad'); } );
// domReady.add(function () { log.push(((new Date()).getTime() - start) +' domReady'); } );
// var log = [((new Date()).getTime() - start) +' immediate'];
// addToOnLoad(function () { alert(log.join("\n")); } );

var Menus = {
  initialize : function(tabsElement) {
    if (document.all&&document.getElementById) {
      navRoot = tabsElement ? tabsElement : document.getElementById("tabs");
    if (navRoot.childNodes)
      for (i=0; i<navRoot.childNodes.length; i++) {
      node = navRoot.childNodes[i];
      if (node.nodeName=="LI") {
        node.onmouseover=function() {
        this.className+=" over";
        }
        node.onmouseout=function() {
          this.className=this.className.replace(" over", "");
        }
      }
      }
    }
  }
}
if (document.getElementById("tabs")) {
  Menus.initialize();
} else {
  domReady.add(Menus.initialize);
}

function checkForEnter(inField, e) {
  var charCode;

  if(e && e.which) {
    charCode = e.which;
  } else if(window.event){
    e = window.event;
    charCode = e.keyCode;
  }

  if(charCode == 13) {
    return true;
  }
  return false;
}

function doSearch() {
  document.location.href='/search.html?q=' + document.getElementById('global_search_q').value;
  return false;
}

function hideshow(szDivID, iState) // 1 visible, 0 hidden
{
   var obj = document.layers ? document.layers[szDivID] :
   document.getElementById ?  document.getElementById(szDivID).style :
   document.all[szDivID].style;
   obj.visibility = document.layers ? (iState ? "show" : "hide") : (iState ? "visible" : "hidden");
   if(iState == 2) {
     obj.display = 'inline';
   } else if(iState == 1) {
     obj.display = 'block';
   } else {
     obj.display = 'none';
   }
}


function deleteValidate(objForm, message, url) {
  if(confirm(message)) {
    document.location.href=url;
  }
}

function confirmDelete(message, url) {
  if(confirm(message)) {
    document.location.href=url;
  }
}

function newWindow(a_str_windowURL, a_str_windowName, a_int_windowWidth, a_int_windowHeight, a_bool_scrollbars, a_bool_resizable, a_bool_menubar, a_bool_toolbar, a_bool_addressbar, a_bool_statusbar, a_bool_fullscreen) {
  var int_windowLeft = (screen.width - a_int_windowWidth) / 2;
  var int_windowTop = (screen.height - a_int_windowHeight) / 2;
  var str_windowProperties = 'height=' + a_int_windowHeight + ',width=' + a_int_windowWidth + ',top=' + int_windowTop + ',left=' + int_windowLeft + ',scrollbars=' + a_bool_scrollbars + ',resizable=' + a_bool_resizable + ',menubar=' + a_bool_menubar + ',toolbar=' + a_bool_toolbar + ',location=' + a_bool_addressbar + ',statusbar=' + a_bool_statusbar + ',fullscreen=' + a_bool_fullscreen + '';
  var obj_window = window.open(a_str_windowURL, a_str_windowName, str_windowProperties)
    if (parseInt(navigator.appVersion) >= 4) {
      obj_window.window.focus();
    }
}

function popEmailWindow() {
  newWindow('/home/read_email.html','Chesscom_ReadEmail',1000,800,0,1,0,0,0,0,0);
}

var fixAdFixed = false;
var fixAd = function () {
  if (fixAdFixed) return;
  try {//alert('fixing (was fixed? '+ fixAdFixed +')');
    var elObject = document.getElementById('main').getElementsByTagName('object')[0];
    if (elObject) {
      if (elObject.outerHTML) { // IE doesn't like replacing innerHTML, and gums up FlashVars with outerHTML
        if(elObject.data) {
          elObject.removeAttribute('data');
        }
        var strFlashVars, blnWmodePresent;
        var elsParam = elObject.getElementsByTagName("param");
        for (var xx=0, elParam=null; elParam = elsParam[xx]; xx++) {
          if(elParam.name.toLowerCase() == 'flashvars'){
            strFlashVars = elParam.value;
          }
          if(elParam.name.toLowerCase() == 'wmode'){
            blnWmodePresent = true;
          }
        }
        if (strFlashVars) {
          var strOuterHTML = elObject.outerHTML.replace(/<param[^>]*name="FlashVars"[^>]*>/ig, "<param name='FlashVars' value='" + strFlashVars + "'>");
        } else {
          var strOuterHTML = elObject.outerHTML;
        }
        if (blnWmodePresent) {
          strOuterHTML = strOuterHTML.replace(/<param[^>]*name="WMode"[^>]*>/ig, "<PARAM NAME='WMode' VALUE='Transparent'>");
        } else {
          strOuterHTML = strOuterHTML.replace(/<\/object>/i, '<PARAM NAME="WMode" VALUE="Transparent"><\/OBJECT>');
        }
        strOuterHTML = strOuterHTML.replace(/<embed[^>]+>/,'');
        elObject.outerHTML = strOuterHTML;
      } else {
        var newHTML = elObject.innerHTML;
        if (
            /param\s+name="wmode"\s+value="transparent"/i.test(newHTML)
          ||
            /param\s+value="transparent"\s+name="wmode"/i.test(newHTML)
        ) {
          fixAdFixed = true;
          return;  // our work is done here
        }
        newHTML = newHTML.replace(/(<embed.*?")(\s*\/?>)/i, '<param name="wmode" value="transparent"/>$1 wmode="transparent"$2');
        elObject.innerHTML = newHTML;
      }
    }
    fixAdFixed = true;
  } catch (err) {
    fixAdFixed = true;
  }
}
// no longer used, and interfering with video playback:
// domReady.add( function () {
//     var el = document.getElementById('navborder');
//     if (el) el.onmouseover = fixAd;
//   });



var adReport = {
  init : function () {
    var divs = document.getElementsByTagName('div');
    for (var x=0, div=null; div=divs[x]; x++) {
      if ( /\badmeta\b/.test(div.className) ) {
        var trg = div.getElementsByTagName('span');
        if (trg.length == 1) {
          adReport.addReportLink(trg[0], x);
        }
      }
    }
  },

  addReportLink : function (el, uniq) {
    if (el.parentNode.parentNode.id) {
      var host_id = el.parentNode.parentNode.id;
    } else {
      var host_id = 'ad_report_host_no'+ uniq;
      el.parentNode.parentNode.id = host_id;
    }
    var self_id = 'ad_report_self_no'+ uniq;
    el.innerHTML += ' &nbsp; | &nbsp; <a id="'+ self_id +'" href="javascript:/* report the ad */" onclick="adReport.submitReport(this, \''+ host_id +'\');">Report</a>';
  },


  submitReport : function (el, host_id) {
    var ad = document.getElementById(host_id);
    var currentHTML = ad.innerHTML;

    var pageLocation = [];
    var ad_ancestor = ad;
    while ( ad_ancestor = ad_ancestor.parentNode ) {
      pageLocation.push(ad_ancestor);
    }

    for (var node = 0; node<pageLocation.length; node++) {
      if (pageLocation[node].id) {
        pageLocation[node] = pageLocation[node].nodeName.toLowerCase() +'#'+ pageLocation[node].id;
      } else if (pageLocation[node].className) {
        pageLocation[node] = pageLocation[node].nodeName.toLowerCase() +'.'+ pageLocation[node].className.replace(/\s+/, '.');
      } else {
        pageLocation[node] = pageLocation[node].nodeName.toLowerCase();
      }
    }
    var comment = false;
    if (null !== (comment = prompt('Would you like to add a comment?\n\nPlease let us know what product the ad is for, and why you are reporting the ad.', ''))) {
      var msg = document.createElement('em');
      msg.innerHTML = 'reporting...';
      msg.id = el.id;
      el.parentNode.replaceChild(msg, el);

      var post_data = [];
      var post_obj = {
          page:location.href,
          client_time:new Date(),
          comment:comment,
          node_path:pageLocation.reverse().join(' > '),
          html:currentHTML
        };
      for (var key in post_obj) {
        post_data.push(key +'='+ escape(post_obj[key]));
      }
      var params = post_data.join('&');

      var request = null;
      try {
        request = new XMLHttpRequest();
      } catch (ex) {
        try {
          request = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (ex) {
          try {
            request = new ActiveXObject('Microsoft.XMLHTTP');
          } catch (ex) {
            request = null;
          }
        }
      }

      if (request == null) return null;

      request.onreadystatechange = function (el, ad) {
        return function() {
          switch (request.readyState) {
            case 4:
              adReport.reportSuccess(el, ad);
              break;
          }
        };
      }(msg, ad);

      request.open("POST", '/api/report_ad', true);
      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      request.setRequestHeader("Content-length", params.length);
      request.setRequestHeader("Connection", "close");
      request.send(params);
    } else {
      alert('OK. No report submitted.');
    }
  },

  reportSuccess : function (el, ad) {
    el.innerHTML = '<strong style="color:#c44;">Ad flagged.</strong>';
    window['timer'+ ad.id] = setInterval(
        function (ad) {
          var op = 240;
          return function () {
            op -= 4;
            if (op < 100) {
              ad.style.opacity = op / 100;
              ad.style.MozOpacity = op / 100;
              ad.style.KHTMLOpacity = op / 100;
              if (ad.filters && !ad.filters.alpha) // if this hasn't been declared yet as a style, it's not a filter object
                ad.style.filter += ' alpha(opacity='+ op +')'; // append to prevent overwriting previous filters
              if (ad.filters && ad.filters.length && ad.filters.alpha)
                ad.filters.alpha.opacity = op;
            }
            if (op <= 0) {
              ad.style.visibility = 'hidden';
              clearInterval(window['timer'+ ad.id]);
            }
          }
        }(ad),
        10
      );
  },

  complete : true
}
domReady.add(adReport.init);


var bugReport = {
  submitReport : function ( name, msg ) {
    var submitter = name ? name : 'unknown-submission';
    var error_message = msg ? msg : '';
    var form_data = [];
    var apparent_session_id = '';
    var apparent_formstate = '';
    var form_data = [];
    for (var i=0, form; form = document.forms[i]; i++) {
      var form_hash = {};
      for (var x=0, el; el = form.elements[x]; x++) {
        if (! el.name) continue;
        switch (el.type) {
          case 'text' :
          case 'password' :
          case 'textarea' :
          case 'hidden' :
            form_hash[el.name] = el.value;
            break;

          case 'radio' :
          case 'checkbox' :
            if (el.checked) {
              form_hash[el.name] = el.value;
            }
            break;

          case 'select' :
            form_hash[el.name] = el.options[el.selectedIndex].value;
        }
      }
      form_hash.action = form.action;

      form_hash_array = [];
      for (var prop in form_hash) {
        form_hash_array.push('"'+ prop.replace('"', '\\"') +'":"'+ form_hash[prop].replace('"', '\\"') +'"');
      }
      form_data.push('{'+ form_hash_array.join(',') +'}');
      if (form.elements['Qform__FormState']) apparent_formstate = form.elements['Qform__FormState'].value;
    }

    try {
      var parent_same_domain = (parent.document.location) ? true : false;
    } catch (ex) {
      var parent_same_domain = false;
    }

    bugReport.postReport({
        submitter:submitter,
        error_message:error_message,
        page:location.href,
        client_time:(new Date()).toUTCString(),
        html:document.getElementsByTagName('html')[0].innerHTML,
        cookies:document.cookie,
        forms:'['+ form_data.join(',') +']',
        self_is_top:(self == top),
        parent_same_domain:parent_same_domain,
        apparent_session_id:apparent_session_id,
        apparent_formstate:apparent_formstate
      });
  },

  postReport : function ( post_obj ) {
    var request = null;
    try {
      request = new XMLHttpRequest();
    } catch (ex) {
      try {
        request = new ActiveXObject('Msxml2.XMLHTTP');
      } catch (ex) {
        try {
          request = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (ex) {
          request = null;
        }
      }
    }

    if (request == null) return null;

    var post_data = [];
    for (var key in post_obj) {
      post_data.push(key +'='+ escape(post_obj[key]));
    }
    var params = post_data.join('&');

// use for debugging:
//       request.onreadystatechange = function() {
//           switch (request.readyState) {
//             case 4:
//               alert(request.responseText);
//               break;
//           }
//         };

    request.open("POST", '/api/remote_error_logger', true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader("Content-length", params.length);
    request.setRequestHeader("Connection", "close");
    request.send(params);
  },

  complete : true
}


/* js
 * class for calling member popup information api
 */
popUpInfo = {
  popUpDiv : null,
  eCoordinates : null,
  lastUser : null,
  inObject : false,

  init : function() {
    var as;
    if (document.getElementsByClassName) {
      as = document.getElementsByClassName('popUpMemberInfo');
      for (var n=0; n < as.length; n++) {
        as[n].onmouseover = popUpInfo.showInfo;
        as[n].onmouseout = popUpInfo.hideInfo;
      }
    }
    else {
      as = document.getElementsByTagName('a');
      for (var n=0; n < as.length; n++) {
        if (as[n].className.indexOf('popUpMemberInfo') != -1) {
          as[n].onmouseover = popUpInfo.showInfo;
          as[n].onmouseout = popUpInfo.hideInfo;
        }
      }
    }
  },

  showInfo : function(e) {
    if (!e)
      e = window.event;
    var pos = {
          x: e.pageX || (e.clientX +
              (document.documentElement.scrollLeft || document.body.scrollLeft)),
          y: e.pageY || (e.clientY +
            (document.documentElement.scrollTop || document.body.scrollTop))
        };

    var target = e.target ? e.target : e.srcElement;
    if (target.nodeType == 3)
      target = target.parentNode;

    var username = target.firstChild.data;

    popUpInfo.inObject = true;

    if (!popUpInfo.popUpDiv) {
      popUpInfo.popUpDiv = document.createElement('div');
      popUpInfo.popUpDiv.style.display = 'none';
      popUpInfo.popUpDiv.style.position = 'absolute';
      popUpInfo.popUpDiv.style.margin = '14px;';
      popUpInfo.popUpDiv.style.padding = '2px;';
      popUpInfo.popUpDiv.style.width = '455px';
      popUpInfo.popUpDiv.style.height = '95px';
      popUpInfo.popUpDiv.style.fontSize = '0.8em';
      popUpInfo.popUpDiv.style.lineHeight = '20px';
      popUpInfo.popUpDiv.style.border = '2px solid #535353';
      popUpInfo.popUpDiv.style.zIndex = '1000';
      popUpInfo.popUpDiv.style.background = '#FFFFCC';
      popUpInfo.popUpDiv.style.color = '#222222';
      popUpInfo.popUpDiv.onmouseout = popUpInfo.hideInfo;
      BODY_EL.appendChild(popUpInfo.popUpDiv);
    }

    if (popUpInfo.lastUser != username)
      popUpInfo.popUpDiv.innerHTML = '<img src="/assets/images/spinner_14.gif" style="display: block; margin: 31px auto;" />';

    popUpInfo.popUpDiv.style.top = (pos.y +7) + 'px';
    popUpInfo.popUpDiv.style.left = (pos.x +7) + 'px';
    popUpInfo.popUpDiv.style.display = 'block';

    popUpInfo.eCoordinates = pos;
    document.onmousemove = popUpInfo.updateCoordinates;

    if (popUpInfo.lastUser != username) {
      var xmlhttplocal;
      try {
        xmlhttplocal = new ActiveXObject("Msxml2.XMLHTTP")
      }
      catch (e) {
        try {
          xmlhttplocal = new ActiveXObject("Microsoft.XMLHTTP")
        }
        catch (E) {
          xmlhttplocal = false;
        }
      }

      if (!xmlhttplocal && typeof XMLHttpRequest != 'undefined') {
        try {
          var xmlhttplocal = new XMLHttpRequest();
        }
        catch (e) {
          var xmlhttplocal = false;
          alert('couldn\'t create xmlhttp object');
        }
      }

      xmlhttplocal.open('GET', '/api/get_user_info?username=' + username, true);
      xmlhttplocal.onreadystatechange = function(){
        if (xmlhttplocal.readyState == 4) {
          if (xmlhttplocal.status == 200) {
            var params = xmlhttplocal.responseText.split('|');
            var msg = params[0].split('+');
            if (params[0] == 'Success+') {
              var temp = '';
              var imagesPath = (typeof(Config) != 'undefined') ? Config['domain.avatars'] : '';
              if (params[13] == '1')
                temp += '<img height="70" width="70" style="margin: 12px 5px 12px 12px; float: left;" alt="" src="'+imagesPath+'/images_users/avatars/'+params[3]+'.gif"/>';
              temp += '<div style="float: left; padding: 8px; line-height: "> ';
              temp += '<a href="/members/titled_players.html" class="titlelink">' + params[2] + '</a> ';
              temp += '<strong><a href="/members/view/' + params[3] + '" class="' + params[4] + '">' + params[3] + '</a></strong> ';
              temp += '<img src="' + params[6] + '" title="' + params[5] + '" width="16" /><br />';

              temp += '<strong>Last Online:</strong> ' + params[7] + '<br />';
              temp += '<strong>Rating: </strong>' + params[8] + ' (' + params[9] + ')<br />';
              temp += '<strong>Current Games: </strong>' + params[10] + ' (' + params[11] + ' timeouts)<br />';
              temp += '</div>';
              temp += '<div style="float: right; padding: 8px;">';
              temp += '<ul style="margin: 0; padding: 0; list-style: none;">';

              if (params[12] == '1')
                temp += '<li><a href="/explorer/?player=' + params[3] + '" class="ctype cgames">Explore Games</a></li>';
              else
                temp += '<li><a href="/home/add_friend.html?id=' + params[1] + '" class="baddfriend">Add to Friends List</a></li>';
              temp += '<li><a href="/echess/create_game.html?uid=' + params[1] + '" class="bclng2">Challenge to Play</a></li>';
              temp += '<li><a href="/home/send_message.html?id=' + params[1] + '" class="bnewmessage">Send a Message</a></li>';
              temp += '<li><a href="/award_trophy.html?user=' + params[3] + '&type=social&return_url=%2Fmembers%2Fview%2F'+params[3]+'" class="ctype ctrophygive">Give a Trophy</a></li>';
              temp += '</ul>';
              temp += '</div>';

              popUpInfo.lastUser = params[3];
              popUpInfo.popUpDiv.innerHTML = temp;
            }
            else {
              popUpInfo.popUpDiv.innerHTML = '<p style="padding: 2px"><strong>Error</strong>: ' + msg[1] + '</p>';
            }
          }
          else {
            popUpInfo.popUpDiv.innerHTML = '<p style="padding: 2px"><strong>HTTP Error</strong>: (' + xmlhttplocal.status + ')</p>';
          }
        }
      };
      xmlhttplocal.send(null);
    }
  },

  updateCoordinates : function(e) {
    if (!e)
      e = window.event;
    popUpInfo.eCoordinates = {
          x: e.pageX || (e.clientX +
              (document.documentElement.scrollLeft || document.body.scrollLeft)),
          y: e.pageY || (e.clientY +
            (document.documentElement.scrollTop || document.body.scrollTop))
        };
  },

  hideInfo : function(e) {
    popUpInfo.inObject = false;
    setTimeout(popUpInfo.checkHideInfo, 300);
  },

  checkHideInfo : function() {
    var pos = popUpInfo.eCoordinates;

    if (popUpInfo.popUpDiv && !popUpInfo.inObject) {

      var top = parseInt(popUpInfo.popUpDiv.style.top);
      var left = parseInt(popUpInfo.popUpDiv.style.left);
      var bottom = top + parseInt(popUpInfo.popUpDiv.style.height);
      var right = left + parseInt(popUpInfo.popUpDiv.style.width);

      if ((pos.x < left || pos.x > right) || (pos.y < top || pos.y > bottom)) {
        document.onmousemove = null;
        popUpInfo.popUpDiv.style.display = 'none';
      }

    }
  }
};

addToOnLoad(popUpInfo.init);
