'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b351a1fd2e3595213456e75baaa33eac",
"version.json": "ba66c62c43a61830db5fe725a61b3d6d",
"index.html": "3a9d10d4d0daddb24869627ee897b8f3",
"/": "3a9d10d4d0daddb24869627ee897b8f3",
"firebase-messaging-sw.js": "ea8c3345b1b1414c0a25aeea870d2be8",
"main.dart.js": "df1c2b469beba362b1cab22817d920bb",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "d1fe45cdb03b853442b38a97d9795724",
"logo.png": "af8dac01706893566e70ec42b8f2845a",
"icons/android-chrome-192x192.png": "af8dac01706893566e70ec42b8f2845a",
"icons/apple-touch-icon.png": "619b50d11b45654501dcf97b18cde069",
"icons/android-chrome-512x512.png": "12968e650dfe90cbe88d0d0b98dcb49d",
"manifest.json": "2b181825a85d61f920ecac5177772db6",
"assets/AssetManifest.json": "4895c3f16c65cd6372022b4ca852a9f4",
"assets/NOTICES": "a87442733f6f2ecb4850e4ca7ba58827",
"assets/FontManifest.json": "e036dedbce769f065cae7b88789f94c7",
"assets/AssetManifest.bin.json": "ba94e8d424fc6fb1492746a52c3f69e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ab246e8d999f014e8d30f907176917c7",
"assets/fonts/MaterialIcons-Regular.otf": "d6c2d0db1d3114c619a30c7908fec606",
"assets/assets/images/name_logo.svg": "2236240c5e8199c4b813b820bb34eb08",
"assets/assets/images/coming.png": "af6928fd5c25f07534c16e16393b4837",
"assets/assets/images/loading_gif.gif": "e4b6323e19e57f6761b1ce47b7d329e0",
"assets/assets/images/i.png": "05d5a273a519262025757217b00b2cfe",
"assets/assets/images/home.svg": "5d1bc3f120ca2a504d722fba530c7c4d",
"assets/assets/images/alpha_s.png": "ffa57508831f4f45a4aa5d5d904bfdec",
"assets/assets/images/document_edit.svg": "3d2ecc452a19cc68b6ee1f75f01a15aa",
"assets/assets/images/logo_two.png": "593ce72a121d5170c5fcfd0a0d6cb02d",
"assets/assets/images/bell.svg": "5fb51c0c12678c88da02a3e5204a48b8",
"assets/assets/images/success_icon.png": "da8da654d9a9eadafcb124e30926c925",
"assets/assets/images/document.svg": "a9b695d2bcf0b247ba6973f3790d5ad9",
"assets/assets/images/logo_one.png": "1a6f398077977bdebcf7118843f365df",
"assets/assets/images/error.png": "547c4f9734537077faa64db8e97995d8",
"assets/assets/images/logo.png": "a4bf8d086737694612d0b22f4389ebc0",
"assets/assets/images/pdf.png": "c8cde85ab806e235359fc5377c71272e",
"assets/assets/images/n_alpha.jpg": "78cb308de57981fc179b5e9ef97218ce",
"assets/assets/images/whatsapp.png": "a85c984f5fd77e5d2c63e407ea7a2e4f",
"assets/assets/images/scroll.png": "08d6a5f8309e7a1b689a39c25d5fa033",
"assets/assets/images/coming_soon.png": "6a74a9072ca5235863e66df206c3b436",
"assets/assets/images/crown.png": "6f9eb9cc9b1ad29fe58f27ab14b9a73f",
"assets/assets/images/xlsx.png": "7a173174bb642cd454258386153a4d26",
"assets/assets/images/close.png": "e5955530916e04fdcf89921cec32e123",
"assets/assets/html/drive_picker.html": "6e22df16984d140c869574b3ec043df7",
"assets/assets/fonts/gilroy_medium.ttf": "c83281ae1ca703d0741a770ee7e7c091",
"assets/assets/fonts/roboto_medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/gilroy_bold.ttf": "b381c2abd2972024a6a7e3d882208d9b",
"assets/assets/fonts/roboto_bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/gilroy_semi_bold.ttf": "a5cf732b15078843b237bd58f3ed44cd",
"assets/assets/fonts/gilroy_regular.ttf": "31ff7c1a62a300dbbf9656b4ba14a0d5",
"assets/assets/fonts/roboto_regular.ttf": "f36638c2135b71e5a623dca52b611173",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
