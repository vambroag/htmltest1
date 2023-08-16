let map;
let shopinfostatus = 0;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(37.559196356896, 126.97736606652),
    zoom: 14,
    mapId: '31889289191ab1d3'
  });

  let meat = new google.maps.MarkerImage("./testmapmarkerimg/meat.png");
  let fish = new google.maps.MarkerImage("./testmapmarkerimg/fish.png");
  let restaurant = new google.maps.MarkerImage("./testmapmarkerimg/restaurant.png");

  const features = [
    {
      position: new google.maps.LatLng(37.559349, 126.9773777),
      icon: new google.maps.MarkerImage("./testmapmarkerimg/meat.png"),
    },
    {
      position: new google.maps.LatLng(37.559279, 126.977434),
      icon: new google.maps.MarkerImage("./testmapmarkerimg/meat.png"),
    },
    {
      position: new google.maps.LatLng(37.5592515, 126.9773701),
      icon: new google.maps.MarkerImage("./testmapmarkerimg/meat.png"),
    },
    {
      position: new google.maps.LatLng(37.5592209, 126.9774115),
      icon: new google.maps.MarkerImage("./testmapmarkerimg/meat.png"),
    },
    {
      position: new google.maps.LatLng(37.5590489, 126.9777508),
      icon: new google.maps.MarkerImage("./testmapmarkerimg/meat.png"),
    },
    {
      position: new google.maps.LatLng(37.559114, 126.9774099),
      icon: new google.maps.MarkerImage("./testmapmarkerimg/fish.png"),
    },
    {
      position: new google.maps.LatLng(37.5590981, 126.9774544),
      icon: new google.maps.MarkerImage("./testmapmarkerimg/fish.png"),
    },
    {
      position: new google.maps.LatLng(37.5590159, 126.9775489),
      icon: new google.maps.MarkerImage("./testmapmarkerimg/fish.png"),
    },
    {
      position: new google.maps.LatLng(37.5592445, 126.977774),
      icon: new google.maps.MarkerImage("./testmapmarkerimg/fish.png"),
    },
    {
      position: new google.maps.LatLng(37.5591502, 126.9775453),
      icon: new google.maps.MarkerImage("./testmapmarkerimg/restaurant.png"),
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    /*
    const icon1 = {
      url: features[i].icon, // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };*/


    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: features[i].icon,
      map: map,
    });

    marker.addListener("click", () => {
      shopinfostatus = 1;
      const main_window = document.getElementById("main_window");

      const shop_info_container = document.createElement("div");
      shop_info_container.className = "shop_info_container";
      shop_info_container.id = "shop_info_container";
      main_window.appendChild(shop_info_container)

      const shop_info = document.createElement("div");
      shop_info.className = "shop_info";
      shop_info_container.appendChild(shop_info)

      const profile_img_container = document.createElement("div");
      profile_img_container.className = "profile_img_container";
      shop_info.appendChild(profile_img_container)

      const profile_title = document.createElement("p");
      profile_title.className = "profile_title";
      profile_title.innerText = "범근이네 수산"
      shop_info.appendChild(profile_title)

      const set_location = document.createElement("div");
      set_location.className = "set_location";
      shop_info.appendChild(set_location)

      const set_location_text = document.createElement("p");
      set_location_text.className = "set_location_text";
      set_location_text.innerText = "나의 위치로 설정";
      set_location.appendChild(set_location_text)
                
            
      const info_menu = document.createElement("div");
      info_menu.className = "info_menu";
      shop_info_container.appendChild(info_menu);

      const info_menu_1 = document.createElement("div");
      info_menu_1.className = "info_menu_1";
      info_menu.appendChild(info_menu_1);

      const info_menu_content1 = document.createElement("div");
      info_menu_content1.className = "info_menu_content";
      info_menu_1.appendChild(info_menu_content1);

      const info_menu_img_container1 = document.createElement("div");
      info_menu_img_container1.className = "info_menu_img_container";
      info_menu_content1.appendChild(info_menu_img_container1);
      
      const info_menu_img1 = document.createElement("img");
      info_menu_img1.className = "info_menu_img";
      info_menu_img1.src = "./testmapmarkerimg/home.png";
      info_menu_img_container1.appendChild(info_menu_img1);

      const info_menu_text1 = document.createElement("p");
      info_menu_text1.className = "info_menu_text";
      info_menu_text1.innerText = "홈페이지";
      info_menu_content1.appendChild(info_menu_text1);
                
      const line11 = document.createElement("div");
      line11.className = "line1";
      info_menu.appendChild(line11);

      const info_menu_2 = document.createElement("div");
      info_menu_2.className = "info_menu_2";
      info_menu.appendChild(info_menu_2);

      const info_menu_content2 = document.createElement("div");
      info_menu_content2.className = "info_menu_content";
      info_menu_2.appendChild(info_menu_content2);

      const info_menu_img_container2 = document.createElement("div");
      info_menu_img_container2.className = "info_menu_img_container";
      info_menu_content2.appendChild(info_menu_img_container2);
      
      const info_menu_img2 = document.createElement("img");
      info_menu_img2.className = "info_menu_img";
      info_menu_img2.src = "./testmapmarkerimg/phone-receiver-silhouette.png";
      info_menu_img_container2.appendChild(info_menu_img2);

      const info_menu_text2 = document.createElement("p");
      info_menu_text2.className = "info_menu_text";
      info_menu_text2.innerText = "전화하기";
      info_menu_content2.appendChild(info_menu_text2);  
                
      const line12 = document.createElement("div");
      line12.className = "line1";
      info_menu.appendChild(line12);

      const info_menu_3 = document.createElement("div");
      info_menu_3.className = "info_menu_3";
      info_menu.appendChild(info_menu_3);

      const info_menu_content3 = document.createElement("div");
      info_menu_content3.className = "info_menu_content";
      info_menu_3.appendChild(info_menu_content3);

      const info_menu_img_container3 = document.createElement("div");
      info_menu_img_container3.className = "info_menu_img_container";
      info_menu_content3.appendChild(info_menu_img_container3);
      
      const info_menu_img3 = document.createElement("img");
      info_menu_img3.className = "info_menu_img";
      info_menu_img3.src = "./testmapmarkerimg/chat.png";
      info_menu_img_container3.appendChild(info_menu_img3);

      const info_menu_text3 = document.createElement("p");
      info_menu_text3.className = "info_menu_text";
      info_menu_text3.innerText = "채팅하기";
      info_menu_content3.appendChild(info_menu_text3);

      const profile_img = document.createElement("div");
      profile_img.className = "profile_img";
      shop_info_container.appendChild(profile_img);

      const profile_image = document.createElement("img");
      profile_image.className = "profile_image";
      profile_img.appendChild(profile_image);
            
      const bookmark_star = document.createElement("div");
      bookmark_star.className = "bookmark_star";
      shop_info_container.appendChild(bookmark_star);

      const bookmark_img = document.createElement("img");
      bookmark_img.className = "bookmark_img";
      bookmark_img.src = "./testmapmarkerimg/star.png"
      bookmark_star.appendChild(bookmark_img);
        
    });

    marker.setMap(map);
  }
}


window.initMap = initMap;

function main_window_action() {
  if(shopinfostatus == 3){
    const shop_info_container = document.getElementById("shop_info_container");
    shop_info_container.remove();
    shopinfostatus = 0;
  }
  shopinfostatus = shopinfostatus + 1;
  console.log(shopinfostatus);
}

const main_window123 = document.getElementById("main_window");
main_window123.addEventListener("click", main_window_action);