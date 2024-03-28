var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
* Copyright (C) 2009 Joel Sutherland
* Licenced under the MIT license
* http://www.newmediacampaigns.com/page/jquery-flickr-plugin
*
* Available tags for templates:
* title, link, date_taken, description, published, author, author_id, tags, image*
*/
(function($) {
	$.fn.jflickrfeed = function(settings, callback) {
		settings = $.extend(true, {
			flickrbase: 'https://web.archive.org/web/20180801101024/http://api.flickr.com/services/feeds/',
			feedapi: 'photos_public.gne',
			limit: 20,
			qstrings: {
				lang: 'en-us',
				format: 'json',
				jsoncallback: '?'
			},
			cleanDescription: true,
			useTemplate: true,
			itemTemplate: '',
			itemCallback: function(){}
		}, settings);

		var url = settings.flickrbase + settings.feedapi + '?';
		var first = true;

		for(var key in settings.qstrings){
			if(!first)
				url += '&';
			url += key + '=' + settings.qstrings[key];
			first = false;
		}

		return $(this).each(function(){
			var $container = $(this);
			var container = this;
			$.getJSON(url, function(data){
				$.each(data.items, function(i,item){
					if(i < settings.limit){
					
						// Clean out the Flickr Description
						if(settings.cleanDescription){
							var regex = /<p>(.*?)<\/p>/g;
							var input = item.description;
							if(regex.test(input)) {
								item.description = input.match(regex)[2]
								if(item.description!=undefined)
									item.description = item.description.replace('<p>','').replace('</p>','');
							}
						}
						
						// Add Image Sizes
						// http://www.flickr.com/services/api/misc.urls.html
						item['image_s'] = item.media.m.replace('_m', '_s');
						item['image_t'] = item.media.m.replace('_m', '_t');
						item['image_m'] = item.media.m.replace('_m', '_m');
						item['image'] = item.media.m.replace('_m', '');
						item['image_b'] = item.media.m.replace('_m', '_b');
						delete item.media;
						
						// Use Template
						if(settings.useTemplate){
							var template = settings.itemTemplate;
							for(var key in item){
								var rgx = new RegExp('{{' + key + '}}', 'g');
								template = template.replace(rgx, item[key]);
							}
							$container.append(template)
						}
						
						//itemCallback
						settings.itemCallback.call(container, item);
					}
				});
				if($.isFunction(callback)){
					callback.call(container, data);
				}
			});
		});
	}
})(jQuery);

}
/*
     FILE ARCHIVED ON 10:10:24 Aug 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:46:59 Mar 28, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.586
  exclusion.robots: 0.061
  exclusion.robots.policy: 0.054
  cdx.remote: 0.045
  esindex: 0.005
  LoadShardBlock: 243.489 (3)
  PetaboxLoader3.resolve: 555.052 (3)
  PetaboxLoader3.datanode: 316.62 (5)
  load_resource: 825.115 (2)
*/