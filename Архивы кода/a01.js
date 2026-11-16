var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(()=>{"use strict";let e=Promise.resolve();window.MI_SECURITY=Object.freeze({event:function(t,n=""){const o=e.catch(()=>null).then(async()=>{const e=await fetch("/api/puzzle",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},cache:"no-store",body:JSON.stringify({event:t,value:n})}),o=await e.json().catch(()=>({ok:!1}));return e.ok&&o?.ok&&"string"==typeof o.scene&&document.dispatchEvent(new CustomEvent("mi:unlock",{detail:o})),e.ok?o:{ok:!1,error:o?.error||null}}).catch(()=>({ok:!1,error:"network"}));return e=o,o}})})();

}

/*
     FILE ARCHIVED ON 08:22:22 Nov 14, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:01:11 Nov 16, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.356
  load_resource: 84.712
  PetaboxLoader3.resolve: 53.962
  PetaboxLoader3.datanode: 15.313
*/