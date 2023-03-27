'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "244d1027c0dfc7376d4889892466e490",
"index.html": "f51f26654622e643fcb502cddf86a5a7",
"/": "f51f26654622e643fcb502cddf86a5a7",
"main.dart.js": "1fd6a62d9cedb7121ecfaa9e62f001f7",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5a1db31ae1a88756b73953eeb5ceb4fc",
"assets/AssetManifest.json": "53b4929f229d7676bce2edf85a55de51",
"assets/NOTICES": "04c75a97a6314dc1b526a96f9117d852",
"assets/FontManifest.json": "6746c6b23fa91afb9fbaad81ff211aa3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/design_system/styles/fonts/Pretendard-Regular.otf": "46b0c48afd8b0ddc2ed4fcbb2df81d8b",
"assets/lib/design_system/styles/fonts/Pretendard-Bold.otf": "e93f79700405e1b4c1b3e70d8c378ca4",
"assets/lib/assets/images/stamp_disable5.png": "c1a47f3a2bd2779ab4a730f04147f8f5",
"assets/lib/assets/images/stamp4.png": "ff5a46edbe98114fd68f8a95b51ea877",
"assets/lib/assets/images/stamp5.png": "14d5b7200161e1f6a7b2f67c49f75fd2",
"assets/lib/assets/images/stamp_disable4.png": "9450dc97b204f87478bfe600c95b6d6e",
"assets/lib/assets/images/welcome_mascot.png": "a02825e512d44352bbdbd14e3e0d15e5",
"assets/lib/assets/images/stamp_disable3.png": "5bfbdcd85b1badf7c310c271bb09d738",
"assets/lib/assets/images/stamp2.png": "602bd82e6a2fe054c7b89f392bfe08ff",
"assets/lib/assets/images/stamp3.png": "cc7bc7a7dded76105e2f3377e2d64495",
"assets/lib/assets/images/news_bird.png": "60627fadd69d2de0adc06c079af757a9",
"assets/lib/assets/images/stamp_disable2.png": "30cc55cb7deb186ac29cadc9fe1d7ccc",
"assets/lib/assets/images/stamp1.png": "773626d50f19b7b73efcbd8ba02cb5eb",
"assets/lib/assets/images/mascot_sad.png": "0c399571356b81cd107c3480f6f79541",
"assets/lib/assets/images/stamp_disable1.png": "e565cc6b8f72d6de9d470466ee087d33",
"assets/lib/assets/images/wish_poll_default.png": "03bb1ac9e2aa1e661b0547bd7250ca55",
"assets/lib/assets/images/megaphone.png": "749fec4a92c0e0c559c9e23eb5cd5fa9",
"assets/lib/assets/images/interests.png": "059b890a23e9ad36b0cffb161e973c64",
"assets/lib/assets/images/won_coin.png": "fd62beda9aa6ee17d9f26be38c815953",
"assets/lib/assets/images/reservation.png": "fa4bf079d7dc25eb319cc825c21af145",
"assets/lib/assets/images/mascot.png": "ba252aec8e994c94f4f97cfc2f62fe20",
"assets/lib/assets/images/create_poll_success.png": "2da79fabefe766e71c4fd6ee27f77e39",
"assets/lib/assets/images/invite_friend_text.png": "4c1c6280283ad61634a6df09fdf328a4",
"assets/lib/assets/images/coin.png": "a148457d62767d56b558ebfbb3c7ed69",
"assets/lib/assets/images/mascot_busy.png": "29041fc441b53ffea322839843b0a771",
"assets/lib/assets/images/crown.png": "ce7324f4086efc9945a24fcbc29763bb",
"assets/lib/assets/images/recommender_stamp.png": "3369da9fb6ae3c92df21e321b8485819",
"assets/lib/assets/icons/point.svg": "6d42b7aff8405e5e3583a2a355000cfe",
"assets/lib/assets/icons/home_on.svg": "e23e377aab56e92b5a96e94e469c5309",
"assets/lib/assets/icons/home.svg": "3eabddd66ae280bec9e10b5b6f42ac94",
"assets/lib/assets/icons/naver_pay.svg": "6bfc59d23e51c0ca63dbb932b38f4eb9",
"assets/lib/assets/icons/point_off.svg": "be133679c34d6c2394ac41bcbc03f985",
"assets/lib/assets/icons/balanceGame.svg": "fa225f3abc6acd2a6e31b5dfe43c0ee7",
"assets/lib/assets/icons/quest_interest_non.svg": "d52efa65e88e553b60b85bfbdfe64253",
"assets/lib/assets/icons/pollMultiple.svg": "d93e4b217ec59b46b1baf74982138b26",
"assets/lib/assets/icons/pollScale.svg": "70143152b5c9f3d6d90b9cd3ffd54914",
"assets/lib/assets/icons/pollUpAndDown.svg": "3ab87678c49915cd47bb7ca6a6d48c80",
"assets/lib/assets/icons/back_account.svg": "4a25957ad21623e9476522f350fde082",
"assets/lib/assets/icons/gallery.svg": "e668b304eeacec9607e68100cdb540c3",
"assets/lib/assets/icons/arrow_up.svg": "e17d5d21fe3ca2dd1b1e4c025c03a0b5",
"assets/lib/assets/icons/likeUp.svg": "bf9505788c9cc89c318d8752128a8b5e",
"assets/lib/assets/icons/my_on.svg": "3a3d23e788c8c364d6462d5634a443cf",
"assets/lib/assets/icons/flag.svg": "ee8777847999afe6af99e64c68933c4f",
"assets/lib/assets/icons/my_info.svg": "08c40eee5d1f41dcae7a8bfd8f9ede6e",
"assets/lib/assets/icons/checkboxCircle.svg": "7bedb70e4773679c88a88b8abd9aea1a",
"assets/lib/assets/icons/my_off.svg": "d4d2ec500cf00dfa890a389f9a6d792a",
"assets/lib/assets/icons/pollStar.svg": "f0987dfbc5f4a35e68b7e55115f2017a",
"assets/lib/assets/icons/myPage.svg": "269234e4490583ee10cfdb5d2676317a",
"assets/lib/assets/icons/poll_off.svg": "523857aa41e84064496bf5ba0ed3612a",
"assets/lib/assets/icons/moreFlag.svg": "3369bd0385ce985ba75867145504e53d",
"assets/lib/assets/icons/close.svg": "f9d51b992df2d43a6c9ad0240404ac1c",
"assets/lib/assets/icons/people.svg": "5f165d7d44d034cea026f86540dd1bc9",
"assets/lib/assets/icons/arrowBack.svg": "874cc45a7fb5bddfcc103ffc595c31f9",
"assets/lib/assets/icons/setting.svg": "7d1f664629c805d8200a83e9a136ff82",
"assets/lib/assets/icons/point_on.svg": "4a08d81df22137ab06cab5482b223c26",
"assets/lib/assets/icons/arrow_down.svg": "434bb670ba9baa71440111d8115ac79f",
"assets/lib/assets/icons/notification.svg": "780408a62497e1590bc9ad534f5f7ad7",
"assets/lib/assets/icons/camera.svg": "fb8079e196ae374f754a9c20dd41ab1b",
"assets/lib/assets/icons/exchange_bank_account.svg": "b1a2806d328d8dc99474c02a0865ac5f",
"assets/lib/assets/icons/star.svg": "5b9cf2ebea064d022e6ccd37713a7d41",
"assets/lib/assets/icons/recommender.svg": "5dbbacfe43d47f45f8a18b5328a94e00",
"assets/lib/assets/icons/edit.svg": "3514a8d85737237820dc62d7ff474650",
"assets/lib/assets/icons/home_off.svg": "9c2fbcf904a2ea5395e0e99dbb50ceb3",
"assets/lib/assets/icons/quest_interest_on.svg": "07899684e757e250bcdfd299651767db",
"assets/lib/assets/icons/exchange_naver_pay.svg": "7d96b5e64a976eb614b29526705dfae3",
"assets/lib/assets/icons/notice_bird.svg": "242b3a9f535586c0103fb9a0ed2d9cf3",
"assets/lib/assets/icons/human.svg": "5d31793acdbf4daa7e107f7628862cab",
"assets/lib/assets/icons/quest_off.svg": "5ac160004c6003a7e618e87bb8a423ce",
"assets/lib/assets/icons/poll_on.svg": "fa32550278743cbdf89f57a43e6bc1c4",
"assets/lib/assets/icons/interests.svg": "247d4a207a4d34194d4a77abe9b08fcd",
"assets/lib/assets/icons/logo.svg": "18035761b4c79aa07b7a942c1a211896",
"assets/lib/assets/icons/camera_with_lens.svg": "170f097353026e400e62226662f6d485",
"assets/lib/assets/icons/likeDown.svg": "33bc3384d76e9dcceadfe0777604f020",
"assets/lib/assets/icons/ratingStar.svg": "9d6975cb9d3ac081ef91026d9576d9bd",
"assets/lib/assets/icons/quest_on.svg": "9ae6bc64fdc63785dc17210b5e0d42d5",
"assets/lib/assets/icons/timer.svg": "34339ddf4002bccec4ca89df8271e111",
"assets/lib/assets/icons/calendarClear.svg": "705027e792f5b7d4b6ee98ade53b53e0",
"assets/lib/assets/icons/my_participation.svg": "a176a8a6022c358a9d4e4066a84ebae8",
"assets/lib/assets/icons/nextArrow.svg": "7494e3a59211d41e1f0627f995fd3368",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
