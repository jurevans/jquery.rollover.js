/**
  * =====================================================================
  * Copyright (C) 2008 Justin Evans
  *
  * The JavaScript code in this page is free software: you can
  * redistribute it and/or modify it under the terms of the GNU
  * General Public License (GNU GPL) as published by the Free Software
  * Foundation, either version 3 of the License, or (at your option)
  * any later version.  The code is distributed WITHOUT ANY WARRANTY;
  * without even the implied warranty of MERCHANTABILITY or FITNESS
  * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

  * As additional permission under GNU GPL version 3 section 7, you
  * may distribute non-source (e.g., minimized or compacted) forms of
  * that code without the copy of the GNU GPL normally required by
  * section 4, provided you include this license notice and a URL
  * through which recipients can access the Corresponding Source.
  * =====================================================================
  */

// lib/jquery.rollover.js

// Extends the functionality of Cufon.js to generate rollover
// states using class selectors

// jQuery Plugin to work with SVG/VML rendered link rollovers
// Generates rollover states for <canvas> and VML rendered text
// Requires http://cufon.shoqolate.com/js/cufon-yui.js

;(function($) {
	
	var config = {
		defaultClass	: 	'default',
		hoverClass	:	'hover',
		active		:	'active'
	};
	
	$.fn.extend({
    		rollover: function(font) {
			return $(this).each(function () {
				var lnkText = $(this).text();
				
				$this = $(this);
				if( !$this.data('initialized') ) {
					$this.data('initialized', true);  
					$this.html('')
						.append($('<span />').addClass(config.defaultClass).html(lnkText).removeClass(' hidden'))
						.append($('<span />').addClass(config.hoverClass).html(lnkText).addClass(' hidden'))
						.hover(
							function(){
								$(this).find('span.' + config.defaultClass).addClass(' hidden');
								$(this).find('span.' + config.hoverClass).removeClass(' hidden');
							},
							function(){
								$(this).find('span.' + config.defaultClass).removeClass(' hidden');
								$(this).find('span.' + config.hoverClass).addClass(' hidden');
							}
						);
					Cufon.replace($this, { fontFamily : font});
				}
			});
			
    		}
		
	});
	
})(jQuery);
