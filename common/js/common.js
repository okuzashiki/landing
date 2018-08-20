;(function(k,m,n,d,f){var b=k("<div>")[0],h=/url\(["']?(.*?)["']?\)/,l=[],j={top:0,left:0,bottom:1,right:1,center:0.5};if("backgroundSize"in b.style&&!k.debugBGS){return}k.cssHooks.backgroundSize={set:function(q,s){var u=!k.data(q,"bgsImg"),t,r,p;k.data(q,"bgsValue",s);if(u){l.push(q);k.refreshBackgroundDimensions(q,true);r=k("<div>").css({position:"absolute",zIndex:-1,top:0,right:0,left:0,bottom:0,overflow:"hidden"});p=k("<img>").css({position:"absolute"}).appendTo(r),r.prependTo(q);k.data(q,"bgsImg",p[0]);t=(k.css(q,"backgroundPosition")||k.css(q,"backgroundPositionX")+" "+k.css(q,"backgroundPositionY")).split(" ");k.data(q,"bgsPos",[j[t[0]]||parseFloat(t[0])/100,j[t[1]]||parseFloat(t[1])/100]);k.css(q,"zIndex")=="auto"&&(q.style.zIndex=0);k.css(q,"position")=="static"&&(q.style.position="relative");k.refreshBackgroundImage(q)}else{k.refreshBackground(q)}},get:function(p){return k.data(p,"bgsValue")||""}};k.cssHooks.backgroundImage={set:function(p,q){return k.data(p,"bgsImg")?k.refreshBackgroundImage(p,q):q}};k.refreshBackgroundDimensions=function(s,q){var p=k(s),r={width:p.innerWidth(),height:p.innerHeight()},u=k.data(s,"bgsDim"),t=!u||r.width!=u.width||r.height!=u.height;k.data(s,"bgsDim",r);if(t&&!q){k.refreshBackground(s)}};k.refreshBackgroundImage=function(t,u){var r=k.data(t,"bgsImg"),s=(h.exec(u||k.css(t,"backgroundImage"))||[])[1],w=r&&r.src,v=s!=w,q,p;if(v){r.style.height=r.style.width="auto";r.onload=function(){var x={width:r.width,height:r.height};if(x.width==1&&x.height==1){return}k.data(t,"bgsImgDim",x);k.data(t,"bgsConstrain",false);k.refreshBackground(t);r.style.visibility="visible";r.onload=null};r.style.visibility="hidden";r.src=s;if(r.readyState||r.complete){r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";r.src=s}t.style.backgroundImage="none"}};k.refreshBackground=function(r){var x=k.data(r,"bgsValue"),s=k.data(r,"bgsDim"),t=k.data(r,"bgsImgDim"),p=k(k.data(r,"bgsImg")),w=k.data(r,"bgsPos"),u=k.data(r,"bgsConstrain"),v,z=s.width/s.height,q=t.width/t.height,y;if(x=="contain"){if(q>z){k.data(r,"bgsConstrain",(v="width"));y=d.floor((s.height-s.width/q)*w[1]);p.css({top:y});if(v!=u){p.css({width:"100%",height:"auto",left:0})}}else{k.data(r,"bgsConstrain",(v="height"));y=d.floor((s.width-s.height*q)*w[0]);p.css({left:y});if(v!=u){p.css({height:"100%",width:"auto",top:0})}}}else{if(x=="cover"){if(q>z){k.data(r,"bgsConstrain",(v="height"));y=d.floor((s.height*q-s.width)*w[0]);p.css({left:-y});if(v!=u){p.css({height:"100%",width:"auto",top:0})}}else{k.data(r,"bgsConstrain",(v="width"));y=d.floor((s.width/q-s.height)*w[1]);p.css({top:-y});if(v!=u){p.css({width:"100%",height:"auto",left:0})}}}}};var a=k.event,c,g={_:0},e=0,i,o;c=a.special.throttledresize={setup:function(){k(this).on("resize",c.handler)},teardown:function(){k(this).off("resize",c.handler)},handler:function(s,p){var r=this,q=arguments;i=true;if(!o){k(g).animate(g,{duration:Infinity,step:function(){e++;if(e>c.threshold&&i||p){s.type="throttledresize";a.dispatch.apply(r,q);i=false;e=0}if(e>9){k(g).stop();o=false;e=0}}});o=true}},threshold:1};k(m).on("throttledresize",function(){k(l).each(function(){k.refreshBackgroundDimensions(this)})})})(jQuery,window,document,Math);;(function(a){a.fn.extend({customSelect:function(c){if(typeof document.body.style.maxHeight==="undefined"){return this}var e={customClass:"customSelect",mapClass:true,mapStyle:true},c=a.extend(e,c),d=c.customClass,f=function(h,k){var g=h.find(":selected"),j=k.children(":first"),i=g.html()||"&nbsp;";j.html(i);if(g.attr("disabled")){k.addClass(b("DisabledOption"))}else{k.removeClass(b("DisabledOption"))}setTimeout(function(){k.removeClass(b("Open"));a(document).off("mouseup.customSelect")},60)},b=function(g){return d+g};return this.each(function(){var g=a(this),i=a("<span />").addClass(b("Inner")),h=a("<span />");g.after(h.append(i));h.addClass(d);if(c.mapClass){h.addClass(g.attr("class"))}if(c.mapStyle){h.attr("style",g.attr("style"))}g.addClass("hasCustomSelect").on("render.customSelect",function(){f(g,h);g.css("width","");var k=parseInt(g.outerWidth(),10)-(parseInt(h.outerWidth(),10)-parseInt(h.width(),10));h.css({display:"inline-block"});var j=h.outerHeight();if(g.attr("disabled")){h.addClass(b("Disabled"))}else{h.removeClass(b("Disabled"))}i.css({width:k,display:"inline-block"});g.css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:j,fontSize:h.css("font-size")})}).on("change.customSelect",function(){h.addClass(b("Changed"));f(g,h)}).on("keyup.customSelect",function(j){if(!h.hasClass(b("Open"))){g.trigger("blur.customSelect");g.trigger("focus.customSelect")}else{if(j.which==13||j.which==27){f(g,h)}}}).on("mousedown.customSelect",function(){h.removeClass(b("Changed"))}).on("mouseup.customSelect",function(j){if(!h.hasClass(b("Open"))){if(a("."+b("Open")).not(h).length>0&&typeof InstallTrigger!=="undefined"){g.trigger("focus.customSelect")}else{h.addClass(b("Open"));j.stopPropagation();a(document).one("mouseup.customSelect",function(k){if(k.target!=g.get(0)&&a.inArray(k.target,g.find("*").get())<0){g.trigger("blur.customSelect")}else{f(g,h)}})}}}).on("focus.customSelect",function(){h.removeClass(b("Changed")).addClass(b("Focus"))}).on("blur.customSelect",function(){h.removeClass(b("Focus")+" "+b("Open"))}).on("mouseenter.customSelect",function(){h.addClass(b("Hover"))}).on("mouseleave.customSelect",function(){h.removeClass(b("Hover"))}).trigger("render.customSelect")})}})})(jQuery);;(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof exports==="object"){a(require("jquery"))}else{a(jQuery)}}}(function(f){var a=/\+/g;function d(i){return b.raw?i:encodeURIComponent(i)}function g(i){return b.raw?i:decodeURIComponent(i)}function h(i){return d(b.json?JSON.stringify(i):String(i))}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{i=decodeURIComponent(i.replace(a," "));return b.json?JSON.parse(i):i}catch(j){}}function e(j,i){var k=b.raw?j:c(j);return f.isFunction(i)?i(k):k}var b=f.cookie=function(q,p,v){if(arguments.length>1&&!f.isFunction(p)){v=f.extend({},b.defaults,v);if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();u.setTime(+u+r*86400000)}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))}var w=q?undefined:{};var s=document.cookie?document.cookie.split("; "):[];for(var o=0,m=s.length;o<m;o++){var n=s[o].split("=");var j=g(n.shift());var k=n.join("=");if(q&&q===j){w=e(k,p);break}if(!q&&(k=e(k))!==undefined){w[j]=k}}return w};b.defaults={};f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false}f.cookie(j,"",f.extend({},i,{expires:-1}));return!f.cookie(j)}}));$(function(){$('html').addClass('first');var userAgent=window.navigator.userAgent.toLowerCase();var appVersion=window.navigator.appVersion.toLowerCase();if(userAgent.indexOf('msie')!=-1){if(appVersion.indexOf("msie 8.")!=-1){$('html').addClass('loaded');}} var is_ie=false;var user=new getUser();user.getBrows();function getUser(){this.getDevice=function(i){if(i<=640){is_sp=true;is_pad=false;is_pc=false;this.device='is_sp';$('html').addClass('is_sp').removeClass('is_pad is_pc');}else if(i<=768){is_pad=true;is_sp=false;is_pc=false;this.device='is_pad';$('html').addClass('is_pad').removeClass('is_sp is_pc');}else{is_sp=false;is_pad=false;is_pc=true;this.device='is_pc';$('html').addClass('is_pc').removeClass('is_sp is_pad');} return false;},this.getBrows=function(){var _ua=window.navigator.userAgent;if(_ua.match(/MSIE/)||_ua.match(/Trident/)){this.brows='is_ie';$('html').addClass('is_ie');is_ie=true;}else if(_ua.indexOf("Edge")>-1){this.brows='is_edge';$('html').addClass('is_edge is_ie11');}else if(_ua.indexOf("Firefox")>-1){this.brows='is_firefox';$('html').addClass('is_firefox');}else if(_ua.indexOf("Chrome")>-1){this.brows='is_chrome';$('html').addClass('is_chrome');}else if(_ua.indexOf("Opera")>-1){this.brows='is_opera';$('html').addClass('is_opera');}else if(_ua.indexOf("Safari")>-1){this.brows='is_safari';$('html').addClass('is_safari');}else{this.brows='is_other';$('html').addClass('is_other');} return false;}};if($('#index').length){Array.prototype.remove=function(element){for(var i=0;i<this.length;i++) if(this[i]==element)this.splice(i,1);};function preload(images,progress){var total=images.length;$(images).each(function(){var src=this;$('<img/>').attr('src',src).load(function(){images.remove(src);progress(total,total-images.length);});});} var now_percent=0;var displaying_percent=0;preload(['common/img/bg_mainvisual.jpg','common/img/bg_service1.jpg','common/img/bg_service2.jpg','common/img/bg_service3.jpg','common/img/bg_about.jpg','common/img/img_rec1.jpg','common/img/img_rec2.jpg','common/img/img_rec3.jpg','common/img/img_rec4.jpg','common/img/img_rec5.jpg','common/img/img_rec6.jpg'],function(total,loaded){now_percent=Math.ceil(100*loaded/total);});var timer=window.setInterval(function(){if(displaying_percent>=100){window.clearInterval(timer);$('html').addClass('loaded');$.cookie("LOADED",true,{expires:7});setTimeout(function(){$('.loading').remove();},800);}else{if(displaying_percent<now_percent){displaying_percent++;$('.bar_body').css('width',displaying_percent+'%');$('.countup').text(displaying_percent);}}},20);}else{$('html').addClass('loaded');setTimeout(function(){$('.loadsecond').remove();},800);} setsize();cover();$('#sub-news .news_archive li:nth-child(odd)').addClass('even');$('#sub-news .news_archive li:nth-child(even)').removeClass('even');if(!tblt){$('.service_hv').not('.disabled').on({mouseenter:function(){var itemH=$(this).find('.item_detal').height()+10;var slideN=$(this).data('bgslide');$('.service_panels').addClass('on');$(this).find('h3').css({'margin-bottom':itemH});$(this).find('.item_detal').css({'margin-top':-itemH});$('.service_backpanels li').eq(slideN).addClass('selected').siblings().removeClass('selected');},mouseleave:function(){$('.service_panels').removeClass('on');$(this).find('h3').css({'margin-bottom':0});$(this).find('.item_detal').css({'margin-top':0});$('.service_backpanels li').removeClass('selected');}});} $('.news_archive li:nth-child(even)').addClass('even');$(document).on('click','.humbergar',function(event){$('html').toggleClass('navon');});$(document).on('click','.gnav a[href^=#]',function(event){$('html').toggleClass('navon');});if(tblt){$(document).on('click','.officer p',function(event){event.preventDefault();$(this).parent().siblings().find('.detail').slideUp(300);$(this).next('.detail').slideToggle(300);});} $(document).on('click','a[href^=#]',function(event){event.preventDefault();var href=$(this).attr('href');var tgt=$(href=='#'||href==""?'html':href);var pos=tgt.offset().top;$('html, body').animate({scrollTop:pos},500,'swing');return false;});$(document).on('click','.totop',function(event){$('html, body').animate({scrollTop:0},500,'swing');return false;});$('.anm').css("opacity","0");$(window).on('scroll',function(){st=$(window).scrollTop();if(st>50){$('html').addClass('scrolled')} else{$('html').removeClass('scrolled')};var winH=$(window).height();var showPTimer=null;$('.barchart').each(function(i,e){var elemPos=$(this).offset().top;if(st>elemPos-winH+winH/5){$(this).addClass('go');showPTimer=setTimeout(function(){$('.barchart p').addClass('show');},300);}});$('.chart').each(function(i,e){var elemPos=$(this).offset().top;if(st>elemPos-winH+winH/5){$(this).addClass('go');}});$('.anm').each(function(i,e){var elemPos=$(this).offset().top;if(st>elemPos-winH+winH/5){$(this).addClass('show');$(this).css({'opacity':'1','transition-delay':i/8+'s'});}});});$('.pop_list').css({display:'none'});var current_scrollY;$(document).on('click','.mdl_btn',function(event){$('html').addClass('is_popup_opened');wn='.'+$(this).data('tgt');$(wn).find('.pop_list');$(wn).fadeIn(300);$('.mem_close').fadeIn(300);});var closeTimer=null;$(document).on('click','.mem_close, .popup_bg',function(event){$('.pop_list, .mem_close').fadeOut(300);$('html').removeClass('is_popup_opened');if(closeTimer)clearTimeout(closeTimer);closeTimer=setTimeout(function(){$('.pop_list').css({display:'none'});},300);});$('.reqeruit_info select').customSelect();if($('#recInputSubmit').length){var recSubmitWrap=$('#recInputSubmit');var recSubmit=recSubmitWrap.find('input');recSubmitWrap.addClass('disabled');recSubmit.prop('disabled',true);$('.btnAgree').on('click',function(){if($(this).prop('checked')==false){recSubmitWrap.addClass('disabled');recSubmit.prop('disabled',true);$('.agree_err').show();$('.agree label').removeClass('checked');}else{recSubmitWrap.removeClass('disabled');recSubmit.prop('disabled',false);$('.agree_err').hide();$('.agree label').addClass('checked');}});} $(document).on('click','.disabled .mask',function(){$('.agree_err').show();});});$(window).on('resize',function(event){setsize();});function cover(){$('.cover').each(function(index,el){var $this=$(this);var src=$this.data('src');$this.css({'background-image':'url('+src+')','background-size':'cover'});});} function setsize(){w=$(window).width();h=$(window).height();tblt=sp=false;if(w<=640){sp=true;} if(w<=800){tblt=true;} if(!tblt){$('.section_full').height(h);$('.gnav_inner').width(w);}}

//// news ソート機能 start

var sort = {

	onSortByCat : function( elem ){

		var _this = this;

		var $this = $( elem );
		var sort  = $this.data('sort');

		$this.parents().siblings().removeClass('active');
		$this.parents().addClass('active');

		$('.news_archive').fadeOut('500',function(){

			$('.news_archive > li').removeClass('even');

			if( sort === 'all' ){
				var $show = $('.news_archive > li');
				$show.removeClass('is-hide').addClass('is-show');
			} else {
				var $show = $('.'+sort);
				var $hide = $show.siblings();
				$hide.addClass('is-hide').removeClass('is-show');
				$show.removeClass('is-hide').addClass('is-show');
			}

			$('.is-show').each(function( index, el ){
				if( index % 2 === 0 ){
					$(el).addClass('even');
				}
			});

			$('.news_archive').fadeIn('500');
			_this.onComplete();

		});

	},

	onSortByYear : function( elem ){

		var _this = this;

		var val = $( elem ).val();

		$('.news_archive').fadeOut('500',function(){

			if( val === 'all' ){
				$('.news_archive > li').removeClass('is-hide-by-select');
			} else {
				$('.news_archive > li').each(function(index, el) {
					var $el = $(el);
					var data = $el.find('.date').text();
					var arr  = data.split('.');
					if( val === arr[0] ){
						$el.removeClass('is-hide-by-select');
					} else {
						$el.addClass('is-hide-by-select');
					}
				});
			}

			$('.news_archive').fadeIn('500');
			_this.onComplete();

		});

	},

	onComplete : function(){

		var _this = this;
		_this.max = $('.news_archive > li').length;

		var n = 0;
		$('.news_archive > li').each(function( index, el ){
			if( $(el).is('.is-hide') || $(el).is('.is-hide-by-select') ){
				n++;
			}
		});
		_this.hide = n;
		if( _this.max === _this.hide ){
			$('.cat_none').addClass('is-show');
		} else {
			$('.cat_none').removeClass('is-show');
		}

	},

}

$(document).on({

	click : function(){
		sort.onSortByCat( this );
	}

},'.js-sort-by-cat');


$(document).on({
	change : function(){
		sort.onSortByYear( this );
	}
},'.sort-by-year-select');


//// news ソート機能 end



//// insta --start
// instafeed.min.js
(function(){var e;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?M=["","random"]:M=this.options.sortBy.split("-"),O=M[0]==="least"?!0:!1;switch(M[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",O);break;case"liked":e.data=this._sortBy(e.data,"likes.count",O);break;case"commented":e.data=this._sortBy(e.data,"comments.count",O);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){m=e.data,A=parseInt(this.options.limit,10),this.options.limit!=null&&m.length>A&&(m=m.slice(0,A)),u=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(m=this._filter(m,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){f="",d="",w="",D=document.createElement("div");for(c=0,N=m.length;c<N;c++){h=m[c],p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);E=p.width,y=p.height,b="square",E>y&&(b="landscape"),E<y&&(b="portrait"),v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),d=this._makeTemplate(this.options.template,{model:h,id:h.id,link:h.link,type:h.type,image:v,width:E,height:y,orientation:b,caption:this._getObjectProperty(h,"caption.text"),likes:h.likes.count,comments:h.comments.count,location:this._getObjectProperty(h,"location.name")}),f+=d}D.innerHTML=f,i=[],r=0,n=D.childNodes.length;while(r<n)i.push(D.childNodes[r]),r+=1;for(x=0,C=i.length;x<C;x++)L=i[x],u.appendChild(L)}else for(T=0,k=m.length;T<k;T++){h=m[T],g=document.createElement("img"),p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),g.src=v,this.options.links===!0?(t=document.createElement("a"),t.href=h.link,t.appendChild(g),u.appendChild(t)):u.appendChild(g)}_=this.options.target,typeof _=="string"&&(_=document.getElementById(_));if(_==null)throw o='No element with id="'+this.options.target+'" on page.',new Error(o);_.appendChild(u),a=document.getElementsByTagName("head")[0],a.removeChild(document.getElementById("instafeed-fetcher")),S="instafeedCache"+this.unique,window[S]=void 0;try{delete window[S]}catch(P){s=P}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))s=n.match(r)[1],o=(i=this._getObjectProperty(t,s))!=null?i:"",n=n.replace(r,function(){return""+o});return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],r=function(e){if(t(e))return n.push(e)};for(i=0,o=e.length;i<o;i++)s=e[i],r(s);return n},e}(),function(e,t){return typeof define=="function"&&define.amd?define([],t):typeof module=="object"&&module.exports?module.exports=t():e.Instafeed=t()}(this,function(){return e})}).call(this);

$(function(){
	var num = $('#instafeed').data('limit');
	var feed = new Instafeed({
		get: 'user',
		userId: 4075711549,
		accessToken: '4075711549.a52f419.0d7436111fd9417f80d59047783f4b42',
		limit: num,
		sortBy: 'most-recent',
		resolution: 'standard_resolution',
		links: true,
		template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" /><span class="p_caption"><span class="p_caption_in">{{caption}}'
	});

	feed.run();

});

//// insta --end