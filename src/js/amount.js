"use strict"
var s = document.forms.amount,
    d = s.querySelectorAll('input[type="checkbox"]:not([value]), input[type="checkbox"][value=""]');
  for (var i = 0; i < d.length; i++) 
    d[i].disabled = true;
  $(document).ready(function() {
    TweenMax.to( $('#arrow'), 1, {rotation:15, transformOrigin:"right center"});
  });

$('input[type="checkbox"]').click(function(){
      if( $(this).is(':checked') ) {
	      s.onchange = function() { 
		      var n = s.querySelectorAll('[type="checkbox"]'),
			itog = 0;
		      for(var j=0; j<n.length; j++)
			n[j].checked ? itog += parseFloat(n[j].value) : itog;
		      document.getElementById('Counter').innerHTML =  itog;
		      TweenMax.to( $('#arrow'), 1, {rotation:itog*1.5, transformOrigin:"right center"});
			}
	} else {
		s.onchange = function() {
			var n = s.querySelectorAll('[type="checkbox"]'),
			  itog = 0;
			for(var j=0; j<n.length; j++)
			n[j].checked ? itog += parseFloat(n[j].value) : itog;
			document.getElementById('Counter').innerHTML =  itog ;
			TweenMax.to( $('#arrow'), 1, {rotation:itog*1.5, transformOrigin:"right center"});
			}
		}
	});